import { RawChannelSubscriptionEndEventData } from './raw-channel-subscription-end-event-data';

/**
 * A notification when a subscription to the specified channel ends.
 */
export class ChannelSubscriptionEndEventData {
  constructor(raw: RawChannelSubscriptionEndEventData) {
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
   * The broadcaster user ID.
   */
  broadcasterUserId: string;
  /**
   * The broadcaster login.
   */
  broadcasterUserLogin: string;
  /**
   * The broadcaster display name.
   */
  broadcasterUserName: string;
  /**
   * Whether the subscription was a gift.
   */
  isGift: boolean;
  /**
   * The tier of the subscription that ended. Valid values are 1000, 2000, and 3000.
   */
  tier: string;
  /**
   * The user ID for the user whose subscription ended.
   */
  userId: string;
  /**
   * The user login for the user whose subscription ended.
   */
  userLogin: string;
  /**
   * The user display name for the user whose subscription ended.
   */
  userName: string;
}
