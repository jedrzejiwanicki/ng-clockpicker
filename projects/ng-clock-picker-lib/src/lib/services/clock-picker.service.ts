import { Injectable } from '@angular/core';

import { config, HOURS_MODE_AM, MODE_HOURS, MODE_MINUTES } from '../utils/constants';
import { getDisplayTime } from '../utils/time';

@Injectable()
export class ClockPickerService {
  _mode = MODE_HOURS;
  _hoursMode = HOURS_MODE_AM;
  _selected = { hours: 0, minutes: 0 };

  get mode() {
    return this._mode;
  }

  get hoursMode() {
    return this._hoursMode;
  }

  get selected() {
    return this._selected;
  }

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

    this._selected[mode] = nextValue || 0;
  }

  decrement(mode: string) {
    const currentIndex = config[mode].indexOf(this.selected[mode]);
    const nextIndex = currentIndex - 1;
    const nextValue = config[mode][nextIndex];

    this._selected[mode] = nextValue || config[mode][config[mode].length - 1];
  }

  setHours(item: number) {
    this._selected.hours = item;
  }

  setMinutes(item: number) {
    this._selected.minutes = item;
  }

  handleSwitch(mode: string) {
    this.setMode(mode);
  }

  setMode(mode: string): void {
    this._mode = mode;
  }

  setHoursMode(mode: string): void {
    this._hoursMode = mode;
  }

  setModeToMinutes(): void {
    this.setMode(MODE_MINUTES);
  }

  constructor() { }
}
