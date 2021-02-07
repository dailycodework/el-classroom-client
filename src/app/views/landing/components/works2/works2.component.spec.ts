import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Works2Component } from './works2.component';

describe('Works2Component', () => {
  let component: Works2Component;
  let fixture: ComponentFixture<Works2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Works2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Works2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
