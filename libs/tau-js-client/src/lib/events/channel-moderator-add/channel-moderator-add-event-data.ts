import { RawChannelModeratorAddEventData } from './raw-channel-moderator-add-event-data';

/**
 * Moderator privileges were added to a user on a specified channel.
 */
export class ChannelModeratorAddEventData {
  constructor(raw: RawChannelModeratorAddEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.userId = raw.user_id;
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
   * The user ID of the new moderator.
   */
  userId: string;
  /**
   * The user login of the new moderator.
   */
  userLogin: string;
  /**
   * The display name of the new moderator.
   */
  userName: string;
}
