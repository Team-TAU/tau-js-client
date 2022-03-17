import { Emote, RawEmote, RawTauMessage, TauMessage } from './message.model';
import { map, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import * as WebSocket from 'ws';

let messageWebSocket: WebSocketSubject<
  RawTauMessage | string | { token: string }
>;
export function createMessageWebSocket(
  messageUrl: string,
  token: string
): Observable<TauMessage> {
  messageWebSocket = webSocket<RawTauMessage>({
    url: messageUrl,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WebSocketCtor: WebSocket as any,
    // closeObserver: closeSubject,
    openObserver: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: () => messageWebSocket.next({ token: token }),
    },
  });

  const event$ = messageWebSocket.pipe(map(mapRawMessage));

  return event$;
}

export function postMessage(message: string): void {
  if (messageWebSocket.closed) {
    throw new Error('Web socket is closed');
  }
  console.log('sending the message now!', message);
  messageWebSocket.next(message);
}

function mapRawMessage(raw: RawTauMessage): TauMessage {
  const badges = mapBadges(raw.tags.badges);
  console.log('raw message');
  console.log(raw.tags.emotes[0]);
  return {
    id: raw.id,
    tags: {
      badgeInfo: raw['badge-info'],
      clientNonce: raw.tags['client-nonce'],
      color: raw.tags.color,
      displayName: raw.tags['display-name'],
      emotes: (raw.tags.emotes || []).map(mapEmote),
      isFirstMsg: parseBoolean(raw.tags['first-msg']),
      flags: raw.tags.flags,
      id: raw.tags.id,
      isBroadcaster: badges.includes('broadcaster'),
      isPremium: badges.includes('premium'),
      isModerator: parseBoolean(raw.tags.mod),
      roomId: raw.tags['room-id'],
      isSubscriber: parseBoolean(raw.tags.subscriber),
      tmiSentTs: raw.tags['tmi-sent-ts'],
      isTurbo: parseBoolean(raw.tags.turbo),
      userId: raw.tags['user-id'],
      userType: raw.tags['user-type'],
    },
    prefix: raw.prefix,
    command: raw.command,
    params: raw.params,
    messageText: raw['message-text'],
  };
}

function mapBadges(s: string): string[] {
  //broadcaster/1,subscriber/0,premium/1
  const result = s
    .split(',')
    .map((part) => {
      const [badge, hasBadge] = part.split('/');
      return { [badge]: parseBoolean(hasBadge) };
    })
    .filter((badge) => Object.values(badge)[0])
    .map((badge) => Object.keys(badge)[0]);

  return result;
}

function mapEmote(raw: RawEmote): Emote {
  return {
    id: raw.id,
    smallUrl: `https://static-cdn.jtvnw.net/emoticons/v2/${raw.id}/default/dark/1.0`,
    mediumUrl: `https://static-cdn.jtvnw.net/emoticons/v2/${raw.id}/default/dark/2.0`,
    largeUrl: `https://static-cdn.jtvnw.net/emoticons/v2/${raw.id}/default/dark/3.0`,
    positions: raw.positions.map((position) => ({
      start: position[0],
      end: position[1],
    })),
  };
}

function parseBoolean(s: string): boolean {
  return s === '1';
}
