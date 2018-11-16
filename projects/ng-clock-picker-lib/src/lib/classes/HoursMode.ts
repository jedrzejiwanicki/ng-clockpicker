import { HOURS_MODE_AM, HOURS_MODE_PM, HOURS_SCOPE_24 } from '../utils/constants';
import { HoursScope } from './HoursScope';

export class HoursMode {
  private _value: string;

  constructor(scope: string) {
    this._value = HoursScope.isHoursScope24(scope) ? HOURS_MODE_PM : HOURS_MODE_AM;
  }

  get value(): string {
    return this._value;
  }

  set value(mode: string) {
    this._value = mode;
  }

  get isHoursModePM(): boolean {
    return this.value === HOURS_MODE_PM;
  }
}
