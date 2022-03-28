import { RawUnbanEventData } from './raw-unban-event-data';

/**
 * A viewer is unbanned from the specified channel.
 */
export class UnbanEventData {
  constructor(raw: RawUnbanEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.moderatorUserId = raw.moderator_user_id;
    this.moderatorUserLogin = raw.moderator_user_login;
    this.moderatorUserName = raw.moderator_user_name;
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
   * The user ID of the issuer of the unban.
   */
  moderatorUserId: string;
  /**
   * The user login of the issuer of the unban.
   */
  moderatorUserLogin: string;
  /**
   * The user name of the issuer of the unban.
   */
  moderatorUserName: string;
  /**
   * The user id for the user who was unbanned on the specified channel.
   */
  userId: string;
  /**
   * The user login for the user who was unbanned on the specified channel.
   */
  userLogin: string;
  /**
   * The user display name for the user who was unbanned on the specified channel.
   */
  userName: string;
}
