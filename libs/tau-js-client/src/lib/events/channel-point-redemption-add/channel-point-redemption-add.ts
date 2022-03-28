import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointRedemptionAddEventData } from './raw-channel-point-redemption-add-event-data';
import { ChannelPointRedemptionAddEventData } from './channel-point-redemption-add-event-data';

export class ChannelPointRedemptionAdd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ChannelPointRedemptionAddEventData(
      raw.event_data as RawChannelPointRedemptionAddEventData
    );
  }
  override eventData: ChannelPointRedemptionAddEventData;
}
