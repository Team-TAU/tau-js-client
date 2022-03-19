import { RawTauEvent, TauEvent } from '../tau-event';
import { RawChannelModeratorRemoveEventData } from './raw-channel-moderator-remove-event-data';
import { ChannelModeratorRemoveEventData } from './channel-moderator-remove-event-data';

export class ChannelModeratorRemove extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ChannelModeratorRemoveEventData(
      rawTauEvent.event_data as RawChannelModeratorRemoveEventData
    );
  }
  override eventData: ChannelModeratorRemoveEventData;
}
