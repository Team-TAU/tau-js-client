import { parseDate } from '../../utils';
import { RawChannelHypeTrainEndEventData } from './raw-channel-hype-train-end-event-data';

/**
 * A Hype Train ends on the specified channel.
 */
export class ChannelHypeTrainEndEventData {
  constructor(raw: RawChannelHypeTrainEndEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.cooldownEndsAt = parseDate(raw.cooldown_ends_at);
    this.endedAt = parseDate(raw.ended_at);
    this.id = raw.id;
    this.level = raw.level;
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
   * The time when the Hype Train cooldown ends so that the next Hype Train can start.
   */
  cooldownEndsAt: Date;
  /**
   * The time when the Hype Train ended.
   */
  endedAt: Date;
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
