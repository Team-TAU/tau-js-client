/**
 * A Prediction ended on a specified channel.
 */
export interface RawChannelPredictionEndEventData {
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
   * The time the Channel Points Prediction ended.
   */
  ended_at: string;
  /**
   * Channel Points Prediction ID.
   */
  id: string;
  /**
   * An array of outcomes for the Channel Points Prediction. Includes top_predictors.
   */
  outcomes: Outcome[];
  /**
   * The time the Channel Points Prediction started.
   */
  started_at: string;
  /**
   * The status of the Channel Points Prediction. Valid values are resolved and canceled.
   */
  status: string;
  /**
   * Title for the Channel Points Prediction.
   */
  title: string;
  /**
   * ID of the winning outcome.
   */
  winning_outcome_id: string;
}

export interface Outcome {
  /**
   * The total number of Channel Points used on this outcome.
   */
  channel_points: number;
  /**
   * The color for the outcome. Valid values are pink and blue.
   */
  color: string;
  /**
   * The outcome ID.
   */
  id: string;
  /**
   * The outcome title.
   */
  title: string;
  /**
   * An array of users who used the most Channel Points on this outcome.
   */
  top_predictors: TopPredictor[];
  /**
   * The number of users who used Channel Points on this outcome.
   */
  users: number;
}

export interface TopPredictor {
  /**
   * The number of Channel Points used to participate in the Prediction.
   */
  channel_points_used: number;
  /**
   * The number of Channel Points won. This value is always null in the event payload for
   * Prediction progress and Prediction lock. This value is 0 if the outcome did not win or if
   * the Prediction was canceled and Channel Points were refunded.
   */
  channel_points_won: number;
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
