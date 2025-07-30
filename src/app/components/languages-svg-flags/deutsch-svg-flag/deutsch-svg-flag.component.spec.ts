import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeutschSvgFlagComponent } from './deutsch-svg-flag.component';

describe('DeutschSvgFlagComponent', () => {
  let component: DeutschSvgFlagComponent;
  let fixture: ComponentFixture<DeutschSvgFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeutschSvgFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeutschSvgFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
