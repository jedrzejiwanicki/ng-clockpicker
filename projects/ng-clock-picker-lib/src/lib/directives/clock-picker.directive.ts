import { Directive, Input, HostListener, ViewContainerRef, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
import { DynamicComponentsService } from '../services/dynamic-components.service';
import { AbstractValueAccessor } from '../classes/abstract-value-accessor';
import { DialogConfig } from '../interfaces';
import { ClockPickerDialogService } from '../services/clock-picker-dialog.service';

@Directive({
  selector: '[ngClockPicker]',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ClockPickerDirective), multi: true }],
})
export class ClockPickerDirective extends AbstractValueAccessor {
  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private clockPickerDialogService: ClockPickerDialogService,
  ) { super(); }

  @Input() ngClockPickerConfig: DialogConfig;

  @HostListener('focus')
  onFocus(): void {
    this.clockPickerDialogService
      .showClockPickerDialog(this.ngClockPickerConfig)
      .subscribe((data: string) => {
        if (data) {
          this.elementRef.nativeElement.value = data;
          this.onChange(data);
        }
      });
  }

  ngOnInit(): void {
    this.clockPickerDialogService.registerViewContainerRef(this.viewContainerRef);
  }
}

