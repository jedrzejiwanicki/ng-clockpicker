import { config } from '../utils/constants';

export class IncrementHelper {
  public getNextValue<T>(array: T[], value: T, incrementValue: number): T {
    const currentIndex = array.indexOf(value);
    const nextIndex = currentIndex + incrementValue;

    return array[nextIndex];

  }
}
