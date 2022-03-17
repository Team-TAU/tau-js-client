import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingComponent } from './typing.component';

describe('TypingComponent', () => {
  let component: TypingComponent;
  let fixture: ComponentFixture<TypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
