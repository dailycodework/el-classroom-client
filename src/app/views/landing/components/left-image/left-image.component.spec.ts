import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImageComponent } from './left-image.component';

describe('LeftImageComponent', () => {
  let component: LeftImageComponent;
  let fixture: ComponentFixture<LeftImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
