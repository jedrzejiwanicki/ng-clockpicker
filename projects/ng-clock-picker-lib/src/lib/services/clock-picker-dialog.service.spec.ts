import { async, TestBed } from '@angular/core/testing';

import { ClockPickerDialogService } from './clock-picker-dialog.service';
import { DynamicComponentsService } from './dynamic-components.service';

describe('ClockPickerDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DynamicComponentsService, ClockPickerDialogService]
  }));

  it('should be created', async(() => {
    const service: ClockPickerDialogService = TestBed.get(ClockPickerDialogService);
    expect(service).toBeTruthy();
  }));
});
