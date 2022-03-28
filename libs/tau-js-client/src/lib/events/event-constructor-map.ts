import { ChannelUpdate } from './channel-update';
import { Follow } from './follow';
import { ChannelSubscribe } from './channel-subscribe';
import { ChannelSubscriptionEnd } from './channel-subscription-end';
import { ChannelSubscriptionGift } from './channel-subscription-gift';
import { ChannelSubscriptionMessage } from './channel-subscription-message';
import { Cheer } from './cheer';
import { Raid } from './raid';
import { Ban } from './ban';
import { ChannelUnban } from './channel-unban';
import { ModeratorAdd } from './moderator-add';
import { ModeratorRemove } from './moderator-remove';
import { ChannelPointRewardAdd } from './channel-point-reward-add';
import { ChannelPointRewardUpdate } from './channel-point-reward-update';
import { ChannelPointRewardRemove } from './channel-point-reward-remove';
import { ChannelPointRewardRedemptionAdd } from './channel-point-reward-redemption-add';
import { ChannelPointRewardRedemptionUpdate } from './channel-point-reward-redemption-update';
import { PollBegin } from './poll-begin';
import { PollProgress } from './poll-progress';
import { PollEnd } from './poll-end';
import { PredictionBegin } from './prediction-begin';
import { PredictionProgress } from './prediction-progress';
import { PredictionLock } from './prediction-lock';
import { PredictionEnd } from './prediction-end';
import { GoalBegin } from './goal-begin';
import { GoalProgress } from './goal-progress';
import { GoalEnd } from './goal-end';
import { HypeTrainBegin } from './hype-train-begin';
import { HypeTrainProgress } from './hype-train-progress';
import { HypeTrainEnd } from './hype-train-end';
import { TauEvent } from './tau-event';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T extends TauEvent = TauEvent> = new (...args: any[]) => T;
export const eventConstructorMap = new Map<string, Constructor>([
  ['channel-update', ChannelUpdate],
  ['channel-follow', Follow],
  ['channel-subscribe', ChannelSubscribe],
  ['channel-subscription-end', ChannelSubscriptionEnd],
  ['channel-subscription-gift', ChannelSubscriptionGift],
  ['channel-subscription-message', ChannelSubscriptionMessage],
  ['channel-cheer', Cheer],
  ['channel-raid', Raid],
  ['channel-ban', Ban],
  ['channel-unban', ChannelUnban],
  ['channel-moderator-add', ModeratorAdd],
  ['channel-moderator-remove', ModeratorRemove],
  [
    'channel-channel_points_custom_reward-add',
    ChannelPointRewardAdd,
  ],
  [
    'channel-channel_points_custom_reward-update',
    ChannelPointRewardUpdate,
  ],
  [
    'channel-channel_points_custom_reward-remove',
    ChannelPointRewardRemove,
  ],
  [
    'channel-channel_points_custom_reward_redemption-add',
    ChannelPointRewardRedemptionAdd,
  ],
  [
    'channel-channel_points_custom_reward_redemption-update',
    ChannelPointRewardRedemptionUpdate,
  ],
  ['channel-poll-begin', PollBegin],
  ['channel-poll-progress', PollProgress],
  ['channel-poll-end', PollEnd],
  ['channel-prediction-begin', PredictionBegin],
  ['channel-prediction-progress', PredictionProgress],
  ['channel-prediction-lock', PredictionLock],
  ['channel-prediction-end', PredictionEnd],
  ['channel-goal-begin', GoalBegin],
  ['channel-goal-progress', GoalProgress],
  ['channel-goal-end', GoalEnd],
  ['channel-hype_train-begin', HypeTrainBegin],
  ['channel-hype_train-progress', HypeTrainProgress],
  ['channel-hype_train-end', HypeTrainEnd],
]);
