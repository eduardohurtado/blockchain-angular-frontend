import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianoSvgFlagComponent } from './italiano-svg-flag.component';

describe('ItalianoSvgFlagComponent', () => {
  let component: ItalianoSvgFlagComponent;
  let fixture: ComponentFixture<ItalianoSvgFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItalianoSvgFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalianoSvgFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
