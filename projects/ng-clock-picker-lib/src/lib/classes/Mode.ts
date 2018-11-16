import { MODE_HOURS, MODE_MINUTES } from '../utils/constants';

export class Mode {
  _mode = MODE_HOURS;

  get mode(): string {
    return this._mode;
  }

  get isModeMinutes(): boolean  {
    return this._mode === MODE_MINUTES;
  }

  get isModeHours(): boolean {
    return this._mode === MODE_HOURS;
  }

  set mode(mode: string) {
    this._mode = mode;
  }

  setModeToMinutes(): void {
    this.mode = MODE_MINUTES;
  }

  setModeToHours() {
    this.mode = MODE_HOURS;
  }
}
