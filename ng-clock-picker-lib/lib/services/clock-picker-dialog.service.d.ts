import { ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicComponentsService } from './dynamic-components.service';
import { ClockPickerConfig } from '../interfaces';
export declare class ClockPickerDialogService {
    dynamicComponentsService: DynamicComponentsService;
    viewContainerRef: ViewContainerRef;
    constructor(dynamicComponentsService: DynamicComponentsService);
    registerViewContainerRef(vcr: ViewContainerRef): void;
    showClockPickerDialog(config?: ClockPickerConfig): Observable<any>;
}
