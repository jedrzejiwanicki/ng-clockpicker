import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClockPickerDirective } from './directives/clock-picker.directive';
import { DynamicComponentsService } from './services/dynamic-components.service';
import { ClockPickerDialogComponent } from './components/clock-picker-dialog/clock-picker-dialog.component';
import { CircleComponent } from './components/circle/circle.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { TimeDisplayComponent } from './components/time-display/time-display.component';
import { ClockPickerService } from './services/clock-picker.service';
import { HoursModePanelComponent } from './components/hours-mode-panel/hours-mode-panel.component';
import { ClockPickerDialogService } from './services/clock-picker-dialog.service';
import { ClockFaceComponent } from './components/clock-face/clock-face.component';
import { MovementEmitterComponent } from './components/movement-emitter/movement-emitter.component';
import { EnterLeaveComponent } from './components/enter-leave/enter-leave.component';

@NgModule({
  declarations: [
    ClockPickerDirective,
    ClockPickerDialogComponent,
    CircleComponent,
    CircleButtonComponent,
    TimeDisplayComponent,
    HoursModePanelComponent,
    ClockFaceComponent,
    MovementEmitterComponent,
    EnterLeaveComponent,
  ],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [ClockPickerDirective],
  providers: [DynamicComponentsService, ClockPickerService, ClockPickerDialogService],
  entryComponents: [ClockPickerDialogComponent],
})

export class NgClockPickerLibModule { }
