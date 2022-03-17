import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelChannelPointsCustomRewardAdd } from './channel-channel-points-custom-reward-add';

export function channelChannelPointsCustomRewardAddFilter(): MonoTypeOperatorFunction<ChannelChannelPointsCustomRewardAdd> {
  return filter((event) => event instanceof ChannelChannelPointsCustomRewardAdd);
}
