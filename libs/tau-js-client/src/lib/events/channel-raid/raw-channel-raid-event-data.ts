/**
 * A broadcaster raids another broadcasters channel.
 */
export interface RawChannelRaidEventData {
  /**
   * The broadcaster ID that created the raid.
   */
  from_broadcaster_user_id: string;
  /**
   * The broadcaster login that created the raid.
   */
  from_broadcaster_user_login: string;
  /**
   * The broadcaster display name that created the raid.
   */
  from_broadcaster_user_name: string;
  /**
   * The broadcaster ID that received the raid.
   */
  to_broadcaster_user_id: string;
  /**
   * The broadcaster login that received the raid.
   */
  to_broadcaster_user_login: string;
  /**
   * The broadcaster display name that received the raid.
   */
  to_broadcaster_user_name: string;
  /**
   * The number of viewers in the raid.
   */
  viewers: number;
}
