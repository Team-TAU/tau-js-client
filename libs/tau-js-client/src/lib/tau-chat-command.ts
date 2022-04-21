import { Observable, isObservable, Subscription, BehaviorSubject } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { getTauMessages, TauConnectionConfig } from './tau-js-client';
import { ChatCommand, Scope, UserRole } from './chat-command.model';
import { TauChatMessage } from './messages/message.model';

let subscription: Subscription | null = null;
const commands$ = new BehaviorSubject<ChatCommand[]>([]);
const cooldowns: Map<string, Date> = new Map();

export function initializeChatCommands(
  tauJsClient: Observable<TauChatMessage> | TauConnectionConfig,
  commands?: ChatCommand[]
): void {
  if (subscription !== null) {
    subscription.unsubscribe();
  }
  const tau$ = isObservable(tauJsClient)
    ? tauJsClient
    : getTauMessages({
        ...tauJsClient,
        messages: true,
      }).pipe(map((msg) => msg as TauChatMessage));

  subscription = tau$
    .pipe(
      withLatestFrom(commands$),
      tap(([msg, cmds]) => {
        cmds
          .filter(
            (cmd) =>
              matchesText(cmd, msg) &&
              passesSecurity(cmd, msg) &&
              !isInCooldown(cmd, msg)
          )
          .forEach((cmd) => {
            cmd.handler(msg);
            if (cmd.cooldowns) {
              updateCooldowns(cmd, msg.tags.displayName);
            }
          });
      })
    )
    .subscribe();

  if (commands) {
    commands.forEach((cmd) => registerCommand(cmd));
  }
}

export function registerCommand(command: ChatCommand): void {
  commands$.next([...commands$.value, command]);
}

export function unRegisterCommand(commandId: string): void {
  commands$.next(commands$.value.filter((command) => command.id !== commandId));
}

function matchesText(command: ChatCommand, msg: TauChatMessage) {
  const texts = Array.isArray(command.command)
    ? command.command
    : [command.command];
  return texts.some((text) => msg.messageText.startsWith(text));
}

function passesSecurity(command: ChatCommand, msg: TauChatMessage) {
  if (hasFlag(command.canRun, UserRole.anyone)) {
    return true;
  }

  if (hasFlag(command.canRun, UserRole.broadcaster) && msg.tags.isBroadcaster) {
    return true;
  }

  if (hasFlag(command.canRun, UserRole.moderator) && msg.tags.isModerator) {
    return true;
  }

  if (hasFlag(command.canRun, UserRole.subscriber) && msg.tags.isSubscriber) {
    return true;
  }

  return false;
}

function hasFlag(flag1?: UserRole, flag2?: UserRole) {
  if (!flag1 || !flag2) {
    return false;
  }
  return (flag1 & flag2) == flag2;
}

function isInCooldown(command: ChatCommand, msg: TauChatMessage) {
  const now = new Date();
  const everyoneCooldown = cooldowns.get(command.id) || now;
  const personCooldown =
    cooldowns.get(buildCooldownMap(command.id, msg.tags.displayName)) || now;

  if (everyoneCooldown > now || personCooldown > now) {
    return true;
  }

  return false;
}

function updateCooldowns(command: ChatCommand, displayName: string): void {
  if (!command.cooldowns) {
    return;
  }
  command.cooldowns.forEach((cooldown) => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + cooldown.time);
    if (cooldown.scope === Scope.everyone) {
      cooldowns.set(command.id, now);
    }
    if (cooldown.scope === Scope.person) {
      cooldowns.set(buildCooldownMap(command.id, displayName), now);
    }
  });
}

function buildCooldownMap(commandId: string, displayName: string): string {
  return `${commandId}||${displayName}`;
}
