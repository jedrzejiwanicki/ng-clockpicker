/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { config, HOURS_MODE_AM, MODE_HOURS, MODE_MINUTES } from '../utils/constants';
import { getDisplayTime } from '../utils/time';
var ClockPickerService = /** @class */ (function () {
    function ClockPickerService() {
        this._mode = MODE_HOURS;
        this._hoursMode = HOURS_MODE_AM;
        this._selected = { hours: 12, minutes: 0 };
    }
    Object.defineProperty(ClockPickerService.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClockPickerService.prototype, "hoursMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hoursMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClockPickerService.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClockPickerService.prototype, "isHoursMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === MODE_HOURS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClockPickerService.prototype, "isMinutesMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === MODE_MINUTES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClockPickerService.prototype, "fullTime", {
        get: /**
         * @return {?}
         */
        function () {
            return getDisplayTime(this.selected.hours, this.selected.minutes, this.hoursMode);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClockPickerService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.setHoursMode(HOURS_MODE_AM);
        this.setMode(MODE_HOURS);
        this.setHours(12);
        this.setMinutes(0);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ClockPickerService.prototype.increment = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        /** @type {?} */
        var currentIndex = config[mode].indexOf(this.selected[mode]);
        /** @type {?} */
        var nextIndex = currentIndex + 1;
        /** @type {?} */
        var nextValue = config[mode][nextIndex];
        this._selected[mode] = nextValue || config[mode][0];
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ClockPickerService.prototype.decrement = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        /** @type {?} */
        var currentIndex = config[mode].indexOf(this.selected[mode]);
        /** @type {?} */
        var nextIndex = currentIndex - 1;
        /** @type {?} */
        var nextValue = config[mode][nextIndex];
        this._selected[mode] = nextValue || config[mode][config[mode].length - 1];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ClockPickerService.prototype.setHours = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._selected.hours = item;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ClockPickerService.prototype.setMinutes = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._selected.minutes = item;
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ClockPickerService.prototype.handleSwitch = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.setMode(mode);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ClockPickerService.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this._mode = mode;
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ClockPickerService.prototype.setHoursMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this._hoursMode = mode;
    };
    /**
     * @return {?}
     */
    ClockPickerService.prototype.setModeToMinutes = /**
     * @return {?}
     */
    function () {
        this.setMode(MODE_MINUTES);
    };
    ClockPickerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClockPickerService.ctorParameters = function () { return []; };
    return ClockPickerService;
}());
export { ClockPickerService };
if (false) {
    /** @type {?} */
    ClockPickerService.prototype._mode;
    /** @type {?} */
    ClockPickerService.prototype._hoursMode;
    /** @type {?} */
    ClockPickerService.prototype._selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRzFEO0lBNkVFO1FBM0VBLFVBQUssR0FBRyxVQUFVLENBQUM7UUFDbkIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixjQUFTLEdBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUF5RXBDLENBQUM7SUF2RWpCLHNCQUFJLG9DQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRixDQUFDOzs7T0FBQTs7OztJQUVELGtDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxzQ0FBUzs7OztJQUFULFVBQVUsSUFBWTs7WUFDZCxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUN4RCxTQUFTLEdBQUcsWUFBWSxHQUFHLENBQUM7O1lBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRXpDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxJQUFZOztZQUNkLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ3hELFNBQVMsR0FBRyxZQUFZLEdBQUcsQ0FBQzs7WUFDNUIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsSUFBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCx5Q0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsb0NBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCx5Q0FBWTs7OztJQUFaLFVBQWEsSUFBWTtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsNkNBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQTNFRixVQUFVOzs7O0lBOEVYLHlCQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0E3RVksa0JBQWtCOzs7SUFDN0IsbUNBQW1COztJQUNuQix3Q0FBMkI7O0lBQzNCLHVDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29uZmlnLCBIT1VSU19NT0RFX0FNLCBNT0RFX0hPVVJTLCBNT0RFX01JTlVURVMsIGRlZmF1bHRzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldERpc3BsYXlUaW1lLCBwYXJzZVRpbWUgfSBmcm9tICcuLi91dGlscy90aW1lJztcbmltcG9ydCB7IFNlbGVjdGVkVGltZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJTZXJ2aWNlIHtcbiAgX21vZGUgPSBNT0RFX0hPVVJTO1xuICBfaG91cnNNb2RlID0gSE9VUlNfTU9ERV9BTTtcbiAgX3NlbGVjdGVkOiBTZWxlY3RlZFRpbWUgPSB7IGhvdXJzOiAxMiwgbWludXRlczogMCB9O1xuXG4gIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICBnZXQgaG91cnNNb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hvdXJzTW9kZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBTZWxlY3RlZFRpbWUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIGdldCBpc0hvdXJzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBNT0RFX0hPVVJTO1xuICB9XG5cbiAgZ2V0IGlzTWludXRlc01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gTU9ERV9NSU5VVEVTO1xuICB9XG5cbiAgZ2V0IGZ1bGxUaW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldERpc3BsYXlUaW1lKHRoaXMuc2VsZWN0ZWQuaG91cnMsIHRoaXMuc2VsZWN0ZWQubWludXRlcywgdGhpcy5ob3Vyc01vZGUpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRIb3Vyc01vZGUoSE9VUlNfTU9ERV9BTSk7XG4gICAgdGhpcy5zZXRNb2RlKE1PREVfSE9VUlMpO1xuICAgIHRoaXMuc2V0SG91cnMoMTIpO1xuICAgIHRoaXMuc2V0TWludXRlcygwKTtcbiAgfVxuXG4gIGluY3JlbWVudChtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjb25maWdbbW9kZV0uaW5kZXhPZih0aGlzLnNlbGVjdGVkW21vZGVdKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNvbmZpZ1ttb2RlXVtuZXh0SW5kZXhdO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRbbW9kZV0gPSBuZXh0VmFsdWUgfHwgY29uZmlnW21vZGVdWzBdO1xuICB9XG5cbiAgZGVjcmVtZW50KG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNvbmZpZ1ttb2RlXS5pbmRleE9mKHRoaXMuc2VsZWN0ZWRbbW9kZV0pO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gY29uZmlnW21vZGVdW25leHRJbmRleF07XG5cbiAgICB0aGlzLl9zZWxlY3RlZFttb2RlXSA9IG5leHRWYWx1ZSB8fCBjb25maWdbbW9kZV1bY29uZmlnW21vZGVdLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgc2V0SG91cnMoaXRlbTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWQuaG91cnMgPSBpdGVtO1xuICB9XG5cbiAgc2V0TWludXRlcyhpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZC5taW51dGVzID0gaXRlbTtcbiAgfVxuXG4gIGhhbmRsZVN3aXRjaChtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vZGUgPSBtb2RlO1xuICB9XG5cbiAgc2V0SG91cnNNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2hvdXJzTW9kZSA9IG1vZGU7XG4gIH1cblxuICBzZXRNb2RlVG9NaW51dGVzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0TW9kZShNT0RFX01JTlVURVMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==