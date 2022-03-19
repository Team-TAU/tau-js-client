import { Component, OnInit } from '@angular/core';
import { getTauClient, TauMessage } from 'tau-js-client';

@Component({
  selector: 'tau-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  messages = [
    { author: 'SchartyDev', message: 'hi' },
    { author: 'BrococDev', message: ' short 🧡 message' },
    {
      author: 'User 1',
      message: 'This is an average twitch message sent to chat',
    },
    // {
    //   author: 'User 2',
    //   message:
    //     'I think I should have a really really long message to test and see what this would look like as it typed out on the screen, so I might have to adjust the min delay. I think I should have a really really long message to test and see what this would look like as it typed out on the screen, so I might have to adjust the min delay.',
    // },
  ];
  ngOnInit(): void {
    getTauClient({
      token: '',
      domain: '',
      port: 1234,
      messages: true,
      events: true,
      statuses: false,
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .subscribe((msg: any) => {
        const m: TauMessage = msg;
        console.log(msg);
        this.messages = [
          {
            author: `${new Date()}`,
            message: JSON.stringify(m),
          },
        ];
      });
  }
}
