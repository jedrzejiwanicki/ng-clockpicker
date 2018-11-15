import { ClockFaceBuilder } from './ClockFaceBuilder';
import { ClockFaceConfig } from '../interfaces';
import { async } from '@angular/core/testing';

import { hours } from '../utils/constants';

describe('ClockFaceBuilder', () => {
  it('returns correct items for hours 12', async(() => {
    const config: ClockFaceConfig = { radius: 1, offset: 0 };
    const clockFaceBuilder = new ClockFaceBuilder(hours['12h'], config);

    expect(clockFaceBuilder.faceControls).toEqual([
      Object({ x1: 1, y1: 1, x2: 1.8660254037844388, y2: 1.5, display: 1 }),
      Object({ x1: 1, y1: 1, x2: 1.5, y2: 1.8660254037844386, display: 2 }),
      Object({ x1: 1, y1: 1, x2: 1, y2: 2, display: 3 }),
      Object({ x1: 1, y1: 1, x2: 0.5000000000000002, y2: 1.8660254037844388, display: 4 }),
      Object({ x1: 1, y1: 1, x2: 0.1339745962155613, y2: 1.5, display: 5 }),
      Object({ x1: 1, y1: 1, x2: 0, y2: 1.0000000000000002, display: 6 }),
      Object({ x1: 1, y1: 1, x2: 0.1339745962155614, y2: 0.4999999999999999, display: 7 }),
      Object({ x1: 1, y1: 1, x2: 0.49999999999999956, y2: 0.13397459621556151, display: 8 }),
      Object({ x1: 1, y1: 1, x2: 0.9999999999999998, y2: 0, display: 9 }),
      Object({ x1: 1, y1: 1, x2: 1.5, y2: 0.1339745962155614, display: 10 }),
      Object({ x1: 1, y1: 1, x2: 1.8660254037844384, y2: 0.49999999999999956, display: 11 }),
      Object({ x1: 1, y1: 1, x2: 2, y2: 0.9999999999999998, display: 12 })
      ]);
  }));

  it('returns correct items for hours 24', async(() => {
    const config: ClockFaceConfig = { radius: 1, offset: 0 };
    const clockFaceBuilder = new ClockFaceBuilder(hours['24h'], config);

    expect(clockFaceBuilder.faceControls).toEqual([
      Object({ x1: 1, y1: 1, x2: 1.866025403784439, y2: 1.4999999999999993, display: 13 }),
      Object({ x1: 1, y1: 1, x2: 1.4999999999999998, y2: 1.8660254037844388, display: 14 }),
      Object({ x1: 1, y1: 1, x2: 1.0000000000000002, y2: 2, display: 15 }),
      Object({ x1: 1, y1: 1, x2: 0.5000000000000008, y2: 1.8660254037844393, display: 16 }),
      Object({ x1: 1, y1: 1, x2: 0.13397459621556118, y2: 1.4999999999999998, display: 17 }),
      Object({ x1: 1, y1: 1, x2: 0, y2: 1.0000000000000004, display: 18 }),
      Object({ x1: 1, y1: 1, x2: 0.13397459621556174, y2: 0.49999999999999933, display: 19 }),
      Object({ x1: 1, y1: 1, x2: 0.5000000000000002, y2: 0.1339745962155613, display: 20 }),
      Object({ x1: 1, y1: 1, x2: 0.9999999999999996, y2: 0, display: 21 }),
      Object({ x1: 1, y1: 1, x2: 1.4999999999999991, y2: 0.13397459621556085, display: 22 }),
      Object({ x1: 1, y1: 1, x2: 1.8660254037844388, y2: 0.5000000000000001, display: 23 }),
      Object({ x1: 1, y1: 1, x2: 2, y2: 1, display: 0 }) ]
    );
  }));
});
