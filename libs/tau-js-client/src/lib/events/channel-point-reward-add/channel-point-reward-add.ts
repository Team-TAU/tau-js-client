import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointRewardAddEventData } from './raw-channel-point-reward-add-event-data';
import { ChannelPointRewardAddEventData } from './channel-point-reward-add-event-data';

export class ChannelPointRewardAdd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ChannelPointRewardAddEventData(
      raw.event_data as RawChannelPointRewardAddEventData
    );
  }
  override eventData: ChannelPointRewardAddEventData;
}
