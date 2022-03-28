import { RawTauEvent, TauEvent } from '../tau-event';
import { RawPredictionProgressEventData } from './raw-prediction-progress-event-data';
import { PredictionProgressEventData } from './prediction-progress-event-data';

export class PredictionProgress extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new PredictionProgressEventData(
      raw.event_data as RawPredictionProgressEventData
    );
  }
  override eventData: PredictionProgressEventData;
}
