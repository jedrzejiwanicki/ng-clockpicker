import { SelectedTime } from '../interfaces';
import { getDisplayTime } from '../utils/time';
import { config, MODE_MINUTES, MODE_HOURS, hours } from '../utils/constants';

export class Time {
  private _selectedHours: number;
  private _selectedMinutes: number;

  constructor(initialConfig: SelectedTime) {
    this._selectedHours = initialConfig.hours;
    this._selectedMinutes = initialConfig.minutes;
  }


  get selected(): SelectedTime {
    return {
      hours: this._selectedHours,
      minutes: this._selectedMinutes,
    };
  }

  set minutes(minutes: number) {
    this._selectedMinutes = minutes;
  }

  set hours(hour: number) {
    this._selectedHours = hour;
  }

  switchHoursScope(currentScope: string, option: string) {
    this.hours = hours[option][hours[currentScope].indexOf(this.selected.hours)];
  }

  getDisplayTime(mode: string): string {
    return getDisplayTime(this.selected.hours, this.selected.minutes, mode);
  }

}
