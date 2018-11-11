import { TestBed, async } from '@angular/core/testing';

import { ClockPickerService } from './clock-picker.service';

describe('ClockPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ClockPickerService],
  }));

  it('should be created', async(() => {
    const service: ClockPickerService = TestBed.get(ClockPickerService);
    expect(service).toBeTruthy();
  }));
});
