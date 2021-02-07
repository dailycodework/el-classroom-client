import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCauroselComponent } from './services-caurosel.component';

describe('ServicesCauroselComponent', () => {
  let component: ServicesCauroselComponent;
  let fixture: ComponentFixture<ServicesCauroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesCauroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCauroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
