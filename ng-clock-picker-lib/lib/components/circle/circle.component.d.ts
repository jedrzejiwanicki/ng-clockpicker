import { EventEmitter } from '@angular/core';
import { ClockPickerService } from '../../services/clock-picker.service';
import { SelectedTime } from '../../interfaces';
export declare class CircleComponent {
    clockPickerService: ClockPickerService;
    onItemChange: EventEmitter<number>;
    constructor(clockPickerService: ClockPickerService);
    readonly items: Array<number>;
    readonly mode: string;
    readonly selected: SelectedTime;
    isSelected(item: number): boolean;
    handleClick(item: number): void;
}
