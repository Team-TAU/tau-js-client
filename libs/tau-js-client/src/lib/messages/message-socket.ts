import { RawTauMessage, TauChatMessage } from './message.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { webSocket as rxjsWebSocket, WebSocketSubject } from 'rxjs/webSocket';
import { buildUrlBase, getWsBaseConfig } from '../utils';
import { TauConfig } from '../tau-js-client';

type MessageSocketSubject = RawTauMessage | string | { token: string; };

let messageWebSocket: WebSocketSubject<MessageSocketSubject>;
export function createMessageWebSocket(
  config: TauConfig
): Observable<TauChatMessage> {
  const url = `${buildUrlBase(config.domain, config.port)}irc-messages/`;
  const wsConfig = getWsBaseConfig<MessageSocketSubject>(
    url,
    config.WebSocketCtor
  );

  messageWebSocket = rxjsWebSocket({
    ...wsConfig,
    serializer: (msg) => (typeof msg === 'string' ? msg : JSON.stringify(msg)),
    openObserver: {
      next: () => messageWebSocket.next({ token: config.token }),
    },
  });

  return messageWebSocket.pipe(
    map((raw) => new TauChatMessage(raw as RawTauMessage))
  );
}

export function postMessage(message: string): void {
  if (messageWebSocket.closed) {
    throw new Error('Web socket is closed');
  }
  console.log('sending the message now!', message);
  messageWebSocket.next(message);
}
