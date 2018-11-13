import { ClockFaceBuilder } from './ClockFaceBuilder';
import { ClockFaceConfig } from '../interfaces';
import { async } from '@angular/core/testing';

describe('ClockFaceBuilder', () => {
  it('returns correct items for hours', async(() => {
    const config: ClockFaceConfig = { radius: 1, offset: 0 };
    const clockFaceBuilder = new ClockFaceBuilder('hours', config);

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
});
