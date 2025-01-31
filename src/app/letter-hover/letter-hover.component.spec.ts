import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterHoverComponent } from './letter-hover.component';

describe('LetterHoverComponent', () => {
  let component: LetterHoverComponent;
  let fixture: ComponentFixture<LetterHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterHoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
