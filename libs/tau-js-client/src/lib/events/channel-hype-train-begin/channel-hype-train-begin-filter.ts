import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelHypeTrainBegin } from './channel-hype-train-begin';

export function channelHypeTrainBeginFilter(): MonoTypeOperatorFunction<ChannelHypeTrainBegin> {
  return filter((event) => event instanceof ChannelHypeTrainBegin);
}
