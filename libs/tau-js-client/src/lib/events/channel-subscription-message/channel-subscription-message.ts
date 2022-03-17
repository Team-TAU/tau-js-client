import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelSubscriptionMessageEventData } from './raw-channel-subscription-message-event-data';
import { ChannelSubscriptionMessageEventData } from './channel-subscription-message-event-data';

export class ChannelSubscriptionMessage extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelSubscriptionMessageEventData(
      rawTauEvent.event_data as RawChannelSubscriptionMessageEventData
    );
  }
  eventData: ChannelSubscriptionMessageEventData;
}