import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointRewardRedemptionUpdateEventData } from './raw-channel-point-reward-redemption-update-event-data';
import { ChannelPointRewardRedemptionUpdateEventData } from './channel-point-reward-redemption-update-event-data';

export class ChannelPointRewardRedemptionUpdate extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData =
      new ChannelPointRewardRedemptionUpdateEventData(
        raw.event_data as RawChannelPointRewardRedemptionUpdateEventData
      );
  }
  override eventData: ChannelPointRewardRedemptionUpdateEventData;
}
