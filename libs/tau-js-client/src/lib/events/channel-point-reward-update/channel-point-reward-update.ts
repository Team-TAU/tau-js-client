import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointRewardUpdateEventData } from './raw-channel-point-reward-update-event-data';
import { ChannelPointRewardUpdateEventData } from './channel-point-reward-update-event-data';

export class ChannelPointRewardUpdate extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ChannelPointRewardUpdateEventData(
      raw.event_data as RawChannelPointRewardUpdateEventData
    );
  }
  override eventData: ChannelPointRewardUpdateEventData;
}
