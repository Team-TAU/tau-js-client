import { parseDate } from '../../utils';
import { RawChannelPredictionLockEventData } from './raw-channel-prediction-lock-event-data';

/**
 * A Prediction was locked on a specified channel.
 */
export class ChannelPredictionLockEventData {
  constructor(raw: RawChannelPredictionLockEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.id = raw.id;
    this.lockedAt = parseDate(raw.locked_at);
    this.outcomes = (raw.outcomes || []).map((outcome) => ({
      channelPoints: outcome.channel_points,
      color: outcome.color,
      id: outcome.id,
      title: outcome.title,
      topPredictors: (outcome.top_predictors || []).map((tp) => ({
        channelPointsUsed: tp.channel_points_used,
        channelPointsWon: tp.channel_points_won,
        userId: tp.user_id,
        userLogin: tp.user_login,
        userName: tp.user_name,
      })),
      users: outcome.users,
    }));
    this.startedAt = parseDate(raw.started_at);
    this.title = raw.title;
  }

  /**
   * The requested broadcaster ID.
   */
  broadcasterUserId: string;
  /**
   * The requested broadcaster login.
   */
  broadcasterUserLogin: string;
  /**
   * The requested broadcaster display name.
   */
  broadcasterUserName: string;
  /**
   * Channel Points Prediction ID.
   */
  id: string;
  /**
   * The time the Channel Points Prediction was locked.
   */
  lockedAt: Date;
  /**
   * An array of outcomes for the Channel Points Prediction. Includes topPredictors.
   */
  outcomes: Outcome[];
  /**
   * The time the Channel Points Prediction started.
   */
  startedAt: Date;
  /**
   * Title for the Channel Points Prediction.
   */
  title: string;
}

export interface Outcome {
  /**
   * The total number of Channel Points used on this outcome.
   */
  channelPoints: number;
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
  topPredictors: TopPredictor[];
  /**
   * The number of users who used Channel Points on this outcome.
   */
  users: number;
}

export interface TopPredictor {
  /**
   * The number of Channel Points used to participate in the Prediction.
   */
  channelPointsUsed: number;
  /**
   * The number of Channel Points won. This value is always null in the event payload for
   * Prediction progress and Prediction lock. This value is 0 if the outcome did not win or if
   * the Prediction was canceled and Channel Points were refunded.
   */
  channelPointsWon: number;
  /**
   * The ID of the user.
   */
  userId: string;
  /**
   * The login of the user.
   */
  userLogin: string;
  /**
   * The display name of the user.
   */
  userName: string;
}
