import { RawChannelCheerEventData } from './raw-channel-cheer-event-data';

/**
 * A user cheers on the specified channel.
 */
export class ChannelCheerEventData {
  constructor(raw: RawChannelCheerEventData) {
    this.bits = raw.bits;
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.isAnonymous = raw.is_anonymous;
    this.message = raw.message;
    this.userId = raw.user_id;
    this.userLogin = raw.user_login;
    this.userName = raw.user_name;
  }

  /**
   * The number of bits cheered.
   */
  bits: number;
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
   * Whether the user cheered anonymously or not.
   */
  isAnonymous: boolean;
  /**
   * The message sent with the cheer.
   */
  message: string;
  /**
   * The user ID for the user who cheered on the specified channel. This is null
   * ifis_anonymousis true.
   */
  userId: string;
  /**
   * The user login for the user who cheered on the specified channel. This is null
   * ifis_anonymousis true.
   */
  userLogin: string;
  /**
   * The user display name for the user who cheered on the specified channel. This is null
   * ifis_anonymousis true.
   */
  userName: string;
}
