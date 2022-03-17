/**
 * A notification when a viewer gives a gift subscription to one or more users in the
 * specified channel.
 */
export interface RawChannelSubscriptionGiftEventData {
  /**
   * The broadcaster user ID.
   */
  broadcaster_user_id: string;
  /**
   * The broadcaster login.
   */
  broadcaster_user_login: string;
  /**
   * The broadcaster display name.
   */
  broadcaster_user_name: string;
  /**
   * The number of subscriptions gifted by this user in the channel. This value is null for
   * anonymous gifts or if the gifter has opted out of sharing this information.
   */
  cumulative_total: number;
  /**
   * Whether the subscription gift was anonymous.
   */
  is_anonymous: boolean;
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
  user_id: string;
  /**
   * The user login of the user who sent the gift. Set to null if it was an anonymous
   * subscription gift.
   */
  user_login: string;
  /**
   * The user display name of the user who sent the gift. Set to null if it was an anonymous
   * subscription gift.
   */
  user_name: string;
}
