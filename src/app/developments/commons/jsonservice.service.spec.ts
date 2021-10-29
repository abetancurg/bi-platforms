import { TestBed } from '@angular/core/testing';

import { HttpServices } from './jsonservice.service';

describe('JsonserviceService', () => {
  let service: HttpServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
