import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelChannelPointsCustomRewardRedemptionAdd } from './channel-channel-points-custom-reward-redemption-add';

export function channelChannelPointsCustomRewardRedemptionAddFilter(): MonoTypeOperatorFunction<ChannelChannelPointsCustomRewardRedemptionAdd> {
  return filter((event) => event instanceof ChannelChannelPointsCustomRewardRedemptionAdd);
}
