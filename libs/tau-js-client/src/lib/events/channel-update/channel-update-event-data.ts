import { RawChannelUpdateEventData } from './raw-channel-update-event-data';

/**
 * A broadcaster updates their channel properties e.g., category, title, mature flag,
 * broadcast, or language.
 */
export class ChannelUpdateEventData {
  constructor(raw: RawChannelUpdateEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.categoryId = raw.category_id;
    this.categoryName = raw.category_name;
    this.isMature = raw.is_mature;
    this.language = raw.language;
    this.title = raw.title;
  }

  /**
   * The broadcasters user ID.
   */
  broadcasterUserId: string;
  /**
   * The broadcasters user login.
   */
  broadcasterUserLogin: string;
  /**
   * The broadcasters user display name.
   */
  broadcasterUserName: string;
  /**
   * The channels category ID.
   */
  categoryId: string;
  /**
   * The category name.
   */
  categoryName: string;
  /**
   * A boolean identifying whether the channel is flagged as mature. Valid values
   * aretrueandfalse.
   */
  isMature: boolean;
  /**
   * The channels broadcast language.
   */
  language: string;
  /**
   * The channels stream title.
   */
  title: string;
}
