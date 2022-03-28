import { RawModeratorRemoveEventData } from './raw-moderator-remove-event-data';

/**
 * Moderator privileges were removed from a user on a specified channel.
 */
export class ModeratorRemoveEventData {
  constructor(raw: RawModeratorRemoveEventData) {
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
   * The user ID of the removed moderator.
   */
  userId: string;
  /**
   * The user login of the removed moderator.
   */
  userLogin: string;
  /**
   * The display name of the removed moderator.
   */
  userName: string;
}
