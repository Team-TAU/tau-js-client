/**
 * A broadcaster updates their channel properties e.g., category, title, mature flag,
 * broadcast, or language.
 */
export interface RawUpdateEventData {
  /**
   * The broadcasters user ID.
   */
  broadcaster_user_id: string;
  /**
   * The broadcasters user login.
   */
  broadcaster_user_login: string;
  /**
   * The broadcasters user display name.
   */
  broadcaster_user_name: string;
  /**
   * The channels category ID.
   */
  category_id: string;
  /**
   * The category name.
   */
  category_name: string;
  /**
   * A boolean identifying whether the channel is flagged as mature. Valid values
   * aretrueandfalse.
   */
  is_mature: boolean;
  /**
   * The channels broadcast language.
   */
  language: string;
  /**
   * The channels stream title.
   */
  title: string;
}
