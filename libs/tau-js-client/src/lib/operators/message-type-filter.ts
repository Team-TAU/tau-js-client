import { OperatorFunction, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TauMessage } from '../tau-js-client.model';

interface TauMessageConstructor<T extends TauMessage> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any): T;
}

/**
 * Filter based upon the TauMessage class.
 * @param cls The class of message to allow through
 * @returns The operator function
 */
export function messageTypeFilter<T extends TauMessage>(
  cls: TauMessageConstructor<T>
): OperatorFunction<TauMessage, T> {
  return pipe(
    filter((msg) => msg instanceof cls),
    map((msg): T => <T>(<unknown>msg))
  );
}
