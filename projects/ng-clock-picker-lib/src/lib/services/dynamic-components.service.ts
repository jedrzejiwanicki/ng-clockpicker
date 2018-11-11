import { Injectable, ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogComponent } from '../classes/abstract-dialog';
import { DialogConfig } from '../interfaces';

@Injectable()
export class DynamicComponentsService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  public load<T extends DialogComponent>(component: Type<T>, vcr: ViewContainerRef, config: DialogConfig): Observable<any> {
    return new Observable((subscriber) => this.loadDynamicComponent(component, vcr, subscriber, config));
  }
  private loadDynamicComponent<T extends DialogComponent>(component: Type<T>, vcr: ViewContainerRef, subscriber, config: DialogConfig) {
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
