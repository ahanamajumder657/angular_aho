import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicewithhttpComponent } from './servicewithhttp.component';

describe('ServicewithhttpComponent', () => {
  let component: ServicewithhttpComponent;
  let fixture: ComponentFixture<ServicewithhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicewithhttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicewithhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
