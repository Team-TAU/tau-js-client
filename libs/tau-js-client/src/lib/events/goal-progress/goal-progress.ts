import { RawTauEvent, TauEvent } from '../tau-event';
import { RawGoalProgressEventData } from './raw-goal-progress-event-data';
import { GoalProgressEventData } from './goal-progress-event-data';

export class GoalProgress extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new GoalProgressEventData(
      raw.event_data as RawGoalProgressEventData
    );
  }
  override eventData: GoalProgressEventData;
}
