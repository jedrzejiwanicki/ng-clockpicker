/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, ViewContainerRef, ElementRef, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractValueAccessor } from '../classes/abstract-value-accessor';
import { ClockPickerDialogService } from '../services/clock-picker-dialog.service';
export class ClockPickerDirective extends AbstractValueAccessor {
    /**
     * @param {?} elementRef
     * @param {?} viewContainerRef
     * @param {?} clockPickerDialogService
     */
    constructor(elementRef, viewContainerRef, clockPickerDialogService) {
        super();
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.clockPickerDialogService = clockPickerDialogService;
        this.ngClockPickerChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.clockPickerDialogService
            .showClockPickerDialog(this.ngClockPickerConfig)
            .subscribe((data) => {
            if (data) {
                this.elementRef.nativeElement.value = data;
                this.onChange(data);
                this.ngClockPickerChange.emit(data);
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.clockPickerDialogService.registerViewContainerRef(this.viewContainerRef);
    }
}
ClockPickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngClockPicker]',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ClockPickerDirective), multi: true }],
            },] }
];
/** @nocollapse */
ClockPickerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ClockPickerDialogService }
];
ClockPickerDirective.propDecorators = {
    ngClockPickerConfig: [{ type: Input }],
    ngClockPickerChange: [{ type: Output }],
    onFocus: [{ type: HostListener, args: ['focus',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jbG9jay1waWNrZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBTW5GLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUI7Ozs7OztJQUM3RCxZQUNVLFVBQXNCLEVBQ3RCLGdCQUFrQyxFQUNsQyx3QkFBa0Q7UUFDeEQsS0FBSyxFQUFFLENBQUM7UUFIRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUlsRCx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUhwRSxDQUFDOzs7O0lBTWQsT0FBTztRQUNMLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIscUJBQXFCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQy9DLFNBQVMsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUM5Rzs7OztZQVYwRCxVQUFVO1lBQTVCLGdCQUFnQjtZQUtoRCx3QkFBd0I7OztrQ0FhOUIsS0FBSztrQ0FDTCxNQUFNO3NCQUVOLFlBQVksU0FBQyxPQUFPOzs7O0lBSHJCLG1EQUFnRDs7SUFDaEQsbURBQWlGOztJQU4vRSwwQ0FBOEI7O0lBQzlCLGdEQUEwQzs7SUFDMUMsd0RBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBWaWV3Q29udGFpbmVyUmVmLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFic3RyYWN0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2NsYXNzZXMvYWJzdHJhY3QtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENsb2NrUGlja2VyRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci1kaWFsb2cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0Nsb2NrUGlja2VyXScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENsb2NrUGlja2VyRGlyZWN0aXZlKSwgbXVsdGk6IHRydWUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3RWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNsb2NrUGlja2VyRGlhbG9nU2VydmljZTogQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlLFxuICApIHsgc3VwZXIoKTsgfVxuXG4gIEBJbnB1dCgpIG5nQ2xvY2tQaWNrZXJDb25maWc6IENsb2NrUGlja2VyQ29uZmlnO1xuICBAT3V0cHV0KCkgbmdDbG9ja1BpY2tlckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIG9uRm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2VcbiAgICAgIC5zaG93Q2xvY2tQaWNrZXJEaWFsb2codGhpcy5uZ0Nsb2NrUGlja2VyQ29uZmlnKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBkYXRhO1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgdGhpcy5uZ0Nsb2NrUGlja2VyQ2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2UucmVnaXN0ZXJWaWV3Q29udGFpbmVyUmVmKHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuIl19