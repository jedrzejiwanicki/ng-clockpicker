import { SelectedTime } from '../interfaces';
import { getDisplayTime } from '../utils/time';
import { config, MODE_MINUTES, MODE_HOURS } from '../utils/constants';
import { IncrementHelper } from './IncrementHelper';

export class Time {
  private _selectedHours: number;
  private _selectedMinutes: number;
  private _incrementHelper: IncrementHelper = new IncrementHelper();

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

  set hours(hours: number) {
    this._selectedHours = hours;
  }

  getDisplayTime(mode: string): string {
    return getDisplayTime(this.selected.hours, this.selected.minutes, mode);
  }

  incrementHours() {
    const nextValue = this._incrementHelper.getNextValue(config[MODE_HOURS], this.selected.hours, 1);

    this.hours = nextValue || config.hours[0];
  }

  incrementMinutes() {
    const nextValue = this._incrementHelper.getNextValue(config[MODE_MINUTES], this.selected.minutes, 1);

    this.minutes = nextValue;
  }

  decrementHours() {
    const nextValue = this._incrementHelper.getNextValue(config[MODE_HOURS], this.selected.hours, -1);

    this.hours = nextValue || config.hours[config.hours.length - 1];
  }

  decrementMinutes() {
    const nextValue = this._incrementHelper.getNextValue(config[MODE_MINUTES], this.selected.minutes, -1);

    this.minutes = nextValue || config.minutes[config.minutes.length - 1];
  }

}
