import { ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { DialogComponent } from '../classes/abstract-dialog';
import { ClockPickerConfig } from '../interfaces';
export declare class DynamicComponentsService {
    private componentFactoryResolver;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    loadDynamicComponent<T extends DialogComponent>(component: Type<T>, vcr: ViewContainerRef, subscriber: any, config?: ClockPickerConfig): void;
}
