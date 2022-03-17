import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelFollow } from './channel-follow';

export function channelFollowFilter(): MonoTypeOperatorFunction<ChannelFollow> {
  return filter((event) => event instanceof ChannelFollow);
}
