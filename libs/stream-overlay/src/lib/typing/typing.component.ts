import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatestWith, map, tap } from 'rxjs';
import { Emote } from 'tau-js-client';
import { TypingSegment, TypingService } from '../typing.service';

export interface TextWithEmotes {
  text: string;
  emotes: Emote[];
}

export type TypingInput = string | TextWithEmotes;

@Component({
  selector: 'tau-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TypingComponent {
  display$ = new BehaviorSubject<TypingInput>('');
  emotes$ = new BehaviorSubject<Emote[]>([]);
  showCursor = false;
  private displayArray$ = this.display$.pipe(
    map((display) => this.toSegmentArray(display))
  );

  displayText$ = this.displayArray$.pipe(
    tap(() => (this.showCursor = true)),
    this.typingService.typeText(2000),
    combineLatestWith(this.displayArray$),
    tap(([currentSegments, allSegments]) => {
      if (currentSegments.length === allSegments.length) {
        this.showCursor = false;
      }
    }),
    map(([typingText]) => typingText)
  );

  @Input()
  public set display(value: TypingInput) {
    this.display$.next(value);
  }

  @Input()
  public set emotes(value: Emote[]) {
    this.emotes$.next(value);
  }

  @Input()
  public size: 'small' | 'medium' | 'large' = 'small';

  private toSegmentArray(display: TypingInput): TypingSegment[] {
    if (typeof display === 'string') {
      return this.stringToSegmentArray(display);
    }
    if (!display.emotes || display.emotes.length === 0) {
      return this.stringToSegmentArray(display.text);
    }
    const emotes = display.emotes
      .reduce((all, emote) => {
        const positions = emote.positions.map((pos) => ({
          start: pos.start,
          end: pos.end,
          url: emote[`${this.size}Url`],
        }));
        return [...all, ...positions];
      }, [] as { start: number; end: number; url: string }[])
      .sort((a, b) => (a.start < b.start ? 1 : -1));

    let segments = [] as TypingSegment[];
    let text = display.text;
    emotes.forEach((emote) => {
      const end = text.substring(emote.end + 1);
      text = text.substring(0, emote.start);
      segments = [
        { type: 'img', value: emote.url },
        ...this.stringToSegmentArray(end),
        ...segments,
      ];
    });
    segments = [...this.stringToSegmentArray(text), ...segments];

    return segments;
  }

  private stringToSegmentArray(display: string): TypingSegment[] {
    return display.split('').map((s) => ({ type: 'text', value: s }));
  }

  constructor(private typingService: TypingService) {}
}
