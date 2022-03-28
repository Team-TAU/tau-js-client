import { RawTauEvent, TauEvent } from '../tau-event';
import { RawUnbanEventData } from './raw-unban-event-data';
import { UnbanEventData } from './unban-event-data';

export class Unban extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new UnbanEventData(
      raw.event_data as RawUnbanEventData
    );
  }
  override eventData: UnbanEventData;
}
