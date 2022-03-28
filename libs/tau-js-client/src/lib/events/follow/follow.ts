import { RawTauEvent, TauEvent } from '../tau-event';
import { RawFollowEventData } from './raw-follow-event-data';
import { FollowEventData } from './follow-event-data';

export class Follow extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new FollowEventData(
      raw.event_data as RawFollowEventData
    );
  }
  override eventData: FollowEventData;
}
