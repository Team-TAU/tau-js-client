import { Component, OnInit, ViewChild } from '@angular/core';
import {
  getTauClient,
  postMessage,
  TauMessage,
  TauSocketMessage,
} from 'tau-js-client';
import { environment } from '../environments/environment';
import { TypingInput } from 'stream-overlay';
import {
  interval,
  map,
  mergeWith,
  Observable,
  OperatorFunction,
  scan,
  take,
  tap,
} from 'rxjs';

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

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  constructor() {
    const env = environment;
    this.messages$ = getTauClient({
      token: env.token,
      domain: env.domain,
      port: env.port,
      messages: true,
      // events: false,
      // statuses: false,
    }).pipe(
      map((msg) => {
        return {
          author: (msg as TauMessage).tags.displayName,
          color: (msg as TauMessage).tags.color,
          message: {
            text: (msg as TauMessage).messageText,
            emotes: (msg as TauMessage).tags.emotes,
          } as TypingInput,
        };
      }),
      mergeWith(
        interval(3000).pipe(
          map((i) => this.messages[i]),
          take(this.messages.length)
        )
      ),
      tap((msg: any) => {
        // playing with posting chat messages back through the client
        // if (typeof msg !== 'string' && msg.message.text.startsWith('!say')) {
        //   console.log('posting message: ' + msg.message.text);
        //   postMessage(msg.message.text.replace('!say ', ''));
        // }
      }),
      this.mostRecent(10) // only return the 10 most recent messages as an array
    );
  }

  private mostRecent<T>(count = 10): OperatorFunction<T, T[]> {
    return scan((all, current) => {
      const temp = [...all, current];
      while (temp.length >= count) {
        temp.shift();
      }
      return temp;
    }, [] as T[]);
  }
}
