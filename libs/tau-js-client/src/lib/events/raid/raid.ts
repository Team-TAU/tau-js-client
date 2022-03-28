import { RawTauEvent, TauEvent } from '../tau-event';
import { RawRaidEventData } from './raw-raid-event-data';
import { RaidEventData } from './raid-event-data';

export class Raid extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new RaidEventData(
      raw.event_data as RawRaidEventData
    );
  }
  override eventData: RaidEventData;
}
