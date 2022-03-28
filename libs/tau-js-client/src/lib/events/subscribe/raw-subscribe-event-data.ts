/**
 * A notification when a specified channel receives a subscriber. This does not include
 * resubscribes.
 */
export interface RawSubscribeEventData {
  /**
   * The requested broadcaster ID.
   */
  broadcaster_user_id: string;
  /**
   * The requested broadcaster login.
   */
  broadcaster_user_login: string;
  /**
   * The requested broadcaster display name.
   */
  broadcaster_user_name: string;
  /**
   * Whether the subscription is a gift.
   */
  is_gift: boolean;
  /**
   * The tier of the subscription. Valid values are 1000, 2000, and 3000.
   */
  tier: string;
  /**
   * The user ID for the user who subscribed to the specified channel.
   */
  user_id: string;
  /**
   * The user login for the user who subscribed to the specified channel.
   */
  user_login: string;
  /**
   * The user display name for the user who subscribed to the specified channel.
   */
  user_name: string;
}
