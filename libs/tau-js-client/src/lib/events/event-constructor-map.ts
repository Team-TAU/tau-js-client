import { Update } from './update';
import { Follow } from './follow';
import { Subscribe } from './subscribe';
import { SubscriptionEnd } from './subscription-end';
import { SubscriptionGift } from './subscription-gift';
import { SubscriptionMessage } from './subscription-message';
import { Cheer } from './cheer';
import { Raid } from './raid';
import { Ban } from './ban';
import { Unban } from './unban';
import { ModeratorAdd } from './moderator-add';
import { ModeratorRemove } from './moderator-remove';
import { ChannelPointAdd } from './channel-point-add';
import { ChannelPointUpdate } from './channel-point-update';
import { ChannelPointRemove } from './channel-point-remove';
import { ChannelPointRedemptionAdd } from './channel-point-redemption-add';
import { ChannelPointRedemptionUpdate } from './channel-point-redemption-update';
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
  ['channel-update', Update],
  ['channel-follow', Follow],
  ['channel-subscribe', Subscribe],
  ['channel-subscription-end', SubscriptionEnd],
  ['channel-subscription-gift', SubscriptionGift],
  ['channel-subscription-message', SubscriptionMessage],
  ['channel-cheer', Cheer],
  ['channel-raid', Raid],
  ['channel-ban', Ban],
  ['channel-unban', Unban],
  ['channel-moderator-add', ModeratorAdd],
  ['channel-moderator-remove', ModeratorRemove],
  [
    'channel-channel_points_custom_reward-add',
    ChannelPointAdd,
  ],
  [
    'channel-channel_points_custom_reward-update',
    ChannelPointUpdate,
  ],
  [
    'channel-channel_points_custom_reward-remove',
    ChannelPointRemove,
  ],
  [
    'channel-channel_points_custom_reward_redemption-add',
    ChannelPointRedemptionAdd,
  ],
  [
    'channel-channel_points_custom_reward_redemption-update',
    ChannelPointRedemptionUpdate,
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
