import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelGoalBeginEventData } from './raw-channel-goal-begin-event-data';
import { ChannelGoalBeginEventData } from './channel-goal-begin-event-data';

export class ChannelGoalBegin extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelGoalBeginEventData(
      rawTauEvent.event_data as RawChannelGoalBeginEventData
    );
  }
  override eventData: ChannelGoalBeginEventData;
}
