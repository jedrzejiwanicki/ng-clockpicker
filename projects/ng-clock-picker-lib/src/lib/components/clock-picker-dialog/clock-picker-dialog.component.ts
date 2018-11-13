import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';

import { DialogComponent } from '../../classes/abstract-dialog';
import { VerticalEventHandler } from '../../classes/vertical-event-handler';
import { ClockPickerService } from '../../services/clock-picker.service';

import {
  config,
  MODE_MINUTES,
  MODE_HOURS,
} from '../../utils/constants';

@Component({
  selector: 'ng-clock-picker-dialog',
  templateUrl: './clock-picker-dialog.component.html',
  styleUrls: ['./clock-picker-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ClockPickerDialogComponent extends DialogComponent implements OnDestroy {
  constructor(public clockPickerService: ClockPickerService) { super(); }

  get items() {
    return config[this.clockPickerService.mode];
  }

  get fullTime(): string {
    return this.clockPickerService.fullTime;
  }

  handleClose(): void {
    this.close(this.fullTime);
  }

  cancel(): void {
    this.close(null); //
  }

  handleOverlayClick(event: Event): void {
    event.stopPropagation();

    if (this.closeOnOverlayClick) {
      this.cancel();
    }
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
      : this.clockPickerService.increment(MODE_MINUTES);
  }

  handleMovementDown() {
    return this.clockPickerService.isHoursMode
      ? this.clockPickerService.decrement(MODE_HOURS)
      : this.clockPickerService.decrement(MODE_MINUTES);
  }

  handleItemChange(item: number) {
    if (this.clockPickerService.isHoursMode) {
      this.clockPickerService.setHours(item);
      this.clockPickerService.setModeToMinutes();
    } else {
      this.clockPickerService.setMinutes(item);
      this.close(this.fullTime);
    }
  }

  ngOnDestroy() {
    this.clockPickerService.reset();
  }
}
