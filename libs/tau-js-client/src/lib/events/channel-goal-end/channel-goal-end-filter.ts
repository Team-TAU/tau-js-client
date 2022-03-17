import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelGoalEnd } from './channel-goal-end';

export function channelGoalEndFilter(): MonoTypeOperatorFunction<ChannelGoalEnd> {
  return filter((event) => event instanceof ChannelGoalEnd);
}
