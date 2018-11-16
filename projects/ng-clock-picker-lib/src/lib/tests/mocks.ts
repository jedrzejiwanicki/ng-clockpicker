import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockPickerConfig } from '../interfaces';
import { defaultConfig } from '../utils/constants';
import { Time } from '../classes/Time';
import { ClockPickerService } from '../services/clock-picker.service';


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
export class MockClockPickerService extends ClockPickerService {
  get Time(): Time { return new Time(); }
  get config(): ClockPickerConfig { return defaultConfig; }
}
