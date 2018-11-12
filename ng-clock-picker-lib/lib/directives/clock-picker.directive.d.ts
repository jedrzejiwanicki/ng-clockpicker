import { ViewContainerRef, ElementRef, EventEmitter } from '@angular/core';
import { AbstractValueAccessor } from '../classes/abstract-value-accessor';
import { ClockPickerConfig } from '../interfaces';
import { ClockPickerDialogService } from '../services/clock-picker-dialog.service';
export declare class ClockPickerDirective extends AbstractValueAccessor {
    private elementRef;
    private viewContainerRef;
    private clockPickerDialogService;
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, clockPickerDialogService: ClockPickerDialogService);
    ngClockPickerConfig: ClockPickerConfig;
    ngClockPickerChange: EventEmitter<string>;
    onFocus(): void;
    ngOnInit(): void;
}
