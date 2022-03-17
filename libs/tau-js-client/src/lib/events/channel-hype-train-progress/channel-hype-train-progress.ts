import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelHypeTrainProgressEventData } from './raw-channel-hype-train-progress-event-data';
import { ChannelHypeTrainProgressEventData } from './channel-hype-train-progress-event-data';

export class ChannelHypeTrainProgress extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelHypeTrainProgressEventData(
      rawTauEvent.event_data as RawChannelHypeTrainProgressEventData
    );
  }
  eventData: ChannelHypeTrainProgressEventData;
}