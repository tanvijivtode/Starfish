import { TestBed } from '@angular/core/testing';

import { WaysToHelpService } from './ways-to-help.service';

describe('WaysToHelpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaysToHelpService = TestBed.get(WaysToHelpService);
    expect(service).toBeTruthy();
  });
});
