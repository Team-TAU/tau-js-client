import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPollEndEventData } from './raw-channel-poll-end-event-data';
import { ChannelPollEndEventData } from './channel-poll-end-event-data';

export class ChannelPollEnd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelPollEndEventData(
      rawTauEvent.event_data as RawChannelPollEndEventData
    );
  }
  override eventData: ChannelPollEndEventData;
}
