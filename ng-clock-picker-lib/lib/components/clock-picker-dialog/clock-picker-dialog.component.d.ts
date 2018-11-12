import { OnDestroy } from '@angular/core';
import { DialogComponent } from '../../classes/abstract-dialog';
import { ClockPickerService } from '../../services/clock-picker.service';
export declare class ClockPickerDialogComponent extends DialogComponent implements OnDestroy {
    clockPickerService: ClockPickerService;
    constructor(clockPickerService: ClockPickerService);
    readonly items: any;
    readonly fullTime: string;
    handleClose(): void;
    cancel(): void;
    handleOverlayClick(event: Event): void;
    handleMovement(movement: string): void;
    handleMovementUp(): void;
    handleMovementDown(): void;
    handleItemChange(item: number): void;
    ngOnDestroy(): void;
}
