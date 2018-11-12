/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { convertToTimeFormat } from '../../utils/time';
import { MODE_HOURS, MODE_MINUTES } from '../../utils/constants';
import { ClockPickerService } from '../../services/clock-picker.service';
var TimeDisplayComponent = /** @class */ (function () {
    function TimeDisplayComponent(clockPickerService) {
        this.clockPickerService = clockPickerService;
    }
    Object.defineProperty(TimeDisplayComponent.prototype, "displayHours", {
        get: /**
         * @return {?}
         */
        function () {
            return convertToTimeFormat(this.clockPickerService.selected.hours);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeDisplayComponent.prototype, "displayMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return convertToTimeFormat(this.clockPickerService.selected.minutes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeDisplayComponent.prototype, "isHoursMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.isHoursMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeDisplayComponent.prototype, "hoursMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.hoursMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimeDisplayComponent.prototype.handleMinutesClick = /**
     * @return {?}
     */
    function () {
        this.clockPickerService.setMode(MODE_MINUTES);
    };
    /**
     * @return {?}
     */
    TimeDisplayComponent.prototype.handleHoursClick = /**
     * @return {?}
     */
    function () {
        this.clockPickerService.setMode(MODE_HOURS);
    };
    TimeDisplayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-time-display',
                    template: "<div class=\"clock-picker__time-display\">\n  <button\n    (click)=\"handleHoursClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': isHoursMode}\"\n    >{{displayHours}}\n  </button>\n  <span class=\"clock-picker__time-display__divider\">:</span>\n  <button\n    (click)=\"handleMinutesClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': !isHoursMode}\"\n  >\n    {{displayMinutes}}\n  </button>\n  <ng-hours-mode-panel></ng-hours-mode-panel>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".clock-picker__time-display{display:flex;justify-content:center;align-items:center;margin:20px 0}.clock-picker__time-display__button,.clock-picker__time-display__divider,.clock-picker__time-display__hours-mode{color:#495351}.clock-picker__time-display__button,.clock-picker__time-display__divider{font:400 30px Arial,Helvetica,sans-serif}.clock-picker__time-display__hours-mode{margin:0 5px;font:400 20px Arial,Helvetica,sans-serif}.clock-picker__time-display__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:30px;cursor:pointer}.clock-picker__time-display__button--selected,.clock-picker__time-display__button:hover{color:#6d7c79}"]
                }] }
    ];
    /** @nocollapse */
    TimeDisplayComponent.ctorParameters = function () { return [
        { type: ClockPickerService }
    ]; };
    return TimeDisplayComponent;
}());
export { TimeDisplayComponent };
if (false) {
    /** @type {?} */
    TimeDisplayComponent.prototype.clockPickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1kaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aW1lLWRpc3BsYXkvdGltZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXpFO0lBUUUsOEJBQW1CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQUksQ0FBQztJQUU5RCxzQkFBSSw4Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7Ozs7SUFFRCxpREFBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELCtDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLG9tQkFBNEM7b0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBUFEsa0JBQWtCOztJQW1DM0IsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTNCWSxvQkFBb0I7OztJQUVuQixrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb252ZXJ0VG9UaW1lRm9ybWF0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBNT0RFX0hPVVJTLCBNT0RFX01JTlVURVN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbG9jay1waWNrZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXRpbWUtZGlzcGxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aW1lLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZURpc3BsYXlDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjbG9ja1BpY2tlclNlcnZpY2U6IENsb2NrUGlja2VyU2VydmljZSkgeyB9XG5cbiAgZ2V0IGRpc3BsYXlIb3VycygpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb252ZXJ0VG9UaW1lRm9ybWF0KHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNlbGVjdGVkLmhvdXJzKTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5TWludXRlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb252ZXJ0VG9UaW1lRm9ybWF0KHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNlbGVjdGVkLm1pbnV0ZXMpO1xuICB9XG5cbiAgZ2V0IGlzSG91cnNNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5pc0hvdXJzTW9kZTtcbiAgfVxuXG4gIGdldCBob3Vyc01vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaG91cnNNb2RlO1xuICB9XG5cbiAgaGFuZGxlTWludXRlc0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNldE1vZGUoTU9ERV9NSU5VVEVTKTtcbiAgfVxuXG4gIGhhbmRsZUhvdXJzQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0TW9kZShNT0RFX0hPVVJTKTtcbiAgfVxufVxuIl19