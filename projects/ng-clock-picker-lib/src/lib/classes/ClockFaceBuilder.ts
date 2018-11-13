import { config } from '../utils/constants';
import { ClockFaceConfig, CentralPointCoordinates, ClockFaceItem } from '../interfaces';

export class ClockFaceBuilder {
  mode: string;
  clockFaceConfig: ClockFaceConfig;

  constructor(mode: string, clockFaceConfig: ClockFaceConfig) {
    this.mode = mode;
    this.clockFaceConfig = clockFaceConfig;
  }

  private get centralPointCoordinates(): CentralPointCoordinates {
    const { radius } = this.clockFaceConfig;
    return {
      x1: radius,
      y1: radius,
    };
  }

  private buildFaceControl(timeItem: number, timeItemArray: number[]): ClockFaceItem {
    const { radius, offset } = this.clockFaceConfig;
    const { length } = timeItemArray;
    const degree: number = (360 / length);

    return {
      ...this.centralPointCoordinates,
      x2: radius * Math.cos((degree * (timeItem - offset) * Math.PI) / 180) + radius,
      y2: radius * Math.sin((degree * (timeItem - offset) * Math.PI) / 180) + radius,
      display: timeItem,
    };
  }

  get faceControls(): ClockFaceItem[] {
    return config[this.mode].map((timeItem: number, _: number, array: number[]) => this.buildFaceControl(timeItem, array));
  }

}
