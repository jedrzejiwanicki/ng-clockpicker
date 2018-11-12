import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ClockPickerService } from '../services/clock-picker.service';
import { SelectedTime } from '../interfaces';
import { MODE_HOURS } from '../utils/constants';

@Injectable()
export class MockElementRef {
  nativeElement: {};

}

@Injectable()
export class MockDynamicComponentsService {
  load(): Observable<string> { return new Observable(s => s.next('value')); }
}

@Injectable()
export class MockClockPickerService {
  get isHoursMode(): boolean { return false; }
  get mode(): string { return MODE_HOURS; }
  get selected(): SelectedTime { return { hours: 10, minutes: 1 }; }
}
