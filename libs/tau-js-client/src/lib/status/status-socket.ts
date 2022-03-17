import { map, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import * as WebSocket from 'ws';
import { RawTauStatus, TauStatus } from './status.model';

export function createStatusWebSocket(
  statusUrl: string,
  token: string
): Observable<TauStatus> {
  const statusWebSocket: WebSocketSubject<RawTauStatus | { token: string }> =
    webSocket<RawTauStatus>({
      url: statusUrl,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      WebSocketCtor: WebSocket as any,
      // closeObserver: closeSubject,
      openObserver: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        next: () => statusWebSocket.next({ token: token }),
      },
    });
  const status$ = statusWebSocket.pipe(
    map((msg) => {
      return msg as TauStatus;
    })
  );

  return status$;
}
