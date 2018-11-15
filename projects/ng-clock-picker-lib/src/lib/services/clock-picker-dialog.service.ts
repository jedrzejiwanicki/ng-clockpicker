import { Injectable, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

import { DynamicComponentsService } from './dynamic-components.service';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
import { ClockPickerConfig } from '../interfaces';
import { ClockPickerService } from './clock-picker.service';

@Injectable()
export class ClockPickerDialogService {
  viewContainerRef: ViewContainerRef;

  constructor(
    private dynamicComponentsService: DynamicComponentsService,
    private clockPickerService: ClockPickerService,
  ) { }

  public registerViewContainerRef(vcr: ViewContainerRef): void {
    this.viewContainerRef = vcr;
  }

  public showClockPickerDialog(config?: ClockPickerConfig): Observable<any> {
    this.clockPickerService.config = config;
    return new Observable((subscriber) => this.dynamicComponentsService.loadDynamicComponent(
      ClockPickerDialogComponent,
      this.viewContainerRef,
      subscriber
      )
    );
  }
}
