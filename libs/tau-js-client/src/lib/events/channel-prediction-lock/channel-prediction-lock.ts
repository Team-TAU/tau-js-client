import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPredictionLockEventData } from './raw-channel-prediction-lock-event-data';
import { ChannelPredictionLockEventData } from './channel-prediction-lock-event-data';

export class ChannelPredictionLock extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelPredictionLockEventData(
      rawTauEvent.event_data as RawChannelPredictionLockEventData
    );
  }
  eventData: ChannelPredictionLockEventData;
}