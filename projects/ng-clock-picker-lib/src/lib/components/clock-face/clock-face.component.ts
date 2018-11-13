import { Component } from '@angular/core';

import { ClockFaceBuilder } from '../../classes/ClockFaceBuilder';
import { ClockFaceItem, SelectedTime, CentralPointCoordinates } from '../../interfaces';
import { ClockPickerService } from '../../services/clock-picker.service';
import { MODE_MINUTES, MODE_HOURS } from '../../utils/constants';

@Component({
  selector: 'ng-clock-face',
  templateUrl: './clock-face.component.html',
  styleUrls: ['./clock-face.component.scss']
})
export class ClockFaceComponent {
  radius = 90;
  center: CentralPointCoordinates = { x1: this.radius, y1: this.radius };

  constructor(private clockPickerService: ClockPickerService) { }

  get clockFaceItems(): { minutes: ClockFaceItem[], hours: ClockFaceItem[] } {
    return {
      minutes: new ClockFaceBuilder(MODE_MINUTES, { radius: this.radius, offset: -45 }).faceControls,
      hours: new ClockFaceBuilder(MODE_HOURS, { radius: this.radius, offset: 3 }).faceControls
    };
  }

  get mode(): string {
    return this.clockPickerService.mode;
  }

  get selected(): SelectedTime {
    return this.clockPickerService.selected;
  }

  isSelected(item: number): boolean {
    return this.selected[this.mode] === item;
  }

}
