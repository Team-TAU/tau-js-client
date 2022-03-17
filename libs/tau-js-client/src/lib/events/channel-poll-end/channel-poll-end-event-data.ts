import { parseDate } from '../../utils';
import { RawChannelPollEndEventData } from './raw-channel-poll-end-event-data';

/**
 * A poll ended on a specified channel.
 */
export class ChannelPollEndEventData {
  constructor(raw: RawChannelPollEndEventData) {
    this.bitsVoting = {
      amountPerVote: raw.bits_voting.amount_per_vote,
      isEnabled: raw.bits_voting.is_enabled,
    };
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.channelPointsVoting = {
      amountPerVote: raw.channel_points_voting.amount_per_vote,
      isEnabled: raw.channel_points_voting.is_enabled,
    };
    this.choices = (raw.choices || []).map((choice) => ({
      bitsVotes: choice.bits_votes,
      channelPointsVotes: choice.channel_points_votes,
      id: choice.id,
      title: choice.title,
      votes: choice.votes,
    }));
    this.endedAt = parseDate(raw.ended_at);
    this.id = raw.id;
    this.startedAt = parseDate(raw.started_at);
    this.status = raw.status;
    this.title = raw.title;
  }

  /**
   * The Bits voting settings for the poll.
   */
  bitsVoting: BitsVoting;
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
   * The Channel Points voting settings for the poll.
   */
  channelPointsVoting: ChannelPointsVoting;
  /**
   * An array of choices for the poll. Includes vote counts.
   */
  choices: Choice[];
  /**
   * The time the poll ended.
   */
  endedAt: Date;
  /**
   * ID of the poll.
   */
  id: string;
  /**
   * The time the poll started.
   */
  startedAt: Date;
  /**
   * The status of the poll. Valid values are completed, archived, and terminated.
   */
  status: string;
  /**
   * Question displayed for the poll.
   */
  title: string;
}

/**
 * The Bits voting settings for the poll.
 */
export interface BitsVoting {
  /**
   * Number of Bits required to vote once with Bits.
   */
  amountPerVote: number;
  /**
   * Indicates if Bits can be used for voting.
   */
  isEnabled: boolean;
}

/**
 * The Channel Points voting settings for the poll.
 */
export interface ChannelPointsVoting {
  /**
   * Number of Channel Points required to vote once with Channel Points.
   */
  amountPerVote: number;
  /**
   * Indicates if Channel Points can be used for voting.
   */
  isEnabled: boolean;
}

export interface Choice {
  /**
   * Number of votes received via Bits.
   */
  bitsVotes: number;
  /**
   * Number of votes received via Channel Points.
   */
  channelPointsVotes: number;
  /**
   * ID for the choice.
   */
  id: string;
  /**
   * Text displayed for the choice.
   */
  title: string;
  /**
   * Total number of votes received for the choice across all methods of voting.
   */
  votes: number;
}
