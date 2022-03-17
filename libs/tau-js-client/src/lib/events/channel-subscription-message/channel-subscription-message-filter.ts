import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelSubscriptionMessage } from './channel-subscription-message';

export function channelSubscriptionMessageFilter(): MonoTypeOperatorFunction<ChannelSubscriptionMessage> {
  return filter((event) => event instanceof ChannelSubscriptionMessage);
}
