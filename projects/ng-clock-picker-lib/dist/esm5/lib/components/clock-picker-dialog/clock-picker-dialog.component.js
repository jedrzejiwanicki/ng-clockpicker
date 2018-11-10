/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DialogComponent } from "../dialog/dialog.component";
var ClockPickerDialogComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ClockPickerDialogComponent, _super);
    function ClockPickerDialogComponent() {
        var _this = _super.call(this) || this;
        _this.hours = [1, 2, 3, 4, 5];
        return _this;
    }
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleClose = /**
     * @return {?}
     */
    function () {
        this.close({});
    };
    ClockPickerDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-clock-picker-dialog',
                    template: "<div class=\"clock-picker\">\n  <nav class=\"clock-picker--panel\">\n    <button (click)=\"handleClose()\">close</button>\n  </nav>\n  <div class=\"outer-circle\">\n    <div *ngFor=\"let hour of hours\" class=\"circle\">hour</div>\n  </div>\n</div>\n",
                    styles: [".clock-picker{width:300px;height:500px;position:fixed;top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fafafa;box-shadow:1px 2px 30px rgba(0,0,0,.2)}.clock-picker--panel{width:100%;height:40px;display:flex;justify-content:flex-end}.clock-picker--panel button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;cursor:pointer}.circle{position:relative;width:20;height:20;padding:0;border-radius:50%;list-style:none}.circle>*{display:block;position:absolute;top:50%;left:50%;width:10;height:10;margin:-5}.circle>:nth-of-type(1){-webkit-transform:rotate(0) translate(10) rotate(0);transform:rotate(0) translate(10) rotate(0)}.circle>:nth-of-type(2){-webkit-transform:rotate(72deg) translate(10) rotate(-72deg);transform:rotate(72deg) translate(10) rotate(-72deg)}.circle>:nth-of-type(3){-webkit-transform:rotate(144deg) translate(10) rotate(-144deg);transform:rotate(144deg) translate(10) rotate(-144deg)}.circle>:nth-of-type(4){-webkit-transform:rotate(216deg) translate(10) rotate(-216deg);transform:rotate(216deg) translate(10) rotate(-216deg)}.circle>:nth-of-type(5){-webkit-transform:rotate(288deg) translate(10) rotate(-288deg);transform:rotate(288deg) translate(10) rotate(-288deg)}"]
                }] }
    ];
    /** @nocollapse */
    ClockPickerDialogComponent.ctorParameters = function () { return []; };
    return ClockPickerDialogComponent;
}(DialogComponent));
export { ClockPickerDialogComponent };
if (false) {
    /** @type {?} */
    ClockPickerDialogComponent.prototype.hours;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTdEO0lBS2dELHNEQUFlO0lBQzdEO1FBQUEsWUFBZ0IsaUJBQU8sU0FBRztRQUMxQixXQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7O0lBRE0sQ0FBQzs7OztJQUUxQiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsZ0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsc1FBQW1EOztpQkFFcEQ7Ozs7SUFVRCxpQ0FBQztDQUFBLEFBZEQsQ0FLZ0QsZUFBZSxHQVM5RDtTQVRZLDBCQUEwQjs7O0lBRXJDLDJDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1jbG9jay1waWNrZXItZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb2NrLXBpY2tlci1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxuICBob3VycyA9IFsxLDIsMyw0LDVdXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFuZGxlQ2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZSh7fSk7XG4gIH1cbn1cbiJdfQ==