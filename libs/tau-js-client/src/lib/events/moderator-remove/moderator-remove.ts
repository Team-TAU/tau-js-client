import { RawTauEvent, TauEvent } from '../tau-event';
import { RawModeratorRemoveEventData } from './raw-moderator-remove-event-data';
import { ModeratorRemoveEventData } from './moderator-remove-event-data';

export class ModeratorRemove extends TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent);
    this.eventData = new ModeratorRemoveEventData(
      rawTauEvent.event_data as RawModeratorRemoveEventData
    );
  }
  override eventData: ModeratorRemoveEventData;
}
