import { TauEvent } from './events/tau-event';
import { TauMessage } from './messages/message.model';
import { TauStatus } from './status/status.model';

export type TauSocketMessage = TauEvent | TauMessage | TauStatus;
