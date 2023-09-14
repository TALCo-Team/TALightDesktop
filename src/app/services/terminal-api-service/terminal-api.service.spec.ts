import { TestBed } from '@angular/core/testing';

import { TerminalApiService } from './terminal-api.service';

describe('TerminalApiService', () => {
  let service: TerminalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
