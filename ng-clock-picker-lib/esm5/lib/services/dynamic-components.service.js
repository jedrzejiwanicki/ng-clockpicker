/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
var DynamicComponentsService = /** @class */ (function () {
    function DynamicComponentsService(componentFactoryResolver) {
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
    DynamicComponentsService.prototype.loadDynamicComponent = /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @param {?} subscriber
     * @param {?=} config
     * @return {?}
     */
    function (component, vcr, subscriber, config) {
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        var componentRef = vcr.createComponent(factory);
        for (var key in config) {
            ((/** @type {?} */ (componentRef.instance)))[key] = config[key];
        }
        ((/** @type {?} */ (componentRef.instance))).close = function (data) {
            componentRef.destroy();
            subscriber.next(data);
        };
    };
    DynamicComponentsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DynamicComponentsService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return DynamicComponentsService;
}());
export { DynamicComponentsService };
if (false) {
    /** @type {?} */
    DynamicComponentsService.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2R5bmFtaWMtY29tcG9uZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUs3RjtJQUdFLGtDQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFJLENBQUM7Ozs7Ozs7OztJQUVwRSx1REFBb0I7Ozs7Ozs7O0lBQTNCLFVBQ0UsU0FBa0IsRUFDbEIsR0FBcUIsRUFDckIsVUFBVSxFQUNWLE1BQTBCOztZQUVwQixPQUFPLEdBQVEsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQzs7WUFDL0UsWUFBWSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO1FBR2pELEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3hCLENBQUMsbUJBQUcsWUFBWSxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsQ0FBQyxtQkFBRyxZQUFZLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBQyxJQUFTO1lBQzNDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXZCRixVQUFVOzs7O2dCQUxVLHdCQUF3Qjs7SUE2QjdDLCtCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2Qlksd0JBQXdCOzs7SUFFdkIsNERBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NsYXNzZXMvYWJzdHJhY3QtZGlhbG9nJztcbmltcG9ydCB7IENsb2NrUGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHsgfVxuXG4gIHB1YmxpYyBsb2FkRHluYW1pY0NvbXBvbmVudDxUIGV4dGVuZHMgRGlhbG9nQ29tcG9uZW50PihcbiAgICBjb21wb25lbnQ6IFR5cGU8VD4sXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHN1YnNjcmliZXIsXG4gICAgY29uZmlnPzogQ2xvY2tQaWNrZXJDb25maWdcbiAgKSB7XG4gICAgY29uc3QgZmFjdG9yeTogYW55ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB2Y3IuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjb25maWcpIHtcbiAgICAgICg8VD5jb21wb25lbnRSZWYuaW5zdGFuY2UpW2tleV0gPSBjb25maWdba2V5XTtcbiAgICB9XG5cbiAgICAoPFQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5jbG9zZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICBzdWJzY3JpYmVyLm5leHQoZGF0YSk7XG4gICAgfTtcbiAgfVxufVxuIl19