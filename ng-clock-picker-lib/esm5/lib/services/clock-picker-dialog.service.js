/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicComponentsService } from './dynamic-components.service';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
var ClockPickerDialogService = /** @class */ (function () {
    function ClockPickerDialogService(dynamicComponentsService) {
        this.dynamicComponentsService = dynamicComponentsService;
    }
    /**
     * @param {?} vcr
     * @return {?}
     */
    ClockPickerDialogService.prototype.registerViewContainerRef = /**
     * @param {?} vcr
     * @return {?}
     */
    function (vcr) {
        this.viewContainerRef = vcr;
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    ClockPickerDialogService.prototype.showClockPickerDialog = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return new Observable(function (subscriber) { return _this.dynamicComponentsService.loadDynamicComponent(ClockPickerDialogComponent, _this.viewContainerRef, subscriber, config); });
    };
    ClockPickerDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClockPickerDialogService.ctorParameters = function () { return [
        { type: DynamicComponentsService }
    ]; };
    return ClockPickerDialogService;
}());
export { ClockPickerDialogService };
if (false) {
    /** @type {?} */
    ClockPickerDialogService.prototype.viewContainerRef;
    /** @type {?} */
    ClockPickerDialogService.prototype.dynamicComponentsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2xvY2stcGlja2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jbG9jay1waWNrZXItZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFJN0c7SUFJRSxrQ0FBbUIsd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFBSSxDQUFDOzs7OztJQUVuRSwyREFBd0I7Ozs7SUFBL0IsVUFBZ0MsR0FBcUI7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLHdEQUFxQjs7OztJQUE1QixVQUE2QixNQUEwQjtRQUF2RCxpQkFRQztRQVBDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBQyxVQUFVLElBQUssT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQ3RGLDBCQUEwQixFQUMxQixLQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLFVBQVUsRUFDVixNQUFNLENBQ0wsRUFMbUMsQ0FLbkMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFVBQVU7Ozs7Z0JBTEYsd0JBQXdCOztJQXdCakMsK0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSx3QkFBd0I7OztJQUNuQyxvREFBbUM7O0lBRXZCLDREQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSAnLi9keW5hbWljLWNvbXBvbmVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2Uge1xuICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkeW5hbWljQ29tcG9uZW50c1NlcnZpY2U6IER5bmFtaWNDb21wb25lbnRzU2VydmljZSkgeyB9XG5cbiAgcHVibGljIHJlZ2lzdGVyVmlld0NvbnRhaW5lclJlZih2Y3I6IFZpZXdDb250YWluZXJSZWYpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYgPSB2Y3I7XG4gIH1cblxuICBwdWJsaWMgc2hvd0Nsb2NrUGlja2VyRGlhbG9nKGNvbmZpZz86IENsb2NrUGlja2VyQ29uZmlnKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXIpID0+IHRoaXMuZHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlLmxvYWREeW5hbWljQ29tcG9uZW50KFxuICAgICAgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQsXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYsXG4gICAgICBzdWJzY3JpYmVyLFxuICAgICAgY29uZmlnXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19