/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicComponentsService } from './dynamic-components.service';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
export class ClockPickerDialogService {
    /**
     * @param {?} dynamicComponentsService
     */
    constructor(dynamicComponentsService) {
        this.dynamicComponentsService = dynamicComponentsService;
    }
    /**
     * @param {?} vcr
     * @return {?}
     */
    registerViewContainerRef(vcr) {
        this.viewContainerRef = vcr;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    showClockPickerDialog(config) {
        return new Observable((subscriber) => this.dynamicComponentsService.loadDynamicComponent(ClockPickerDialogComponent, this.viewContainerRef, subscriber, config));
    }
}
ClockPickerDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClockPickerDialogService.ctorParameters = () => [
    { type: DynamicComponentsService }
];
if (false) {
    /** @type {?} */
    ClockPickerDialogService.prototype.viewContainerRef;
    /** @type {?} */
    ClockPickerDialogService.prototype.dynamicComponentsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2xvY2stcGlja2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jbG9jay1waWNrZXItZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFLN0csTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUduQyxZQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFJLENBQUM7Ozs7O0lBRW5FLHdCQUF3QixDQUFDLEdBQXFCO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxNQUEwQjtRQUNyRCxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsb0JBQW9CLENBQ3RGLDBCQUEwQixFQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLFVBQVUsRUFDVixNQUFNLENBQ0wsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbEJGLFVBQVU7Ozs7WUFMRix3QkFBd0I7Ozs7SUFPL0Isb0RBQW1DOztJQUV2Qiw0REFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Nsb2NrLXBpY2tlci1kaWFsb2cvY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlIHtcbiAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlOiBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyByZWdpc3RlclZpZXdDb250YWluZXJSZWYodmNyOiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmNyO1xuICB9XG5cbiAgcHVibGljIHNob3dDbG9ja1BpY2tlckRpYWxvZyhjb25maWc/OiBDbG9ja1BpY2tlckNvbmZpZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyKSA9PiB0aGlzLmR5bmFtaWNDb21wb25lbnRzU2VydmljZS5sb2FkRHluYW1pY0NvbXBvbmVudChcbiAgICAgIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50LFxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgICAgc3Vic2NyaWJlcixcbiAgICAgIGNvbmZpZ1xuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==