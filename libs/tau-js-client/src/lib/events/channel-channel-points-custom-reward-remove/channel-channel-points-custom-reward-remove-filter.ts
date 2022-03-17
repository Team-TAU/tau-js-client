import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelChannelPointsCustomRewardRemove } from './channel-channel-points-custom-reward-remove';

export function channelChannelPointsCustomRewardRemoveFilter(): MonoTypeOperatorFunction<ChannelChannelPointsCustomRewardRemove> {
  return filter((event) => event instanceof ChannelChannelPointsCustomRewardRemove);
}
