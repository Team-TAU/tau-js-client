import { ChannelUpdate } from './channel-update';
import { ChannelFollow } from './channel-follow';
import { ChannelSubscribe } from './channel-subscribe';
import { ChannelSubscriptionEnd } from './channel-subscription-end';
import { ChannelSubscriptionGift } from './channel-subscription-gift';
import { ChannelSubscriptionMessage } from './channel-subscription-message';
import { ChannelCheer } from './channel-cheer';
import { ChannelRaid } from './channel-raid';
import { ChannelBan } from './channel-ban';
import { ChannelUnban } from './channel-unban';
import { ChannelModeratorAdd } from './channel-moderator-add';
import { ChannelModeratorRemove } from './channel-moderator-remove';
import { ChannelChannelPointsCustomRewardAdd } from './channel-channel-points-custom-reward-add';
import { ChannelChannelPointsCustomRewardUpdate } from './channel-channel-points-custom-reward-update';
import { ChannelChannelPointsCustomRewardRemove } from './channel-channel-points-custom-reward-remove';
import { ChannelChannelPointsCustomRewardRedemptionAdd } from './channel-channel-points-custom-reward-redemption-add';
import { ChannelChannelPointsCustomRewardRedemptionUpdate } from './channel-channel-points-custom-reward-redemption-update';
import { ChannelPollBegin } from './channel-poll-begin';
import { ChannelPollProgress } from './channel-poll-progress';
import { ChannelPollEnd } from './channel-poll-end';
import { ChannelPredictionBegin } from './channel-prediction-begin';
import { ChannelPredictionProgress } from './channel-prediction-progress';
import { ChannelPredictionLock } from './channel-prediction-lock';
import { ChannelPredictionEnd } from './channel-prediction-end';
import { ChannelGoalBegin } from './channel-goal-begin';
import { ChannelGoalProgress } from './channel-goal-progress';
import { ChannelGoalEnd } from './channel-goal-end';
import { ChannelHypeTrainBegin } from './channel-hype-train-begin';
import { ChannelHypeTrainProgress } from './channel-hype-train-progress';
import { ChannelHypeTrainEnd } from './channel-hype-train-end';
import { TauEvent } from './tau-event';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T extends TauEvent = TauEvent> = new (...args: any[]) => T;
export const eventConstructorMap = new Map<string, Constructor>([
  ['channel-update', ChannelUpdate],
  ['channel-follow', ChannelFollow],
  ['channel-subscribe', ChannelSubscribe],
  ['channel-subscription-end', ChannelSubscriptionEnd],
  ['channel-subscription-gift', ChannelSubscriptionGift],
  ['channel-subscription-message', ChannelSubscriptionMessage],
  ['channel-cheer', ChannelCheer],
  ['channel-raid', ChannelRaid],
  ['channel-ban', ChannelBan],
  ['channel-unban', ChannelUnban],
  ['channel-moderator-add', ChannelModeratorAdd],
  ['channel-moderator-remove', ChannelModeratorRemove],
  [
    'channel-channel_points_custom_reward-add',
    ChannelChannelPointsCustomRewardAdd,
  ],
  [
    'channel-channel_points_custom_reward-update',
    ChannelChannelPointsCustomRewardUpdate,
  ],
  [
    'channel-channel_points_custom_reward-remove',
    ChannelChannelPointsCustomRewardRemove,
  ],
  [
    'channel-channel_points_custom_reward_redemption-add',
    ChannelChannelPointsCustomRewardRedemptionAdd,
  ],
  [
    'channel-channel_points_custom_reward_redemption-update',
    ChannelChannelPointsCustomRewardRedemptionUpdate,
  ],
  ['channel-poll-begin', ChannelPollBegin],
  ['channel-poll-progress', ChannelPollProgress],
  ['channel-poll-end', ChannelPollEnd],
  ['channel-prediction-begin', ChannelPredictionBegin],
  ['channel-prediction-progress', ChannelPredictionProgress],
  ['channel-prediction-lock', ChannelPredictionLock],
  ['channel-prediction-end', ChannelPredictionEnd],
  ['channel-goal-begin', ChannelGoalBegin],
  ['channel-goal-progress', ChannelGoalProgress],
  ['channel-goal-end', ChannelGoalEnd],
  ['channel-hype_train-begin', ChannelHypeTrainBegin],
  ['channel-hype_train-progress', ChannelHypeTrainProgress],
  ['channel-hype_train-end', ChannelHypeTrainEnd],
]);
