import { parseDate } from '../../utils';
import { RawBanEventData } from './raw-ban-event-data';

/**
 * A viewer is banned from the specified channel.
 */
export class BanEventData {
  constructor(raw: RawBanEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.endsAt = parseDate(raw.ends_at);
    this.isPermanent = raw.is_permanent;
    this.moderatorUserId = raw.moderator_user_id;
    this.moderatorUserLogin = raw.moderator_user_login;
    this.moderatorUserName = raw.moderator_user_name;
    this.reason = raw.reason;
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
   * Will be null if permanent ban. If it is a timeout, this field shows when the timeout will
   * end.
   */
  endsAt: Date;
  /**
   * Indicates whether the ban is permanent (true) or a timeout (false). If true, ends_at will
   * be null.
   */
  isPermanent: boolean;
  /**
   * The user ID of the issuer of the ban.
   */
  moderatorUserId: string;
  /**
   * The user login of the issuer of the ban.
   */
  moderatorUserLogin: string;
  /**
   * The user name of the issuer of the ban.
   */
  moderatorUserName: string;
  /**
   * The reason behind the ban.
   */
  reason: string;
  /**
   * The user ID for the user who was banned on the specified channel.
   */
  userId: string;
  /**
   * The user login for the user who was banned on the specified channel.
   */
  userLogin: string;
  /**
   * The user display name for the user who was banned on the specified channel.
   */
  userName: string;
}
