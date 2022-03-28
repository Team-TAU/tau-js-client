import { RawTauEvent, TauEvent } from '../tau-event';
import { RawPredictionBeginEventData } from './raw-prediction-begin-event-data';
import { PredictionBeginEventData } from './prediction-begin-event-data';

export class PredictionBegin extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new PredictionBeginEventData(
      raw.event_data as RawPredictionBeginEventData
    );
  }
  override eventData: PredictionBeginEventData;
}
