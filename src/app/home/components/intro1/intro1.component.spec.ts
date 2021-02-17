import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Intro1Component } from './intro1.component';

describe('Intro1Component', () => {
  let component: Intro1Component;
  let fixture: ComponentFixture<Intro1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Intro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Intro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
