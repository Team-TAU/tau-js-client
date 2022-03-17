import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelHypeTrainEnd } from './channel-hype-train-end';

export function channelHypeTrainEndFilter(): MonoTypeOperatorFunction<ChannelHypeTrainEnd> {
  return filter((event) => event instanceof ChannelHypeTrainEnd);
}
