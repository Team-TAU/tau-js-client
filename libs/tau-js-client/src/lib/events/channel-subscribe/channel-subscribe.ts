import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelSubscribeEventData } from './raw-channel-subscribe-event-data';
import { ChannelSubscribeEventData } from './channel-subscribe-event-data';

export class ChannelSubscribe extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelSubscribeEventData(
      rawTauEvent.event_data as RawChannelSubscribeEventData
    );
  }
  override eventData: ChannelSubscribeEventData;
}
