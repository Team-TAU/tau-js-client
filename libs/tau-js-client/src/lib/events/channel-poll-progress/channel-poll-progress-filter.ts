import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelPollProgress } from './channel-poll-progress';

export function channelPollProgressFilter(): MonoTypeOperatorFunction<ChannelPollProgress> {
  return filter((event) => event instanceof ChannelPollProgress);
}
