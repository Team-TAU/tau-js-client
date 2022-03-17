import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelChannelPointsCustomRewardUpdate } from './channel-channel-points-custom-reward-update';

export function channelChannelPointsCustomRewardUpdateFilter(): MonoTypeOperatorFunction<ChannelChannelPointsCustomRewardUpdate> {
  return filter((event) => event instanceof ChannelChannelPointsCustomRewardUpdate);
}
