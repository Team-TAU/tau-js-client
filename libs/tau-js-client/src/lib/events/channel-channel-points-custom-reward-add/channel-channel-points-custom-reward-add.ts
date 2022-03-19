import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelChannelPointsCustomRewardAddEventData } from './raw-channel-channel-points-custom-reward-add-event-data';
import { ChannelChannelPointsCustomRewardAddEventData } from './channel-channel-points-custom-reward-add-event-data';

export class ChannelChannelPointsCustomRewardAdd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelChannelPointsCustomRewardAddEventData(
      rawTauEvent.event_data as RawChannelChannelPointsCustomRewardAddEventData
    );
  }
  override eventData: ChannelChannelPointsCustomRewardAddEventData;
}
