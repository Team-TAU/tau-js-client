import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelChannelPointsCustomRewardRemoveEventData } from './raw-channel-channel-points-custom-reward-remove-event-data';
import { ChannelChannelPointsCustomRewardRemoveEventData } from './channel-channel-points-custom-reward-remove-event-data';

export class ChannelChannelPointsCustomRewardRemove extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelChannelPointsCustomRewardRemoveEventData(
      rawTauEvent.event_data as RawChannelChannelPointsCustomRewardRemoveEventData
    );
  }
  eventData: ChannelChannelPointsCustomRewardRemoveEventData;
}