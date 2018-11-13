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
  config: ClockPickerConfig = { wrapperClassName: 'my-class-name', closeOnOverlayClick: true };
  form: FormGroup = this.formBuilder.group({ time: [''] });

  constructor(private vcr: ViewContainerRef, private formBuilder: FormBuilder, private s: ClockPickerDialogService) {}

}
