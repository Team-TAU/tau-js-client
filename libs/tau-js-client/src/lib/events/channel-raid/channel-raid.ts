import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelRaidEventData } from './raw-channel-raid-event-data';
import { ChannelRaidEventData } from './channel-raid-event-data';

export class ChannelRaid extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelRaidEventData(
      rawTauEvent.event_data as RawChannelRaidEventData
    );
  }
  override eventData: ChannelRaidEventData;
}
