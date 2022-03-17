import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelPredictionEnd } from './channel-prediction-end';

export function channelPredictionEndFilter(): MonoTypeOperatorFunction<ChannelPredictionEnd> {
  return filter((event) => event instanceof ChannelPredictionEnd);
}
