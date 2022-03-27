import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { webSocket as rxjsWebSocket, WebSocketSubject } from 'rxjs/webSocket';
import { RawTauEvent, TauEvent } from './tau-event';
import { eventConstructorMap } from './event-constructor-map';
import { buildUrlBase, getWsBaseConfig, parseDate } from '../utils';
import { TauConfig } from '../tau-js-client';

type EventSocketSubject = RawTauEvent | { token: string };

export function createEventWebSocket(config: TauConfig): Observable<TauEvent> {
  const url = `${buildUrlBase(config.domain, config.port)}twitch-events/`;

  const wsConfig = getWsBaseConfig<EventSocketSubject>(
    url,
    config.WebSocketCtor
  );

  const eventWebSocketSubject: WebSocketSubject<EventSocketSubject> =
    rxjsWebSocket({
      ...wsConfig,
      openObserver: {
        next: () => eventWebSocketSubject.next({ token: config.token }),
      },
    });

  const event$ = eventWebSocketSubject.pipe(
    map((evt) => mapRawEvent(evt as RawTauEvent))
  );

  return event$;
}

function mapRawEvent(raw: RawTauEvent): TauEvent {
  const ctor = eventConstructorMap.get(raw.event_type);
  if (ctor === undefined) {
    return {
      id: raw.id,
      eventId: raw.event_id,
      eventType: raw.event_type,
      eventSource: raw.event_source,
      eventData: raw.event_data,
      created: parseDate(raw.created),
      origin: raw.origin,
    } as TauEvent;
  }
  return new ctor(raw);
}
