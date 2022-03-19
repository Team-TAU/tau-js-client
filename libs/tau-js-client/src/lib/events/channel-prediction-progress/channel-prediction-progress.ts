import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPredictionProgressEventData } from './raw-channel-prediction-progress-event-data';
import { ChannelPredictionProgressEventData } from './channel-prediction-progress-event-data';

export class ChannelPredictionProgress extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelPredictionProgressEventData(
      rawTauEvent.event_data as RawChannelPredictionProgressEventData
    );
  }
  override eventData: ChannelPredictionProgressEventData;
}
