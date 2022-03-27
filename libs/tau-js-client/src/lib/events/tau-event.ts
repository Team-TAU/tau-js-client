import { TauMessage } from '../tau-js-client.model';
import { parseDate } from '../utils';

export interface RawTauEvent {
  id?: string;
  event_id: string;
  event_type: string;
  event_source: string;
  event_data: unknown;
  created: string;
  origin: string;
}

export abstract class TauEvent extends TauMessage {
  constructor(rawTauEvent: RawTauEvent) {
    super(rawTauEvent.id);
    this.eventId = rawTauEvent.event_id;
    this.eventType = rawTauEvent.event_type;
    this.eventSource = rawTauEvent.event_source;
    this.eventData = rawTauEvent.event_data;
    this.created = parseDate(rawTauEvent.created);
    this.origin = rawTauEvent.origin;
  }

  eventId: string;
  eventType: string;
  eventSource: string;
  eventData: unknown;
  created: Date;
  origin: string;
}
