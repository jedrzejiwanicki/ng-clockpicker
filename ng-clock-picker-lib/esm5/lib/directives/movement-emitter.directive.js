/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, HostListener, EventEmitter, Output } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { VerticalEventHandler } from '../classes/vertical-event-handler';
var MovementEmitterDirective = /** @class */ (function () {
    function MovementEmitterDirective() {
        this.mouseDown$ = new Subject();
        this.mouseUp$ = new Subject();
        this.mouseMove$ = new Subject();
        this.touchMove$ = new Subject();
        this.verticalEventHandler = new VerticalEventHandler();
        this.ngMovementEmitter = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MovementEmitterDirective.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.mouseDown$.next(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    MovementEmitterDirective.prototype.onMouseUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.mouseUp$.next(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    MovementEmitterDirective.prototype.onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.mouseMove$.next(event); };
    /**
     * @param {?} event
     * @return {?}
     */
    MovementEmitterDirective.prototype.onTouchMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { this.touchMove$.next(event); };
    /**
     * @return {?}
     */
    MovementEmitterDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.watchMovement();
        this.verticalEventHandler.verticalMovementEmitter
            .subscribe(function (value) { return _this.ngMovementEmitter.emit(value); });
    };
    /**
     * @return {?}
     */
    MovementEmitterDirective.prototype.watchMovement = /**
     * @return {?}
     */
    function () {
        var _this = this;
        merge(this.mouseDown$, this.mouseUp$, this.mouseMove$, this.touchMove$).subscribe(function (event) { return _this.verticalEventHandler.handleEvent(event); });
    };
    MovementEmitterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngMovementEmitter]'
                },] }
    ];
    /** @nocollapse */
    MovementEmitterDirective.ctorParameters = function () { return []; };
    MovementEmitterDirective.propDecorators = {
        ngMovementEmitter: [{ type: Output }],
        onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        onMouseUp: [{ type: HostListener, args: ['mouseup', ['$event'],] }],
        onMouseMove: [{ type: HostListener, args: ['mousemove', ['$event'],] }],
        onTouchMove: [{ type: HostListener, args: ['touchmove', ['$event'],] }]
    };
    return MovementEmitterDirective;
}());
export { MovementEmitterDirective };
if (false) {
    /** @type {?} */
    MovementEmitterDirective.prototype.mouseDown$;
    /** @type {?} */
    MovementEmitterDirective.prototype.mouseUp$;
    /** @type {?} */
    MovementEmitterDirective.prototype.mouseMove$;
    /** @type {?} */
    MovementEmitterDirective.prototype.touchMove$;
    /** @type {?} */
    MovementEmitterDirective.prototype.verticalEventHandler;
    /** @type {?} */
    MovementEmitterDirective.prototype.ngMovementEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZW1lbnQtZW1pdHRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbW92ZW1lbnQtZW1pdHRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXpFO0lBaUJFO1FBYkEsZUFBVSxHQUF3QixJQUFJLE9BQU8sRUFBYyxDQUFDO1FBQzVELGFBQVEsR0FBeUIsSUFBSSxPQUFPLEVBQWMsQ0FBQztRQUMzRCxlQUFVLEdBQXlCLElBQUksT0FBTyxFQUFjLENBQUM7UUFDN0QsZUFBVSxHQUF3QixJQUFJLE9BQU8sRUFBYyxDQUFDO1FBRTVELHlCQUFvQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUV4QyxzQkFBaUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQU0vRCxDQUFDOzs7OztJQUxzQiw4Q0FBVzs7OztJQUFsRCxVQUFtRCxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUNyRCw0Q0FBUzs7OztJQUE5QyxVQUErQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUM3Qyw4Q0FBVzs7OztJQUFsRCxVQUFtRCxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUNuRCw4Q0FBVzs7OztJQUFsRCxVQUFtRCxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0lBSTFGLDJDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUI7YUFDOUMsU0FBUyxDQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxnREFBYTs7O0lBQWI7UUFBQSxpQkFPQztRQU5DLEtBQUssQ0FDSCxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQThCLElBQUssT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7Ozs7b0NBU0UsTUFBTTs4QkFDTixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNwQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQUNsQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQUNwQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWtCdkMsK0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTlCWSx3QkFBd0I7OztJQUNuQyw4Q0FBNEQ7O0lBQzVELDRDQUEyRDs7SUFDM0QsOENBQTZEOztJQUM3RCw4Q0FBNEQ7O0lBRTVELHdEQUFrRDs7SUFFbEQscURBQStFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkluaXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVmVydGljYWxFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9jbGFzc2VzL3ZlcnRpY2FsLWV2ZW50LWhhbmRsZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdNb3ZlbWVudEVtaXR0ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBNb3ZlbWVudEVtaXR0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb3VzZURvd24kOiBTdWJqZWN0PE1vdXNlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKTtcbiAgbW91c2VVcCQ6ICBTdWJqZWN0PE1vdXNlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKTtcbiAgbW91c2VNb3ZlJDogIFN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICB0b3VjaE1vdmUkOiBTdWJqZWN0PFRvdWNoRXZlbnQ+ID0gbmV3IFN1YmplY3Q8VG91Y2hFdmVudD4oKTtcblxuICB2ZXJ0aWNhbEV2ZW50SGFuZGxlciA9IG5ldyBWZXJ0aWNhbEV2ZW50SGFuZGxlcigpO1xuXG4gIEBPdXRwdXQoKSBuZ01vdmVtZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgb25Nb3VzZURvd24oZXZlbnQpIHsgdGhpcy5tb3VzZURvd24kLm5leHQoZXZlbnQpOyB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKSBvbk1vdXNlVXAoZXZlbnQpIHsgdGhpcy5tb3VzZVVwJC5uZXh0KGV2ZW50KTsgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLCBbJyRldmVudCddKSBvbk1vdXNlTW92ZShldmVudCkgeyB0aGlzLm1vdXNlTW92ZSQubmV4dChldmVudCk7IH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSkgb25Ub3VjaE1vdmUoZXZlbnQpIHsgdGhpcy50b3VjaE1vdmUkLm5leHQoZXZlbnQpOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoTW92ZW1lbnQoKTtcbiAgICB0aGlzLnZlcnRpY2FsRXZlbnRIYW5kbGVyLnZlcnRpY2FsTW92ZW1lbnRFbWl0dGVyXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLm5nTW92ZW1lbnRFbWl0dGVyLmVtaXQodmFsdWUpKTtcbiAgfVxuXG4gIHdhdGNoTW92ZW1lbnQoKTogdm9pZCB7XG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLm1vdXNlRG93biQsXG4gICAgICB0aGlzLm1vdXNlVXAkLFxuICAgICAgdGhpcy5tb3VzZU1vdmUkLFxuICAgICAgdGhpcy50b3VjaE1vdmUkXG4gICAgKS5zdWJzY3JpYmUoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdGhpcy52ZXJ0aWNhbEV2ZW50SGFuZGxlci5oYW5kbGVFdmVudChldmVudCkpO1xuICB9XG59XG4iXX0=