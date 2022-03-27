import { RawTauEvent, TauEvent } from '../tau-event';
import { RawBanEventData } from './raw-ban-event-data';
import { BanEventData } from './ban-event-data';

export class Ban extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new BanEventData(
      raw.event_data as RawBanEventData
    );
  }
  override eventData: BanEventData;
}
