import { OnInit } from '@angular/core';
import { DialogComponent } from "../dialog/dialog.component";
export declare class ClockPickerDialogComponent extends DialogComponent implements OnInit {
    constructor();
    hours: number[];
    ngOnInit(): void;
    handleClose(): void;
}
