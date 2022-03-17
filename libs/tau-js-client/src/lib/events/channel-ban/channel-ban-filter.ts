import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { ChannelBan } from './channel-ban';

export function channelBanFilter(): MonoTypeOperatorFunction<ChannelBan> {
  return filter((event) => event instanceof ChannelBan);
}
