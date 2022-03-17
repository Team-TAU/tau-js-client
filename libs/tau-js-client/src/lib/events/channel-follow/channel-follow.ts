import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelFollowEventData } from './raw-channel-follow-event-data';
import { ChannelFollowEventData } from './channel-follow-event-data';

export class ChannelFollow extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelFollowEventData(
      rawTauEvent.event_data as RawChannelFollowEventData
    );
  }
  eventData: ChannelFollowEventData;
}