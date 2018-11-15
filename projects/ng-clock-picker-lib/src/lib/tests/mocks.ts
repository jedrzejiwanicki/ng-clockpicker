import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ClockPickerService } from '../services/clock-picker.service';
import { ClockPickerConfig, SelectedTime } from '../interfaces';
import { MODE_HOURS, defaultConfig } from '../utils/constants';

@Injectable()
export class MockElementRef {
  nativeElement: {};

}

@Injectable()
export class MockClockPickerDialogService {
  registerViewContainerRef(): void {}
  reset(): void {}
  showClockPickerDialog(): Observable<string> { return new Observable(s => s.next('value')); }
}

@Injectable()
export class MockClockPickerService {
  get isHoursMode(): boolean { return false; }
  get mode(): string { return MODE_HOURS; }
  setMode(m: string): void {}
  get selected(): SelectedTime { return { hours: 10, minutes: 1 }; }
  get config(): ClockPickerConfig { return defaultConfig; };
  clockValues(): number[] { return []; };
}
