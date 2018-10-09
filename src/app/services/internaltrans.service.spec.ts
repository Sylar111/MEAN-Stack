import { TestBed, inject } from '@angular/core/testing';

import { InternaltransService } from './internaltrans.service';

describe('InternaltransService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternaltransService]
    });
  });

  it('should be created', inject([InternaltransService], (service: InternaltransService) => {
    expect(service).toBeTruthy();
  }));
});
