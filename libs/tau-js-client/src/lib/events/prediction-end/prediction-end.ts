import { RawTauEvent, TauEvent } from '../tau-event';
import { RawPredictionEndEventData } from './raw-prediction-end-event-data';
import { PredictionEndEventData } from './prediction-end-event-data';

export class PredictionEnd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new PredictionEndEventData(
      raw.event_data as RawPredictionEndEventData
    );
  }
  override eventData: PredictionEndEventData;
}
