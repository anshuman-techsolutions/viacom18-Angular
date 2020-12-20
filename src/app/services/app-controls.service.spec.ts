import { TestBed } from '@angular/core/testing';

import { AppControlsService } from './app-controls.service';

describe('AppControlsService', () => {
  let service: AppControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
