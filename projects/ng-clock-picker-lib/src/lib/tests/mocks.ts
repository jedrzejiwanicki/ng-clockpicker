import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ClockPickerService } from '../services/clock-picker.service';

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
  selected = { hours: 10, minutes: 1 };

  get isHoursMode(): boolean { return false; }
}
