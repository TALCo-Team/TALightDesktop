import { TestBed } from '@angular/core/testing';

import { ClangCompilerService } from './clang-compiler.service';

describe('ClangCompilerService', () => {
  let service: ClangCompilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClangCompilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
