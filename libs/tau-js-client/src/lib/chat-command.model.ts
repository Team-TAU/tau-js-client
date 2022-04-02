import { TauChatMessage } from './messages/message.model';

export enum Scope {
  person,
  everyone,
  // role,
}

export enum UserRole {
  subscriber = 1 << 0,
  moderator = 1 << 1,
  broadcaster = 1 << 2,
  anyone = ~(~0 << 4),
}

/** Chat command to register to tau chat messages */
export interface ChatCommand {
  /** Unique identifier of the command */
  id: string;
  /** Command to determine to run the command (i.e. "!so") */
  command: string | string[];
  /** Function to be called when the command is triggered */
  handler: (message: TauChatMessage) => void;
  /** Add security to restrict who can trigger this command */
  canRun?: UserRole;
  /** Configuration(s) to restrict how often the command can be redeemed */
  cooldowns?: {
    /** Time in minutes */
    time: number;
    /** Scope for the cooldown */
    scope: Scope;
    /** Role(s) for which the cooldown scope applies */
    // scopeRole?: UserRole; // revisit later
  }[];
}
