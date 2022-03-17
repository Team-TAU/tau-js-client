import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelChannelPointsCustomRewardUpdateEventData } from './raw-channel-channel-points-custom-reward-update-event-data';
import { ChannelChannelPointsCustomRewardUpdateEventData } from './channel-channel-points-custom-reward-update-event-data';

export class ChannelChannelPointsCustomRewardUpdate extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelChannelPointsCustomRewardUpdateEventData(
      rawTauEvent.event_data as RawChannelChannelPointsCustomRewardUpdateEventData
    );
  }
  eventData: ChannelChannelPointsCustomRewardUpdateEventData;
}