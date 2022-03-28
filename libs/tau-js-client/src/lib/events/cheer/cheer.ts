import { RawTauEvent, TauEvent } from '../tau-event';
import { RawCheerEventData } from './raw-cheer-event-data';
import { CheerEventData } from './cheer-event-data';

export class Cheer extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new CheerEventData(
      raw.event_data as RawCheerEventData
    );
  }
  override eventData: CheerEventData;
}
