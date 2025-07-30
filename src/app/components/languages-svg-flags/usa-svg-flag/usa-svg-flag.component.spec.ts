import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaSvgFlagComponent } from './usa-svg-flag.component';

describe('UsaSvgFlagComponent', () => {
  let component: UsaSvgFlagComponent;
  let fixture: ComponentFixture<UsaSvgFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsaSvgFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaSvgFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
