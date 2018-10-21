import { TestBed, inject } from '@angular/core/testing';

import { GetbalanceService } from './getbalance.service';

describe('GetbalanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetbalanceService]
    });
  });

  it('should be created', inject([GetbalanceService], (service: GetbalanceService) => {
    expect(service).toBeTruthy();
  }));
});
