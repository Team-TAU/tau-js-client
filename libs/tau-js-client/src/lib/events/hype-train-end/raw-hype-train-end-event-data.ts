/**
 * A Hype Train ends on the specified channel.
 */
export interface RawHypeTrainEndEventData {
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
   * The time when the Hype Train cooldown ends so that the next Hype Train can start.
   */
  cooldown_ends_at: string;
  /**
   * The time when the Hype Train ended.
   */
  ended_at: string;
  /**
   * The Hype Train ID.
   */
  id: string;
  /**
   * The current level of the Hype Train.
   */
  level: number;
  /**
   * The time when the Hype Train started.
   */
  started_at: string;
  /**
   * The contributors with the most points contributed.
   */
  top_contributions: TopContributions;
  /**
   * Total points contributed to the Hype Train.
   */
  total: number;
}

/**
 * The contributors with the most points contributed.
 */
export interface TopContributions {
  /**
   * The total contributed.
   */
  total: number;
  /**
   * Type of contribution. Valid values includebits,subscription.
   */
  type: string;
  /**
   * The ID of the user.
   */
  user_id: string;
  /**
   * The login of the user.
   */
  user_login: string;
  /**
   * The display name of the user.
   */
  user_name: string;
}
