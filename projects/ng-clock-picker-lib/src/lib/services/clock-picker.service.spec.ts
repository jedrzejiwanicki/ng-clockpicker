import { TestBed, async } from '@angular/core/testing';

import { MODE_HOURS, MODE_MINUTES, HOURS_MODE_AM, HOURS_MODE_PM, hours } from '../utils/constants';
import { ClockPickerService } from './clock-picker.service';
import { getDateStringFromTime } from '../tests/utils';

describe('ClockPickerService', () => {
  let service: ClockPickerService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ClockPickerService],
  }));

  beforeEach(async(() => {
    service = TestBed.get(ClockPickerService);
    service.init();
  }));

  it('should be created', async(() => {
    expect(service).toBeTruthy();
  }));

  it('return correct mode', async(() => {
    expect(service.Time.Mode.mode).toBe(MODE_HOURS);
  }));

  it('return correct mode after its changed to minutes', async(() => {
    service.Time.Mode.setModeToMinutes();

    expect(service.Time.Mode.mode).not.toBe(MODE_HOURS);
    expect(service.Time.Mode.mode).toBe(MODE_MINUTES);
  }));

  it('returns correct fullTime', async(() => {
    expect(getDateStringFromTime(service.Time.displayTime)).toBe(getDateStringFromTime('12:00'));
  }));

  it('returns correct fullTime after updated hours', async(() => {
    service.Time.hours = 4;

    expect(getDateStringFromTime(service.Time.displayTime)).toBe(getDateStringFromTime('04:00'));
  }));


  it('returns correct fullTime after updated minutes', async(() => {
    service.Time.minutes = 14;
    service.Time.HoursMode.value = HOURS_MODE_PM;

    expect(getDateStringFromTime(service.Time.displayTime)).toBe(getDateStringFromTime('00:14'));
  }));


  it('returns correct fullTime after updated hours mode', async(() => {
    service.Time.HoursMode.value = HOURS_MODE_PM;

    expect(getDateStringFromTime(service.Time.displayTime)).toBe(getDateStringFromTime('00:00'));
  }));

  it('returns correct hours scope', async(() => {
    expect(service.Time.HoursScope.value).toBe('12h');
  }));

  it('returns correct hours scope after udpdate', async(() => {
    service.Time.HoursScope.value = '24h';

    expect(service.Time.HoursScope.value).toBe('24h');
  }));

  it('returns correct hours within 12h scope', async(() => {
    service.Time.HoursScope.value = '12h';

    expect(service.clockValues('hours')).toBe(hours['12h']);
  }));

  it('returns correct hours within 24h scope', async(() => {
    service.Time.HoursScope.value = '24h';

    expect(service.clockValues('hours')).toBe(hours['24h']);
  }));

  it('sets correct hour after switching scope', async(() => {
    service.Time.hours = 2;
    service.Time.HoursScope.value = '24h';

    expect(service.Time.selected.hours).toBe(14);
  }));
});
