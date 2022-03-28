import { RawTauEvent, TauEvent } from '../tau-event';
import { RawHypeTrainProgressEventData } from './raw-hype-train-progress-event-data';
import { HypeTrainProgressEventData } from './hype-train-progress-event-data';

export class HypeTrainProgress extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new HypeTrainProgressEventData(
      raw.event_data as RawHypeTrainProgressEventData
    );
  }
  override eventData: HypeTrainProgressEventData;
}
