/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { config, HOURS_MODE_AM, MODE_HOURS, MODE_MINUTES } from '../utils/constants';
import { getDisplayTime } from '../utils/time';
export class ClockPickerService {
    constructor() {
        this._mode = MODE_HOURS;
        this._hoursMode = HOURS_MODE_AM;
        this._selected = { hours: 12, minutes: 0 };
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * @return {?}
     */
    get hoursMode() {
        return this._hoursMode;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @return {?}
     */
    get isHoursMode() {
        return this.mode === MODE_HOURS;
    }
    /**
     * @return {?}
     */
    get isMinutesMode() {
        return this.mode === MODE_MINUTES;
    }
    /**
     * @return {?}
     */
    get fullTime() {
        return getDisplayTime(this.selected.hours, this.selected.minutes, this.hoursMode);
    }
    /**
     * @return {?}
     */
    reset() {
        this.setHoursMode(HOURS_MODE_AM);
        this.setMode(MODE_HOURS);
        this.setHours(12);
        this.setMinutes(0);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    increment(mode) {
        /** @type {?} */
        const currentIndex = config[mode].indexOf(this.selected[mode]);
        /** @type {?} */
        const nextIndex = currentIndex + 1;
        /** @type {?} */
        const nextValue = config[mode][nextIndex];
        this._selected[mode] = nextValue || config[mode][0];
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    decrement(mode) {
        /** @type {?} */
        const currentIndex = config[mode].indexOf(this.selected[mode]);
        /** @type {?} */
        const nextIndex = currentIndex - 1;
        /** @type {?} */
        const nextValue = config[mode][nextIndex];
        this._selected[mode] = nextValue || config[mode][config[mode].length - 1];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setHours(item) {
        this._selected.hours = item;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setMinutes(item) {
        this._selected.minutes = item;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    handleSwitch(mode) {
        this.setMode(mode);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this._mode = mode;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setHoursMode(mode) {
        this._hoursMode = mode;
    }
    /**
     * @return {?}
     */
    setModeToMinutes() {
        this.setMode(MODE_MINUTES);
    }
}
ClockPickerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClockPickerService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ClockPickerService.prototype._mode;
    /** @type {?} */
    ClockPickerService.prototype._hoursMode;
    /** @type {?} */
    ClockPickerService.prototype._selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSTFELE1BQU0sT0FBTyxrQkFBa0I7SUE0RTdCO1FBM0VBLFVBQUssR0FBRyxVQUFVLENBQUM7UUFDbkIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixjQUFTLEdBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUF5RXBDLENBQUM7Ozs7SUF2RWpCLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWTs7Y0FDZCxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztjQUN4RCxTQUFTLEdBQUcsWUFBWSxHQUFHLENBQUM7O2NBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRXpDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZOztjQUNkLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7O2NBQ3hELFNBQVMsR0FBRyxZQUFZLEdBQUcsQ0FBQzs7Y0FDNUIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUEzRUYsVUFBVTs7Ozs7O0lBRVQsbUNBQW1COztJQUNuQix3Q0FBMkI7O0lBQzNCLHVDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29uZmlnLCBIT1VSU19NT0RFX0FNLCBNT0RFX0hPVVJTLCBNT0RFX01JTlVURVMsIGRlZmF1bHRzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldERpc3BsYXlUaW1lLCBwYXJzZVRpbWUgfSBmcm9tICcuLi91dGlscy90aW1lJztcbmltcG9ydCB7IFNlbGVjdGVkVGltZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJTZXJ2aWNlIHtcbiAgX21vZGUgPSBNT0RFX0hPVVJTO1xuICBfaG91cnNNb2RlID0gSE9VUlNfTU9ERV9BTTtcbiAgX3NlbGVjdGVkOiBTZWxlY3RlZFRpbWUgPSB7IGhvdXJzOiAxMiwgbWludXRlczogMCB9O1xuXG4gIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICBnZXQgaG91cnNNb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hvdXJzTW9kZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBTZWxlY3RlZFRpbWUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIGdldCBpc0hvdXJzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBNT0RFX0hPVVJTO1xuICB9XG5cbiAgZ2V0IGlzTWludXRlc01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gTU9ERV9NSU5VVEVTO1xuICB9XG5cbiAgZ2V0IGZ1bGxUaW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldERpc3BsYXlUaW1lKHRoaXMuc2VsZWN0ZWQuaG91cnMsIHRoaXMuc2VsZWN0ZWQubWludXRlcywgdGhpcy5ob3Vyc01vZGUpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRIb3Vyc01vZGUoSE9VUlNfTU9ERV9BTSk7XG4gICAgdGhpcy5zZXRNb2RlKE1PREVfSE9VUlMpO1xuICAgIHRoaXMuc2V0SG91cnMoMTIpO1xuICAgIHRoaXMuc2V0TWludXRlcygwKTtcbiAgfVxuXG4gIGluY3JlbWVudChtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjb25maWdbbW9kZV0uaW5kZXhPZih0aGlzLnNlbGVjdGVkW21vZGVdKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNvbmZpZ1ttb2RlXVtuZXh0SW5kZXhdO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRbbW9kZV0gPSBuZXh0VmFsdWUgfHwgY29uZmlnW21vZGVdWzBdO1xuICB9XG5cbiAgZGVjcmVtZW50KG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNvbmZpZ1ttb2RlXS5pbmRleE9mKHRoaXMuc2VsZWN0ZWRbbW9kZV0pO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gY29uZmlnW21vZGVdW25leHRJbmRleF07XG5cbiAgICB0aGlzLl9zZWxlY3RlZFttb2RlXSA9IG5leHRWYWx1ZSB8fCBjb25maWdbbW9kZV1bY29uZmlnW21vZGVdLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgc2V0SG91cnMoaXRlbTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWQuaG91cnMgPSBpdGVtO1xuICB9XG5cbiAgc2V0TWludXRlcyhpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZC5taW51dGVzID0gaXRlbTtcbiAgfVxuXG4gIGhhbmRsZVN3aXRjaChtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vZGUgPSBtb2RlO1xuICB9XG5cbiAgc2V0SG91cnNNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2hvdXJzTW9kZSA9IG1vZGU7XG4gIH1cblxuICBzZXRNb2RlVG9NaW51dGVzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0TW9kZShNT0RFX01JTlVURVMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==