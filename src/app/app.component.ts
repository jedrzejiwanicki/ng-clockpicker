import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClockPickerDialogService, ClockPickerConfig } from 'ng-clock-picker-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  configA: ClockPickerConfig = { wrapperClassName: 'my-class-name', closeOnOverlayClick: true };
  configB: ClockPickerConfig = { ...this.configA, is24: true };

  form: FormGroup = this.formBuilder.group({ time: [''] });

  constructor(private vcr: ViewContainerRef, private formBuilder: FormBuilder) {}

}
