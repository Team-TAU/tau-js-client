import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPredictionEndEventData } from './raw-channel-prediction-end-event-data';
import { ChannelPredictionEndEventData } from './channel-prediction-end-event-data';

export class ChannelPredictionEnd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelPredictionEndEventData(
      rawTauEvent.event_data as RawChannelPredictionEndEventData
    );
  }
  eventData: ChannelPredictionEndEventData;
}