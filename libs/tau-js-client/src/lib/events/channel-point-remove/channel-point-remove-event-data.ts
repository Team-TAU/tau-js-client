import { parseDate } from '../../utils';
import { RawChannelPointRemoveEventData } from './raw-channel-point-remove-event-data';

/**
 * A custom channel points reward has been removed from the specified channel.
 */
export class ChannelPointRemoveEventData {
  constructor(raw: RawChannelPointRemoveEventData) {
    this.backgroundColor = raw.background_color;
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.cooldownExpiresAt = parseDate(raw.cooldown_expires_at);
    this.cost = raw.cost;
    this.defaultImage = {
      url1x: raw.default_image.url_1x,
      url2x: raw.default_image.url_2x,
      url4x: raw.default_image.url_4x,
    };
    this.globalCooldown = {
      isEnabled: raw.global_cooldown.is_enabled,
      seconds: raw.global_cooldown.seconds,
    };
    this.id = raw.id;
    this.image = {
      url1x: raw.image.url_1x,
      url2x: raw.image.url_2x,
      url4x: raw.image.url_4x,
    };
    this.isEnabled = raw.is_enabled;
    this.isInStock = raw.is_in_stock;
    this.isPaused = raw.is_paused;
    this.isUserInputRequired = raw.is_user_input_required;
    this.maxPerStream = {
      isEnabled: raw.max_per_stream.is_enabled,
      value: raw.max_per_stream.value,
    };
    this.maxPerUserPerStream = {
      isEnabled: raw.max_per_user_per_stream.is_enabled,
      value: raw.max_per_user_per_stream.value,
    };
    this.prompt = raw.prompt;
    this.redemptionsRedeemedCurrentStream =
      raw.redemptions_redeemed_current_stream;
    this.shouldRedemptionsSkipRequestQueue =
      raw.should_redemptions_skip_request_queue;
    this.title = raw.title;
  }

  /**
   * Custom background color for the reward. Format: Hex with # prefix. Example:#FA1ED2.
   */
  backgroundColor: string;
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
   * Timestamp of the cooldown expiration.nullif the reward isnt on cooldown.
   */
  cooldownExpiresAt: Date;
  /**
   * The reward cost.
   */
  cost: number;
  /**
   * Set of default images of 1x, 2x and 4x sizes for the reward.
   */
  defaultImage: DefaultImage;
  /**
   * Whether a cooldown is enabled and what the cooldown is in seconds.
   */
  globalCooldown: GlobalCooldown;
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
  isEnabled: boolean;
  /**
   * Is the reward currently in stock. If false, viewers cant redeem.
   */
  isInStock: boolean;
  /**
   * Is the reward currently paused. If true, viewers cant redeem.
   */
  isPaused: boolean;
  /**
   * Does the viewer need to enter information when redeeming the reward.
   */
  isUserInputRequired: boolean;
  /**
   * Whether a maximum per stream is enabled and what the maximum is.
   */
  maxPerStream: MaxPerStream;
  /**
   * Whether a maximum per user per stream is enabled and what the maximum is.
   */
  maxPerUserPerStream: MaxPerUserPerStream;
  /**
   * The reward description.
   */
  prompt: string;
  /**
   * The number of redemptions redeemed during the current live stream. Counts against
   * themax_per_streamlimit.nullif the broadcasters stream isnt live ormax_per_streamisnt
   * enabled.
   */
  redemptionsRedeemedCurrentStream: number;
  /**
   * Should redemptions be set tofulfilledstatus immediately when redeemed and skip the
   * request queue instead of the normalunfulfilledstatus.
   */
  shouldRedemptionsSkipRequestQueue: boolean;
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
  url1x: string;
  /**
   * URL for the image at 2x size.
   */
  url2x: string;
  /**
   * URL for the image at 4x size.
   */
  url4x: string;
}

/**
 * Whether a cooldown is enabled and what the cooldown is in seconds.
 */
export interface GlobalCooldown {
  /**
   * Is the setting enabled.
   */
  isEnabled: boolean;
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
  url1x: string;
  /**
   * URL for the image at 2x size.
   */
  url2x: string;
  /**
   * URL for the image at 4x size.
   */
  url4x: string;
}

/**
 * Whether a maximum per stream is enabled and what the maximum is.
 */
export interface MaxPerStream {
  /**
   * Is the setting enabled.
   */
  isEnabled: boolean;
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
  isEnabled: boolean;
  /**
   * The max per user per stream limit.
   */
  value: number;
}
