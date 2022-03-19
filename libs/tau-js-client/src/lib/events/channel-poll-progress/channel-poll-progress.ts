import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelPollProgressEventData } from './raw-channel-poll-progress-event-data';
import { ChannelPollProgressEventData } from './channel-poll-progress-event-data';

export class ChannelPollProgress extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelPollProgressEventData(
      rawTauEvent.event_data as RawChannelPollProgressEventData
    );
  }
  override eventData: ChannelPollProgressEventData;
}
