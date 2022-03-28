import { RawTauEvent, TauEvent } from '../tau-event';
import { RawSubscriptionEndEventData } from './raw-subscription-end-event-data';
import { SubscriptionEndEventData } from './subscription-end-event-data';

export class SubscriptionEnd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new SubscriptionEndEventData(
      rawTauEvent.event_data as RawSubscriptionEndEventData
    );
  }
  override eventData: SubscriptionEndEventData;
}
