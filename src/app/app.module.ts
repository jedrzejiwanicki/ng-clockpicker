import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClockPickerLibModule, ClockPickerDialogService } from 'ng-clock-picker-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgClockPickerLibModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ClockPickerDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
