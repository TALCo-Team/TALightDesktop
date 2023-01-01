import { TestBed } from '@angular/core/testing';

import { ConnectionManagerService } from './connection-manager.service';

describe('ConnectionManagerService', () => {
  let service: ConnectionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
