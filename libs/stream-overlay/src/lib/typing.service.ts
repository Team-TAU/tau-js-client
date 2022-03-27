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

export interface TypingSegment {
  type: 'text' | 'img';
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  typeText(
    duration = 2000
  ): OperatorFunction<TypingSegment[], TypingSegment[]> {
    return pipe(
      switchMap((allSegments) => {
        const delayTime = this.getDelay(duration, allSegments.length);

        return interval(delayTime).pipe(
          take(allSegments.length),
          map((idx) => allSegments[idx]),
          scan((segments, segment) => {
            return [...segments, segment];
          }, [] as TypingSegment[])
        );
      })
    );
  }

  private getDelay(duration: number, length: number): number {
    const maxDelay = 125;
    let delayTime = duration / length;
    if (delayTime > maxDelay) {
      delayTime = maxDelay;
    }
    return delayTime;
  }
}
