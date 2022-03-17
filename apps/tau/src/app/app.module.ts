import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StreamOverlayModule } from 'stream-overlay';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, StreamOverlayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
