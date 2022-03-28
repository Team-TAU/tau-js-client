import { RawTauEvent, TauEvent } from '../tau-event';
import { RawSubscribeEventData } from './raw-subscribe-event-data';
import { SubscribeEventData } from './subscribe-event-data';

export class Subscribe extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new SubscribeEventData(
      raw.event_data as RawSubscribeEventData
    );
  }
  override eventData: SubscribeEventData;
}
