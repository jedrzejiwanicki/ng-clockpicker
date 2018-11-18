import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { DialogComponent } from '../../classes/abstract-dialog';
import { ClockPickerService } from '../../services/clock-picker.service';
import { ClockPickerConfig } from '../../interfaces';
import { EnterLeaveComponent } from '../enter-leave/enter-leave.component';

@Component({
  selector: 'ng-clock-picker-dialog',
  templateUrl: './clock-picker-dialog.component.html',
  styleUrls: ['./clock-picker-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ClockPickerDialogComponent extends DialogComponent {
  @ViewChild('enterLeave') private enterLeaveCmp: EnterLeaveComponent;

  constructor(public clockPickerService: ClockPickerService) { super(); }

  get items() {
    return this.clockPickerService.clockValues(this.clockPickerService.Time.Mode.mode);
  }

  get fullTime(): string {
    return this.clockPickerService.Time.displayTime;
  }

  get config(): ClockPickerConfig {
    return this.clockPickerService.config;
  }

  handleClose(): void {
    this.enterLeaveCmp.requestClose().subscribe(() => this.close(this.fullTime));
  }

  cancel(): void {
    this.enterLeaveCmp.requestClose().subscribe(() => this.close(null));
  }

  handleOverlayClick(event: Event): void {
    event.stopPropagation();

    if (this.config.closeOnOverlayClick) {
      this.cancel();
    }
  }

  handleItemChange(item: number) {
    if (this.clockPickerService.Time.Mode.isModeHours) {
      this.clockPickerService.Time.hours = item;
      this.clockPickerService.Time.Mode.setModeToMinutes();
    } else {
      this.clockPickerService.Time.minutes = item;
      this.close(this.fullTime);
    }
  }
}
