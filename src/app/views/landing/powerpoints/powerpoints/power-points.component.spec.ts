import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPointsComponent } from './power-points.component';

describe('PowerpointsComponent', () => {
  let component: PowerPointsComponent;
  let fixture: ComponentFixture<PowerPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
