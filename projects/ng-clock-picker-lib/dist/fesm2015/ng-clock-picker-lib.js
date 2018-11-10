import { Component, Injectable, ComponentFactoryResolver, Directive, HostListener, ViewContainerRef, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class DialogComponent {
    constructor() { }
    /**
     * @param {?} data
     * @return {?}
     */
    close(data) { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ClockPickerDialogComponent extends DialogComponent {
    constructor() {
        super();
        this.hours = [1, 2, 3, 4, 5];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    handleClose() {
        this.close({});
    }
}
ClockPickerDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-clock-picker-dialog',
                template: "<div class=\"clock-picker\">\n  <nav class=\"clock-picker--panel\">\n    <button (click)=\"handleClose()\">close</button>\n  </nav>\n  <div class=\"outer-circle\">\n    <div *ngFor=\"let hour of hours\" class=\"circle\">hour</div>\n  </div>\n</div>\n",
                styles: [".clock-picker{width:300px;height:500px;position:fixed;top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fafafa;box-shadow:1px 2px 30px rgba(0,0,0,.2)}.clock-picker--panel{width:100%;height:40px;display:flex;justify-content:flex-end}.clock-picker--panel button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;cursor:pointer}.circle{position:relative;width:20;height:20;padding:0;border-radius:50%;list-style:none}.circle>*{display:block;position:absolute;top:50%;left:50%;width:10;height:10;margin:-5}.circle>:nth-of-type(1){-webkit-transform:rotate(0) translate(10) rotate(0);transform:rotate(0) translate(10) rotate(0)}.circle>:nth-of-type(2){-webkit-transform:rotate(72deg) translate(10) rotate(-72deg);transform:rotate(72deg) translate(10) rotate(-72deg)}.circle>:nth-of-type(3){-webkit-transform:rotate(144deg) translate(10) rotate(-144deg);transform:rotate(144deg) translate(10) rotate(-144deg)}.circle>:nth-of-type(4){-webkit-transform:rotate(216deg) translate(10) rotate(-216deg);transform:rotate(216deg) translate(10) rotate(-216deg)}.circle>:nth-of-type(5){-webkit-transform:rotate(288deg) translate(10) rotate(-288deg);transform:rotate(288deg) translate(10) rotate(-288deg)}"]
            }] }
];
/** @nocollapse */
ClockPickerDialogComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DynamicComponentsService {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @return {?}
     */
    load(component, vcr) {
        return new Observable((subscriber) => this.loadDynamicComponent(component, vcr, subscriber));
    }
    /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @param {?} subscriber
     * @return {?}
     */
    loadDynamicComponent(component, vcr, subscriber) {
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        const componentRef = vcr.createComponent(factory);
        ((/** @type {?} */ (componentRef.instance))).close = (data) => {
            componentRef.destroy();
            subscriber.next(data);
        };
    }
}
DynamicComponentsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DynamicComponentsService.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ClockPickerDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} dynamicComponentsService
     */
    constructor(viewContainerRef, dynamicComponentsService) {
        this.viewContainerRef = viewContainerRef;
        this.dynamicComponentsService = dynamicComponentsService;
    }
    /**
     * @return {?}
     */
    onFocus() {
        console.log('chuj');
        this.dynamicComponentsService
            .load(ClockPickerDialogComponent, this.viewContainerRef)
            .subscribe(data => console.log(data));
    }
}
ClockPickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngClockPicker]'
            },] }
];
/** @nocollapse */
ClockPickerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: DynamicComponentsService }
];
ClockPickerDirective.propDecorators = {
    onFocus: [{ type: HostListener, args: ['focus',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class NgClockPickerLibModule {
}
NgClockPickerLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ClockPickerDirective, ClockPickerDialogComponent],
                imports: [CommonModule],
                exports: [ClockPickerDirective],
                providers: [DynamicComponentsService],
                entryComponents: [ClockPickerDialogComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NgClockPickerLibModule, ClockPickerDialogComponent as ɵc, DialogComponent as ɵd, ClockPickerDirective as ɵa, DynamicComponentsService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2xvY2stcGlja2VyLWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY29tcG9uZW50cy9jbG9jay1waWNrZXItZGlhbG9nL2Nsb2NrLXBpY2tlci1kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9zZXJ2aWNlcy9keW5hbWljLWNvbXBvbmVudHMuc2VydmljZS50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvZGlyZWN0aXZlcy9jbG9jay1waWNrZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9uZy1jbG9jay1waWNrZXItbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGNsb3NlKGRhdGE6IGFueSk6IHZvaWQge31cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1jbG9jay1waWNrZXItZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb2NrLXBpY2tlci1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxuICBob3VycyA9IFsxLDIsMyw0LDVdXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFuZGxlQ2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZSh7fSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cbiAgcHVibGljIGxvYWQ8VCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudD4oY29tcG9uZW50OiBUeXBlPFQ+LCB2Y3I6IFZpZXdDb250YWluZXJSZWYpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcikgPT4gdGhpcy5sb2FkRHluYW1pY0NvbXBvbmVudChjb21wb25lbnQsIHZjciwgc3Vic2NyaWJlcikpO1xuICB9XG4gIHByaXZhdGUgbG9hZER5bmFtaWNDb21wb25lbnQ8VCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudD4oY29tcG9uZW50OiBUeXBlPFQ+LCB2Y3I6IFZpZXdDb250YWluZXJSZWYsIHN1YnNjcmliZXIpIHtcbiAgICBjb25zdCBmYWN0b3J5OiBhbnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZjci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cbiAgICAoPFQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5jbG9zZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICBzdWJzY3JpYmVyLm5leHQoZGF0YSk7XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Nsb2NrLXBpY2tlci1kaWFsb2cvY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdDbG9ja1BpY2tlcl0nXG59KVxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlOiBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UsXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjaHVqJylcbiAgICB0aGlzLmR5bmFtaWNDb21wb25lbnRzU2VydmljZVxuICAgICAgLmxvYWQoQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZilcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENsb2NrUGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Nsb2NrLXBpY2tlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9keW5hbWljLWNvbXBvbmVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbG9jay1waWNrZXItZGlhbG9nL2Nsb2NrLXBpY2tlci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Nsb2NrUGlja2VyRGlyZWN0aXZlLCBDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQ2xvY2tQaWNrZXJEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtEeW5hbWljQ29tcG9uZW50c1NlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2xvY2tQaWNrZXJMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFzQixlQUFlO0lBRW5DLGlCQUFpQjs7Ozs7SUFFakIsS0FBSyxDQUFDLElBQVMsS0FBVTtDQUMxQjs7Ozs7O0FDTEQs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