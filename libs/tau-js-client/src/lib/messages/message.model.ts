export interface RawTauMessage {
  id: string;
  tags: RawTauMessageTags;
  prefix: string;
  command: 'PRIVMSG';
  params: string[];
  'message-text': string;
}
export interface RawTauMessageTags {
  'badge-info': string;
  badges: string;
  'client-nonce': string;
  color: string;
  'display-name': string;
  emotes: RawEmote[];
  'first-msg': string;
  flags: string;
  id: string;
  mod: string;
  'room-id': string;
  subscriber: string;
  'tmi-sent-ts': string;
  turbo: string;
  'user-id': string;
  'user-type': string;
}

export interface RawEmote {
  id: string;
  positions: [number, number][];
}

export class TauMessage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(raw: RawTauMessage | any) {
    const badges = mapBadges(raw.tags.badges);
    this.id = raw.id;
    this.tags = {
      badgeInfo: raw.tags['badge-info'],
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
    };
    this.prefix = raw.prefix;
    this.command = raw.command;
    this.params = raw.params;
    this.messageText = raw['message-text'];
  }
  id: string;
  tags: TauMessageTags;
  prefix: string;
  command: 'PRIVMSG';
  params: string[];
  messageText: string;
}

export interface TauMessageTags {
  badgeInfo: string;
  clientNonce: string;
  color: string;
  displayName: string;
  emotes: Emote[];
  isFirstMsg: boolean;
  flags: string;
  id: string;
  isModerator: boolean;
  isBroadcaster: boolean;
  isPremium: boolean;
  roomId: string;
  isSubscriber: boolean;
  tmiSentTs: string;
  isTurbo: boolean;
  userId: string;
  userType: string;
}

export interface Emote {
  id: string;
  smallUrl: string;
  mediumUrl: string;
  largeUrl: string;
  positions: {
    start: number;
    end: number;
  }[];
}

function mapBadges(s: string): string[] {
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
