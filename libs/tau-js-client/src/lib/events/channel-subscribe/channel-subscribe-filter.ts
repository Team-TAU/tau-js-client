import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelSubscribe } from './channel-subscribe';

export function channelSubscribeFilter(): MonoTypeOperatorFunction<ChannelSubscribe> {
  return filter((event) => event instanceof ChannelSubscribe);
}
