import { Injectable } from '@angular/core';
import {
  interval,
  map,
  OperatorFunction,
  pipe,
  scan,
  switchMap,
  take,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  typeText(duration = 2000): OperatorFunction<string, string> {
    return pipe(
      map((text) => text.split('')),
      switchMap((chars) => {
        const delayTime = this.getDelay(duration, chars.length);

        return interval(delayTime).pipe(
          take(chars.length),
          map((idx) => chars[idx]),
          scan((text, char) => (text += char), '')
        );
      })
    );
  }

  private getDelay(duration: number, length: number): number {
    const minDelay = 25;
    const maxDelay = 125;
    let delayTime = duration / length;
    if (delayTime < minDelay) {
      delayTime = minDelay;
    }
    if (delayTime > maxDelay) {
      delayTime = maxDelay;
    }
    console.log(`delay: ${delayTime}`);
    return delayTime;
  }
}
