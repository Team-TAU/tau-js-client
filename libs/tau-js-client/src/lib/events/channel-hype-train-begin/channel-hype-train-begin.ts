import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelHypeTrainBeginEventData } from './raw-channel-hype-train-begin-event-data';
import { ChannelHypeTrainBeginEventData } from './channel-hype-train-begin-event-data';

export class ChannelHypeTrainBegin extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelHypeTrainBeginEventData(
      rawTauEvent.event_data as RawChannelHypeTrainBeginEventData
    );
  }
  eventData: ChannelHypeTrainBeginEventData;
}