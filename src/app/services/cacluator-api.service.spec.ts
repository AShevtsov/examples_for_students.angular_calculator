import { TestBed } from '@angular/core/testing';

import { CacluatorApiService } from './cacluator-api.service';

describe('CacluatorApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CacluatorApiService = TestBed.get(CacluatorApiService);
    expect(service).toBeTruthy();
  });
});
