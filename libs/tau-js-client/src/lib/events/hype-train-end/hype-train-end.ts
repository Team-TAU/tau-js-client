import { RawTauEvent, TauEvent } from '../tau-event';
import { RawHypeTrainEndEventData } from './raw-hype-train-end-event-data';
import { HypeTrainEndEventData } from './hype-train-end-event-data';

export class HypeTrainEnd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new HypeTrainEndEventData(
      raw.event_data as RawHypeTrainEndEventData
    );
  }
  override eventData: HypeTrainEndEventData;
}
