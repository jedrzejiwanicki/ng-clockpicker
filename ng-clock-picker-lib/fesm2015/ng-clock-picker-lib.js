import { Injectable, ComponentFactoryResolver, Component, ViewEncapsulation, Directive, Input, HostListener, ViewContainerRef, ElementRef, forwardRef, EventEmitter, Output, NgModule } from '@angular/core';
import { Subject, Observable, merge } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class AbstractValueAccessor {
    constructor() { }
    /**
     * @param {?} obj
     * @return {?}
     */
    onChange(obj) { }
    /**
     * @return {?}
     */
    onTouched() { }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._value = obj;
        this.onChange(obj);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DynamicComponentsService {
    /**
     * @param {?} componentFactoryResolver
     */
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @param {?} subscriber
     * @param {?=} config
     * @return {?}
     */
    loadDynamicComponent(component, vcr, subscriber, config) {
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        const componentRef = vcr.createComponent(factory);
        for (const key in config) {
            ((/** @type {?} */ (componentRef.instance)))[key] = config[key];
        }
        ((/** @type {?} */ (componentRef.instance))).close = (data) => {
            componentRef.destroy();
            subscriber.next(data);
        };
    }
}
DynamicComponentsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DynamicComponentsService.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class DialogComponent {
    constructor() {
        this.buttonClose = 'close';
        this.buttonConfirm = 'confirm';
        this.closeOnOverlayClick = false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    close(data) { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class VerticalEventHandler {
    constructor() {
        this.previousClientY = null;
        this.currentClientY = null;
        this.isMoveLocked = true;
        this.verticalMovementEmitter = new Subject();
    }
    /**
     * @param {?} isLocked
     * @return {?}
     */
    setMoveLock(isLocked) {
        this.isMoveLocked = isLocked;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleMove(event) {
        return event instanceof MouseEvent
            ? this.handleMouseMove(event)
            : this.handleTouchMove(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleMouseMove(event) {
        const { clientY } = event;
        /** @type {?} */
        const delta = this.calculateDelta(clientY);
        if (this.isMoveLocked) {
            return null;
        }
        this.emitMovementDirection(delta);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleTouchMove(event) {
        const { clientY } = event.touches[0];
        /** @type {?} */
        const delta = this.calculateDelta(clientY);
        this.emitMovementDirection(delta);
    }
    /**
     * @param {?} delta
     * @return {?}
     */
    emitMovementDirection(delta) {
        if (delta > 0) {
            this.verticalMovementEmitter.next('down');
        }
        else if (delta < 0) {
            this.verticalMovementEmitter.next('up');
        }
    }
    /**
     * @param {?} clientY
     * @return {?}
     */
    calculateDelta(clientY) {
        this.previousClientY = this.currentClientY;
        this.currentClientY = clientY;
        return this.currentClientY - this.previousClientY;
    }
    /**
     * @return {?}
     */
    handleMouseUp() {
        this.setMoveLock(true);
    }
    /**
     * @return {?}
     */
    handleMouseDown() {
        this.setMoveLock(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleEvent(event) {
        switch (event.type) {
            case 'mousemove':
                return this.handleMove((/** @type {?} */ (event)));
            case 'mouseup':
                return this.handleMouseUp();
            case 'mousedown':
                return this.handleMouseDown();
            case 'touchmove':
                return this.handleMove((/** @type {?} */ (event)));
        }
    }
}
VerticalEventHandler.MovementUp = 'up';
VerticalEventHandler.MovementDown = 'down';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const config = {
    hours: Array(12).fill(0, 0, 12).map((_, i) => i + 1),
    minutes: Array(60).fill(0, 0, 60).map((_, i) => i),
};
/** @type {?} */
const MODE_MINUTES = 'minutes';
/** @type {?} */
const MODE_HOURS = 'hours';
/** @type {?} */
const HOURS_MODE_AM = 'AM';
/** @type {?} */
const HOURS_MODE_PM = 'PM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function convertToTimeFormat(value) {
    return value < 10 ? `0${value}` : value.toString();
}
/**
 * @param {?} hours
 * @param {?} minutes
 * @param {?} mode
 * @return {?}
 */
function getTime(hours, minutes, mode) {
    /** @type {?} */
    const timeString = ` ${hours}:${minutes} ${mode}`;
    /** @type {?} */
    const date = new Date(new Date().toISOString().split('T')[0] + timeString);
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
}
/**
 * @param {?} hours
 * @param {?} minutes
 * @param {?} mode
 * @return {?}
 */
function getDisplayTime(hours, minutes, mode) {
    return getTime(hours, minutes, mode);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ClockPickerService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ClockPickerDialogComponent extends DialogComponent {
    /**
     * @param {?} clockPickerService
     */
    constructor(clockPickerService) {
        super();
        this.clockPickerService = clockPickerService;
    }
    /**
     * @return {?}
     */
    get items() {
        return config[this.clockPickerService.mode];
    }
    /**
     * @return {?}
     */
    get fullTime() {
        return this.clockPickerService.fullTime;
    }
    /**
     * @return {?}
     */
    handleClose() {
        this.close(this.fullTime);
    }
    /**
     * @return {?}
     */
    cancel() {
        this.close(null); //
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleOverlayClick(event) {
        event.stopPropagation();
        if (this.closeOnOverlayClick) {
            this.cancel();
        }
    }
    /**
     * @param {?} movement
     * @return {?}
     */
    handleMovement(movement) {
        switch (movement) {
            case VerticalEventHandler.MovementUp:
                return this.handleMovementUp();
            case VerticalEventHandler.MovementDown:
                return this.handleMovementDown();
        }
    }
    /**
     * @return {?}
     */
    handleMovementUp() {
        return this.clockPickerService.isHoursMode
            ? this.clockPickerService.increment(MODE_HOURS)
            : this.clockPickerService.increment(MODE_MINUTES);
    }
    /**
     * @return {?}
     */
    handleMovementDown() {
        return this.clockPickerService.isHoursMode
            ? this.clockPickerService.decrement(MODE_HOURS)
            : this.clockPickerService.decrement(MODE_MINUTES);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    handleItemChange(item) {
        if (this.clockPickerService.isHoursMode) {
            this.clockPickerService.setHours(item);
            this.clockPickerService.setModeToMinutes();
        }
        else {
            this.clockPickerService.setMinutes(item);
            this.close(this.fullTime);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clockPickerService.reset();
    }
}
ClockPickerDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-clock-picker-dialog',
                template: "<div [ngClass]=\"wrapperClassName\">\n  <div class=\"clock-picker__overlay\" (click)=\"handleOverlayClick($event)\"></div>\n  <div class=\"clock-picker__wrapper\">\n    <nav class=\"clock-picker__nav\">\n      <ng-time-display></ng-time-display>\n    </nav>\n    <ng-circle\n      (ngMovementEmitter)=\"handleMovement($event)\"\n      (onItemChange)=\"handleItemChange($event)\"\n    ></ng-circle>\n    <footer class=\"clock-picker__footer\">\n      <button\n        class=\"clock-picker__footer__dialog-control-button\"\n        (click)=\"cancel()\"\n      >\n        {{buttonClose}}\n      </button>\n      <button\n        class=\"clock-picker__footer__dialog-control-button\"\n        (click)=\"handleClose()\"\n      >\n        {{buttonConfirm}}\n      </button>\n    </footer>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".clock-picker__wrapper{width:300px;height:auto;top:50%;right:auto;bottom:auto;left:50%;position:fixed;display:flex;flex-direction:column;align-items:center;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);box-shadow:1px 2px 30px rgba(0,0,0,.2)}.clock-picker__overlay{width:100vw;height:100vh;top:0;right:auto;bottom:auto;left:0;position:fixed;background-color:rgba(242,242,242,.6)}.clock-picker__footer,.clock-picker__nav{width:100%;height:70px;background-color:#f2f2f2}.clock-picker__nav{display:flex;justify-content:center;align-items:center;margin-bottom:10px}.clock-picker__footer{box-sizing:border-box;padding:0 5px;display:flex;align-items:center;justify-content:flex-end;margin-top:10px;background-color:#f2f2f2}.clock-picker__footer__dialog-control-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:5px;cursor:pointer;font:400 16px Arial,Helvetica,sans-serif;color:#495351}"]
            }] }
];
/** @nocollapse */
ClockPickerDialogComponent.ctorParameters = () => [
    { type: ClockPickerService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ClockPickerDialogService {
    /**
     * @param {?} dynamicComponentsService
     */
    constructor(dynamicComponentsService) {
        this.dynamicComponentsService = dynamicComponentsService;
    }
    /**
     * @param {?} vcr
     * @return {?}
     */
    registerViewContainerRef(vcr) {
        this.viewContainerRef = vcr;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    showClockPickerDialog(config) {
        return new Observable((subscriber) => this.dynamicComponentsService.loadDynamicComponent(ClockPickerDialogComponent, this.viewContainerRef, subscriber, config));
    }
}
ClockPickerDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClockPickerDialogService.ctorParameters = () => [
    { type: DynamicComponentsService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ClockPickerDirective extends AbstractValueAccessor {
    /**
     * @param {?} elementRef
     * @param {?} viewContainerRef
     * @param {?} clockPickerDialogService
     */
    constructor(elementRef, viewContainerRef, clockPickerDialogService) {
        super();
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.clockPickerDialogService = clockPickerDialogService;
        this.ngClockPickerChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.clockPickerDialogService
            .showClockPickerDialog(this.ngClockPickerConfig)
            .subscribe((data) => {
            if (data) {
                this.elementRef.nativeElement.value = data;
                this.onChange(data);
                this.ngClockPickerChange.emit(data);
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.clockPickerDialogService.registerViewContainerRef(this.viewContainerRef);
    }
}
ClockPickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngClockPicker]',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ClockPickerDirective), multi: true }],
            },] }
];
/** @nocollapse */
ClockPickerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ClockPickerDialogService }
];
ClockPickerDirective.propDecorators = {
    ngClockPickerConfig: [{ type: Input }],
    ngClockPickerChange: [{ type: Output }],
    onFocus: [{ type: HostListener, args: ['focus',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const scaleIn = trigger('scaleIn', [
    transition('hours => minutes', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('200ms ease', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition('minutes => hours', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate('200ms ease', style({ opacity: 1, transform: 'scale(1)' }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CircleComponent {
    /**
     * @param {?} clockPickerService
     */
    constructor(clockPickerService) {
        this.clockPickerService = clockPickerService;
        this.onItemChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get items() {
        return config[this.mode];
    }
    /**
     * @return {?}
     */
    get mode() {
        return this.clockPickerService.mode;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this.clockPickerService.selected;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isSelected(item) {
        return this.selected[this.mode] === item;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    handleClick(item) {
        this.onItemChange.emit(item);
    }
}
CircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-circle',
                template: "<div\n  [@scaleIn]=\"mode\"\n  class=\"clock-picker__circle\"\n  [ngClass]=\"{\n    'clock-picker__circle--minutes': clockPickerService.isMinutesMode,\n    'clock-picker__circle--hours': clockPickerService.isHoursMode\n  }\">\n  <ng-circle-button\n    [selected]=\"isSelected(item)\"\n    (click)=\"handleClick(item)\"\n    *ngFor=\"let item of items\">\n      {{item}}\n  </ng-circle-button>\n</div>\n",
                animations: [scaleIn],
                encapsulation: ViewEncapsulation.None,
                styles: [".clock-picker__circle{border-radius:50%;border:30px solid #f2f2f2;background-color:#f2f2f2}.clock-picker__circle--minutes{position:relative;width:220px;height:220px;padding:0;border-radius:50%;list-style:none}.clock-picker__circle--minutes>*{justify-content:center;align-items:center;position:absolute;top:50%;left:50%;width:50px;height:50px;margin:-25px;display:none}.clock-picker__circle--minutes>:nth-of-type(1){-webkit-transform:rotate(-90deg) translate(110px) rotate(90deg);transform:rotate(-90deg) translate(110px) rotate(90deg)}.clock-picker__circle--minutes>:nth-of-type(2){-webkit-transform:rotate(-84deg) translate(110px) rotate(84deg);transform:rotate(-84deg) translate(110px) rotate(84deg)}.clock-picker__circle--minutes>:nth-of-type(3){-webkit-transform:rotate(-78deg) translate(110px) rotate(78deg);transform:rotate(-78deg) translate(110px) rotate(78deg)}.clock-picker__circle--minutes>:nth-of-type(4){-webkit-transform:rotate(-72deg) translate(110px) rotate(72deg);transform:rotate(-72deg) translate(110px) rotate(72deg)}.clock-picker__circle--minutes>:nth-of-type(5){-webkit-transform:rotate(-66deg) translate(110px) rotate(66deg);transform:rotate(-66deg) translate(110px) rotate(66deg)}.clock-picker__circle--minutes>:nth-of-type(6){-webkit-transform:rotate(-60deg) translate(110px) rotate(60deg);transform:rotate(-60deg) translate(110px) rotate(60deg)}.clock-picker__circle--minutes>:nth-of-type(7){-webkit-transform:rotate(-54deg) translate(110px) rotate(54deg);transform:rotate(-54deg) translate(110px) rotate(54deg)}.clock-picker__circle--minutes>:nth-of-type(8){-webkit-transform:rotate(-48deg) translate(110px) rotate(48deg);transform:rotate(-48deg) translate(110px) rotate(48deg)}.clock-picker__circle--minutes>:nth-of-type(9){-webkit-transform:rotate(-42deg) translate(110px) rotate(42deg);transform:rotate(-42deg) translate(110px) rotate(42deg)}.clock-picker__circle--minutes>:nth-of-type(10){-webkit-transform:rotate(-36deg) translate(110px) rotate(36deg);transform:rotate(-36deg) translate(110px) rotate(36deg)}.clock-picker__circle--minutes>:nth-of-type(11){-webkit-transform:rotate(-30deg) translate(110px) rotate(30deg);transform:rotate(-30deg) translate(110px) rotate(30deg)}.clock-picker__circle--minutes>:nth-of-type(12){-webkit-transform:rotate(-24deg) translate(110px) rotate(24deg);transform:rotate(-24deg) translate(110px) rotate(24deg)}.clock-picker__circle--minutes>:nth-of-type(13){-webkit-transform:rotate(-18deg) translate(110px) rotate(18deg);transform:rotate(-18deg) translate(110px) rotate(18deg)}.clock-picker__circle--minutes>:nth-of-type(14){-webkit-transform:rotate(-12deg) translate(110px) rotate(12deg);transform:rotate(-12deg) translate(110px) rotate(12deg)}.clock-picker__circle--minutes>:nth-of-type(15){-webkit-transform:rotate(-6deg) translate(110px) rotate(6deg);transform:rotate(-6deg) translate(110px) rotate(6deg)}.clock-picker__circle--minutes>:nth-of-type(16){-webkit-transform:rotate(0) translate(110px) rotate(0);transform:rotate(0) translate(110px) rotate(0)}.clock-picker__circle--minutes>:nth-of-type(17){-webkit-transform:rotate(6deg) translate(110px) rotate(-6deg);transform:rotate(6deg) translate(110px) rotate(-6deg)}.clock-picker__circle--minutes>:nth-of-type(18){-webkit-transform:rotate(12deg) translate(110px) rotate(-12deg);transform:rotate(12deg) translate(110px) rotate(-12deg)}.clock-picker__circle--minutes>:nth-of-type(19){-webkit-transform:rotate(18deg) translate(110px) rotate(-18deg);transform:rotate(18deg) translate(110px) rotate(-18deg)}.clock-picker__circle--minutes>:nth-of-type(20){-webkit-transform:rotate(24deg) translate(110px) rotate(-24deg);transform:rotate(24deg) translate(110px) rotate(-24deg)}.clock-picker__circle--minutes>:nth-of-type(21){-webkit-transform:rotate(30deg) translate(110px) rotate(-30deg);transform:rotate(30deg) translate(110px) rotate(-30deg)}.clock-picker__circle--minutes>:nth-of-type(22){-webkit-transform:rotate(36deg) translate(110px) rotate(-36deg);transform:rotate(36deg) translate(110px) rotate(-36deg)}.clock-picker__circle--minutes>:nth-of-type(23){-webkit-transform:rotate(42deg) translate(110px) rotate(-42deg);transform:rotate(42deg) translate(110px) rotate(-42deg)}.clock-picker__circle--minutes>:nth-of-type(24){-webkit-transform:rotate(48deg) translate(110px) rotate(-48deg);transform:rotate(48deg) translate(110px) rotate(-48deg)}.clock-picker__circle--minutes>:nth-of-type(25){-webkit-transform:rotate(54deg) translate(110px) rotate(-54deg);transform:rotate(54deg) translate(110px) rotate(-54deg)}.clock-picker__circle--minutes>:nth-of-type(26){-webkit-transform:rotate(60deg) translate(110px) rotate(-60deg);transform:rotate(60deg) translate(110px) rotate(-60deg)}.clock-picker__circle--minutes>:nth-of-type(27){-webkit-transform:rotate(66deg) translate(110px) rotate(-66deg);transform:rotate(66deg) translate(110px) rotate(-66deg)}.clock-picker__circle--minutes>:nth-of-type(28){-webkit-transform:rotate(72deg) translate(110px) rotate(-72deg);transform:rotate(72deg) translate(110px) rotate(-72deg)}.clock-picker__circle--minutes>:nth-of-type(29){-webkit-transform:rotate(78deg) translate(110px) rotate(-78deg);transform:rotate(78deg) translate(110px) rotate(-78deg)}.clock-picker__circle--minutes>:nth-of-type(30){-webkit-transform:rotate(84deg) translate(110px) rotate(-84deg);transform:rotate(84deg) translate(110px) rotate(-84deg)}.clock-picker__circle--minutes>:nth-of-type(31){-webkit-transform:rotate(90deg) translate(110px) rotate(-90deg);transform:rotate(90deg) translate(110px) rotate(-90deg)}.clock-picker__circle--minutes>:nth-of-type(32){-webkit-transform:rotate(96deg) translate(110px) rotate(-96deg);transform:rotate(96deg) translate(110px) rotate(-96deg)}.clock-picker__circle--minutes>:nth-of-type(33){-webkit-transform:rotate(102deg) translate(110px) rotate(-102deg);transform:rotate(102deg) translate(110px) rotate(-102deg)}.clock-picker__circle--minutes>:nth-of-type(34){-webkit-transform:rotate(108deg) translate(110px) rotate(-108deg);transform:rotate(108deg) translate(110px) rotate(-108deg)}.clock-picker__circle--minutes>:nth-of-type(35){-webkit-transform:rotate(114deg) translate(110px) rotate(-114deg);transform:rotate(114deg) translate(110px) rotate(-114deg)}.clock-picker__circle--minutes>:nth-of-type(36){-webkit-transform:rotate(120deg) translate(110px) rotate(-120deg);transform:rotate(120deg) translate(110px) rotate(-120deg)}.clock-picker__circle--minutes>:nth-of-type(37){-webkit-transform:rotate(126deg) translate(110px) rotate(-126deg);transform:rotate(126deg) translate(110px) rotate(-126deg)}.clock-picker__circle--minutes>:nth-of-type(38){-webkit-transform:rotate(132deg) translate(110px) rotate(-132deg);transform:rotate(132deg) translate(110px) rotate(-132deg)}.clock-picker__circle--minutes>:nth-of-type(39){-webkit-transform:rotate(138deg) translate(110px) rotate(-138deg);transform:rotate(138deg) translate(110px) rotate(-138deg)}.clock-picker__circle--minutes>:nth-of-type(40){-webkit-transform:rotate(144deg) translate(110px) rotate(-144deg);transform:rotate(144deg) translate(110px) rotate(-144deg)}.clock-picker__circle--minutes>:nth-of-type(41){-webkit-transform:rotate(150deg) translate(110px) rotate(-150deg);transform:rotate(150deg) translate(110px) rotate(-150deg)}.clock-picker__circle--minutes>:nth-of-type(42){-webkit-transform:rotate(156deg) translate(110px) rotate(-156deg);transform:rotate(156deg) translate(110px) rotate(-156deg)}.clock-picker__circle--minutes>:nth-of-type(43){-webkit-transform:rotate(162deg) translate(110px) rotate(-162deg);transform:rotate(162deg) translate(110px) rotate(-162deg)}.clock-picker__circle--minutes>:nth-of-type(44){-webkit-transform:rotate(168deg) translate(110px) rotate(-168deg);transform:rotate(168deg) translate(110px) rotate(-168deg)}.clock-picker__circle--minutes>:nth-of-type(45){-webkit-transform:rotate(174deg) translate(110px) rotate(-174deg);transform:rotate(174deg) translate(110px) rotate(-174deg)}.clock-picker__circle--minutes>:nth-of-type(46){-webkit-transform:rotate(180deg) translate(110px) rotate(-180deg);transform:rotate(180deg) translate(110px) rotate(-180deg)}.clock-picker__circle--minutes>:nth-of-type(47){-webkit-transform:rotate(186deg) translate(110px) rotate(-186deg);transform:rotate(186deg) translate(110px) rotate(-186deg)}.clock-picker__circle--minutes>:nth-of-type(48){-webkit-transform:rotate(192deg) translate(110px) rotate(-192deg);transform:rotate(192deg) translate(110px) rotate(-192deg)}.clock-picker__circle--minutes>:nth-of-type(49){-webkit-transform:rotate(198deg) translate(110px) rotate(-198deg);transform:rotate(198deg) translate(110px) rotate(-198deg)}.clock-picker__circle--minutes>:nth-of-type(50){-webkit-transform:rotate(204deg) translate(110px) rotate(-204deg);transform:rotate(204deg) translate(110px) rotate(-204deg)}.clock-picker__circle--minutes>:nth-of-type(51){-webkit-transform:rotate(210deg) translate(110px) rotate(-210deg);transform:rotate(210deg) translate(110px) rotate(-210deg)}.clock-picker__circle--minutes>:nth-of-type(52){-webkit-transform:rotate(216deg) translate(110px) rotate(-216deg);transform:rotate(216deg) translate(110px) rotate(-216deg)}.clock-picker__circle--minutes>:nth-of-type(53){-webkit-transform:rotate(222deg) translate(110px) rotate(-222deg);transform:rotate(222deg) translate(110px) rotate(-222deg)}.clock-picker__circle--minutes>:nth-of-type(54){-webkit-transform:rotate(228deg) translate(110px) rotate(-228deg);transform:rotate(228deg) translate(110px) rotate(-228deg)}.clock-picker__circle--minutes>:nth-of-type(55){-webkit-transform:rotate(234deg) translate(110px) rotate(-234deg);transform:rotate(234deg) translate(110px) rotate(-234deg)}.clock-picker__circle--minutes>:nth-of-type(56){-webkit-transform:rotate(240deg) translate(110px) rotate(-240deg);transform:rotate(240deg) translate(110px) rotate(-240deg)}.clock-picker__circle--minutes>:nth-of-type(57){-webkit-transform:rotate(246deg) translate(110px) rotate(-246deg);transform:rotate(246deg) translate(110px) rotate(-246deg)}.clock-picker__circle--minutes>:nth-of-type(58){-webkit-transform:rotate(252deg) translate(110px) rotate(-252deg);transform:rotate(252deg) translate(110px) rotate(-252deg)}.clock-picker__circle--minutes>:nth-of-type(59){-webkit-transform:rotate(258deg) translate(110px) rotate(-258deg);transform:rotate(258deg) translate(110px) rotate(-258deg)}.clock-picker__circle--minutes>:nth-of-type(60){-webkit-transform:rotate(264deg) translate(110px) rotate(-264deg);transform:rotate(264deg) translate(110px) rotate(-264deg)}.clock-picker__circle--minutes>:nth-child(5n+1){display:block}.clock-picker__circle--hours{position:relative;width:220px;height:220px;padding:0;border-radius:50%;list-style:none}.clock-picker__circle--hours>*{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;width:50px;height:50px;margin:-25px}.clock-picker__circle--hours>:nth-of-type(1){-webkit-transform:rotate(-60deg) translate(110px) rotate(60deg);transform:rotate(-60deg) translate(110px) rotate(60deg)}.clock-picker__circle--hours>:nth-of-type(2){-webkit-transform:rotate(-30deg) translate(110px) rotate(30deg);transform:rotate(-30deg) translate(110px) rotate(30deg)}.clock-picker__circle--hours>:nth-of-type(3){-webkit-transform:rotate(0) translate(110px) rotate(0);transform:rotate(0) translate(110px) rotate(0)}.clock-picker__circle--hours>:nth-of-type(4){-webkit-transform:rotate(30deg) translate(110px) rotate(-30deg);transform:rotate(30deg) translate(110px) rotate(-30deg)}.clock-picker__circle--hours>:nth-of-type(5){-webkit-transform:rotate(60deg) translate(110px) rotate(-60deg);transform:rotate(60deg) translate(110px) rotate(-60deg)}.clock-picker__circle--hours>:nth-of-type(6){-webkit-transform:rotate(90deg) translate(110px) rotate(-90deg);transform:rotate(90deg) translate(110px) rotate(-90deg)}.clock-picker__circle--hours>:nth-of-type(7){-webkit-transform:rotate(120deg) translate(110px) rotate(-120deg);transform:rotate(120deg) translate(110px) rotate(-120deg)}.clock-picker__circle--hours>:nth-of-type(8){-webkit-transform:rotate(150deg) translate(110px) rotate(-150deg);transform:rotate(150deg) translate(110px) rotate(-150deg)}.clock-picker__circle--hours>:nth-of-type(9){-webkit-transform:rotate(180deg) translate(110px) rotate(-180deg);transform:rotate(180deg) translate(110px) rotate(-180deg)}.clock-picker__circle--hours>:nth-of-type(10){-webkit-transform:rotate(210deg) translate(110px) rotate(-210deg);transform:rotate(210deg) translate(110px) rotate(-210deg)}.clock-picker__circle--hours>:nth-of-type(11){-webkit-transform:rotate(240deg) translate(110px) rotate(-240deg);transform:rotate(240deg) translate(110px) rotate(-240deg)}.clock-picker__circle--hours>:nth-of-type(12){-webkit-transform:rotate(270deg) translate(110px) rotate(-270deg);transform:rotate(270deg) translate(110px) rotate(-270deg)}"]
            }] }
];
/** @nocollapse */
CircleComponent.ctorParameters = () => [
    { type: ClockPickerService }
];
CircleComponent.propDecorators = {
    onItemChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class CircleButtonComponent {
    constructor() { }
}
CircleButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-circle-button',
                template: "<button\n  class=\"clock-picker__item-button\"\n  [ngClass]=\"{'clock-picker__item-button--selected': selected}\"\n>\n  <ng-content></ng-content>\n</button>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".clock-picker__item-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:100%;height:100%;position:relative;cursor:pointer;border-radius:50%;font:400 16px Arial,Helvetica,sans-serif;color:#495351}.clock-picker__item-button:hover{background-color:#f5f5f5;color:#6d7c79}.clock-picker__item-button--selected{background-color:#f5f5f5}"]
            }] }
];
/** @nocollapse */
CircleButtonComponent.ctorParameters = () => [];
CircleButtonComponent.propDecorators = {
    selected: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TimeDisplayComponent {
    /**
     * @param {?} clockPickerService
     */
    constructor(clockPickerService) {
        this.clockPickerService = clockPickerService;
    }
    /**
     * @return {?}
     */
    get displayHours() {
        return convertToTimeFormat(this.clockPickerService.selected.hours);
    }
    /**
     * @return {?}
     */
    get displayMinutes() {
        return convertToTimeFormat(this.clockPickerService.selected.minutes);
    }
    /**
     * @return {?}
     */
    get isHoursMode() {
        return this.clockPickerService.isHoursMode;
    }
    /**
     * @return {?}
     */
    get hoursMode() {
        return this.clockPickerService.hoursMode;
    }
    /**
     * @return {?}
     */
    handleMinutesClick() {
        this.clockPickerService.setMode(MODE_MINUTES);
    }
    /**
     * @return {?}
     */
    handleHoursClick() {
        this.clockPickerService.setMode(MODE_HOURS);
    }
}
TimeDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-time-display',
                template: "<div class=\"clock-picker__time-display\">\n  <button\n    (click)=\"handleHoursClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': isHoursMode}\"\n    >{{displayHours}}\n  </button>\n  <span class=\"clock-picker__time-display__divider\">:</span>\n  <button\n    (click)=\"handleMinutesClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': !isHoursMode}\"\n  >\n    {{displayMinutes}}\n  </button>\n  <ng-hours-mode-panel></ng-hours-mode-panel>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".clock-picker__time-display{display:flex;justify-content:center;align-items:center;margin:20px 0}.clock-picker__time-display__button,.clock-picker__time-display__divider,.clock-picker__time-display__hours-mode{color:#495351}.clock-picker__time-display__button,.clock-picker__time-display__divider{font:400 30px Arial,Helvetica,sans-serif}.clock-picker__time-display__hours-mode{margin:0 5px;font:400 20px Arial,Helvetica,sans-serif}.clock-picker__time-display__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:30px;cursor:pointer}.clock-picker__time-display__button--selected,.clock-picker__time-display__button:hover{color:#6d7c79}"]
            }] }
];
/** @nocollapse */
TimeDisplayComponent.ctorParameters = () => [
    { type: ClockPickerService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class MovementEmitterDirective {
    constructor() {
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
    onMouseDown(event) { this.mouseDown$.next(event); }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) { this.mouseUp$.next(event); }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseMove(event) { this.mouseMove$.next(event); }
    /**
     * @param {?} event
     * @return {?}
     */
    onTouchMove(event) { this.touchMove$.next(event); }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.watchMovement();
        this.verticalEventHandler.verticalMovementEmitter
            .subscribe((value) => this.ngMovementEmitter.emit(value));
    }
    /**
     * @return {?}
     */
    watchMovement() {
        merge(this.mouseDown$, this.mouseUp$, this.mouseMove$, this.touchMove$).subscribe((event) => this.verticalEventHandler.handleEvent(event));
    }
}
MovementEmitterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngMovementEmitter]'
            },] }
];
/** @nocollapse */
MovementEmitterDirective.ctorParameters = () => [];
MovementEmitterDirective.propDecorators = {
    ngMovementEmitter: [{ type: Output }],
    onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onMouseUp: [{ type: HostListener, args: ['mouseup', ['$event'],] }],
    onMouseMove: [{ type: HostListener, args: ['mousemove', ['$event'],] }],
    onTouchMove: [{ type: HostListener, args: ['touchmove', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const hoursModeSlide = trigger('hoursModeSlide', [
    state(HOURS_MODE_AM, style({
        transform: 'translateY(0)'
    })),
    state(HOURS_MODE_PM, style({
        transform: 'translateY(-19px)'
    })),
    transition(`${HOURS_MODE_AM} => ${HOURS_MODE_PM}`, [
        animate('200ms ease')
    ]),
    transition(`${HOURS_MODE_PM} => ${HOURS_MODE_AM}`, [
        animate('200ms ease')
    ]),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class HoursModePanelComponent {
    /**
     * @param {?} clockPickerService
     */
    constructor(clockPickerService) {
        this.clockPickerService = clockPickerService;
        this.hoursModeOptions = [HOURS_MODE_AM, HOURS_MODE_PM];
    }
    /**
     * @return {?}
     */
    get hoursMode() {
        return this.clockPickerService.hoursMode;
    }
    /**
     * @return {?}
     */
    toggleMode() {
        this.clockPickerService.setHoursMode(this.hoursModeOptions.find((mode) => mode !== this.hoursMode));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HoursModePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-hours-mode-panel',
                template: "<div class=\"clock-picker__hours-mode-panel\">\n  <div [@hoursModeSlide]=\"hoursMode\" class=\"clock-picker__hours-mode-panel__scrollable\">\n    <button\n      *ngFor=\"let option of hoursModeOptions\"\n      (click)=\"toggleMode()\"\n      class=\"clock-picker__hours-mode-panel__button\"\n    >{{option.toLowerCase()}}</button>\n  </div>\n</div>\n",
                animations: [hoursModeSlide],
                styles: [".clock-picker__hours-mode-panel{position:relative;height:19px;overflow:hidden}.clock-picker__hours-mode-panel__scrollable{display:flex;flex-direction:column}.clock-picker__hours-mode-panel__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:19px;cursor:pointer;margin:0 5px;font:400 13px Arial,Helvetica,sans-serif;color:#495351}"]
            }] }
];
/** @nocollapse */
HoursModePanelComponent.ctorParameters = () => [
    { type: ClockPickerService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class NgClockPickerLibModule {
}
NgClockPickerLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ClockPickerDirective,
                    ClockPickerDialogComponent,
                    CircleComponent,
                    CircleButtonComponent,
                    TimeDisplayComponent,
                    MovementEmitterDirective,
                    HoursModePanelComponent,
                ],
                imports: [CommonModule, BrowserAnimationsModule],
                exports: [ClockPickerDirective],
                providers: [DynamicComponentsService, ClockPickerService, ClockPickerDialogService],
                entryComponents: [ClockPickerDialogComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NgClockPickerLibModule, ClockPickerDialogService, hoursModeSlide as ɵm, scaleIn as ɵh, DialogComponent as ɵe, AbstractValueAccessor as ɵb, CircleButtonComponent as ɵi, CircleComponent as ɵg, ClockPickerDialogComponent as ɵd, HoursModePanelComponent as ɵl, TimeDisplayComponent as ɵj, ClockPickerDirective as ɵa, MovementEmitterDirective as ɵk, ClockPickerService as ɵf, DynamicComponentsService as ɵc, HOURS_MODE_AM as ɵn, HOURS_MODE_PM as ɵo };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2xvY2stcGlja2VyLWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY2xhc3Nlcy9hYnN0cmFjdC12YWx1ZS1hY2Nlc3Nvci50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvc2VydmljZXMvZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NsYXNzZXMvYWJzdHJhY3QtZGlhbG9nLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9jbGFzc2VzL3ZlcnRpY2FsLWV2ZW50LWhhbmRsZXIudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL3V0aWxzL2NvbnN0YW50cy50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvdXRpbHMvdGltZS50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvc2VydmljZXMvY2xvY2stcGlja2VyLWRpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9kaXJlY3RpdmVzL2Nsb2NrLXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2FuaW1hdGlvbnMvc2NhbGUtaW4udHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NvbXBvbmVudHMvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NvbXBvbmVudHMvY2lyY2xlLWJ1dHRvbi9jaXJjbGUtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY29tcG9uZW50cy90aW1lLWRpc3BsYXkvdGltZS1kaXNwbGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvZGlyZWN0aXZlcy9tb3ZlbWVudC1lbWl0dGVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvYW5pbWF0aW9ucy9ob3Vycy1tb2RlLXNsaWRlLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9jb21wb25lbnRzL2hvdXJzLW1vZGUtcGFuZWwvaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL25nLWNsb2NrLXBpY2tlci1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgX3ZhbHVlOiBhbnk7XG4gIG9uQ2hhbmdlKG9iajogYW55KTogdm9pZCB7fVxuICBvblRvdWNoZWQoKTogdm9pZCB7fVxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSBvYmo7XG4gICAgdGhpcy5vbkNoYW5nZShvYmopO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jbGFzc2VzL2Fic3RyYWN0LWRpYWxvZyc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cblxuICBwdWJsaWMgbG9hZER5bmFtaWNDb21wb25lbnQ8VCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudD4oXG4gICAgY29tcG9uZW50OiBUeXBlPFQ+LFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBzdWJzY3JpYmVyLFxuICAgIGNvbmZpZz86IENsb2NrUGlja2VyQ29uZmlnXG4gICkge1xuICAgIGNvbnN0IGZhY3Rvcnk6IGFueSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdmNyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAoPFQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKVtrZXldID0gY29uZmlnW2tleV07XG4gICAgfVxuXG4gICAgKDxUPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY2xvc2UgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgc3Vic2NyaWJlci5uZXh0KGRhdGEpO1xuICAgIH07XG4gIH1cbn1cbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWFsb2dDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgd3JhcHBlckNsYXNzTmFtZTogc3RyaW5nO1xuICBidXR0b25DbG9zZSA9ICdjbG9zZSc7XG4gIGJ1dHRvbkNvbmZpcm0gPSAnY29uZmlybSc7XG4gIGNsb3NlT25PdmVybGF5Q2xpY2sgPSBmYWxzZTtcbiAgY2xvc2UoZGF0YTogYW55KTogdm9pZCB7fVxuXG59XG4iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRXZlbnRIYW5kbGVyIHtcbiAgc3RhdGljIE1vdmVtZW50VXAgPSAndXAnO1xuICBzdGF0aWMgTW92ZW1lbnREb3duID0gJ2Rvd24nO1xuXG4gIHByZXZpb3VzQ2xpZW50WTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGN1cnJlbnRDbGllbnRZOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgaXNNb3ZlTG9ja2VkID0gdHJ1ZTtcbiAgdmVydGljYWxNb3ZlbWVudEVtaXR0ZXI6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0TW92ZUxvY2soaXNMb2NrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzTW92ZUxvY2tlZCA9IGlzTG9ja2VkO1xuICB9XG5cbiAgaGFuZGxlTW92ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50XG4gICAgICA/IHRoaXMuaGFuZGxlTW91c2VNb3ZlKGV2ZW50KVxuICAgICAgOiB0aGlzLmhhbmRsZVRvdWNoTW92ZShldmVudCk7XG5cbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNhbGN1bGF0ZURlbHRhKGNsaWVudFkpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3ZlTG9ja2VkKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICB0aGlzLmVtaXRNb3ZlbWVudERpcmVjdGlvbihkZWx0YSk7XG4gIH1cblxuICBoYW5kbGVUb3VjaE1vdmUoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNhbGN1bGF0ZURlbHRhKGNsaWVudFkpO1xuXG4gICAgdGhpcy5lbWl0TW92ZW1lbnREaXJlY3Rpb24oZGVsdGEpO1xuICB9XG5cbiAgZW1pdE1vdmVtZW50RGlyZWN0aW9uKGRlbHRhOiBudW1iZXIpIHtcbiAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsTW92ZW1lbnRFbWl0dGVyLm5leHQoJ2Rvd24nKTtcbiAgICB9IGVsc2UgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgdGhpcy52ZXJ0aWNhbE1vdmVtZW50RW1pdHRlci5uZXh0KCd1cCcpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZURlbHRhKGNsaWVudFk6IG51bWJlcik6IG51bWJlciB7XG4gICAgdGhpcy5wcmV2aW91c0NsaWVudFkgPSB0aGlzLmN1cnJlbnRDbGllbnRZO1xuICAgIHRoaXMuY3VycmVudENsaWVudFkgPSBjbGllbnRZO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENsaWVudFkgLSB0aGlzLnByZXZpb3VzQ2xpZW50WTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlVXAoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb3ZlTG9jayh0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vdmVMb2NrKGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZSg8TW91c2VFdmVudD5ldmVudCk7XG4gICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW91c2VVcCgpO1xuICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW91c2VEb3duKCk7XG4gICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb3ZlKDxUb3VjaEV2ZW50PmV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGhvdXJzOiBBcnJheSgxMikuZmlsbCgwLCAwLCAxMikubWFwKChfLCBpKSA9PiBpICsgMSksXG4gIG1pbnV0ZXM6IEFycmF5KDYwKS5maWxsKDAsIDAsIDYwKS5tYXAoKF8sIGkpID0+IGkpLFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzID0ge1xuICBob3VyczogMTIsXG4gIG1vbnV0ZXM6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgTU9ERV9NSU5VVEVTID0gJ21pbnV0ZXMnO1xuZXhwb3J0IGNvbnN0IE1PREVfSE9VUlMgPSAnaG91cnMnO1xuZXhwb3J0IGNvbnN0IEhPVVJTX01PREVfQU0gPSAnQU0nO1xuZXhwb3J0IGNvbnN0IEhPVVJTX01PREVfUE0gPSAnUE0nO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1RpbWVGb3JtYXQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZSA8IDEwID8gYDAke3ZhbHVlfWAgOiB2YWx1ZS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZShob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIsIG1vZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHRpbWVTdHJpbmcgPSBgICR7aG91cnN9OiR7bWludXRlc30gJHttb2RlfWA7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSArIHRpbWVTdHJpbmcpO1xuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5VGltZShob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIsIG1vZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRUaW1lKGhvdXJzLCBtaW51dGVzLCBtb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyW10ge1xuICByZXR1cm4gdmFsdWVcbiAgICAuc3BsaXQoJzonKVxuICAgIC5tYXAoaXRlbSA9PiBOdW1iZXIoaXRlbSkpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb25maWcsIEhPVVJTX01PREVfQU0sIE1PREVfSE9VUlMsIE1PREVfTUlOVVRFUywgZGVmYXVsdHMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheVRpbWUsIHBhcnNlVGltZSB9IGZyb20gJy4uL3V0aWxzL3RpbWUnO1xuaW1wb3J0IHsgU2VsZWN0ZWRUaW1lIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG9ja1BpY2tlclNlcnZpY2Uge1xuICBfbW9kZSA9IE1PREVfSE9VUlM7XG4gIF9ob3Vyc01vZGUgPSBIT1VSU19NT0RFX0FNO1xuICBfc2VsZWN0ZWQ6IFNlbGVjdGVkVGltZSA9IHsgaG91cnM6IDEyLCBtaW51dGVzOiAwIH07XG5cbiAgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIGdldCBob3Vyc01vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faG91cnNNb2RlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCk6IFNlbGVjdGVkVGltZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgZ2V0IGlzSG91cnNNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IE1PREVfSE9VUlM7XG4gIH1cblxuICBnZXQgaXNNaW51dGVzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBNT0RFX01JTlVURVM7XG4gIH1cblxuICBnZXQgZnVsbFRpbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0RGlzcGxheVRpbWUodGhpcy5zZWxlY3RlZC5ob3VycywgdGhpcy5zZWxlY3RlZC5taW51dGVzLCB0aGlzLmhvdXJzTW9kZSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEhvdXJzTW9kZShIT1VSU19NT0RFX0FNKTtcbiAgICB0aGlzLnNldE1vZGUoTU9ERV9IT1VSUyk7XG4gICAgdGhpcy5zZXRIb3VycygxMik7XG4gICAgdGhpcy5zZXRNaW51dGVzKDApO1xuICB9XG5cbiAgaW5jcmVtZW50KG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNvbmZpZ1ttb2RlXS5pbmRleE9mKHRoaXMuc2VsZWN0ZWRbbW9kZV0pO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gY29uZmlnW21vZGVdW25leHRJbmRleF07XG5cbiAgICB0aGlzLl9zZWxlY3RlZFttb2RlXSA9IG5leHRWYWx1ZSB8fCBjb25maWdbbW9kZV1bMF07XG4gIH1cblxuICBkZWNyZW1lbnQobW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gY29uZmlnW21vZGVdLmluZGV4T2YodGhpcy5zZWxlY3RlZFttb2RlXSk7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBjb25maWdbbW9kZV1bbmV4dEluZGV4XTtcblxuICAgIHRoaXMuX3NlbGVjdGVkW21vZGVdID0gbmV4dFZhbHVlIHx8IGNvbmZpZ1ttb2RlXVtjb25maWdbbW9kZV0ubGVuZ3RoIC0gMV07XG4gIH1cblxuICBzZXRIb3VycyhpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZC5ob3VycyA9IGl0ZW07XG4gIH1cblxuICBzZXRNaW51dGVzKGl0ZW06IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkLm1pbnV0ZXMgPSBpdGVtO1xuICB9XG5cbiAgaGFuZGxlU3dpdGNoKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgfVxuXG4gIHNldE1vZGUobW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gIH1cblxuICBzZXRIb3Vyc01vZGUobW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faG91cnNNb2RlID0gbW9kZTtcbiAgfVxuXG4gIHNldE1vZGVUb01pbnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb2RlKE1PREVfTUlOVVRFUyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NsYXNzZXMvYWJzdHJhY3QtZGlhbG9nJztcbmltcG9ydCB7IFZlcnRpY2FsRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy92ZXJ0aWNhbC1ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBjb25maWcsXG4gIE1PREVfTUlOVVRFUyxcbiAgTU9ERV9IT1VSUyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2xvY2stcGlja2VyLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcblxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IHN1cGVyKCk7IH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1t0aGlzLmNsb2NrUGlja2VyU2VydmljZS5tb2RlXTtcbiAgfVxuXG4gIGdldCBmdWxsVGltZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5mdWxsVGltZTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UodGhpcy5mdWxsVGltZSk7XG4gIH1cblxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZShudWxsKTsgLy9cbiAgfVxuXG4gIGhhbmRsZU92ZXJsYXlDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmNsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQobW92ZW1lbnQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAobW92ZW1lbnQpIHtcbiAgICAgIGNhc2UgVmVydGljYWxFdmVudEhhbmRsZXIuTW92ZW1lbnRVcDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZW1lbnRVcCgpO1xuICAgICAgY2FzZSBWZXJ0aWNhbEV2ZW50SGFuZGxlci5Nb3ZlbWVudERvd246XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdmVtZW50RG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50VXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmlzSG91cnNNb2RlXG4gICAgICA/IHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmluY3JlbWVudChNT0RFX0hPVVJTKVxuICAgICAgOiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5pbmNyZW1lbnQoTU9ERV9NSU5VVEVTKTtcbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaXNIb3Vyc01vZGVcbiAgICAgID8gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuZGVjcmVtZW50KE1PREVfSE9VUlMpXG4gICAgICA6IHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmRlY3JlbWVudChNT0RFX01JTlVURVMpO1xuICB9XG5cbiAgaGFuZGxlSXRlbUNoYW5nZShpdGVtOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaXNIb3Vyc01vZGUpIHtcbiAgICAgIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNldEhvdXJzKGl0ZW0pO1xuICAgICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0TW9kZVRvTWludXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZXRNaW51dGVzKGl0ZW0pO1xuICAgICAgdGhpcy5jbG9zZSh0aGlzLmZ1bGxUaW1lKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5yZXNldCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Nsb2NrLXBpY2tlci1kaWFsb2cvY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlIHtcbiAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlOiBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyByZWdpc3RlclZpZXdDb250YWluZXJSZWYodmNyOiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmNyO1xuICB9XG5cbiAgcHVibGljIHNob3dDbG9ja1BpY2tlckRpYWxvZyhjb25maWc/OiBDbG9ja1BpY2tlckNvbmZpZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyKSA9PiB0aGlzLmR5bmFtaWNDb21wb25lbnRzU2VydmljZS5sb2FkRHluYW1pY0NvbXBvbmVudChcbiAgICAgIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50LFxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgICAgc3Vic2NyaWJlcixcbiAgICAgIGNvbmZpZ1xuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi9jbGFzc2VzL2Fic3RyYWN0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7IENsb2NrUGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbG9jay1waWNrZXItZGlhbG9nLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdDbG9ja1BpY2tlcl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbG9ja1BpY2tlckRpcmVjdGl2ZSksIG11bHRpOiB0cnVlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9ja1BpY2tlckRpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0VmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2U6IENsb2NrUGlja2VyRGlhbG9nU2VydmljZSxcbiAgKSB7IHN1cGVyKCk7IH1cblxuICBASW5wdXQoKSBuZ0Nsb2NrUGlja2VyQ29uZmlnOiBDbG9ja1BpY2tlckNvbmZpZztcbiAgQE91dHB1dCgpIG5nQ2xvY2tQaWNrZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlXG4gICAgICAuc2hvd0Nsb2NrUGlja2VyRGlhbG9nKHRoaXMubmdDbG9ja1BpY2tlckNvbmZpZylcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gZGF0YTtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGRhdGEpO1xuICAgICAgICAgIHRoaXMubmdDbG9ja1BpY2tlckNoYW5nZS5lbWl0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlLnJlZ2lzdGVyVmlld0NvbnRhaW5lclJlZih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IHNjYWxlSW46IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoXG4gICdzY2FsZUluJywgW1xuICAgIHRyYW5zaXRpb24oJ2hvdXJzID0+IG1pbnV0ZXMnLCBbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJ30pLFxuICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZScsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJ21pbnV0ZXMgPT4gaG91cnMnLCBbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICBdKVxuICBdXG4pO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2NhbGVJbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvc2NhbGUtaW4nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFNlbGVjdGVkVGltZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1jaXJjbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2lyY2xlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtzY2FsZUluXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIG9uSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IH1cblxuICBnZXQgaXRlbXMoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGNvbmZpZ1t0aGlzLm1vZGVdO1xuICB9XG5cbiAgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UubW9kZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBTZWxlY3RlZFRpbWUge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZWxlY3RlZDtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRbdGhpcy5tb2RlXSA9PT0gaXRlbTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGl0ZW06IG51bWJlcikge1xuICAgIHRoaXMub25JdGVtQ2hhbmdlLmVtaXQoaXRlbSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElucHV0LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2lyY2xlLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaXJjbGUtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2lyY2xlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbnZlcnRUb1RpbWVGb3JtYXQgfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcbmltcG9ydCB7IE1PREVfSE9VUlMsIE1PREVfTUlOVVRFU30gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IENsb2NrUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctdGltZS1kaXNwbGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lRGlzcGxheUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IH1cblxuICBnZXQgZGlzcGxheUhvdXJzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1RpbWVGb3JtYXQodGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2VsZWN0ZWQuaG91cnMpO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlNaW51dGVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1RpbWVGb3JtYXQodGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2VsZWN0ZWQubWludXRlcyk7XG4gIH1cblxuICBnZXQgaXNIb3Vyc01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmlzSG91cnNNb2RlO1xuICB9XG5cbiAgZ2V0IGhvdXJzTW9kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5ob3Vyc01vZGU7XG4gIH1cblxuICBoYW5kbGVNaW51dGVzQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0TW9kZShNT0RFX01JTlVURVMpO1xuICB9XG5cbiAgaGFuZGxlSG91cnNDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZXRNb2RlKE1PREVfSE9VUlMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NsYXNzZXMvdmVydGljYWwtZXZlbnQtaGFuZGxlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ01vdmVtZW50RW1pdHRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE1vdmVtZW50RW1pdHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vdXNlRG93biQ6IFN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICBtb3VzZVVwJDogIFN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICBtb3VzZU1vdmUkOiAgU3ViamVjdDxNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XG4gIHRvdWNoTW92ZSQ6IFN1YmplY3Q8VG91Y2hFdmVudD4gPSBuZXcgU3ViamVjdDxUb3VjaEV2ZW50PigpO1xuXG4gIHZlcnRpY2FsRXZlbnRIYW5kbGVyID0gbmV3IFZlcnRpY2FsRXZlbnRIYW5kbGVyKCk7XG5cbiAgQE91dHB1dCgpIG5nTW92ZW1lbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKSBvbk1vdXNlRG93bihldmVudCkgeyB0aGlzLm1vdXNlRG93biQubmV4dChldmVudCk7IH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pIG9uTW91c2VVcChldmVudCkgeyB0aGlzLm1vdXNlVXAkLm5leHQoZXZlbnQpOyB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pIG9uTW91c2VNb3ZlKGV2ZW50KSB7IHRoaXMubW91c2VNb3ZlJC5uZXh0KGV2ZW50KTsgfVxuICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnLCBbJyRldmVudCddKSBvblRvdWNoTW92ZShldmVudCkgeyB0aGlzLnRvdWNoTW92ZSQubmV4dChldmVudCk7IH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2F0Y2hNb3ZlbWVudCgpO1xuICAgIHRoaXMudmVydGljYWxFdmVudEhhbmRsZXIudmVydGljYWxNb3ZlbWVudEVtaXR0ZXJcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMubmdNb3ZlbWVudEVtaXR0ZXIuZW1pdCh2YWx1ZSkpO1xuICB9XG5cbiAgd2F0Y2hNb3ZlbWVudCgpOiB2b2lkIHtcbiAgICBtZXJnZShcbiAgICAgIHRoaXMubW91c2VEb3duJCxcbiAgICAgIHRoaXMubW91c2VVcCQsXG4gICAgICB0aGlzLm1vdXNlTW92ZSQsXG4gICAgICB0aGlzLnRvdWNoTW92ZSRcbiAgICApLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB0aGlzLnZlcnRpY2FsRXZlbnRIYW5kbGVyLmhhbmRsZUV2ZW50KGV2ZW50KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCBzdGF0ZSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBIT1VSU19NT0RFX0FNLCBIT1VSU19NT0RFX1BNIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGhvdXJzTW9kZVNsaWRlOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKFxuICAnaG91cnNNb2RlU2xpZGUnLCBbXG4gICAgc3RhdGUoSE9VUlNfTU9ERV9BTSwgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICB9KSksXG4gICAgc3RhdGUoSE9VUlNfTU9ERV9QTSwgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTlweCknXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oYCR7SE9VUlNfTU9ERV9BTX0gPT4gJHtIT1VSU19NT0RFX1BNfWAsIFtcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oYCR7SE9VUlNfTU9ERV9QTX0gPT4gJHtIT1VSU19NT0RFX0FNfWAsIFtcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnKVxuICAgIF0pLFxuICBdXG4pO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgaG91cnNNb2RlU2xpZGUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL2hvdXJzLW1vZGUtc2xpZGUnO1xuaW1wb3J0IHsgSE9VUlNfTU9ERV9BTSwgSE9VUlNfTU9ERV9QTSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWhvdXJzLW1vZGUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvdXJzLW1vZGUtcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW2hvdXJzTW9kZVNsaWRlXSxcbn0pXG5leHBvcnQgY2xhc3MgSG91cnNNb2RlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBob3Vyc01vZGVPcHRpb25zOiBzdHJpbmdbXSA9IFtIT1VSU19NT0RFX0FNLCBIT1VSU19NT0RFX1BNXTtcblxuICBnZXQgaG91cnNNb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmhvdXJzTW9kZTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0SG91cnNNb2RlKHRoaXMuaG91cnNNb2RlT3B0aW9ucy5maW5kKChtb2RlOiBzdHJpbmcpID0+IG1vZGUgIT09IHRoaXMuaG91cnNNb2RlKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2xvY2tQaWNrZXJTZXJ2aWNlOiBDbG9ja1BpY2tlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jbG9jay1waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2lyY2xlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NpcmNsZS1idXR0b24vY2lyY2xlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZURpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZS1kaXNwbGF5L3RpbWUtZGlzcGxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW92ZW1lbnRFbWl0dGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21vdmVtZW50LWVtaXR0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENsb2NrUGlja2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSG91cnNNb2RlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG91cnMtbW9kZS1wYW5lbC9ob3Vycy1tb2RlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci1kaWFsb2cuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENsb2NrUGlja2VyRGlyZWN0aXZlLFxuICAgIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50LFxuICAgIENpcmNsZUNvbXBvbmVudCxcbiAgICBDaXJjbGVCdXR0b25Db21wb25lbnQsXG4gICAgVGltZURpc3BsYXlDb21wb25lbnQsXG4gICAgTW92ZW1lbnRFbWl0dGVyRGlyZWN0aXZlLFxuICAgIEhvdXJzTW9kZVBhbmVsQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCcm93c2VyQW5pbWF0aW9uc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtDbG9ja1BpY2tlckRpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW0R5bmFtaWNDb21wb25lbnRzU2VydmljZSwgQ2xvY2tQaWNrZXJTZXJ2aWNlLCBDbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgTmdDbG9ja1BpY2tlckxpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQWEscUJBQXFCO0lBQ2hDLGlCQUFnQjs7Ozs7SUFFaEIsUUFBUSxDQUFDLEdBQVEsS0FBVTs7OztJQUMzQixTQUFTLE1BQVc7Ozs7O0lBQ3BCLFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCO0NBQ0Y7Ozs7OztBQ3BCRCxNQU1hLHdCQUF3Qjs7OztJQUVuQyxZQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtLQUFLOzs7Ozs7Ozs7SUFFcEUsb0JBQW9CLENBQ3pCLFNBQWtCLEVBQ2xCLEdBQXFCLEVBQ3JCLFVBQVUsRUFDVixNQUEwQjs7Y0FFcEIsT0FBTyxHQUFRLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7O2NBQy9FLFlBQVksR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUdqRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN4QixvQkFBSSxZQUFZLENBQUMsUUFBUSxJQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQztRQUVELG9CQUFJLFlBQVksQ0FBQyxRQUFRLElBQUUsS0FBSyxHQUFHLENBQUMsSUFBUztZQUMzQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QixDQUFDO0tBQ0g7OztZQXZCRixVQUFVOzs7O1lBTFUsd0JBQXdCOzs7Ozs7Ozs7O0FDQTdDLE1BQXNCLGVBQWU7SUFFbkM7UUFHQSxnQkFBVyxHQUFHLE9BQU8sQ0FBQztRQUN0QixrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUMxQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7S0FMWDs7Ozs7SUFNakIsS0FBSyxDQUFDLElBQVMsS0FBVTtDQUUxQjs7Ozs7O0FDVkQsTUFFYSxvQkFBb0I7SUFTL0I7UUFMQSxvQkFBZSxHQUFrQixJQUFJLENBQUM7UUFDdEMsbUJBQWMsR0FBa0IsSUFBSSxDQUFDO1FBQ3JDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLDRCQUF1QixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO0tBRWpEOzs7OztJQUVoQixXQUFXLENBQUMsUUFBaUI7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7S0FDOUI7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQThCO1FBQ3ZDLE9BQU8sS0FBSyxZQUFZLFVBQVU7Y0FDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7Y0FDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUVqQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBaUI7Y0FDekIsRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLOztjQUNuQixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFFMUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUV2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWlCO2NBQ3pCLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O2NBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUUxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7O0lBRUQscUJBQXFCLENBQUMsS0FBYTtRQUNqQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO2FBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7S0FDRjs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZTtRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7S0FDbkQ7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7OztJQUVELFdBQVcsQ0FBQyxLQUE4QjtRQUN4QyxRQUFRLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLG9CQUFhLEtBQUssR0FBQyxDQUFDO1lBQzVDLEtBQUssU0FBUztnQkFDWixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM5QixLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDaEMsS0FBSyxXQUFXO2dCQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVUsb0JBQWEsS0FBSyxHQUFDLENBQUM7U0FDN0M7S0FDRjs7QUF2RU0sK0JBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIsaUNBQVksR0FBRyxNQUFNLENBQUM7Ozs7Ozs7QUNKL0IsTUFBYSxNQUFNLEdBQUc7SUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNuRDs7QUFPRCxNQUFhLFlBQVksR0FBRyxTQUFTOztBQUNyQyxNQUFhLFVBQVUsR0FBRyxPQUFPOztBQUNqQyxNQUFhLGFBQWEsR0FBRyxJQUFJOztBQUNqQyxNQUFhLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7O0FDYmpDLFNBQWdCLG1CQUFtQixDQUFDLEtBQWE7SUFDL0MsT0FBTyxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0NBQ3BEOzs7Ozs7O0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsSUFBWTs7VUFDNUQsVUFBVSxHQUFHLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7O1VBQzNDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7SUFFMUUsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQyxDQUFDO0NBQ0o7Ozs7Ozs7QUFFRCxTQUFnQixjQUFjLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxJQUFZO0lBQ3pFLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDdEM7Ozs7OztBQ2hCRCxNQU9hLGtCQUFrQjtJQTRFN0I7UUEzRUEsVUFBSyxHQUFHLFVBQVUsQ0FBQztRQUNuQixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLGNBQVMsR0FBaUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztLQXlFbkM7Ozs7SUF2RWpCLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ25GOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEI7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVk7O2NBQ2QsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Y0FDeEQsU0FBUyxHQUFHLFlBQVksR0FBRyxDQUFDOztjQUM1QixTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUV6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckQ7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQVk7O2NBQ2QsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Y0FDeEQsU0FBUyxHQUFHLFlBQVksR0FBRyxDQUFDOztjQUM1QixTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUV6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMzRTs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDN0I7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQy9COzs7OztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEI7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDbkI7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDeEI7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzVCOzs7WUEzRUYsVUFBVTs7Ozs7Ozs7O0FDTlgsTUFtQmEsMEJBQTJCLFNBQVEsZUFBZTs7OztJQUM3RCxZQUFtQixrQkFBc0M7UUFBSSxLQUFLLEVBQUUsQ0FBQztRQUFsRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0tBQWM7Ozs7SUFFdkUsSUFBSSxLQUFLO1FBQ1AsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO0tBQ3pDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzNCOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEI7Ozs7O0lBRUQsa0JBQWtCLENBQUMsS0FBWTtRQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7S0FDRjs7Ozs7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDN0IsUUFBUSxRQUFRO1lBQ2QsS0FBSyxvQkFBb0IsQ0FBQyxVQUFVO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2pDLEtBQUssb0JBQW9CLENBQUMsWUFBWTtnQkFDcEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUNwQztLQUNGOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVztjQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztjQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVc7Y0FDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7Y0FDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNyRDs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFZO1FBQzNCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2pDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDh5QkFBbUQ7Z0JBRW5ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQWJRLGtCQUFrQjs7Ozs7OztBQ0ozQixNQVNhLHdCQUF3Qjs7OztJQUduQyxZQUFtQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtLQUFLOzs7OztJQUVuRSx3QkFBd0IsQ0FBQyxHQUFxQjtRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0tBQzdCOzs7OztJQUVNLHFCQUFxQixDQUFDLE1BQTBCO1FBQ3JELE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLHdCQUF3QixDQUFDLG9CQUFvQixDQUN0RiwwQkFBMEIsRUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixVQUFVLEVBQ1YsTUFBTSxDQUNMLENBQ0YsQ0FBQztLQUNIOzs7WUFsQkYsVUFBVTs7OztZQUxGLHdCQUF3Qjs7Ozs7OztBQ0hqQyxNQVdhLG9CQUFxQixTQUFRLHFCQUFxQjs7Ozs7O0lBQzdELFlBQ1UsVUFBc0IsRUFDdEIsZ0JBQWtDLEVBQ2xDLHdCQUFrRDtRQUN4RCxLQUFLLEVBQUUsQ0FBQztRQUhGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBSWxELHdCQUFtQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0tBSG5FOzs7O0lBTWQsT0FBTztRQUNMLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIscUJBQXFCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQy9DLFNBQVMsQ0FBQyxDQUFDLElBQVk7WUFDdEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQztTQUNGLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUMvRTs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sb0JBQW9CLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDOUc7Ozs7WUFWMEQsVUFBVTtZQUE1QixnQkFBZ0I7WUFLaEQsd0JBQXdCOzs7a0NBYTlCLEtBQUs7a0NBQ0wsTUFBTTtzQkFFTixZQUFZLFNBQUMsT0FBTzs7Ozs7OztBQ3JCdkI7QUFFQSxNQUFhLE9BQU8sR0FBNkIsT0FBTyxDQUN0RCxTQUFTLEVBQUU7SUFDVCxVQUFVLENBQUMsa0JBQWtCLEVBQUU7UUFDN0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQ3BFLENBQUM7SUFDRixVQUFVLENBQUMsa0JBQWtCLEVBQUU7UUFDN0IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDNUMsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQ3BFLENBQUM7Q0FDSCxDQUNGOzs7Ozs7QUNiRCxNQWNhLGVBQWU7Ozs7SUFHMUIsWUFBbUIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFGL0MsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUVKOzs7O0lBRTlELElBQUksS0FBSztRQUNQLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztLQUNyQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztLQUN6Qzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztLQUMxQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsOFpBQXNDO2dCQUV0QyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVhRLGtCQUFrQjs7OzJCQWF4QixNQUFNOzs7Ozs7O0FDZlQsTUFRYSxxQkFBcUI7SUFHaEMsaUJBQWlCOzs7WUFUbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDBLQUE2QztnQkFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7Ozt1QkFFRSxLQUFLOzs7Ozs7O0FDVFIsTUFZYSxvQkFBb0I7Ozs7SUFFL0IsWUFBbUIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7S0FBSzs7OztJQUU5RCxJQUFJLFlBQVk7UUFDZCxPQUFPLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEU7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3RFOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO0tBQzVDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO0tBQzFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDL0M7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzdDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG9tQkFBNEM7Z0JBRTVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQVBRLGtCQUFrQjs7Ozs7OztBQ0ozQixNQVFhLHdCQUF3QjtJQWNuQztRQWJBLGVBQVUsR0FBd0IsSUFBSSxPQUFPLEVBQWMsQ0FBQztRQUM1RCxhQUFRLEdBQXlCLElBQUksT0FBTyxFQUFjLENBQUM7UUFDM0QsZUFBVSxHQUF5QixJQUFJLE9BQU8sRUFBYyxDQUFDO1FBQzdELGVBQVUsR0FBd0IsSUFBSSxPQUFPLEVBQWMsQ0FBQztRQUU1RCx5QkFBb0IsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFFeEMsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7S0FNOUQ7Ozs7O0lBTHNCLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7Ozs7SUFDckQsU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7OztJQUM3QyxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Ozs7O0lBQ25ELFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7OztJQUkxRixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUI7YUFDOUMsU0FBUyxDQUFDLENBQUMsS0FBYSxLQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyRTs7OztJQUVELGFBQWE7UUFDWCxLQUFLLENBQ0gsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUE4QixLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMvRjs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7OztnQ0FTRSxNQUFNOzBCQUNOLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBQ2xDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBQ3BDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7QUNwQnZDO0FBR0EsTUFBYSxjQUFjLEdBQTZCLE9BQU8sQ0FDN0QsZ0JBQWdCLEVBQUU7SUFDaEIsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDekIsU0FBUyxFQUFFLGVBQWU7S0FDM0IsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDekIsU0FBUyxFQUFFLG1CQUFtQjtLQUMvQixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsR0FBRyxhQUFhLE9BQU8sYUFBYSxFQUFFLEVBQUU7UUFDakQsT0FBTyxDQUFDLFlBQVksQ0FBQztLQUN0QixDQUFDO0lBQ0YsVUFBVSxDQUFDLEdBQUcsYUFBYSxPQUFPLGFBQWEsRUFBRSxFQUFFO1FBQ2pELE9BQU8sQ0FBQyxZQUFZLENBQUM7S0FDdEIsQ0FBQztDQUNILENBQ0Y7Ozs7OztBQ2xCRCxNQVlhLHVCQUF1Qjs7OztJQVdsQyxZQUFtQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVZ6RCxxQkFBZ0IsR0FBYSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztLQVVFOzs7O0lBUjlELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztLQUMxQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFZLEtBQUssSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQzdHOzs7O0lBSUQsUUFBUTtLQUNQOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDBXQUFnRDtnQkFFaEQsVUFBVSxFQUFFLENBQUMsY0FBYyxDQUFDOzthQUM3Qjs7OztZQVRRLGtCQUFrQjs7Ozs7OztBQ0YzQixNQStCYSxzQkFBc0I7OztZQWhCbEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4Qix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztnQkFDaEQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLHdCQUF3QixDQUFDO2dCQUNuRixlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUM5Qzs7Ozs7Ozs7Ozs7Ozs7OyJ9