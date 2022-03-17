/**
 * A viewer is banned from the specified channel.
 */
export interface RawChannelBanEventData {
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
   * Will be null if permanent ban. If it is a timeout, this field shows when the timeout will
   * end.
   */
  ends_at: string;
  /**
   * Indicates whether the ban is permanent (true) or a timeout (false). If true, ends_at will
   * be null.
   */
  is_permanent: boolean;
  /**
   * The user ID of the issuer of the ban.
   */
  moderator_user_id: string;
  /**
   * The user login of the issuer of the ban.
   */
  moderator_user_login: string;
  /**
   * The user name of the issuer of the ban.
   */
  moderator_user_name: string;
  /**
   * The reason behind the ban.
   */
  reason: string;
  /**
   * The user ID for the user who was banned on the specified channel.
   */
  user_id: string;
  /**
   * The user login for the user who was banned on the specified channel.
   */
  user_login: string;
  /**
   * The user display name for the user who was banned on the specified channel.
   */
  user_name: string;
}
