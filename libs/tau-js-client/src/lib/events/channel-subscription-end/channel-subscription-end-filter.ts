import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelSubscriptionEnd } from './channel-subscription-end';

export function channelSubscriptionEndFilter(): MonoTypeOperatorFunction<ChannelSubscriptionEnd> {
  return filter((event) => event instanceof ChannelSubscriptionEnd);
}
