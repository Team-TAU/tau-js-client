import { RawTauEvent, TauEvent } from '../tau-event';
import { RawModeratorAddEventData } from './raw-moderator-add-event-data';
import { ModeratorAddEventData } from './moderator-add-event-data';

export class ModeratorAdd extends TauEvent {
  constructor(raw: RawTauEvent) {
    super(raw);
    this.eventData = new ModeratorAddEventData(
      raw.event_data as RawModeratorAddEventData
    );
  }
  override eventData: ModeratorAddEventData;
}
