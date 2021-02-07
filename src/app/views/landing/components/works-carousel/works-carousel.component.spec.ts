import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksCarouselComponent } from './works-carousel.component';

describe('WorksCarouselComponent', () => {
  let component: WorksCarouselComponent;
  let fixture: ComponentFixture<WorksCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
