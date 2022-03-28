import { RawTauEvent, TauEvent } from '../tau-event';
import { RawPollBeginEventData } from './raw-poll-begin-event-data';
import { PollBeginEventData } from './poll-begin-event-data';

export class PollBegin extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new PollBeginEventData(
      raw.event_data as RawPollBeginEventData
    );
  }
  override eventData: PollBeginEventData;
}
