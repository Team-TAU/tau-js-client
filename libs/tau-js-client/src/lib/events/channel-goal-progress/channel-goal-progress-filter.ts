import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelGoalProgress } from './channel-goal-progress';

export function channelGoalProgressFilter(): MonoTypeOperatorFunction<ChannelGoalProgress> {
  return filter((event) => event instanceof ChannelGoalProgress);
}
