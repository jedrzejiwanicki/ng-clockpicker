import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';

import { DialogComponent } from '../../classes/abstract-dialog';
import { ClockPickerService } from '../../services/clock-picker.service';

import {
  config,
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
