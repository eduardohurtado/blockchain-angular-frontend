import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanolSvgFlagComponent } from './espanol-svg-flag.component';

describe('EspanolSvgFlagComponent', () => {
  let component: EspanolSvgFlagComponent;
  let fixture: ComponentFixture<EspanolSvgFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspanolSvgFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspanolSvgFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
