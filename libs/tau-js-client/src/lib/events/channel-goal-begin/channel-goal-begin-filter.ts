import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelGoalBegin } from './channel-goal-begin';

export function channelGoalBeginFilter(): MonoTypeOperatorFunction<ChannelGoalBegin> {
  return filter((event) => event instanceof ChannelGoalBegin);
}
