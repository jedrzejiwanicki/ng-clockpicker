import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { ClockPickerService } from '../../services/clock-picker.service';
import { scaleIn } from '../../animations/scale-in';
import { config } from '../../utils/constants';
import { SelectedTime } from '../../interfaces';

@Component({
  selector: 'ng-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  animations: [scaleIn],
  encapsulation: ViewEncapsulation.None,
})
export class CircleComponent {
  @Output() itemChange: EventEmitter<number> = new EventEmitter();

  constructor(public clockPickerService: ClockPickerService) { }

  get items(): Array<number> {
    return this.clockPickerService.clockValues(this.mode);
  }

  get mode(): string {
    return this.clockPickerService.Time.Mode.mode;
  }

  get selected(): SelectedTime {
    return this.clockPickerService.Time.selected;
  }

  isSelected(item: number): boolean {
    return this.selected[this.mode] === item;
  }

  handleClick(item: number) {
    this.itemChange.emit(item);
  }
}
