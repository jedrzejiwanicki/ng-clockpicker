import { Directive, Input, HostListener, ViewContainerRef, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
import { DynamicComponentsService } from '../services/dynamic-components.service';
import { AbstractValueAccessor } from '../classes/abstract-value-accessor';

@Directive({
  selector: '[ngClockPicker]',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ClockPickerDirective), multi: true }],
})
export class ClockPickerDirective extends AbstractValueAccessor {
  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private dynamicComponentsService: DynamicComponentsService,
  ) { super(); }

  @Input() wrapperClassName: string;

  @HostListener('focus')
  onFocus(): void {
    this.dynamicComponentsService
      .load(ClockPickerDialogComponent, this.viewContainerRef, { className: this.wrapperClassName })
      .subscribe((data: string) => {
        this.elementRef.nativeElement.value = data;
        this.onChange(data);
      });
  }
}

