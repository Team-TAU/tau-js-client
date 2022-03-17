import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelUnban } from './channel-unban';

export function channelUnbanFilter(): MonoTypeOperatorFunction<ChannelUnban> {
  return filter((event) => event instanceof ChannelUnban);
}
