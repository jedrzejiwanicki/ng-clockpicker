import { Injectable, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

import { DynamicComponentsService } from './dynamic-components.service';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
import { DialogConfig } from '../interfaces';


@Injectable()
export class ClockPickerDialogService {
  viewContainerRef: ViewContainerRef;

  constructor(public dynamicComponentsService: DynamicComponentsService) { }

  public registerViewContainerRef(vcr: ViewContainerRef): void {
    this.viewContainerRef = vcr;
  }

  public showClockPickerDialog(config?: DialogConfig): Observable<any> {
    return new Observable((subscriber) => this.dynamicComponentsService.loadDynamicComponent(
      ClockPickerDialogComponent,
      this.viewContainerRef,
      subscriber,
      config
      )
    );
  }
}
