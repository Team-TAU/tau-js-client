/**
 * A Hype Train begins on the specified channel.
 */
export interface RawChannelHypeTrainBeginEventData {
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
   * The time when the Hype Train expires. The expiration is extended when the Hype Train
   * reaches a new level.
   */
  expires_at: string;
  /**
   * The number of points required to reach the next level.
   */
  goal: number;
  /**
   * The Hype Train ID.
   */
  id: string;
  /**
   * The most recent contribution.
   */
  last_contribution: LastContribution;
  /**
   * The number of points contributed to the Hype Train at the current level.
   */
  progress: number;
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
 * The most recent contribution.
 */
export interface LastContribution {
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
