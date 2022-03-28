/**
 * A notification when a subscription to the specified channel ends.
 */
export interface RawSubscriptionEndEventData {
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
   * Whether the subscription was a gift.
   */
  is_gift: boolean;
  /**
   * The tier of the subscription that ended. Valid values are 1000, 2000, and 3000.
   */
  tier: string;
  /**
   * The user ID for the user whose subscription ended.
   */
  user_id: string;
  /**
   * The user login for the user whose subscription ended.
   */
  user_login: string;
  /**
   * The user display name for the user whose subscription ended.
   */
  user_name: string;
}
