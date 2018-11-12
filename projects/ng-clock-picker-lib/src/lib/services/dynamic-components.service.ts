import { Injectable, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';

import { DialogComponent } from '../classes/abstract-dialog';
import { DialogConfig } from '../interfaces';

@Injectable()
export class DynamicComponentsService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public loadDynamicComponent<T extends DialogComponent>(
    component: Type<T>,
    vcr: ViewContainerRef,
    subscriber,
    config?: DialogConfig
  ) {
    const factory: any = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = vcr.createComponent(factory);


    for (const key in config) {
      (<T>componentRef.instance)[key] = config[key];
    }

    (<T>componentRef.instance).close = (data: any) => {
      componentRef.destroy();
      subscriber.next(data);
    };
  }
}
