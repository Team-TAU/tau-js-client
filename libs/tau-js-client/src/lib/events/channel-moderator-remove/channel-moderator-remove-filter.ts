import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelModeratorRemove } from './channel-moderator-remove';

export function channelModeratorRemoveFilter(): MonoTypeOperatorFunction<ChannelModeratorRemove> {
  return filter((event) => event instanceof ChannelModeratorRemove);
}
