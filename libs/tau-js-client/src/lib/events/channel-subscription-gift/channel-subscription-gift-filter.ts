import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelSubscriptionGift } from './channel-subscription-gift';

export function channelSubscriptionGiftFilter(): MonoTypeOperatorFunction<ChannelSubscriptionGift> {
  return filter((event) => event instanceof ChannelSubscriptionGift);
}
