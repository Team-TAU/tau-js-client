import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { TauChatMessage } from '../messages/message.model';

export function commandFilter(): MonoTypeOperatorFunction<TauChatMessage> {
  return filter((msg) => msg.messageText.startsWith('!'));
}
