import { SelectedTime } from '../interfaces';
export declare class ClockPickerService {
    _mode: string;
    _hoursMode: string;
    _selected: SelectedTime;
    readonly mode: string;
    readonly hoursMode: string;
    readonly selected: SelectedTime;
    readonly isHoursMode: boolean;
    readonly isMinutesMode: boolean;
    readonly fullTime: string;
    reset(): void;
    increment(mode: string): void;
    decrement(mode: string): void;
    setHours(item: number): void;
    setMinutes(item: number): void;
    handleSwitch(mode: string): void;
    setMode(mode: string): void;
    setHoursMode(mode: string): void;
    setModeToMinutes(): void;
    constructor();
}
