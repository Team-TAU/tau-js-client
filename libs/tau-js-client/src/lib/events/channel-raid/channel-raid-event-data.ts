import { RawChannelRaidEventData } from './raw-channel-raid-event-data';

/**
 * A broadcaster raids another broadcasters channel.
 */
export class ChannelRaidEventData {
  constructor(raw: RawChannelRaidEventData) {
    this.fromBroadcasterUserId = raw.from_broadcaster_user_id;
    this.fromBroadcasterUserLogin = raw.from_broadcaster_user_login;
    this.fromBroadcasterUserName = raw.from_broadcaster_user_name;
    this.toBroadcasterUserId = raw.to_broadcaster_user_id;
    this.toBroadcasterUserLogin = raw.to_broadcaster_user_login;
    this.toBroadcasterUserName = raw.to_broadcaster_user_name;
    this.viewers = raw.viewers;
  }

  /**
   * The broadcaster ID that created the raid.
   */
  fromBroadcasterUserId: string;
  /**
   * The broadcaster login that created the raid.
   */
  fromBroadcasterUserLogin: string;
  /**
   * The broadcaster display name that created the raid.
   */
  fromBroadcasterUserName: string;
  /**
   * The broadcaster ID that received the raid.
   */
  toBroadcasterUserId: string;
  /**
   * The broadcaster login that received the raid.
   */
  toBroadcasterUserLogin: string;
  /**
   * The broadcaster display name that received the raid.
   */
  toBroadcasterUserName: string;
  /**
   * The number of viewers in the raid.
   */
  viewers: number;
}
