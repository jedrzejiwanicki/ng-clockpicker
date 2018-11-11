import { Component, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';

import { DialogComponent } from '../../classes/abstract-dialog';
import { VerticalEventHandler } from '../../classes/vertical-event-handler'
import { ClockPickerService } from '../../services/clock-picker.service';

import {
  config,
  MODE_MINUTES,
  MODE_HOURS,
  HOURS_MODE_AM,
  HOURS_MODE_PM,
} from '../../utils/constants';
import { enterLeave } from '../../animations/enter-leave';

@Component({
  selector: 'ng-clock-picker-dialog',
  templateUrl: './clock-picker-dialog.component.html',
  styleUrls: ['./clock-picker-dialog.component.scss'],
  animations: [enterLeave],
  encapsulation: ViewEncapsulation.None,
})

export class ClockPickerDialogComponent extends DialogComponent {


  constructor(public clockPickerService: ClockPickerService) { super(); }

  get items() {
    return config[this.clockPickerService.mode];
  }

  get fullTime(): string {
    return this.clockPickerService.fullTime;
  }

  handleClose(): void {
    this.close(null);
  }

  handleMovement(movement: string) {
    switch (movement) {
      case VerticalEventHandler.MovementUp:
        return this.handleMovementUp();
      case VerticalEventHandler.MovementDown:
        return this.handleMovementDown();
    }
  }

  handleMovementUp() {
    return this.clockPickerService.isHoursMode
      ? this.clockPickerService.increment(MODE_HOURS)
      : this.clockPickerService.increment(MODE_MINUTES)
  }

  handleMovementDown() {
    return this.clockPickerService.isHoursMode
      ? this.clockPickerService.decrement(MODE_HOURS)
      : this.clockPickerService.decrement(MODE_MINUTES)
  }

  handleItemChange(item: number) {
    if (this.clockPickerService.isHoursMode) {
      this.clockPickerService.setHours(item);
      this.clockPickerService.setModeToMinutes()
    } else {
      this.clockPickerService.setMinutes(item);
      this.close(this.fullTime);
    }
  }
}
