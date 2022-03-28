/**
 * Moderator privileges were added to a user on a specified channel.
 */
export interface RawModeratorAddEventData {
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
   * The user ID of the new moderator.
   */
  user_id: string;
  /**
   * The user login of the new moderator.
   */
  user_login: string;
  /**
   * The display name of the new moderator.
   */
  user_name: string;
}
