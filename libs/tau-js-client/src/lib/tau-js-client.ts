import { merge, NEVER, Observable } from 'rxjs';
import { createEventWebSocket } from './events/event-socket';
import { TauEvent } from './events/tau-event';
import { createMessageWebSocket } from './messages/message-socket';
import { TauMessage } from './messages/message.model';
import { createStatusWebSocket } from './status/status-socket';
import { TauStatus } from './status/status.model';

export { postMessage } from './messages/message-socket';

export type TauThings = TauEvent | TauMessage | TauStatus;

export interface TauConfig {
  domain: string;
  port: number;
  /** token to authenticate with Tau */
  token: string;
  events?: boolean;
  messages?: boolean;
  statuses?: boolean;
}

let obs: Observable<TauThings> = null;
export function getTauClient(config: TauConfig): Observable<TauThings> {
  if (obs === null) {
    obs = buildWsObservable(config);
  }
  return obs;
}

function getEventUrl(domain: string, port: number): string {
  return `${buildUrlBase(domain, port)}twitch-events/`;
}

function getMessageUrl(domain: string, port: number): string {
  return `${buildUrlBase(domain, port)}irc-messages/`;
}

function getStatusUrl(domain: string, port: number): string {
  return `${buildUrlBase(domain, port)}tau-status/`;
}

function buildWsObservable(config: TauConfig): Observable<TauThings> {
  const eventUrl = getEventUrl(config.domain, config.port);
  const event$ = createEventWebSocket(eventUrl, config.token);
  const messageUrl = getMessageUrl(config.domain, config.port);
  const message$ = createMessageWebSocket(messageUrl, config.token);
  const statusUrl = getStatusUrl(config.domain, config.port);
  const status$ = createStatusWebSocket(statusUrl, config.token);

  obs = merge(
    config.events ? event$ : (NEVER as Observable<TauEvent>),
    config.messages ? message$ : (NEVER as Observable<TauMessage>),
    config.statuses ? status$ : (NEVER as Observable<TauStatus>)
  );
  return obs;
}

function buildUrlBase(domain: string, port: number): string {
  return `wss://${domain}:${port}/ws/`;
}
