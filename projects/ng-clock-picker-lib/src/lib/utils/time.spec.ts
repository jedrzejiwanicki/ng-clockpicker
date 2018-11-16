import { async } from '@angular/core/testing';

import { convertToTimeFormat, getDisplayTime } from './time';
import { getDateStringFromTime } from '../tests/utils';
import { HoursMode } from '../classes/HoursMode';

describe('convertToTimeFormat', () => {
  it('returns correct values', async(() => {
    expect(convertToTimeFormat(1)).toBe('01');
    expect(convertToTimeFormat(2)).toBe('02');
    expect(convertToTimeFormat(12)).toBe('12');
    expect(convertToTimeFormat(0)).toBe('00');
  }));
});


describe('getTime', () => {
  it('returns correct values', async(() => {
    expect(getDateStringFromTime(getDisplayTime(10, 10, new HoursMode('24h'), false))).toBe(getDateStringFromTime('22:10'));
    expect(getDateStringFromTime(getDisplayTime(10, 10, new HoursMode('12h'), false))).toBe(getDateStringFromTime('10:10'));
    expect(getDateStringFromTime(getDisplayTime(5, 20, new HoursMode('24h'), false))).toBe(getDateStringFromTime('17:20'));
    expect(getDateStringFromTime(getDisplayTime(5, 10, new HoursMode('12h'), false))).toBe(getDateStringFromTime('05:10'));
  }));
});
