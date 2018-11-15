import { Component, OnInit } from '@angular/core';

import { ClockPickerService } from '../../services/clock-picker.service';
import { hoursModeSlide } from '../../animations/hours-mode-slide';
import { HOURS_MODE_AM, HOURS_MODE_PM, HOURS_SCOPE_24, HOURS_SCOPE_12 } from '../../utils/constants';

@Component({
  selector: 'ng-hours-mode-panel',
  templateUrl: './hours-mode-panel.component.html',
  styleUrls: ['./hours-mode-panel.component.scss'],
  animations: [hoursModeSlide],
})
export class HoursModePanelComponent implements OnInit {
  hoursModeOptions: string[] = [HOURS_MODE_AM, HOURS_MODE_PM];
  hoursScopeOptions: string[] = [HOURS_SCOPE_12, HOURS_SCOPE_24];

  get hoursMode(): string {
    return this.clockPickerService.hoursMode;
  }

  get hoursScope(): string {
    return this.clockPickerService.hoursScope;
  }

  get selectedIndex(): string {
    return this.clockPickerService.config.is24
      ? this.hoursScopeOptions.indexOf(this.hoursScope).toString()
      : this.hoursModeOptions.indexOf(this.hoursMode).toString();
  }

  get options(): string[] {
    return this.clockPickerService.config.is24
      ? this.hoursScopeOptions
      : this.hoursModeOptions;
  }

  toggleMode(): void {
    return this.clockPickerService.config.is24
      ? this.clockPickerService.setHoursScope(this.hoursScopeOptions.find((item) => item !== this.hoursScope))
      : this.clockPickerService.setHoursMode(this.hoursModeOptions.find((item) => item !== this.hoursMode));
  }

  constructor(public clockPickerService: ClockPickerService) { }

  ngOnInit() {
  }

}
