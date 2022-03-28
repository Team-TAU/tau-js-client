import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPointAddEventData } from './raw-channel-point-add-event-data';
import { ChannelPointAddEventData } from './channel-point-add-event-data';

export class ChannelPointAdd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ChannelPointAddEventData(
      raw.event_data as RawChannelPointAddEventData
    );
  }
  override eventData: ChannelPointAddEventData;
}
