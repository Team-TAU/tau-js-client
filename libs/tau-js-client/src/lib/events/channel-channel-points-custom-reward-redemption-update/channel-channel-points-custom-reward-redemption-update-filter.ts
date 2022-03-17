import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelChannelPointsCustomRewardRedemptionUpdate } from './channel-channel-points-custom-reward-redemption-update';

export function channelChannelPointsCustomRewardRedemptionUpdateFilter(): MonoTypeOperatorFunction<ChannelChannelPointsCustomRewardRedemptionUpdate> {
  return filter((event) => event instanceof ChannelChannelPointsCustomRewardRedemptionUpdate);
}
