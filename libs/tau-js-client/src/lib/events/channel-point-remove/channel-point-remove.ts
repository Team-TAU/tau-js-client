import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointRemoveEventData } from './raw-channel-point-remove-event-data';
import { ChannelPointRemoveEventData } from './channel-point-remove-event-data';

export class ChannelPointRemove extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ChannelPointRemoveEventData(
      raw.event_data as RawChannelPointRemoveEventData
    );
  }
  override eventData: ChannelPointRemoveEventData;
}
