import {Component, ViewEncapsulation} from '@angular/core';

import { convertToTimeFormat } from '../../utils/time';
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
    return convertToTimeFormat(this.clockPickerService.Time.selected.hours);
  }

  get displayMinutes(): string {
    return convertToTimeFormat(this.clockPickerService.Time.selected.minutes);
  }

  get isHoursMode(): boolean {
    return this.clockPickerService.Time.Mode.isModeHours;
  }

  get hoursMode(): string {
    return this.clockPickerService.Time.HoursMode.value;
  }

  handleMinutesClick(): void {
    this.clockPickerService.Time.Mode.setModeToMinutes();
  }

  handleHoursClick(): void {
    this.clockPickerService.Time.Mode.setModeToHours();
  }
}
