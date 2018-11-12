import { OnInit } from '@angular/core';
import { ClockPickerService } from '../../services/clock-picker.service';
export declare class HoursModePanelComponent implements OnInit {
    clockPickerService: ClockPickerService;
    hoursModeOptions: string[];
    readonly hoursMode: string;
    toggleMode(): void;
    constructor(clockPickerService: ClockPickerService);
    ngOnInit(): void;
}
