import { parseDate } from '../utils';

export interface RawTauEvent {
  id?: string;
  event_id: string;
  event_type: string;
  event_source: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event_data: any;
  // event_data: {
  //   user_id: string;
  //   user_name: 'BroccoDev';
  //   user_login: 'broccodev';
  //   broadcaster_user_id: '143178148';
  //   broadcaster_user_name: 'BroccoDev';
  //   broadcaster_user_login: 'broccodev';
  //   tier: '1000';
  //   message: { text: 'super msg'; emotes: [] };
  //   cumulative_months: 3;
  //   streak_months: 0;
  //   duration_months: 0;
  // };
  created: string; //'2022-03-05T02:27:40.599359+00:00';
  origin: string;
}

export abstract class TauEvent {
  constructor(rawTauEvent: RawTauEvent) {
    this.id = rawTauEvent.id;
    this.eventId = rawTauEvent.event_id;
    this.eventType = rawTauEvent.event_type;
    this.eventSource = rawTauEvent.event_source;
    this.eventData = rawTauEvent.event_data;
    this.created = parseDate(rawTauEvent.created);
    this.origin = rawTauEvent.origin;
  }
  id?: string;
  eventId: string;
  eventType: string;
  eventSource: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventData: any;
  created: Date; //'2022-03-05T02:27:40.599359+00:00';
  origin: string;
}
