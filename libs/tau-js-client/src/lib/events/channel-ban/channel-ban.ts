import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelBanEventData } from './raw-channel-ban-event-data';
import { ChannelBanEventData } from './channel-ban-event-data';

export class ChannelBan extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelBanEventData(
      rawTauEvent.event_data as RawChannelBanEventData
    );
  }
  override eventData: ChannelBanEventData;
}
