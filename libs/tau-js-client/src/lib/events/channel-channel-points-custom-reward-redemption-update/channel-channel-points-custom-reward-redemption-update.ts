import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelChannelPointsCustomRewardRedemptionUpdateEventData } from './raw-channel-channel-points-custom-reward-redemption-update-event-data';
import { ChannelChannelPointsCustomRewardRedemptionUpdateEventData } from './channel-channel-points-custom-reward-redemption-update-event-data';

export class ChannelChannelPointsCustomRewardRedemptionUpdate extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData =
      new ChannelChannelPointsCustomRewardRedemptionUpdateEventData(
        rawTauEvent.event_data as RawChannelChannelPointsCustomRewardRedemptionUpdateEventData
      );
  }
  override eventData: ChannelChannelPointsCustomRewardRedemptionUpdateEventData;
}
