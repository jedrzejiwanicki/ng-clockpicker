import { IncrementHelper } from './IncrementHelper';
import { async } from '@angular/core/testing';

describe('IncrementHelper', () => {
  it('returns correct value', async(() => {
    const array: number[] = [1, 2, 3, 4, 5, 6];
    const item = 6;


    expect(IncrementHelper.getNextValue(array, item, 1)).toBe(1);

  }));

  it('returns correct value', async(() => {
    const array: number[] = [1, 2, 3, 4, 5, 6];
    const item = 6;

    expect(IncrementHelper.getNextValue(array, item, -1)).toBe(5);
  }));

  it('returns correct value', async(() => {
    const array: number[] = [1, 2, 3, 4, 5, 6];
    const item = 1;

    expect(IncrementHelper.getNextValue(array, item, -1)).toBe(6);
  }));
});
