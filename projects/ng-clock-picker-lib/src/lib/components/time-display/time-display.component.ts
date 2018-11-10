import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

import { convertToTimeFormat } from '../../utils/time';
import { MODE_HOURS, MODE_MINUTES} from '../../utils/constants';

@Component({
  selector: 'ng-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TimeDisplayComponent {
  @Input() hours: number;
  @Input() minutes: number;
  @Output() switch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  get displayHours(): string {
    return convertToTimeFormat(this.hours);
  }

  get displayMinutes(): string {
    return convertToTimeFormat(this.minutes);
  }

  handleMinutesClick(): void {
    this.switch.emit(MODE_MINUTES);
  }

  handleHoursClick(): void {
    this.switch.emit(MODE_HOURS);
  }
}
