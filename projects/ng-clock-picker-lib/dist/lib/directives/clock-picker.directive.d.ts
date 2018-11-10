import { ViewContainerRef } from '@angular/core';
import { DynamicComponentsService } from '../services/dynamic-components.service';
export declare class ClockPickerDirective {
    private viewContainerRef;
    private dynamicComponentsService;
    constructor(viewContainerRef: ViewContainerRef, dynamicComponentsService: DynamicComponentsService);
    onFocus(): void;
}
