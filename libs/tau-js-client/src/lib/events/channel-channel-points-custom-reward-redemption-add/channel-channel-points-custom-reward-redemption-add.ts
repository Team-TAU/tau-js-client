import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelChannelPointsCustomRewardRedemptionAddEventData } from './raw-channel-channel-points-custom-reward-redemption-add-event-data';
import { ChannelChannelPointsCustomRewardRedemptionAddEventData } from './channel-channel-points-custom-reward-redemption-add-event-data';

export class ChannelChannelPointsCustomRewardRedemptionAdd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelChannelPointsCustomRewardRedemptionAddEventData(
      rawTauEvent.event_data as RawChannelChannelPointsCustomRewardRedemptionAddEventData
    );
  }
  override eventData: ChannelChannelPointsCustomRewardRedemptionAddEventData;
}
