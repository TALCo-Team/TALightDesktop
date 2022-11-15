import { TestBed } from '@angular/core/testing';

import { PythonScriptCompilerService } from './python-script-compiler.service';

describe('PythonScriptCompilerService', () => {
  let service: PythonScriptCompilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonScriptCompilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
