import { ControlValueAccessor } from '@angular/forms';


export class AbstractValueAccessor implements ControlValueAccessor {
  constructor() {}
  _value: any;
  onChange(obj: any): void {}
  onTouched(): void {}
  writeValue(obj: any): void {
    this._value = obj;
    this.onChange(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
