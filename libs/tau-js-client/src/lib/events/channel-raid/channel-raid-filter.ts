import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelRaid } from './channel-raid';

export function channelRaidFilter(): MonoTypeOperatorFunction<ChannelRaid> {
  return filter((event) => event instanceof ChannelRaid);
}
