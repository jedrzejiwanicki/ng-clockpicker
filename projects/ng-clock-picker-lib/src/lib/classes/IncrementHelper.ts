export class IncrementHelper {
  static getNextValue<T>(array: T[], value: T, incrementDirection: number): T {
    const currentIndex = array.indexOf(value);
    const nextIndex = currentIndex + incrementDirection;

    return array[nextIndex] || this.fallbackValue(array, incrementDirection)
  }

  static fallbackValue<T>(array: T[], incrementDirection: number): T {
    return incrementDirection > 0
      ? array[0]
      : array[array.length - 1];
  }
}
