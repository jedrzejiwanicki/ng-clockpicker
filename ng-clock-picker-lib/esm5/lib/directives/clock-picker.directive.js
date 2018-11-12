/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, HostListener, ViewContainerRef, ElementRef, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractValueAccessor } from '../classes/abstract-value-accessor';
import { ClockPickerDialogService } from '../services/clock-picker-dialog.service';
var ClockPickerDirective = /** @class */ (function (_super) {
    tslib_1.__extends(ClockPickerDirective, _super);
    function ClockPickerDirective(elementRef, viewContainerRef, clockPickerDialogService) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.viewContainerRef = viewContainerRef;
        _this.clockPickerDialogService = clockPickerDialogService;
        _this.ngClockPickerChange = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    ClockPickerDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clockPickerDialogService
            .showClockPickerDialog(this.ngClockPickerConfig)
            .subscribe(function (data) {
            if (data) {
                _this.elementRef.nativeElement.value = data;
                _this.onChange(data);
                _this.ngClockPickerChange.emit(data);
            }
        });
    };
    /**
     * @return {?}
     */
    ClockPickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.clockPickerDialogService.registerViewContainerRef(this.viewContainerRef);
    };
    ClockPickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngClockPicker]',
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return ClockPickerDirective; }), multi: true }],
                },] }
    ];
    /** @nocollapse */
    ClockPickerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ClockPickerDialogService }
    ]; };
    ClockPickerDirective.propDecorators = {
        ngClockPickerConfig: [{ type: Input }],
        ngClockPickerChange: [{ type: Output }],
        onFocus: [{ type: HostListener, args: ['focus',] }]
    };
    return ClockPickerDirective;
}(AbstractValueAccessor));
export { ClockPickerDirective };
if (false) {
    /** @type {?} */
    ClockPickerDirective.prototype.ngClockPickerConfig;
    /** @type {?} */
    ClockPickerDirective.prototype.ngClockPickerChange;
    /** @type {?} */
    ClockPickerDirective.prototype.elementRef;
    /** @type {?} */
    ClockPickerDirective.prototype.viewContainerRef;
    /** @type {?} */
    ClockPickerDirective.prototype.clockPickerDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jbG9jay1waWNrZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVuRjtJQUkwQyxnREFBcUI7SUFDN0QsOEJBQ1UsVUFBc0IsRUFDdEIsZ0JBQWtDLEVBQ2xDLHdCQUFrRDtRQUg1RCxZQUlJLGlCQUFPLFNBQUc7UUFISixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFJbEQseUJBQW1CLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7O0lBSHBFLENBQUM7Ozs7SUFNZCxzQ0FBTzs7O0lBRFA7UUFBQSxpQkFXQztRQVRDLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIscUJBQXFCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQy9DLFNBQVMsQ0FBQyxVQUFDLElBQVk7WUFDdEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDM0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRixDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUM5Rzs7OztnQkFWMEQsVUFBVTtnQkFBNUIsZ0JBQWdCO2dCQUtoRCx3QkFBd0I7OztzQ0FhOUIsS0FBSztzQ0FDTCxNQUFNOzBCQUVOLFlBQVksU0FBQyxPQUFPOztJQWdCdkIsMkJBQUM7Q0FBQSxBQTlCRCxDQUkwQyxxQkFBcUIsR0EwQjlEO1NBMUJZLG9CQUFvQjs7O0lBTy9CLG1EQUFnRDs7SUFDaEQsbURBQWlGOztJQU4vRSwwQ0FBOEI7O0lBQzlCLGdEQUEwQzs7SUFDMUMsd0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFic3RyYWN0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2NsYXNzZXMvYWJzdHJhY3QtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENsb2NrUGlja2VyRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci1kaWFsb2cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0Nsb2NrUGlja2VyXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENsb2NrUGlja2VyRGlyZWN0aXZlKSwgbXVsdGk6IHRydWUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3RWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNsb2NrUGlja2VyRGlhbG9nU2VydmljZTogQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlLFxuICApIHsgc3VwZXIoKTsgfVxuXG4gIEBJbnB1dCgpIG5nQ2xvY2tQaWNrZXJDb25maWc6IENsb2NrUGlja2VyQ29uZmlnO1xuICBAT3V0cHV0KCkgbmdDbG9ja1BpY2tlckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2VcbiAgICAgIC5zaG93Q2xvY2tQaWNrZXJEaWFsb2codGhpcy5uZ0Nsb2NrUGlja2VyQ29uZmlnKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBkYXRhO1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgdGhpcy5uZ0Nsb2NrUGlja2VyQ2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2UucmVnaXN0ZXJWaWV3Q29udGFpbmVyUmVmKHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuIl19