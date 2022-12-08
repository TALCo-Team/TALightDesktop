import { TestBed } from 'node_modules/@angular/core/testing';

import { PythonCompilerService } from './python-compiler.service';

describe('PythonCompilerService', () => {
  let service: PythonCompilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonCompilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
