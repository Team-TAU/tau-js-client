import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelCheer } from './channel-cheer';

export function channelCheerFilter(): MonoTypeOperatorFunction<ChannelCheer> {
  return filter((event) => event instanceof ChannelCheer);
}
