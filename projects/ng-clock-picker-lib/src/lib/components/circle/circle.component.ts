import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { ClockPickerService } from '../../services/clock-picker.service';
import { scaleIn } from '../../animations/scale-in';
import { config } from '../../utils/constants';

@Component({
  selector: 'ng-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  animations: [scaleIn],
  encapsulation: ViewEncapsulation.None,
})
export class CircleComponent {
  @Output() onItemChange: EventEmitter<number> = new EventEmitter();

  constructor(public clockPickerService: ClockPickerService) { }

  get items(): Array<number> {
    return config[this.mode];
  }

  get mode(): string {
    return this.clockPickerService.mode;
  }

  handleClick(item: number) {
    this.onItemChange.emit(item);
  }
}
