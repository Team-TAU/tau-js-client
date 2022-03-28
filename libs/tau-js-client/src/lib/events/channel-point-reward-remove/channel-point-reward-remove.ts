import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointRewardRemoveEventData } from './raw-channel-point-reward-remove-event-data';
import { ChannelPointRewardRemoveEventData } from './channel-point-reward-remove-event-data';

export class ChannelPointRewardRemove extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ChannelPointRewardRemoveEventData(
      raw.event_data as RawChannelPointRewardRemoveEventData
    );
  }
  override eventData: ChannelPointRewardRemoveEventData;
}
