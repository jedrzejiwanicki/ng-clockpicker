import {Component, ViewEncapsulation} from '@angular/core';

import { convertToTimeFormat } from '../../utils/time';
import { MODE_HOURS, MODE_MINUTES} from '../../utils/constants';
import { ClockPickerService } from '../../services/clock-picker.service';

@Component({
  selector: 'ng-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TimeDisplayComponent {

  constructor(public clockPickerService: ClockPickerService) { }

  get displayHours(): string {
    return convertToTimeFormat(this.clockPickerService.selected.hours);
  }

  get displayMinutes(): string {
    return convertToTimeFormat(this.clockPickerService.selected.minutes);
  }

  get isHoursMode(): boolean {
    return this.clockPickerService.isHoursMode;
  }

  handleMinutesClick(): void {
    this.clockPickerService.setMode(MODE_MINUTES);
  }

  handleHoursClick(): void {
    this.clockPickerService.setMode(MODE_HOURS);
  }
}
