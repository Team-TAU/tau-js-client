import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelModeratorAdd } from './channel-moderator-add';

export function channelModeratorAddFilter(): MonoTypeOperatorFunction<ChannelModeratorAdd> {
  return filter((event) => event instanceof ChannelModeratorAdd);
}
