import { Observable, Subject } from 'rxjs';

import { HOURS_SCOPE_12, HOURS_SCOPE_24 } from '../utils/constants';

export class HoursScope {
  private _value: string;
  private _hoursScopeChangeEmitter: Subject<{ current: string; next: string}> = new Subject<{ current: string; next: string}>();

  static isHoursScope24(scope: string) {
    return scope === HOURS_SCOPE_24;
  }

  constructor(is24: boolean, scope: string) {
    this._value = is24 ? scope : HOURS_SCOPE_12;
  }

  get hoursScopeChanged(): Observable<{ current: string; next: string}> {
    return this._hoursScopeChangeEmitter.asObservable();
  }

  get value(): string {
    return this._value;
  }

  set value(scope: string) {
    this._hoursScopeChangeEmitter.next({ current: this.value, next: scope });
    this._value = scope;
  }

  get isScope24(): boolean {
    return this.value === HOURS_SCOPE_24;
  }
}
