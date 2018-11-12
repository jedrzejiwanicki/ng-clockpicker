import { TestBed } from '@angular/core/testing';

import { ClockPickerDialogService } from './clock-picker-dialog.service';

describe('ClockPickerDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockPickerDialogService = TestBed.get(ClockPickerDialogService);
    expect(service).toBeTruthy();
  });
});
