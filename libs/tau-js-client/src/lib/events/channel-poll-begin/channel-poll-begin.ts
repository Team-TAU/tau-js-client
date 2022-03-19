import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPollBeginEventData } from './raw-channel-poll-begin-event-data';
import { ChannelPollBeginEventData } from './channel-poll-begin-event-data';

export class ChannelPollBegin extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelPollBeginEventData(
      rawTauEvent.event_data as RawChannelPollBeginEventData
    );
  }
  override eventData: ChannelPollBeginEventData;
}
