import { RawTauEvent, TauEvent } from '../tau-event';
import { RawGoalEndEventData } from './raw-goal-end-event-data';
import { GoalEndEventData } from './goal-end-event-data';

export class GoalEnd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new GoalEndEventData(
      raw.event_data as RawGoalEndEventData
    );
  }
  override eventData: GoalEndEventData;
}
