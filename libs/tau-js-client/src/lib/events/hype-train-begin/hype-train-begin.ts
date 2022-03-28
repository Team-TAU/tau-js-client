import { RawTauEvent, TauEvent } from '../tau-event';
import { RawHypeTrainBeginEventData } from './raw-hype-train-begin-event-data';
import { HypeTrainBeginEventData } from './hype-train-begin-event-data';

export class HypeTrainBegin extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new HypeTrainBeginEventData(
      raw.event_data as RawHypeTrainBeginEventData
    );
  }
  override eventData: HypeTrainBeginEventData;
}
