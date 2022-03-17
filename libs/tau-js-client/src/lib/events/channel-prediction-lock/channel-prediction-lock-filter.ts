import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelPredictionLock } from './channel-prediction-lock';

export function channelPredictionLockFilter(): MonoTypeOperatorFunction<ChannelPredictionLock> {
  return filter((event) => event instanceof ChannelPredictionLock);
}
