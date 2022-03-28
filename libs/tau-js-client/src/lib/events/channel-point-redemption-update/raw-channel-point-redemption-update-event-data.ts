/**
 * A redemption of a channel points custom reward has been updated for the specified channel.
 */
export interface RawChannelPointRedemptionUpdateEventData {
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
   * The redemption identifier.
   */
  id: string;
  /**
   * RFC3339 timestamp of when the reward was redeemed.
   */
  redeemed_at: string;
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
  user_id: string;
  /**
   * The user input provided. Empty string if not provided.
   */
  user_input: string;
  /**
   * Login of the user that redeemed the reward.
   */
  user_login: string;
  /**
   * Display name of the user that redeemed the reward.
   */
  user_name: string;
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
