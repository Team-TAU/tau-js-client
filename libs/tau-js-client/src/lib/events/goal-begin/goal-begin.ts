import { RawTauEvent, TauEvent } from '../tau-event';
import { RawGoalBeginEventData } from './raw-goal-begin-event-data';
import { GoalBeginEventData } from './goal-begin-event-data';

export class GoalBegin extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new GoalBeginEventData(
      raw.event_data as RawGoalBeginEventData
    );
  }
  override eventData: GoalBeginEventData;
}
