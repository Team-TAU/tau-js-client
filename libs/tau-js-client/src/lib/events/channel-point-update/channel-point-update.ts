import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointUpdateEventData } from './raw-channel-point-update-event-data';
import { ChannelPointUpdateEventData } from './channel-point-update-event-data';

export class ChannelPointUpdate extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ChannelPointUpdateEventData(
      raw.event_data as RawChannelPointUpdateEventData
    );
  }
  override eventData: ChannelPointUpdateEventData;
}
