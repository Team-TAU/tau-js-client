/**
 * Get notified when a broadcaster begins a goal.
 */
export interface RawGoalBeginEventData {
  /**
   * The broadcasters user id.
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
   * The id of the stream.
   */
  id: string;
  /**
   * The timestamp at which the stream went online at.
   */
  started_at: string;
  /**
   * The stream type. Valid values are:live,playlist,watch_party,premiere,rerun.
   */
  type: string;
}
