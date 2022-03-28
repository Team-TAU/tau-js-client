import { parseDate } from '../../utils';
import { RawGoalEndEventData } from './raw-goal-end-event-data';

/**
 * Get notified when a broadcaster ends a goal.
 */
export class GoalEndEventData {
  constructor(raw: RawGoalEndEventData) {
    this.broadcasterUserId = raw.broadcaster_user_id;
    this.broadcasterUserLogin = raw.broadcaster_user_login;
    this.broadcasterUserName = raw.broadcaster_user_name;
    this.id = raw.id;
    this.startedAt = parseDate(raw.started_at);
    this.type = raw.type;
  }

  /**
   * The broadcasters user id.
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
   * The id of the stream.
   */
  id: string;
  /**
   * The timestamp at which the stream went online at.
   */
  startedAt: Date;
  /**
   * The stream type. Valid values are:live,playlist,watch_party,premiere,rerun.
   */
  type: string;
}
