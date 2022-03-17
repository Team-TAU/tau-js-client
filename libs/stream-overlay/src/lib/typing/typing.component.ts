import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatestWith, map, tap } from 'rxjs';
import { TypingService } from '../typing.service';

@Component({
  selector: 'tau-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TypingComponent {
  text$ = new BehaviorSubject<string>('');
  showCursor = false;

  displayText$ = this.text$.pipe(
    tap(() => (this.showCursor = true)),
    this.typingService.typeText(2000),
    combineLatestWith(this.text$),
    tap(([typingText, fullText]) => {
      if (typingText === fullText) {
        this.showCursor = false;
      }
    }),
    map(([typingText]) => typingText)
  );

  @Input()
  public set text(value: string) {
    this.text$.next(value);
  }

  constructor(private typingService: TypingService) {}
}
