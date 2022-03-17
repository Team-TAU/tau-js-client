import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelUpdate } from './channel-update';

export function channelUpdateFilter(): MonoTypeOperatorFunction<ChannelUpdate> {
  return filter((event) => event instanceof ChannelUpdate);
}
