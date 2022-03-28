import { RawSubscriptionGiftEventData } from './raw-subscription-gift-event-data';

/**
 * A notification when a viewer gives a gift subscription to one or more users in the
 * specified channel.
 */
export class SubscriptionGiftEventData {
  constructor(raw: RawSubscriptionGiftEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.cumulativeTotal = raw.cumulative_total;
    this.isAnonymous = raw.is_anonymous;
    this.tier = raw.tier;
    this.total = raw.total;
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
   * The number of subscriptions gifted by this user in the channel. This value is null for
   * anonymous gifts or if the gifter has opted out of sharing this information.
   */
  cumulativeTotal: number;
  /**
   * Whether the subscription gift was anonymous.
   */
  isAnonymous: boolean;
  /**
   * The tier of subscriptions in the subscription gift.
   */
  tier: string;
  /**
   * The number of subscriptions in the subscription gift.
   */
  total: number;
  /**
   * The user ID of the user who sent the subscription gift. Set to null if it was an
   * anonymous subscription gift.
   */
  userId: string;
  /**
   * The user login of the user who sent the gift. Set to null if it was an anonymous
   * subscription gift.
   */
  userLogin: string;
  /**
   * The user display name of the user who sent the gift. Set to null if it was an anonymous
   * subscription gift.
   */
  userName: string;
}
