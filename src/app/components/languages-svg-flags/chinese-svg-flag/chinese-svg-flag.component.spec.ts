import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseSvgFlagComponent } from './chinese-svg-flag.component';

describe('ChineseSvgFlagComponent', () => {
  let component: ChineseSvgFlagComponent;
  let fixture: ComponentFixture<ChineseSvgFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChineseSvgFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChineseSvgFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
