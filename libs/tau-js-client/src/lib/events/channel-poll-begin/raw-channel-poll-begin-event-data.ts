/**
 * A poll started on a specified channel.
 */
export interface RawChannelPollBeginEventData {
  /**
   * The Bits voting settings for the poll.
   */
  bits_voting: BitsVoting;
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
   * The Channel Points voting settings for the poll.
   */
  channel_points_voting: ChannelPointsVoting;
  /**
   * An array of choices for the poll.
   */
  choices: Choice[];
  /**
   * The time the poll will end.
   */
  ends_at: string;
  /**
   * ID of the poll.
   */
  id: string;
  /**
   * The time the poll started.
   */
  started_at: string;
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
  amount_per_vote: number;
  /**
   * Indicates if Bits can be used for voting.
   */
  is_enabled: boolean;
}

/**
 * The Channel Points voting settings for the poll.
 */
export interface ChannelPointsVoting {
  /**
   * Number of Channel Points required to vote once with Channel Points.
   */
  amount_per_vote: number;
  /**
   * Indicates if Channel Points can be used for voting.
   */
  is_enabled: boolean;
}

export interface Choice {
  /**
   * Number of votes received via Bits.
   */
  bits_votes: number;
  /**
   * Number of votes received via Channel Points.
   */
  channel_points_votes: number;
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
