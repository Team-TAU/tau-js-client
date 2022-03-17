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

export interface TauMessage {
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

/*
{
  "tags": {
    "badge-info": "subscriber/1",
    "badges": "broadcaster/1,subscriber/0,premium/1",
    "client-nonce": "6e6977bbbf5b62e265abcc2af7a10a59",
    "color": "#FF4500",
    "display-name": "BroccoDev",
    "emotes": [],
    "first-msg": "0",
    "flags": "",
    "id": "da8eb2f6-95a1-4125-a2fd-ba66dfe01b85",
    "mod": "0",
    "room-id": "143178148",
    "subscriber": "1",
    "tmi-sent-ts": "1646452235789",
    "turbo": "0",
    "user-id": "143178148",
    "user-type": ""
  },
  "prefix": ":broccodev!broccodev@broccodev.tmi.twitch.tv",
  "command": "PRIVMSG",
  "params": [
    "PRIVMSG",
    "#broccodev",
    ":hi dad\r\n"
  ],
  "message-text": "hi dad"

*/
