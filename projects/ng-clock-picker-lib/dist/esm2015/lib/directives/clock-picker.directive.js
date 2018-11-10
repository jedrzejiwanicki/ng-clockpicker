/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, HostListener, ViewContainerRef } from '@angular/core';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
import { DynamicComponentsService } from '../services/dynamic-components.service';
export class ClockPickerDirective {
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
if (false) {
    /** @type {?} */
    ClockPickerDirective.prototype.viewContainerRef;
    /** @type {?} */
    ClockPickerDirective.prototype.dynamicComponentsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jbG9jay1waWNrZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUtsRixNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixZQUNVLGdCQUFrQyxFQUNsQyx3QkFBa0Q7UUFEbEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3hELENBQUM7Ozs7SUFHTCxPQUFPO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsd0JBQXdCO2FBQzFCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDdkQsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBUGlDLGdCQUFnQjtZQUd6Qyx3QkFBd0I7OztzQkFXOUIsWUFBWSxTQUFDLE9BQU87Ozs7SUFKbkIsZ0RBQTBDOztJQUMxQyx3REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9keW5hbWljLWNvbXBvbmVudHMuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0Nsb2NrUGlja2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBkeW5hbWljQ29tcG9uZW50c1NlcnZpY2U6IER5bmFtaWNDb21wb25lbnRzU2VydmljZSxcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NodWonKVxuICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlXG4gICAgICAubG9hZChDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgfVxufVxuXG4iXX0=