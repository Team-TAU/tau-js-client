import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelHypeTrainProgress } from './channel-hype-train-progress';

export function channelHypeTrainProgressFilter(): MonoTypeOperatorFunction<ChannelHypeTrainProgress> {
  return filter((event) => event instanceof ChannelHypeTrainProgress);
}
