import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindergartensPptComponent } from './kindergartens-ppt.component';

describe('KindergartensComponent', () => {
  let component: KindergartensPptComponent;
  let fixture: ComponentFixture<KindergartensPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KindergartensPptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KindergartensPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
