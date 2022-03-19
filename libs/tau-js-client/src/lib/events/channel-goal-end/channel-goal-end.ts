import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelGoalEndEventData } from './raw-channel-goal-end-event-data';
import { ChannelGoalEndEventData } from './channel-goal-end-event-data';

export class ChannelGoalEnd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelGoalEndEventData(
      rawTauEvent.event_data as RawChannelGoalEndEventData
    );
  }
  override eventData: ChannelGoalEndEventData;
}
