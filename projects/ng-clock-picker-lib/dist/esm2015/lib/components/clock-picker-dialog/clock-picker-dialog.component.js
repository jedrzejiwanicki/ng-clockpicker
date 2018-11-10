/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DialogComponent } from "../dialog/dialog.component";
export class ClockPickerDialogComponent extends DialogComponent {
    constructor() {
        super();
        this.hours = [1, 2, 3, 4, 5];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    handleClose() {
        this.close({});
    }
}
ClockPickerDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-clock-picker-dialog',
                template: "<div class=\"clock-picker\">\n  <nav class=\"clock-picker--panel\">\n    <button (click)=\"handleClose()\">close</button>\n  </nav>\n  <div class=\"outer-circle\">\n    <div *ngFor=\"let hour of hours\" class=\"circle\">hour</div>\n  </div>\n</div>\n",
                styles: [".clock-picker{width:300px;height:500px;position:fixed;top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fafafa;box-shadow:1px 2px 30px rgba(0,0,0,.2)}.clock-picker--panel{width:100%;height:40px;display:flex;justify-content:flex-end}.clock-picker--panel button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;cursor:pointer}.circle{position:relative;width:20;height:20;padding:0;border-radius:50%;list-style:none}.circle>*{display:block;position:absolute;top:50%;left:50%;width:10;height:10;margin:-5}.circle>:nth-of-type(1){-webkit-transform:rotate(0) translate(10) rotate(0);transform:rotate(0) translate(10) rotate(0)}.circle>:nth-of-type(2){-webkit-transform:rotate(72deg) translate(10) rotate(-72deg);transform:rotate(72deg) translate(10) rotate(-72deg)}.circle>:nth-of-type(3){-webkit-transform:rotate(144deg) translate(10) rotate(-144deg);transform:rotate(144deg) translate(10) rotate(-144deg)}.circle>:nth-of-type(4){-webkit-transform:rotate(216deg) translate(10) rotate(-216deg);transform:rotate(216deg) translate(10) rotate(-216deg)}.circle>:nth-of-type(5){-webkit-transform:rotate(288deg) translate(10) rotate(-288deg);transform:rotate(288deg) translate(10) rotate(-288deg)}"]
            }] }
];
/** @nocollapse */
ClockPickerDialogComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    ClockPickerDialogComponent.prototype.hours;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPN0QsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGVBQWU7SUFDN0Q7UUFBZ0IsS0FBSyxFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRE0sQ0FBQzs7OztJQUUxQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxzUUFBbUQ7O2FBRXBEOzs7Ozs7SUFHQywyQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tIFwiLi4vZGlhbG9nL2RpYWxvZy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2xvY2stcGlja2VyLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgaG91cnMgPSBbMSwyLDMsNCw1XVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2Uoe30pO1xuICB9XG59XG4iXX0=