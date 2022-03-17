import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelHypeTrainEndEventData } from './raw-channel-hype-train-end-event-data';
import { ChannelHypeTrainEndEventData } from './channel-hype-train-end-event-data';

export class ChannelHypeTrainEnd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelHypeTrainEndEventData(
      rawTauEvent.event_data as RawChannelHypeTrainEndEventData
    );
  }
  eventData: ChannelHypeTrainEndEventData;
}