import { Injectable } from '@angular/core';

import { config, HOURS_MODE_AM, MODE_HOURS, MODE_MINUTES } from '../utils/constants';
import { getDisplayTime, parseTime } from '../utils/time';
import { SelectedTime } from '../interfaces';

@Injectable()
export class ClockPickerService {
  _mode = MODE_HOURS;
  _hoursMode = HOURS_MODE_AM;
  _selected: SelectedTime = { hours: 12, minutes: 0 };

  get mode(): string {
    return this._mode;
  }

  get hoursMode(): string {
    return this._hoursMode;
  }

  get selected(): SelectedTime {
    return this._selected;
  }

  get isHoursMode(): boolean {
    return this.mode === MODE_HOURS;
  }

  get isMinutesMode(): boolean {
    return this.mode === MODE_MINUTES;
  }

  get fullTime(): string {
    console.log(this.hoursMode);
    return getDisplayTime(this.selected.hours, this.selected.minutes, this.hoursMode);
  }

  reset(): void {
    this.setHoursMode(HOURS_MODE_AM);
    this.setMode(MODE_HOURS);
    this.setHours(12);
    this.setMinutes(0);
  }

  increment(mode: string): void {
    const currentIndex = config[mode].indexOf(this.selected[mode]);
    const nextIndex = currentIndex + 1;
    const nextValue = config[mode][nextIndex];

    this._selected[mode] = nextValue || 0;
  }

  decrement(mode: string): void {
    const currentIndex = config[mode].indexOf(this.selected[mode]);
    const nextIndex = currentIndex - 1;
    const nextValue = config[mode][nextIndex];

    this._selected[mode] = nextValue || config[mode][config[mode].length - 1];
  }

  setHours(item: number): void {
    this._selected.hours = item;
  }

  setMinutes(item: number): void {
    this._selected.minutes = item;
  }

  handleSwitch(mode: string): void {
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
