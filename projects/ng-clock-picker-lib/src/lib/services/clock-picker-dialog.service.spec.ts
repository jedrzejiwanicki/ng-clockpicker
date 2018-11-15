import { async, TestBed } from '@angular/core/testing';

import { ClockPickerDialogService } from './clock-picker-dialog.service';
import { DynamicComponentsService } from './dynamic-components.service';
import { ClockPickerService } from './clock-picker.service';

describe('ClockPickerDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DynamicComponentsService, ClockPickerDialogService, ClockPickerService]
  }));

  it('should be created', async(() => {
    const service: ClockPickerDialogService = TestBed.get(ClockPickerDialogService);
    expect(service).toBeTruthy();
  }));
});
