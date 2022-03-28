import { RawTauEvent, TauEvent } from '../tau-event';
import { RawSubscriptionGiftEventData } from './raw-subscription-gift-event-data';
import { SubscriptionGiftEventData } from './subscription-gift-event-data';

export class SubscriptionGift extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new SubscriptionGiftEventData(
      raw.event_data as RawSubscriptionGiftEventData
    );
  }
  override eventData: SubscriptionGiftEventData;
}
