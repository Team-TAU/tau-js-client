import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelPredictionProgress } from './channel-prediction-progress';

export function channelPredictionProgressFilter(): MonoTypeOperatorFunction<ChannelPredictionProgress> {
  return filter((event) => event instanceof ChannelPredictionProgress);
}
