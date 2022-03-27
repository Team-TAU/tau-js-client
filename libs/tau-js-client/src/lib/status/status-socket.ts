import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { webSocket as rxjsWebSocket, WebSocketSubject } from 'rxjs/webSocket';
import { TauConfig } from '../tau-js-client';
import { buildUrlBase, getWsBaseConfig } from '../utils';
import { RawTauStatus, TauStatus } from './status.model';

type StatusSocketSubject = RawTauStatus | { token: string };

export function createStatusWebSocket(
  config: TauConfig
): Observable<TauStatus> {
  const url = `${buildUrlBase(config.domain, config.port)}tau-status/`;

  const wsConfig = getWsBaseConfig<StatusSocketSubject>(
    url,
    config.WebSocketCtor
  );

  const statusWebSocket: WebSocketSubject<StatusSocketSubject> =
    rxjsWebSocket<StatusSocketSubject>({
      ...wsConfig,
      openObserver: {
        next: () => statusWebSocket.next({ token: config.token }),
      },
    });

  const status$ = statusWebSocket.pipe(
    map((msg) => {
      return msg as TauStatus;
    })
  );

  return status$;
}
