import { TestBed } from '@angular/core/testing';

import { UiLibraryService } from './ui-library.service';

describe('UiLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiLibraryService = TestBed.get(UiLibraryService);
    expect(service).toBeTruthy();
  });
});
