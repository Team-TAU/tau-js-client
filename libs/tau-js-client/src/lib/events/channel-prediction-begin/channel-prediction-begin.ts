import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPredictionBeginEventData } from './raw-channel-prediction-begin-event-data';
import { ChannelPredictionBeginEventData } from './channel-prediction-begin-event-data';

export class ChannelPredictionBegin extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelPredictionBeginEventData(
      rawTauEvent.event_data as RawChannelPredictionBeginEventData
    );
  }
  override eventData: ChannelPredictionBeginEventData;
}
