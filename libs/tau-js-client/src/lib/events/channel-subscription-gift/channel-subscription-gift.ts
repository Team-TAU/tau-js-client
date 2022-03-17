import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelSubscriptionGiftEventData } from './raw-channel-subscription-gift-event-data';
import { ChannelSubscriptionGiftEventData } from './channel-subscription-gift-event-data';

export class ChannelSubscriptionGift extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelSubscriptionGiftEventData(
      rawTauEvent.event_data as RawChannelSubscriptionGiftEventData
    );
  }
  eventData: ChannelSubscriptionGiftEventData;
}