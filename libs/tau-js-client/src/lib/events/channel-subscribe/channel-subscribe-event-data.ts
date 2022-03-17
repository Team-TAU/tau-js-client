import { RawChannelSubscribeEventData } from './raw-channel-subscribe-event-data';

/**
 * A notification when a specified channel receives a subscriber. This does not include
 * resubscribes.
 */
export class ChannelSubscribeEventData {
  constructor(raw: RawChannelSubscribeEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.isGift = raw.is_gift;
    this.tier = raw.tier;
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
   * Whether the subscription is a gift.
   */
  isGift: boolean;
  /**
   * The tier of the subscription. Valid values are 1000, 2000, and 3000.
   */
  tier: string;
  /**
   * The user ID for the user who subscribed to the specified channel.
   */
  userId: string;
  /**
   * The user login for the user who subscribed to the specified channel.
   */
  userLogin: string;
  /**
   * The user display name for the user who subscribed to the specified channel.
   */
  userName: string;
}
