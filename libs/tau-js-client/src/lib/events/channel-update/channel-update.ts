import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelUpdateEventData } from './raw-channel-update-event-data';
import { ChannelUpdateEventData } from './channel-update-event-data';

export class ChannelUpdate extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelUpdateEventData(
      rawTauEvent.event_data as RawChannelUpdateEventData
    );
  }
  eventData: ChannelUpdateEventData;
}