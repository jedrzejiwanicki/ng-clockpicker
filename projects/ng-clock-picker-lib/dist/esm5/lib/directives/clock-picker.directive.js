/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, HostListener, ViewContainerRef } from '@angular/core';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
import { DynamicComponentsService } from '../services/dynamic-components.service';
var ClockPickerDirective = /** @class */ (function () {
    function ClockPickerDirective(viewContainerRef, dynamicComponentsService) {
        this.viewContainerRef = viewContainerRef;
        this.dynamicComponentsService = dynamicComponentsService;
    }
    /**
     * @return {?}
     */
    ClockPickerDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        console.log('chuj');
        this.dynamicComponentsService
            .load(ClockPickerDialogComponent, this.viewContainerRef)
            .subscribe(function (data) { return console.log(data); });
    };
    ClockPickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngClockPicker]'
                },] }
    ];
    /** @nocollapse */
    ClockPickerDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: DynamicComponentsService }
    ]; };
    ClockPickerDirective.propDecorators = {
        onFocus: [{ type: HostListener, args: ['focus',] }]
    };
    return ClockPickerDirective;
}());
export { ClockPickerDirective };
if (false) {
    /** @type {?} */
    ClockPickerDirective.prototype.viewContainerRef;
    /** @type {?} */
    ClockPickerDirective.prototype.dynamicComponentsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jbG9jay1waWNrZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVsRjtJQUlFLDhCQUNVLGdCQUFrQyxFQUNsQyx3QkFBa0Q7UUFEbEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3hELENBQUM7Ozs7SUFHTCxzQ0FBTzs7O0lBRFA7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzthQUN2RCxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dCQVBpQyxnQkFBZ0I7Z0JBR3pDLHdCQUF3Qjs7OzBCQVc5QixZQUFZLFNBQUMsT0FBTzs7SUFPdkIsMkJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLG9CQUFvQjs7O0lBRTdCLGdEQUEwQzs7SUFDMUMsd0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Nsb2NrLXBpY2tlci1kaWFsb2cvY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdDbG9ja1BpY2tlcl0nXG59KVxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlOiBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UsXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjaHVqJylcbiAgICB0aGlzLmR5bmFtaWNDb21wb25lbnRzU2VydmljZVxuICAgICAgLmxvYWQoQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZilcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gIH1cbn1cblxuIl19