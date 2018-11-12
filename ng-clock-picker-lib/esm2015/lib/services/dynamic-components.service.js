/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
export class DynamicComponentsService {
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
     * @param {?} subscriber
     * @param {?=} config
     * @return {?}
     */
    loadDynamicComponent(component, vcr, subscriber, config) {
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        const componentRef = vcr.createComponent(factory);
        for (const key in config) {
            ((/** @type {?} */ (componentRef.instance)))[key] = config[key];
        }
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
if (false) {
    /** @type {?} */
    DynamicComponentsService.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2R5bmFtaWMtY29tcG9uZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUEwQixNQUFNLGVBQWUsQ0FBQztBQU03RixNQUFNLE9BQU8sd0JBQXdCOzs7O0lBRW5DLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUksQ0FBQzs7Ozs7Ozs7O0lBRXBFLG9CQUFvQixDQUN6QixTQUFrQixFQUNsQixHQUFxQixFQUNyQixVQUFVLEVBQ1YsTUFBMEI7O2NBRXBCLE9BQU8sR0FBUSxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDOztjQUMvRSxZQUFZLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFHakQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsQ0FBQyxtQkFBRyxZQUFZLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0M7UUFFRCxDQUFDLG1CQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQy9DLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQztJQUNKLENBQUM7OztZQXZCRixVQUFVOzs7O1lBTFUsd0JBQXdCOzs7O0lBUS9CLDREQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jbGFzc2VzL2Fic3RyYWN0LWRpYWxvZyc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cblxuICBwdWJsaWMgbG9hZER5bmFtaWNDb21wb25lbnQ8VCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudD4oXG4gICAgY29tcG9uZW50OiBUeXBlPFQ+LFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBzdWJzY3JpYmVyLFxuICAgIGNvbmZpZz86IENsb2NrUGlja2VyQ29uZmlnXG4gICkge1xuICAgIGNvbnN0IGZhY3Rvcnk6IGFueSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdmNyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAoPFQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKVtrZXldID0gY29uZmlnW2tleV07XG4gICAgfVxuXG4gICAgKDxUPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY2xvc2UgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgc3Vic2NyaWJlci5uZXh0KGRhdGEpO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==