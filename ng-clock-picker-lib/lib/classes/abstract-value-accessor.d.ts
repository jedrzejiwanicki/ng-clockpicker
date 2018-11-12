import { ControlValueAccessor } from '@angular/forms';
export declare class AbstractValueAccessor implements ControlValueAccessor {
    constructor();
    _value: any;
    onChange(obj: any): void;
    onTouched(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
