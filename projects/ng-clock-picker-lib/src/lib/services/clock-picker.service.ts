import { Injectable } from '@angular/core';

import { config, HOURS_MODE_AM, MODE_HOURS, MODE_MINUTES, defaults } from '../utils/constants';
import { SelectedTime } from '../interfaces';
import { Time } from '../classes/Time';

@Injectable()
export class ClockPickerService {
  _mode = MODE_HOURS;
  _hoursMode = HOURS_MODE_AM;
  _time: Time = new Time({ hours: 12, minutes: 0 });

  get mode(): string {
    return this._mode;
  }

  get hoursMode(): string {
    return this._hoursMode;
  }

  get selected(): SelectedTime {
    return this._time.selected;
  }

  get isHoursMode(): boolean {
    return this.mode === MODE_HOURS;
  }

  get isMinutesMode(): boolean {
    return this.mode === MODE_MINUTES;
  }

  get fullTime(): string {
    return this._time.getDisplayTime(this.hoursMode);
  }

  reset(): void {
    this.setHoursMode(HOURS_MODE_AM);
    this.setMode(MODE_HOURS);
    this.setHours(12);
    this.setMinutes(0);
  }

  increment(mode: string): void {
    return mode === MODE_MINUTES
      ? this._time.incrementMinutes()
      : this._time.incrementHours();
  }

  decrement(mode: string): void {
    return mode === MODE_MINUTES
      ? this._time.decrementMinutes()
      : this._time.decrementHours();
  }

  setHours(item: number): void {
    this._time.hours = item;
  }

  setMinutes(item: number): void {
    this._time.minutes = item;
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
