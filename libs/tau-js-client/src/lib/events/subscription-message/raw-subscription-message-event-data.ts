/**
 * A notification when a user sends a resubscription chat message in a specific channel.
 */
export interface RawSubscriptionMessageEventData {
  /**
   * The broadcaster user ID.
   */
  broadcaster_user_id: string;
  /**
   * The broadcaster login.
   */
  broadcaster_user_login: string;
  /**
   * The broadcaster display name.
   */
  broadcaster_user_name: string;
  /**
   * The total number of months the user has been subscribed to the channel.
   */
  cumulative_months: number;
  /**
   * The month duration of the subscription.
   */
  duration_months: number;
  /**
   * An object that contains the resubscription message and emote information needed to
   * recreate the message.
   */
  message: Message;
  /**
   * The number of consecutive months the users current subscription has been active. This
   * value is null if the user has opted out of sharing this information.
   */
  streak_months: number;
  /**
   * The tier of the users subscription.
   */
  tier: string;
  /**
   * The user ID of the user who sent a resubscription chat message.
   */
  user_id: string;
  /**
   * The user login of the user who sent a resubscription chat message.
   */
  user_login: string;
  /**
   * The user display name of the user who a resubscription chat message.
   */
  user_name: string;
}

/**
 * An object that contains the resubscription message and emote information needed to
 * recreate the message.
 */
export interface Message {
  /**
   * An array that includes the emote ID and start and end positions for where the emote
   * appears in the text.
   */
  emotes: Emote[];
  /**
   * The text of the resubscription chat message.
   */
  text: string;
}

export interface Emote {
  /**
   * The index of where the Emote starts in the text.
   */
  begin: number;
  /**
   * The index of where the Emote ends in the text.
   */
  end: number;
  /**
   * The emote ID.
   */
  id: string;
}
