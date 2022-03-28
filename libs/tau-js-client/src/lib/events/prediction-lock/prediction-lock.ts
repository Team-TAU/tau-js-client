import { RawTauEvent, TauEvent } from '../tau-event';
import { RawPredictionLockEventData } from './raw-prediction-lock-event-data';
import { PredictionLockEventData } from './prediction-lock-event-data';

export class PredictionLock extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new PredictionLockEventData(
      raw.event_data as RawPredictionLockEventData
    );
  }
  override eventData: PredictionLockEventData;
}
