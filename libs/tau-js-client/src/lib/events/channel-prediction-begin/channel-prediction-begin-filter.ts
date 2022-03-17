import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelPredictionBegin } from './channel-prediction-begin';

export function channelPredictionBeginFilter(): MonoTypeOperatorFunction<ChannelPredictionBegin> {
  return filter((event) => event instanceof ChannelPredictionBegin);
}
