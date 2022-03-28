import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointRedemptionUpdateEventData } from './raw-channel-point-redemption-update-event-data';
import { ChannelPointRedemptionUpdateEventData } from './channel-point-redemption-update-event-data';

export class ChannelPointRedemptionUpdate extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData =
      new ChannelPointRedemptionUpdateEventData(
        raw.event_data as RawChannelPointRedemptionUpdateEventData
      );
  }
  override eventData: ChannelPointRedemptionUpdateEventData;
}
