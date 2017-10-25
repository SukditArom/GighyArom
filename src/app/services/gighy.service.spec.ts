import { TestBed, inject } from '@angular/core/testing';

import { GighyService } from './gighy.service';

describe('GighyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GighyService]
    });
  });

  it('should be created', inject([GighyService], (service: GighyService) => {
    expect(service).toBeTruthy();
  }));
});
