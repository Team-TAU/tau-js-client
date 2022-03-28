/**
 * A specified channel receives a follow.
 */
export interface RawFollowEventData {
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
   * RFC3339 timestamp of when the follow occurred.
   */
  followed_at: string;
  /**
   * The user ID for the user now following the specified channel.
   */
  user_id: string;
  /**
   * The user login for the user now following the specified channel.
   */
  user_login: string;
  /**
   * The user display name for the user now following the specified channel.
   */
  user_name: string;
}
