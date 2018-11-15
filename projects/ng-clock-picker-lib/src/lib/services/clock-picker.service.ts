import { Injectable } from '@angular/core';

import { HOURS_MODE_AM, MODE_HOURS, MODE_MINUTES, HOURS_SCOPE_12, config } from '../utils/constants';
import { ClockPickerConfig, SelectedTime } from '../interfaces';
import { Time } from '../classes/Time';

@Injectable()
export class ClockPickerService {
  _config: ClockPickerConfig;
  _mode = MODE_HOURS;
  _hoursMode = HOURS_MODE_AM;
  _hoursScope = HOURS_SCOPE_12;
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

  set config(clockPickerConfig: ClockPickerConfig) {
    this._config = clockPickerConfig;
  }

  get config(): ClockPickerConfig {
    return this._config;
  }

  get hoursScope(): string {
    return this._hoursScope;
  }

  clockValues(mode: string) {
    return config(this.hoursScope)[mode];
  }

  setHoursScope(option: string) {
    this._time.switchHoursScope(this.hoursScope, option)
    this._hoursScope = option;
  }

  reset(): void {
    this.setHoursScope(HOURS_SCOPE_12);
    this.setHoursMode(HOURS_MODE_AM);
    this.setMode(MODE_HOURS);
    this.setHours(12);
    this.setMinutes(0);
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
