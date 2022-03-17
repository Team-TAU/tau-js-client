import { Component } from '@angular/core';

@Component({
  selector: 'tau-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  messages = [
    { author: 'SchartyDev', message: 'hi' },
    { author: 'BrococDev', message: ' short 🧡 message' },
    {
      author: 'User 1',
      message: 'This is an average twitch message sent to chat',
    },
    {
      author: 'User 2',
      message:
        'I think I should have a really really long message to test and see what this would look like as it typed out on the screen, so I might have to adjust the min delay. I think I should have a really really long message to test and see what this would look like as it typed out on the screen, so I might have to adjust the min delay.',
    },
  ];
}
