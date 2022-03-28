/**
 * A user cheers on the specified channel.
 */
export interface RawCheerEventData {
  /**
   * The number of bits cheered.
   */
  bits: number;
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
   * Whether the user cheered anonymously or not.
   */
  is_anonymous: boolean;
  /**
   * The message sent with the cheer.
   */
  message: string;
  /**
   * The user ID for the user who cheered on the specified channel. This is null
   * ifis_anonymousis true.
   */
  user_id: string;
  /**
   * The user login for the user who cheered on the specified channel. This is null
   * ifis_anonymousis true.
   */
  user_login: string;
  /**
   * The user display name for the user who cheered on the specified channel. This is null
   * ifis_anonymousis true.
   */
  user_name: string;
}
