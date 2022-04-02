import { merge, NEVER, Observable } from 'rxjs';
import { createEventWebSocket } from './events/event-socket';
import { TauEvent } from './events/tau-event';
import { createMessageWebSocket } from './messages/message-socket';
import { TauChatMessage } from './messages/message.model';
import { createStatusWebSocket } from './status/status-socket';
import { TauStatus } from './status/status.model';
import { TauMessage } from './tau-js-client.model';

export { postMessage } from './messages/message-socket';

export interface TauConnectionConfig {
  /* The url where TAU is hosted. */
  domain: string;
  /* The port number where TAU is hosted. */
  port: number;
  /** Token to authenticate with TAU */
  token: string;
  /**
   * A WebSocket constructor to use. This is necessary for usage in Node,
   * because WebSocket is a DOM API.
   */
  WebSocketCtor?: {
    new (url: string, protocols?: string | string[]): WebSocket;
  };
}

export interface TauConfig extends TauConnectionConfig {
  /* Flag to indicate whether event messages should be emitted. */
  events?: boolean;
  /* Flag to indicate whether chat messages should be emitted. */
  messages?: boolean;
}

export type TauStatusConfig = TauConnectionConfig;

let tauMessages$: Observable<TauMessage> | null = null;
export function getTauMessages(config: TauConfig): Observable<TauMessage> {
  if (tauMessages$ === null) {
    const event$ = config.events
      ? createEventWebSocket(config)
      : (NEVER as Observable<TauEvent>);

    const message$ = config.messages
      ? createMessageWebSocket(config)
      : (NEVER as Observable<TauChatMessage>);

    tauMessages$ = merge(event$, message$);
  }
  return tauMessages$;
}

let tauStatus$: Observable<TauStatus> | null = null;
export function getTauStatus(config: TauStatusConfig): Observable<TauStatus> {
  if (tauStatus$ === null) {
    tauStatus$ = createStatusWebSocket(config);
  }
  return tauStatus$;
}
