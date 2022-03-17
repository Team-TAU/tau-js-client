import { parseDate } from '../../utils';
import { RawChannelHypeTrainProgressEventData } from './raw-channel-hype-train-progress-event-data';

/**
 * A Hype Train makes progress on the specified channel.
 */
export class ChannelHypeTrainProgressEventData {
  constructor(raw: RawChannelHypeTrainProgressEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.expiresAt = parseDate(raw.expires_at);
    this.goal = raw.goal;
    this.id = raw.id;
    this.lastContribution = {
      total: raw.last_contribution.total,
      type: raw.last_contribution.type,
      userId: raw.last_contribution.user_id,
      userLogin: raw.last_contribution.user_login,
      userName: raw.last_contribution.user_name,
    };
    this.level = raw.level;
    this.progress = raw.progress;
    this.startedAt = parseDate(raw.started_at);
    this.topContributions = {
      total: raw.top_contributions.total,
      type: raw.top_contributions.type,
      userId: raw.top_contributions.user_id,
      userLogin: raw.top_contributions.user_login,
      userName: raw.top_contributions.user_name,
    };
    this.total = raw.total;
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
   * The time when the Hype Train expires. The expiration is extended when the Hype Train
   * reaches a new level.
   */
  expiresAt: Date;
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
  lastContribution: LastContribution;
  /**
   * The current level of the Hype Train.
   */
  level: number;
  /**
   * The number of points contributed to the Hype Train at the current level.
   */
  progress: number;
  /**
   * The time when the Hype Train started.
   */
  startedAt: Date;
  /**
   * The contributors with the most points contributed.
   */
  topContributions: TopContributions;
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
