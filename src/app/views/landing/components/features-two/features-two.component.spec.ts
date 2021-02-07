import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTwoComponent } from './features-two.component';

describe('FeaturesTwoComponent', () => {
  let component: FeaturesTwoComponent;
  let fixture: ComponentFixture<FeaturesTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
