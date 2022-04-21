import { Component, ViewChild } from '@angular/core';
import {
  getTauMessages,
  TauChatMessage,
  messageTypeFilter,
  mostRecent,
} from 'tau-js-client';
import { environment } from '../environments/environment';
import { TypingInput } from 'stream-overlay';
import { interval, map, mergeWith, Observable, take } from 'rxjs';

export interface MessageDetail {
  author: string;
  color?: string;
  message: TypingInput;
}

@Component({
  selector: 'tau-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChild('rawMessage') rawMessage: HTMLElement | null = null;

  imgSrc = '';

  messages$: Observable<MessageDetail[]>;

  messages: MessageDetail[] = [
    // { author: 'BroccoDev', message: 'hi' },
    // { author: 'BroccoDev', message: 'short 🧡 message' },
    {
      author: 'BroccoDev',
      message: {
        text: 'brocco40LOGO then some text brocco40LOGO then some more text brocco40LOGO yay!',
        emotes: [
          {
            id: 'emotesv2_fc2a8eea641148ffaccfcee50b9815e5',
            smallUrl:
              'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_fc2a8eea641148ffaccfcee50b9815e5/default/dark/1.0',
            mediumUrl:
              'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_fc2a8eea641148ffaccfcee50b9815e5/default/dark/2.0',
            largeUrl:
              'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_fc2a8eea641148ffaccfcee50b9815e5/default/dark/3.0',
            positions: [
              { start: 0, end: 11 },
              { start: 28, end: 39 },
              { start: 61, end: 72 },
            ],
          },
        ],
      },
    },
  ];

  constructor() {
    const env = environment;
    this.messages$ = getTauMessages({
      token: env.token,
      domain: env.domain,
      port: env.port,
      messages: true,
      events: false,
    }).pipe(
      messageTypeFilter(TauChatMessage),
      map((msg) => {
        return {
          author: msg.tags.displayName,
          color: msg.tags.color,
          message: {
            text: msg.messageText,
            emotes: msg.tags.emotes,
          } as TypingInput,
        };
      }),
      mergeWith(
        interval(3000).pipe(
          map((i) => this.messages[i]),
          take(this.messages.length)
        )
      ),
      mostRecent(10) // only return the 10 most recent messages as an array
    );
  }
}
