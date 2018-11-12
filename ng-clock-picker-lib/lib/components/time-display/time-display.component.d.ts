import { ClockPickerService } from '../../services/clock-picker.service';
export declare class TimeDisplayComponent {
    clockPickerService: ClockPickerService;
    constructor(clockPickerService: ClockPickerService);
    readonly displayHours: string;
    readonly displayMinutes: string;
    readonly isHoursMode: boolean;
    readonly hoursMode: string;
    handleMinutesClick(): void;
    handleHoursClick(): void;
}
