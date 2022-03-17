/**
 * A viewer is unbanned from the specified channel.
 */
export interface RawChannelUnbanEventData {
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
   * The user ID of the issuer of the unban.
   */
  moderator_user_id: string;
  /**
   * The user login of the issuer of the unban.
   */
  moderator_user_login: string;
  /**
   * The user name of the issuer of the unban.
   */
  moderator_user_name: string;
  /**
   * The user id for the user who was unbanned on the specified channel.
   */
  user_id: string;
  /**
   * The user login for the user who was unbanned on the specified channel.
   */
  user_login: string;
  /**
   * The user display name for the user who was unbanned on the specified channel.
   */
  user_name: string;
}
