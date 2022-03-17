import {
  Tree,
  formatFiles,
  installPackagesTask,
  joinPathFragments,
} from '@nrwl/devkit';
import * as strings from './strings';
import {
  quicktype,
  JSONSchemaInput,
  TypeScriptTargetLanguage,
  InputData,
  FetchingJSONSchemaStore,
  Name,
} from 'quicktype-core';

export default async function (tree: Tree, schema: any) {
  const events = await getAllEvents(tree);

  events.forEach((event) => {
    processEventTypes(event, tree);
  });

  tree.write(
    'libs/tau-js-client/src/lib/events/event-constructor-map.ts',
    createConstructorMap(events)
  );
}

function findProperties(contents: string): { old: string; new: string }[] {
  return contents
    .split('\n')
    .filter((line) => line.indexOf(': ') !== -1 && line.indexOf('*') === -1)
    .map((line) => line.split(':')[0].trimStart())
    .map((propName) => ({ old: propName, new: strings.camelize(propName) }));
}

async function getAllEvents(tree: Tree): Promise<Event[]> {
  const sourceFile =
    'tools/generators/tau-type-mapper/eventsub_subscriptions.json';
  const contents = tree.read(sourceFile).toString('utf-8');
  const events = JSON.parse(contents);
  const promises: Promise<Event>[] = events
    // .filter((event, index) => index === 0)
    .map((event) => {
      return {
        rawName: event.name,
        name: event.name.replace(/\./g, '-').replace(/_/g, '-'),
        description: event.description,
        schema: {
          ...event.event_schema,
          $schema: 'http://json-schema.org/draft-07/schema',
        },
      };
    })
    .map(async (event) => {
      const schemaString = JSON.stringify(event.schema, null, 2).replace(
        /\"type\": \"int\"/g,
        '"type": "integer"'
      );

      const inputData = new InputData();
      const rawInterfaceName =
        'Raw' + strings.classify(event.name) + 'EventData';
      const source = { name: rawInterfaceName, schema: schemaString };

      await inputData.addSource('schema', source, () => {
        return new JSONSchemaInput(new FetchingJSONSchemaStore());
      });

      const lang = new TypeScriptTargetLanguage();

      const output: any = await quicktype({
        lang: lang,
        inputData: inputData,
        alphabetizeProperties: true,
        indentation: '  ',
        rendererOptions: {
          'just-types': 'true',
          'explicit-unions': 'true',
          'acronym-style': 'camel',
          'nice-property-names': 'false',
        },
      });

      const rawInterfaceCode = output.lines.join('\n');
      const mappedOutput: Event = { ...event, rawInterfaceCode };
      return mappedOutput;
    });
  return Promise.all(promises);
}

interface Event {
  rawName: string;
  name: string;
  description: string;
  schema: any;
  rawInterfaceCode: string;
}

function processEventTypes(event: Event, tree: Tree) {
  const name = event.name.replace(/\./g, '-');
  const className = strings.classify(name);

  const rawContents = event.rawInterfaceCode;

  const dir = `libs/tau-js-client/src/lib/events/${name}`;

  tree.write(joinPathFragments(dir, `raw-${name}-event-data.ts`), rawContents);

  const properties = findProperties(rawContents);

  let jsContents = rawContents
    .replace('interface', 'class')
    .replace(/Raw/g, '');
  properties.forEach(
    (prop) => (jsContents = jsContents.replace(prop.old, prop.new))
  );

  const searchString = `export class ${className}EventData {`;
  const propAssignments = properties
    .map((prop) => `this.${prop.new} = raw.${prop.old};`)
    .join('\n    ');
  jsContents = jsContents.replace(
    searchString,
    searchString +
      `\n  constructor(raw: Raw${className}EventData) {\n    ${propAssignments}\n  }\n`
  );
  const eventDataContents = `import { Raw${className}EventData } from './raw-${name}-event-data';

${jsContents}`;
  tree.write(
    joinPathFragments(dir, `${name}-event-data.ts`),
    eventDataContents
  );

  const classCode = `import { RawTauEvent, TauEvent } from '../tau-event';
import { Raw${className}EventData } from './raw-${name}-event-data';
import { ${className}EventData } from './${name}-event-data';

export class ${className} extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ${className}EventData(
      rawTauEvent.event_data as Raw${className}EventData
    );
  }
  eventData: ${className}EventData;
}`;
  tree.write(joinPathFragments(dir, `${name}.ts`), classCode);

  const operatorCode = `import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ${className} } from './${name}';

export function ${strings.camelize(
    className
  )}Filter(): MonoTypeOperatorFunction<${className}> {
  return filter((event) => event instanceof ${className});
}
`;
  tree.write(joinPathFragments(dir, `${name}-filter.ts`), operatorCode);

  const barrelCode = `export * from './${name}'
export * from './${name}-filter';
`;
  tree.write(joinPathFragments(dir, 'index.ts'), barrelCode);
}

function createConstructorMap(events: Event[]) {
  const importStatements: string[] = [];
  const mapEntries: string[] = [];
  events.forEach((event) => {
    const className = strings.classify(event.name);
    importStatements.push(`import { ${className} } from './${event.name}';`);
    mapEntries.push(`'${event.rawName}': ${className},`);
  });

  const contents =
    importStatements.join('\n') +
    '\n\n' +
    'export const eventConstructorMap = {\n  ' +
    mapEntries.join('\n  ') +
    '\n}';

  return contents;
}
