import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointRewardRedemptionAddEventData } from './raw-channel-point-reward-redemption-add-event-data';
import { ChannelPointRewardRedemptionAddEventData } from './channel-point-reward-redemption-add-event-data';

export class ChannelPointRewardRedemptionAdd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ChannelPointRewardRedemptionAddEventData(
      raw.event_data as RawChannelPointRewardRedemptionAddEventData
    );
  }
  override eventData: ChannelPointRewardRedemptionAddEventData;
}
