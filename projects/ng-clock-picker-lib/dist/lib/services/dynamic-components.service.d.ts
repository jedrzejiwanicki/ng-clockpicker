import { ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogComponent } from '../components/dialog/dialog.component';
export declare class DynamicComponentsService {
    private componentFactoryResolver;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    load<T extends DialogComponent>(component: Type<T>, vcr: ViewContainerRef): Observable<any>;
    private loadDynamicComponent;
}
