import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Works1Component } from './works1.component';

describe('Works1Component', () => {
  let component: Works1Component;
  let fixture: ComponentFixture<Works1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Works1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Works1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
