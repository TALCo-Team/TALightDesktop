import { TestBed } from 'node_modules/@angular/core/testing';

import { FsService } from './fs.service';

describe('FsService', () => {
  let service: FsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
