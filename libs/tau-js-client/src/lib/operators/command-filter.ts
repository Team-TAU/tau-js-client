import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { TauMessage } from '../messages/message.model';

export function commandFilter(): MonoTypeOperatorFunction<TauMessage> {
  return filter((msg) => msg.messageText.startsWith('!'));
}
