import { RawTauEvent, TauEvent } from '../tau-event';
import { RawPollEndEventData } from './raw-poll-end-event-data';
import { PollEndEventData } from './poll-end-event-data';

export class PollEnd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new PollEndEventData(
      raw.event_data as RawPollEndEventData
    );
  }
  override eventData: PollEndEventData;
}
