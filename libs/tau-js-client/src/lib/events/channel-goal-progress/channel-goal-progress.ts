import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelGoalProgressEventData } from './raw-channel-goal-progress-event-data';
import { ChannelGoalProgressEventData } from './channel-goal-progress-event-data';

export class ChannelGoalProgress extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelGoalProgressEventData(
      rawTauEvent.event_data as RawChannelGoalProgressEventData
    );
  }
  override eventData: ChannelGoalProgressEventData;
}
