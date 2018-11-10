import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  abc;
  form: FormGroup = this.formBuilder.group({ time: [''] });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form.valueChanges.subscribe(value => console.log(this.abc));
  }
}
