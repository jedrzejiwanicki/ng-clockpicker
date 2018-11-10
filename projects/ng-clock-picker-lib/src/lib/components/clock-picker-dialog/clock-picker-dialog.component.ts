import { Component, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';

import { DialogComponent } from '../../classes/abstract-dialog';
import {
  hoursConfig,
  minutesConfig,
  MODE_MINUTES,
  MODE_HOURS,
  HOURS_MODE_AM,
  HOURS_MODE_PM,
} from '../../utils/constants';
import { getDisplayTime } from '../../utils/time';
import { enterLeave } from '../../animations/enter-leave';

@Component({
  selector: 'ng-clock-picker-dialog',
  templateUrl: './clock-picker-dialog.component.html',
  styleUrls: ['./clock-picker-dialog.component.scss'],
  animations: [enterLeave],
  encapsulation: ViewEncapsulation.None,
})

export class ClockPickerDialogComponent extends DialogComponent {
  mode = MODE_HOURS;
  hoursMode = HOURS_MODE_AM;
  selectedHours = 0;
  selectedMinutes = 0;

  constructor() { super(); }

  get isHoursMode(): boolean {
    return this.mode === MODE_HOURS;
  }

  get isMinutesMode(): boolean {
    return this.mode === MODE_MINUTES;
  }

  get items() {
    return this.isHoursMode
      ? hoursConfig[this.hoursMode]
      : minutesConfig;
  }

  get fullTime(): string {
    return getDisplayTime(this.selectedHours, this.selectedMinutes);
  }

  handleClose(): void {
    this.close(null);
  }

  setHoursModeAm(): void {
    this.hoursMode = HOURS_MODE_AM;
  }

  setHoursModePm(): void {
    this.hoursMode = HOURS_MODE_PM;
  }

  setMode(mode: string): void {
    this.mode = mode;
  }

  handleItemChange(item: number) {
    if (this.isHoursMode) {
      this.selectedHours = item;
      this.setMode(MODE_MINUTES);
    } else {
      this.selectedMinutes = item;
      this.close(this.fullTime);
    }
  }

  handleSwitch(mode: string) {
    this.setMode(mode);
  }
}
