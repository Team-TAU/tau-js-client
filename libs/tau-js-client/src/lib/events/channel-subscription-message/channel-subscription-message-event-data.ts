import { RawChannelSubscriptionMessageEventData } from './raw-channel-subscription-message-event-data';

/**
 * A notification when a user sends a resubscription chat message in a specific channel.
 */
export class ChannelSubscriptionMessageEventData {
  constructor(raw: RawChannelSubscriptionMessageEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.cumulativeMonths = raw.cumulative_months;
    this.durationMonths = raw.duration_months;
    this.message = {
      emotes: (raw.message.emotes || []).map((emote) => ({
        begin: emote.begin,
        end: emote.end,
        id: emote.id,
      })),
      text: raw.message.text,
    };
    this.streakMonths = raw.streak_months;
    this.tier = raw.tier;
    this.userId = raw.user_id;
    this.userLogin = raw.user_login;
    this.userName = raw.user_name;
  }

  /**
   * The broadcaster user ID.
   */
  broadcasterUserId: string;
  /**
   * The broadcaster login.
   */
  broadcasterUserLogin: string;
  /**
   * The broadcaster display name.
   */
  broadcasterUserName: string;
  /**
   * The total number of months the user has been subscribed to the channel.
   */
  cumulativeMonths: number;
  /**
   * The month duration of the subscription.
   */
  durationMonths: number;
  /**
   * An object that contains the resubscription message and emote information needed to
   * recreate the message.
   */
  message: Message;
  /**
   * The number of consecutive months the users current subscription has been active. This
   * value is null if the user has opted out of sharing this information.
   */
  streakMonths: number;
  /**
   * The tier of the users subscription.
   */
  tier: string;
  /**
   * The user ID of the user who sent a resubscription chat message.
   */
  userId: string;
  /**
   * The user login of the user who sent a resubscription chat message.
   */
  userLogin: string;
  /**
   * The user display name of the user who a resubscription chat message.
   */
  userName: string;
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
