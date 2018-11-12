import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClockPickerDialogService, DialogConfig } from 'ng-clock-picker-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  abc;
  config: DialogConfig = { wrapperClassName: 'xcd', closeOnOverlayClick: true };
  form: FormGroup = this.formBuilder.group({ time: [''] });

  constructor(private vcr: ViewContainerRef, private formBuilder: FormBuilder, private s: ClockPickerDialogService) {}

  ngOnInit() {
    this.s.registerViewContainerRef(this.vcr);
    this.s.showClockPickerDialog({ wrapperClassName: 'x' }).subscribe(a => console.log(a))
    this.form.valueChanges.subscribe(value => console.log(this.abc));
  }
}
