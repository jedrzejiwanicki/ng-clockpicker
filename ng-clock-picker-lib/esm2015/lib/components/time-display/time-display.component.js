/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { convertToTimeFormat } from '../../utils/time';
import { MODE_HOURS, MODE_MINUTES } from '../../utils/constants';
import { ClockPickerService } from '../../services/clock-picker.service';
export class TimeDisplayComponent {
    /**
     * @param {?} clockPickerService
     */
    constructor(clockPickerService) {
        this.clockPickerService = clockPickerService;
    }
    /**
     * @return {?}
     */
    get displayHours() {
        return convertToTimeFormat(this.clockPickerService.selected.hours);
    }
    /**
     * @return {?}
     */
    get displayMinutes() {
        return convertToTimeFormat(this.clockPickerService.selected.minutes);
    }
    /**
     * @return {?}
     */
    get isHoursMode() {
        return this.clockPickerService.isHoursMode;
    }
    /**
     * @return {?}
     */
    get hoursMode() {
        return this.clockPickerService.hoursMode;
    }
    /**
     * @return {?}
     */
    handleMinutesClick() {
        this.clockPickerService.setMode(MODE_MINUTES);
    }
    /**
     * @return {?}
     */
    handleHoursClick() {
        this.clockPickerService.setMode(MODE_HOURS);
    }
}
TimeDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-time-display',
                template: "<div class=\"clock-picker__time-display\">\n  <button\n    (click)=\"handleHoursClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': isHoursMode}\"\n    >{{displayHours}}\n  </button>\n  <span class=\"clock-picker__time-display__divider\">:</span>\n  <button\n    (click)=\"handleMinutesClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': !isHoursMode}\"\n  >\n    {{displayMinutes}}\n  </button>\n  <ng-hours-mode-panel></ng-hours-mode-panel>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".clock-picker__time-display{display:flex;justify-content:center;align-items:center;margin:20px 0}.clock-picker__time-display__button,.clock-picker__time-display__divider,.clock-picker__time-display__hours-mode{color:#495351}.clock-picker__time-display__button,.clock-picker__time-display__divider{font:400 30px Arial,Helvetica,sans-serif}.clock-picker__time-display__hours-mode{margin:0 5px;font:400 20px Arial,Helvetica,sans-serif}.clock-picker__time-display__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:30px;cursor:pointer}.clock-picker__time-display__button--selected,.clock-picker__time-display__button:hover{color:#6d7c79}"]
            }] }
];
/** @nocollapse */
TimeDisplayComponent.ctorParameters = () => [
    { type: ClockPickerService }
];
if (false) {
    /** @type {?} */
    TimeDisplayComponent.prototype.clockPickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1kaXNwbGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aW1lLWRpc3BsYXkvdGltZS1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBUXpFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBSSxDQUFDOzs7O0lBRTlELElBQUksWUFBWTtRQUNkLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isb21CQUE0QztnQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBUFEsa0JBQWtCOzs7O0lBVWIsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29udmVydFRvVGltZUZvcm1hdCB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWUnO1xuaW1wb3J0IHsgTU9ERV9IT1VSUywgTU9ERV9NSU5VVEVTfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy10aW1lLWRpc3BsYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVEaXNwbGF5Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2xvY2tQaWNrZXJTZXJ2aWNlOiBDbG9ja1BpY2tlclNlcnZpY2UpIHsgfVxuXG4gIGdldCBkaXNwbGF5SG91cnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY29udmVydFRvVGltZUZvcm1hdCh0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZWxlY3RlZC5ob3Vycyk7XG4gIH1cblxuICBnZXQgZGlzcGxheU1pbnV0ZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY29udmVydFRvVGltZUZvcm1hdCh0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZWxlY3RlZC5taW51dGVzKTtcbiAgfVxuXG4gIGdldCBpc0hvdXJzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaXNIb3Vyc01vZGU7XG4gIH1cblxuICBnZXQgaG91cnNNb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmhvdXJzTW9kZTtcbiAgfVxuXG4gIGhhbmRsZU1pbnV0ZXNDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZXRNb2RlKE1PREVfTUlOVVRFUyk7XG4gIH1cblxuICBoYW5kbGVIb3Vyc0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNldE1vZGUoTU9ERV9IT1VSUyk7XG4gIH1cbn1cbiJdfQ==