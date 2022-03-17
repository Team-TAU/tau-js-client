import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingComponent } from './typing/typing.component';
import { TauService } from './tau.service';

@NgModule({
  imports: [CommonModule],
  declarations: [TypingComponent],
  exports: [TypingComponent],
  providers: [TauService],
})
export class StreamOverlayModule {
  // static forRoot(config: TauConfig): ModuleWithProviders {
  // }
}

interface TauConfig {
  url: string;
  token: string;
}

// wss://yourdomain:PORT/ws/twitch-events/
// wss://yourdomain:PORT/ws/irc-messages/
// wss://yourdomain:PORT/ws/tau-status/
