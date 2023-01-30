import { TestBed } from '@angular/core/testing';

import { ProblemManagerService } from './problem-manager.service';

describe('ProblemManagerService', () => {
  let service: ProblemManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
