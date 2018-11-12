/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ClockPickerService } from '../../services/clock-picker.service';
import { hoursModeSlide } from '../../animations/hours-mode-slide';
import { HOURS_MODE_AM, HOURS_MODE_PM } from '../../utils/constants';
export class HoursModePanelComponent {
    /**
     * @param {?} clockPickerService
     */
    constructor(clockPickerService) {
        this.clockPickerService = clockPickerService;
        this.hoursModeOptions = [HOURS_MODE_AM, HOURS_MODE_PM];
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
    toggleMode() {
        this.clockPickerService.setHoursMode(this.hoursModeOptions.find((mode) => mode !== this.hoursMode));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HoursModePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-hours-mode-panel',
                template: "<div class=\"clock-picker__hours-mode-panel\">\n  <div [@hoursModeSlide]=\"hoursMode\" class=\"clock-picker__hours-mode-panel__scrollable\">\n    <button\n      *ngFor=\"let option of hoursModeOptions\"\n      (click)=\"toggleMode()\"\n      class=\"clock-picker__hours-mode-panel__button\"\n    >{{option.toLowerCase()}}</button>\n  </div>\n</div>\n",
                animations: [hoursModeSlide],
                styles: [".clock-picker__hours-mode-panel{position:relative;height:19px;overflow:hidden}.clock-picker__hours-mode-panel__scrollable{display:flex;flex-direction:column}.clock-picker__hours-mode-panel__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:19px;cursor:pointer;margin:0 5px;font:400 13px Arial,Helvetica,sans-serif;color:#495351}"]
            }] }
];
/** @nocollapse */
HoursModePanelComponent.ctorParameters = () => [
    { type: ClockPickerService }
];
if (false) {
    /** @type {?} */
    HoursModePanelComponent.prototype.hoursModeOptions;
    /** @type {?} */
    HoursModePanelComponent.prototype.clockPickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaG91cnMtbW9kZS1wYW5lbC9ob3Vycy1tb2RlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVFyRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBV2xDLFlBQW1CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBVnpELHFCQUFnQixHQUFhLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBVUMsQ0FBQzs7OztJQVI5RCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7O0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsMFdBQWdEO2dCQUVoRCxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUM7O2FBQzdCOzs7O1lBVFEsa0JBQWtCOzs7O0lBV3pCLG1EQUE0RDs7SUFVaEQscURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgaG91cnNNb2RlU2xpZGUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL2hvdXJzLW1vZGUtc2xpZGUnO1xuaW1wb3J0IHsgSE9VUlNfTU9ERV9BTSwgSE9VUlNfTU9ERV9QTSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWhvdXJzLW1vZGUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvdXJzLW1vZGUtcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW2hvdXJzTW9kZVNsaWRlXSxcbn0pXG5leHBvcnQgY2xhc3MgSG91cnNNb2RlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBob3Vyc01vZGVPcHRpb25zOiBzdHJpbmdbXSA9IFtIT1VSU19NT0RFX0FNLCBIT1VSU19NT0RFX1BNXTtcblxuICBnZXQgaG91cnNNb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmhvdXJzTW9kZTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0SG91cnNNb2RlKHRoaXMuaG91cnNNb2RlT3B0aW9ucy5maW5kKChtb2RlOiBzdHJpbmcpID0+IG1vZGUgIT09IHRoaXMuaG91cnNNb2RlKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2xvY2tQaWNrZXJTZXJ2aWNlOiBDbG9ja1BpY2tlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==