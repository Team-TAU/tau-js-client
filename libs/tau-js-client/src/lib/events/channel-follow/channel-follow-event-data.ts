import { parseDate } from '../../utils';
import { RawChannelFollowEventData } from './raw-channel-follow-event-data';

/**
 * A specified channel receives a follow.
 */
export class ChannelFollowEventData {
  constructor(raw: RawChannelFollowEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.followedAt = parseDate(raw.followed_at);
    this.userId = raw.user_id;
    this.userLogin = raw.user_login;
    this.userName = raw.user_name;
  }

  /**
   * The requested broadcaster ID.
   */
  broadcasterUserId: string;
  /**
   * The requested broadcaster login.
   */
  broadcasterUserLogin: string;
  /**
   * The requested broadcaster display name.
   */
  broadcasterUserName: string;
  /**
   * RFC3339 timestamp of when the follow occurred.
   */
  followedAt: Date;
  /**
   * The user ID for the user now following the specified channel.
   */
  userId: string;
  /**
   * The user login for the user now following the specified channel.
   */
  userLogin: string;
  /**
   * The user display name for the user now following the specified channel.
   */
  userName: string;
}
