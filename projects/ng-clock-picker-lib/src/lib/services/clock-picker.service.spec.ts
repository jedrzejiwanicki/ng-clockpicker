import { TestBed, async } from '@angular/core/testing';

import { MODE_HOURS, MODE_MINUTES, HOURS_MODE_AM, HOURS_MODE_PM } from '../utils/constants';
import { ClockPickerService } from './clock-picker.service';

describe('ClockPickerService', () => {
  let service: ClockPickerService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ClockPickerService],
  }));

  beforeEach(async(() => {
    service = TestBed.get(ClockPickerService);
  }));

  it('should be created', async(() => {
    expect(service).toBeTruthy();
  }));

  it('return correct mode', async(() => {
    expect(service.mode).toBe(MODE_HOURS);
  }));

  it('return correct mode after its changed to minutes', async(() => {
    service.setModeToMinutes();

    expect(service.mode).not.toBe(MODE_HOURS);
    expect(service.mode).toBe(MODE_MINUTES);
  }));

  it('resets config', async(() => {
    service.setMinutes(1);
    service.setHours(1);
    service.setModeToMinutes();
    service.setHoursMode(HOURS_MODE_PM);

    service.reset();

    expect(service.mode).toBe(MODE_HOURS);
    expect(service.hoursMode).toBe(HOURS_MODE_AM);
    expect(service.selected.hours).toBe(12);
    expect(service.selected.minutes).toBe(0);
  }));

  it('returns correct fullTime', async(() => {
    expect(service.fullTime).toBe('12:00 AM');
  }));

  it('returns correct fullTime after updated hours', async(() => {
    service.setHours(4);

    expect(service.fullTime).toBe('04:00 AM');
  }));


  it('returns correct fullTime after updated minutes', async(() => {
    service.setMinutes(14);

    expect(service.fullTime).toBe('12:14 AM');
  }));


  it('returns correct fullTime after updated hours mode', async(() => {
    service.setHoursMode(HOURS_MODE_PM);

    expect(service.fullTime).toBe('12:00 PM');
  }));

  it('increments hours correctly', async(() => {
    service.increment(MODE_HOURS);

    expect(service.fullTime).toBe('01:00 AM');
  }));

  it('decrements hours correctly', async(() => {
    service.decrement(MODE_HOURS);

    expect(service.fullTime).toBe('11:00 AM');
  }));

  it('increments minutes correctly', async(() => {
    service.setMinutes(59);
    service.increment(MODE_MINUTES);

    expect(service.fullTime).toBe('12:00 AM');
  }));

  it('decrements minutes correctly', async(() => {
    service.decrement(MODE_MINUTES);

    expect(service.fullTime).toBe('12:59 AM');
  }));
});
