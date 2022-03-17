/**
 * A custom channel points reward has been created for the specified channel.
 */
export interface RawChannelChannelPointsCustomRewardAddEventData {
  /**
   * Custom background color for the reward. Format: Hex with # prefix. Example:#FA1ED2.
   */
  background_color: string;
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
   * Timestamp of the cooldown expiration.nullif the reward isnt on cooldown.
   */
  cooldown_expires_at: string;
  /**
   * The reward cost.
   */
  cost: number;
  /**
   * Set of default images of 1x, 2x and 4x sizes for the reward.
   */
  default_image: DefaultImage;
  /**
   * Whether a cooldown is enabled and what the cooldown is in seconds.
   */
  global_cooldown: GlobalCooldown;
  /**
   * The reward identifier.
   */
  id: string;
  /**
   * Set of custom images of 1x, 2x and 4x sizes for the reward. Can benullif no images have
   * been uploaded.
   */
  image: Image;
  /**
   * Is the reward currently enabled. If false, the reward wont show up to viewers.
   */
  is_enabled: boolean;
  /**
   * Is the reward currently in stock. If false, viewers cant redeem.
   */
  is_in_stock: boolean;
  /**
   * Is the reward currently paused. If true, viewers cant redeem.
   */
  is_paused: boolean;
  /**
   * Does the viewer need to enter information when redeeming the reward.
   */
  is_user_input_required: boolean;
  /**
   * Whether a maximum per stream is enabled and what the maximum is.
   */
  max_per_stream: MaxPerStream;
  /**
   * Whether a maximum per user per stream is enabled and what the maximum is.
   */
  max_per_user_per_stream: MaxPerUserPerStream;
  /**
   * The reward description.
   */
  prompt: string;
  /**
   * The number of redemptions redeemed during the current live stream. Counts against
   * themax_per_streamlimit.nullif the broadcasters stream isnt live ormax_per_streamisnt
   * enabled.
   */
  redemptions_redeemed_current_stream: number;
  /**
   * Should redemptions be set tofulfilledstatus immediately when redeemed and skip the
   * request queue instead of the normalunfulfilledstatus.
   */
  should_redemptions_skip_request_queue: boolean;
  /**
   * The reward title.
   */
  title: string;
}

/**
 * Set of default images of 1x, 2x and 4x sizes for the reward.
 */
export interface DefaultImage {
  /**
   * URL for the image at 1x size.
   */
  url_1x: string;
  /**
   * URL for the image at 2x size.
   */
  url_2x: string;
  /**
   * URL for the image at 4x size.
   */
  url_4x: string;
}

/**
 * Whether a cooldown is enabled and what the cooldown is in seconds.
 */
export interface GlobalCooldown {
  /**
   * Is the setting enabled.
   */
  is_enabled: boolean;
  /**
   * The cooldown in seconds.
   */
  seconds: number;
}

/**
 * Set of custom images of 1x, 2x and 4x sizes for the reward. Can benullif no images have
 * been uploaded.
 */
export interface Image {
  /**
   * URL for the image at 1x size.
   */
  url_1x: string;
  /**
   * URL for the image at 2x size.
   */
  url_2x: string;
  /**
   * URL for the image at 4x size.
   */
  url_4x: string;
}

/**
 * Whether a maximum per stream is enabled and what the maximum is.
 */
export interface MaxPerStream {
  /**
   * Is the setting enabled.
   */
  is_enabled: boolean;
  /**
   * The max per stream limit.
   */
  value: number;
}

/**
 * Whether a maximum per user per stream is enabled and what the maximum is.
 */
export interface MaxPerUserPerStream {
  /**
   * Is the setting enabled.
   */
  is_enabled: boolean;
  /**
   * The max per user per stream limit.
   */
  value: number;
}
