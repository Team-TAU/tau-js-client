import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelCheerEventData } from './raw-channel-cheer-event-data';
import { ChannelCheerEventData } from './channel-cheer-event-data';

export class ChannelCheer extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelCheerEventData(
      rawTauEvent.event_data as RawChannelCheerEventData
    );
  }
  eventData: ChannelCheerEventData;
}