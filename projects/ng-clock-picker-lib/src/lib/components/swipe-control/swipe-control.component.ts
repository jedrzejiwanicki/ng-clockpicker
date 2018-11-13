import { Component } from '@angular/core';

import { MODE_HOURS, MODE_MINUTES } from '../../utils/constants';
import { ClockPickerService } from '../../services/clock-picker.service';
import { VerticalEventHandler } from '../../classes/vertical-event-handler';

@Component({
  selector: 'ng-swipe-control',
  templateUrl: './swipe-control.component.html',
  styleUrls: ['./swipe-control.component.scss']
})
export class SwipeControlComponent {

  constructor(private clockPickerService: ClockPickerService) { }

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
      ? this.clockPickerService.decrement(MODE_HOURS)
      : this.clockPickerService.decrement(MODE_MINUTES);
  }

  handleMovementDown() {
    return this.clockPickerService.isHoursMode
      ? this.clockPickerService.increment(MODE_HOURS)
      : this.clockPickerService.increment(MODE_MINUTES);
  }
}
