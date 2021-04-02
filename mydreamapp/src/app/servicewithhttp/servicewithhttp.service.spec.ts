import { TestBed } from '@angular/core/testing';

import { ServicewithhttpService } from './servicewithhttp.service';

describe('ServicewithhttpService', () => {
  let service: ServicewithhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicewithhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
