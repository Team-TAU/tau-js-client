import { RawTauEvent, TauEvent } from '../tau-event';
import { RawPollProgressEventData } from './raw-poll-progress-event-data';
import { PollProgressEventData } from './poll-progress-event-data';

export class PollProgress extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new PollProgressEventData(
      raw.event_data as RawPollProgressEventData
    );
  }
  override eventData: PollProgressEventData;
}
