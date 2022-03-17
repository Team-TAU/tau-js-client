import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelPollEnd } from './channel-poll-end';

export function channelPollEndFilter(): MonoTypeOperatorFunction<ChannelPollEnd> {
  return filter((event) => event instanceof ChannelPollEnd);
}
