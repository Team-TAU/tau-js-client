import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelModeratorAddEventData } from './raw-channel-moderator-add-event-data';
import { ChannelModeratorAddEventData } from './channel-moderator-add-event-data';

export class ChannelModeratorAdd extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelModeratorAddEventData(
      rawTauEvent.event_data as RawChannelModeratorAddEventData
    );
  }
  eventData: ChannelModeratorAddEventData;
}