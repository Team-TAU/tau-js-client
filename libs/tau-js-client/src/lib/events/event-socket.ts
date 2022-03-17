import { map, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import * as WebSocket from 'ws';
import { RawTauEvent, TauEvent } from './tau-event';
import { eventConstructorMap } from './event-constructor-map';

export interface TauEventBanEvent {
  /**
   * The requested broadcaster ID.
   */
  broadcaster_user_id?: string;
  /**
   * The requested broadcaster login.
   */
  broadcaster_user_login?: string;
  /**
   * The requested broadcaster display name.
   */
  broadcaster_user_name?: string;
  /**
   * Will be null if permanent ban. If it is a timeout, this field shows when the timeout will
   * end.
   */
  ends_at?: string;
  /**
   * Indicates whether the ban is permanent (true) or a timeout (false). If true, ends_at will
   * be null.
   */
  is_permanent?: boolean;
  /**
   * The user ID of the issuer of the ban.
   */
  moderator_user_id?: string;
  /**
   * The user login of the issuer of the ban.
   */
  moderator_user_login?: string;
  /**
   * The user name of the issuer of the ban.
   */
  moderator_user_name?: string;
  /**
   * The reason behind the ban.
   */
  reason?: string;
  /**
   * The user ID for the user who was banned on the specified channel.
   */
  user_id?: string;
  /**
   * The user login for the user who was banned on the specified channel.
   */
  user_login?: string;
  /**
   * The user display name for the user who was banned on the specified channel.
   */
  user_name?: string;
}

/**
 * A viewer is banned from the specified channel.
 */
export interface TauEventBan extends TauEvent {
  eventData: TauEventBanEvent;
}

export function createEventWebSocket(
  eventUrl: string,
  token: string
): Observable<TauEvent> {
  const eventWebSocketSubject: WebSocketSubject<
    RawTauEvent | { token: string }
  > = webSocket<RawTauEvent>({
    url: eventUrl,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WebSocketCtor: WebSocket as any,
    // closeObserver: closeSubject,
    openObserver: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: () => eventWebSocketSubject.next({ token: token }),
    },
  });

  const event$ = eventWebSocketSubject.pipe(map(mapRawEvent));

  return event$;
}

function mapRawEvent(raw: RawTauEvent): TauEvent {
  const ctor = eventConstructorMap[raw.event_type];
  return new ctor(raw);
}
