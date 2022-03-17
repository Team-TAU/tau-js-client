import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelSubscriptionEndEventData } from './raw-channel-subscription-end-event-data';
import { ChannelSubscriptionEndEventData } from './channel-subscription-end-event-data';

export class ChannelSubscriptionEnd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelSubscriptionEndEventData(
      rawTauEvent.event_data as RawChannelSubscriptionEndEventData
    );
  }
  eventData: ChannelSubscriptionEndEventData;
}