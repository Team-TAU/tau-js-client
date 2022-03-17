import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelPollBegin } from './channel-poll-begin';

export function channelPollBeginFilter(): MonoTypeOperatorFunction<ChannelPollBegin> {
  return filter((event) => event instanceof ChannelPollBegin);
}
