import { TimeConfig, SelectedTime } from '../interfaces';
import { getDisplayTime } from '../utils/time';
import { defaults, hours } from '../utils/constants';
import { Mode } from './Mode';
import { HoursScope } from './HoursScope';
import { HoursMode } from './HoursMode';

export class Time {
  private _selectedHours: number;
  private _selectedMinutes: number;
  private _hoursScope: HoursScope;
  private _hoursMode: HoursMode;
  private _mode: Mode = new Mode();

  static getConcurrentScopeValue(hour: number, currentScope: string, nextScope: string): number {
    return hours[nextScope][hours[currentScope].indexOf(hour)];
  }

  constructor(initialConfig: TimeConfig = defaults) {
    this.init(initialConfig);
  }

  private init(initialConfig: TimeConfig ) {
    this._hoursScope = new HoursScope(initialConfig.is24, initialConfig.scope);
    this._hoursMode = new HoursMode(initialConfig.scope);
    this._selectedMinutes = initialConfig.minutes;
    this._selectedHours = (initialConfig.is24 || initialConfig.scope === this._hoursScope.value)
      ? initialConfig.hours
      : Time.getConcurrentScopeValue(initialConfig.hours, initialConfig.scope, this._hoursScope.value);


    this._hoursScope.hoursScopeChanged.subscribe(({ current, next }) => {
      this.hours = Time.getConcurrentScopeValue(this.selected.hours, current, next);
    });
  }

  get selected(): SelectedTime {
    return {
      hours: this._selectedHours,
      minutes: this._selectedMinutes,
    };
  }

  get Mode(): Mode {
    return this._mode;
  }

  get HoursScope(): HoursScope {
    return this._hoursScope;
  }

  get HoursMode(): HoursMode {
    return this._hoursMode;
  }

  set minutes(minutes: number) {
    this._selectedMinutes = minutes;
  }

  set hours(hour: number) {
    this._selectedHours = hour;
  }

  get displayTime(): string {
    return getDisplayTime(this.selected.hours, this.selected.minutes, this._hoursMode.value);
  }

}
