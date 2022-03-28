import { RawTauEvent, TauEvent } from '../tau-event';
import { RawUpdateEventData } from './raw-update-event-data';
import { UpdateEventData } from './update-event-data';

export class Update extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new UpdateEventData(
      raw.event_data as RawUpdateEventData
    );
  }
  override eventData: UpdateEventData;
}
