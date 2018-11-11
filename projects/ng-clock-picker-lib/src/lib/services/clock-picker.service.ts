import { Injectable } from '@angular/core';

import { config, HOURS_MODE_AM, MODE_HOURS, MODE_MINUTES } from '../utils/constants';
import { getDisplayTime } from '../utils/time';

@Injectable()
export class ClockPickerService {
  mode = MODE_HOURS;
  hoursMode = HOURS_MODE_AM;
  selected = { hours: 0, minutes: 0 };

  get isHoursMode(): boolean {
    return this.mode === MODE_HOURS;
  }

  get isMinutesMode(): boolean {
    return this.mode === MODE_MINUTES;
  }

  get fullTime(): string {
    return getDisplayTime(this.selected.hours, this.selected.minutes, this.hoursMode);
  }

  increment(mode: string) {
    const currentIndex = config[mode].indexOf(this.selected[mode]);
    const nextIndex = currentIndex + 1;
    const nextValue = config[mode][nextIndex];

    this.selected[mode] = nextValue || 0;
  }

  decrement(mode: string) {
    const currentIndex = config[mode].indexOf(this.selected[mode]);
    const nextIndex = currentIndex - 1;
    const nextValue = config[mode][nextIndex];

    this.selected[mode] = nextValue || config[mode][config[mode].length - 1];
  }

  setHours(item: number) {
    this.selected.hours = item;
  }

  setMinutes(item: number) {
    this.selected.minutes = item;
  }

  handleSwitch(mode: string) {
    this.setMode(mode);
  }

  setMode(mode: string): void {
    this.mode = mode;
  }

  setModeToMinutes(): void {
    this.setMode(MODE_MINUTES);
  }

  constructor() { }
}
