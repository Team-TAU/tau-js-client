import { RawTauEvent, TauEvent } from '../tau-event';
import { RawSubscriptionMessageEventData } from './raw-subscription-message-event-data';
import { SubscriptionMessageEventData } from './subscription-message-event-data';

export class SubscriptionMessage extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new SubscriptionMessageEventData(
      rawTauEvent.event_data as RawSubscriptionMessageEventData
    );
  }
  override eventData: SubscriptionMessageEventData;
}
