import { parseDate } from '../../utils';
import { RawChannelPointRedemptionUpdateEventData } from './raw-channel-point-redemption-update-event-data';

/**
 * A redemption of a channel points custom reward has been updated for the specified channel.
 */
export class ChannelPointRedemptionUpdateEventData {
  constructor(
    raw: RawChannelPointRedemptionUpdateEventData
  ) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.id = raw.id;
    this.redeemedAt = parseDate(raw.redeemed_at);
    this.reward = {
      cost: raw.reward.cost,
      id: raw.reward.id,
      prompt: raw.reward.prompt,
      title: raw.reward.title,
    };
    this.status = raw.status;
    this.userId = raw.user_id;
    this.userInput = raw.user_input;
    this.userLogin = raw.user_login;
    this.userName = raw.user_name;
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
   * The redemption identifier.
   */
  id: string;
  /**
   * RFC3339 timestamp of when the reward was redeemed.
   */
  redeemedAt: Date;
  /**
   * Basic information about the reward that was redeemed, at the time it was redeemed.
   */
  reward: Reward;
  /**
   * Will befulfilledorcanceled. Possible values areunknown,unfulfilled,fulfilled, andcanceled.
   */
  status: string;
  /**
   * User ID of the user that redeemed the reward.
   */
  userId: string;
  /**
   * The user input provided. Empty string if not provided.
   */
  userInput: string;
  /**
   * Login of the user that redeemed the reward.
   */
  userLogin: string;
  /**
   * Display name of the user that redeemed the reward.
   */
  userName: string;
}

/**
 * Basic information about the reward that was redeemed, at the time it was redeemed.
 */
export interface Reward {
  /**
   * The reward cost.
   */
  cost: number;
  /**
   * The reward identifier.
   */
  id: string;
  /**
   * The reward description.
   */
  prompt: string;
  /**
   * The reward name.
   */
  title: string;
}
