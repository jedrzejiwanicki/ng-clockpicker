/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ClockPickerService } from '../../services/clock-picker.service';
import { hoursModeSlide } from '../../animations/hours-mode-slide';
import { HOURS_MODE_AM, HOURS_MODE_PM } from '../../utils/constants';
var HoursModePanelComponent = /** @class */ (function () {
    function HoursModePanelComponent(clockPickerService) {
        this.clockPickerService = clockPickerService;
        this.hoursModeOptions = [HOURS_MODE_AM, HOURS_MODE_PM];
    }
    Object.defineProperty(HoursModePanelComponent.prototype, "hoursMode", {
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
    HoursModePanelComponent.prototype.toggleMode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clockPickerService.setHoursMode(this.hoursModeOptions.find(function (mode) { return mode !== _this.hoursMode; }));
    };
    /**
     * @return {?}
     */
    HoursModePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    HoursModePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-hours-mode-panel',
                    template: "<div class=\"clock-picker__hours-mode-panel\">\n  <div [@hoursModeSlide]=\"hoursMode\" class=\"clock-picker__hours-mode-panel__scrollable\">\n    <button\n      *ngFor=\"let option of hoursModeOptions\"\n      (click)=\"toggleMode()\"\n      class=\"clock-picker__hours-mode-panel__button\"\n    >{{option.toLowerCase()}}</button>\n  </div>\n</div>\n",
                    animations: [hoursModeSlide],
                    styles: [".clock-picker__hours-mode-panel{position:relative;height:19px;overflow:hidden}.clock-picker__hours-mode-panel__scrollable{display:flex;flex-direction:column}.clock-picker__hours-mode-panel__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:19px;cursor:pointer;margin:0 5px;font:400 13px Arial,Helvetica,sans-serif;color:#495351}"]
                }] }
    ];
    /** @nocollapse */
    HoursModePanelComponent.ctorParameters = function () { return [
        { type: ClockPickerService }
    ]; };
    return HoursModePanelComponent;
}());
export { HoursModePanelComponent };
if (false) {
    /** @type {?} */
    HoursModePanelComponent.prototype.hoursModeOptions;
    /** @type {?} */
    HoursModePanelComponent.prototype.clockPickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaG91cnMtbW9kZS1wYW5lbC9ob3Vycy1tb2RlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRTtJQWlCRSxpQ0FBbUIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFWekQscUJBQWdCLEdBQWEsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFVQyxDQUFDO0lBUjlELHNCQUFJLDhDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFDLElBQVksSUFBSyxPQUFBLElBQUksS0FBSyxLQUFJLENBQUMsU0FBUyxFQUF2QixDQUF1QixDQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7O0lBSUQsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiwwV0FBZ0Q7b0JBRWhELFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQzs7aUJBQzdCOzs7O2dCQVRRLGtCQUFrQjs7SUEwQjNCLDhCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FoQlksdUJBQXVCOzs7SUFDbEMsbURBQTREOztJQVVoRCxxREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbG9ja1BpY2tlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbG9jay1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBob3Vyc01vZGVTbGlkZSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvaG91cnMtbW9kZS1zbGlkZSc7XG5pbXBvcnQgeyBIT1VSU19NT0RFX0FNLCBIT1VSU19NT0RFX1BNIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctaG91cnMtbW9kZS1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob3Vycy1tb2RlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbaG91cnNNb2RlU2xpZGVdLFxufSlcbmV4cG9ydCBjbGFzcyBIb3Vyc01vZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGhvdXJzTW9kZU9wdGlvbnM6IHN0cmluZ1tdID0gW0hPVVJTX01PREVfQU0sIEhPVVJTX01PREVfUE1dO1xuXG4gIGdldCBob3Vyc01vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaG91cnNNb2RlO1xuICB9XG5cbiAgdG9nZ2xlTW9kZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZXRIb3Vyc01vZGUodGhpcy5ob3Vyc01vZGVPcHRpb25zLmZpbmQoKG1vZGU6IHN0cmluZykgPT4gbW9kZSAhPT0gdGhpcy5ob3Vyc01vZGUpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjbG9ja1BpY2tlclNlcnZpY2U6IENsb2NrUGlja2VyU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19