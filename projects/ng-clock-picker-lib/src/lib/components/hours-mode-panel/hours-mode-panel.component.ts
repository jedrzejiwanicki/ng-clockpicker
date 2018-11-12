import { Component, OnInit } from '@angular/core';

import { ClockPickerService } from '../../services/clock-picker.service';
import { hoursModeSlide } from '../../animations/hours-mode-slide';
import { HOURS_MODE_AM, HOURS_MODE_PM } from '../../utils/constants';

@Component({
  selector: 'ng-hours-mode-panel',
  templateUrl: './hours-mode-panel.component.html',
  styleUrls: ['./hours-mode-panel.component.scss'],
  animations: [hoursModeSlide],
})
export class HoursModePanelComponent implements OnInit {
  hoursModeOptions: string[] = [HOURS_MODE_AM, HOURS_MODE_PM];

  get hoursMode(): string {
    return this.clockPickerService.hoursMode;
  }

  toggleMode(): void {
    this.clockPickerService.setHoursMode(this.hoursModeOptions.find((mode: string) => mode !== this.hoursMode));
  }

  constructor(public clockPickerService: ClockPickerService) { }

  ngOnInit() {
  }

}
