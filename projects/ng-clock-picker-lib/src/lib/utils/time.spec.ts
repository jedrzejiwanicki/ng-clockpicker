import { async } from '@angular/core/testing';

import { convertToTimeFormat, getTime } from './time';

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
    expect(getTime(10, 10, 'PM')).toBe('22:10');
    expect(getTime(10, 10, 'AM')).toBe('10:10');
    expect(getTime(5, 20, 'PM')).toBe('17:20');
    expect(getTime(5, 10, 'AM')).toBe('05:10');
  }));
});
