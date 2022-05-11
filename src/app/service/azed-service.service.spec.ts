import { TestBed } from '@angular/core/testing';

import { AzedServiceService } from './azed-service.service';

describe('AzedServiceService', () => {
  let service: AzedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
