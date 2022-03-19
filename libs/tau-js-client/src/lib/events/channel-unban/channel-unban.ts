import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelUnbanEventData } from './raw-channel-unban-event-data';
import { ChannelUnbanEventData } from './channel-unban-event-data';

export class ChannelUnban extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelUnbanEventData(
      rawTauEvent.event_data as RawChannelUnbanEventData
    );
  }
  override eventData: ChannelUnbanEventData;
}
