import { TestBed } from '@angular/core/testing';

import { ClockPickerService } from './clock-picker.service';

describe('ClockPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockPickerService = TestBed.get(ClockPickerService);
    expect(service).toBeTruthy();
  });
});
