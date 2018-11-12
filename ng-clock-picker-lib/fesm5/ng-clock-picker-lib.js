import { Injectable, ComponentFactoryResolver, Component, ViewEncapsulation, Directive, Input, HostListener, ViewContainerRef, ElementRef, forwardRef, EventEmitter, Output, NgModule } from '@angular/core';
import { Subject, Observable, merge } from 'rxjs';
import { __extends } from 'tslib';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AbstractValueAccessor = /** @class */ (function () {
    function AbstractValueAccessor() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    AbstractValueAccessor.prototype.onChange = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) { };
    /**
     * @return {?}
     */
    AbstractValueAccessor.prototype.onTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} obj
     * @return {?}
     */
    AbstractValueAccessor.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._value = obj;
        this.onChange(obj);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    return AbstractValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DynamicComponentsService = /** @class */ (function () {
    function DynamicComponentsService(componentFactoryResolver) {
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
    DynamicComponentsService.prototype.loadDynamicComponent = /**
     * @template T
     * @param {?} component
     * @param {?} vcr
     * @param {?} subscriber
     * @param {?=} config
     * @return {?}
     */
    function (component, vcr, subscriber, config) {
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        var componentRef = vcr.createComponent(factory);
        for (var key in config) {
            ((/** @type {?} */ (componentRef.instance)))[key] = config[key];
        }
        ((/** @type {?} */ (componentRef.instance))).close = function (data) {
            componentRef.destroy();
            subscriber.next(data);
        };
    };
    DynamicComponentsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DynamicComponentsService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return DynamicComponentsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.buttonClose = 'close';
        this.buttonConfirm = 'confirm';
        this.closeOnOverlayClick = false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DialogComponent.prototype.close = /**
     * @param {?} data
     * @return {?}
     */
    function (data) { };
    return DialogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var VerticalEventHandler = /** @class */ (function () {
    function VerticalEventHandler() {
        this.previousClientY = null;
        this.currentClientY = null;
        this.isMoveLocked = true;
        this.verticalMovementEmitter = new Subject();
    }
    /**
     * @param {?} isLocked
     * @return {?}
     */
    VerticalEventHandler.prototype.setMoveLock = /**
     * @param {?} isLocked
     * @return {?}
     */
    function (isLocked) {
        this.isMoveLocked = isLocked;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VerticalEventHandler.prototype.handleMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event instanceof MouseEvent
            ? this.handleMouseMove(event)
            : this.handleTouchMove(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VerticalEventHandler.prototype.handleMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var clientY = event.clientY;
        /** @type {?} */
        var delta = this.calculateDelta(clientY);
        if (this.isMoveLocked) {
            return null;
        }
        this.emitMovementDirection(delta);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VerticalEventHandler.prototype.handleTouchMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var clientY = event.touches[0].clientY;
        /** @type {?} */
        var delta = this.calculateDelta(clientY);
        this.emitMovementDirection(delta);
    };
    /**
     * @param {?} delta
     * @return {?}
     */
    VerticalEventHandler.prototype.emitMovementDirection = /**
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        if (delta > 0) {
            this.verticalMovementEmitter.next('down');
        }
        else if (delta < 0) {
            this.verticalMovementEmitter.next('up');
        }
    };
    /**
     * @param {?} clientY
     * @return {?}
     */
    VerticalEventHandler.prototype.calculateDelta = /**
     * @param {?} clientY
     * @return {?}
     */
    function (clientY) {
        this.previousClientY = this.currentClientY;
        this.currentClientY = clientY;
        return this.currentClientY - this.previousClientY;
    };
    /**
     * @return {?}
     */
    VerticalEventHandler.prototype.handleMouseUp = /**
     * @return {?}
     */
    function () {
        this.setMoveLock(true);
    };
    /**
     * @return {?}
     */
    VerticalEventHandler.prototype.handleMouseDown = /**
     * @return {?}
     */
    function () {
        this.setMoveLock(false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    VerticalEventHandler.prototype.handleEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    VerticalEventHandler.MovementUp = 'up';
    VerticalEventHandler.MovementDown = 'down';
    return VerticalEventHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var config = {
    hours: Array(12).fill(0, 0, 12).map(function (_, i) { return i + 1; }),
    minutes: Array(60).fill(0, 0, 60).map(function (_, i) { return i; }),
};
/** @type {?} */
var MODE_MINUTES = 'minutes';
/** @type {?} */
var MODE_HOURS = 'hours';
/** @type {?} */
var HOURS_MODE_AM = 'AM';
/** @type {?} */
var HOURS_MODE_PM = 'PM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function convertToTimeFormat(value) {
    return value < 10 ? "0" + value : value.toString();
}
/**
 * @param {?} hours
 * @param {?} minutes
 * @param {?} mode
 * @return {?}
 */
function getTime(hours, minutes, mode) {
    /** @type {?} */
    var timeString = " " + hours + ":" + minutes + " " + mode;
    /** @type {?} */
    var date = new Date(new Date().toISOString().split('T')[0] + timeString);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ClockPickerDialogComponent = /** @class */ (function (_super) {
    __extends(ClockPickerDialogComponent, _super);
    function ClockPickerDialogComponent(clockPickerService) {
        var _this = _super.call(this) || this;
        _this.clockPickerService = clockPickerService;
        return _this;
    }
    Object.defineProperty(ClockPickerDialogComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return config[this.clockPickerService.mode];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClockPickerDialogComponent.prototype, "fullTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.fullTime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleClose = /**
     * @return {?}
     */
    function () {
        this.close(this.fullTime);
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.close(null); //
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleOverlayClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.closeOnOverlayClick) {
            this.cancel();
        }
    };
    /**
     * @param {?} movement
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleMovement = /**
     * @param {?} movement
     * @return {?}
     */
    function (movement) {
        switch (movement) {
            case VerticalEventHandler.MovementUp:
                return this.handleMovementUp();
            case VerticalEventHandler.MovementDown:
                return this.handleMovementDown();
        }
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleMovementUp = /**
     * @return {?}
     */
    function () {
        return this.clockPickerService.isHoursMode
            ? this.clockPickerService.increment(MODE_HOURS)
            : this.clockPickerService.increment(MODE_MINUTES);
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleMovementDown = /**
     * @return {?}
     */
    function () {
        return this.clockPickerService.isHoursMode
            ? this.clockPickerService.decrement(MODE_HOURS)
            : this.clockPickerService.decrement(MODE_MINUTES);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleItemChange = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.clockPickerService.isHoursMode) {
            this.clockPickerService.setHours(item);
            this.clockPickerService.setModeToMinutes();
        }
        else {
            this.clockPickerService.setMinutes(item);
            this.close(this.fullTime);
        }
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clockPickerService.reset();
    };
    ClockPickerDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-clock-picker-dialog',
                    template: "<div [ngClass]=\"wrapperClassName\">\n  <div class=\"clock-picker__overlay\" (click)=\"handleOverlayClick($event)\"></div>\n  <div class=\"clock-picker__wrapper\">\n    <nav class=\"clock-picker__nav\">\n      <ng-time-display></ng-time-display>\n    </nav>\n    <ng-circle\n      (ngMovementEmitter)=\"handleMovement($event)\"\n      (onItemChange)=\"handleItemChange($event)\"\n    ></ng-circle>\n    <footer class=\"clock-picker__footer\">\n      <button\n        class=\"clock-picker__footer__dialog-control-button\"\n        (click)=\"cancel()\"\n      >\n        {{buttonClose}}\n      </button>\n      <button\n        class=\"clock-picker__footer__dialog-control-button\"\n        (click)=\"handleClose()\"\n      >\n        {{buttonConfirm}}\n      </button>\n    </footer>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".clock-picker__wrapper{width:300px;height:auto;top:50%;right:auto;bottom:auto;left:50%;position:fixed;display:flex;flex-direction:column;align-items:center;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);box-shadow:1px 2px 30px rgba(0,0,0,.2)}.clock-picker__overlay{width:100vw;height:100vh;top:0;right:auto;bottom:auto;left:0;position:fixed;background-color:rgba(242,242,242,.6)}.clock-picker__footer,.clock-picker__nav{width:100%;height:70px;background-color:#f2f2f2}.clock-picker__nav{display:flex;justify-content:center;align-items:center;margin-bottom:10px}.clock-picker__footer{box-sizing:border-box;padding:0 5px;display:flex;align-items:center;justify-content:flex-end;margin-top:10px;background-color:#f2f2f2}.clock-picker__footer__dialog-control-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:5px;cursor:pointer;font:400 16px Arial,Helvetica,sans-serif;color:#495351}"]
                }] }
    ];
    /** @nocollapse */
    ClockPickerDialogComponent.ctorParameters = function () { return [
        { type: ClockPickerService }
    ]; };
    return ClockPickerDialogComponent;
}(DialogComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ClockPickerDialogService = /** @class */ (function () {
    function ClockPickerDialogService(dynamicComponentsService) {
        this.dynamicComponentsService = dynamicComponentsService;
    }
    /**
     * @param {?} vcr
     * @return {?}
     */
    ClockPickerDialogService.prototype.registerViewContainerRef = /**
     * @param {?} vcr
     * @return {?}
     */
    function (vcr) {
        this.viewContainerRef = vcr;
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    ClockPickerDialogService.prototype.showClockPickerDialog = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return new Observable(function (subscriber) { return _this.dynamicComponentsService.loadDynamicComponent(ClockPickerDialogComponent, _this.viewContainerRef, subscriber, config); });
    };
    ClockPickerDialogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClockPickerDialogService.ctorParameters = function () { return [
        { type: DynamicComponentsService }
    ]; };
    return ClockPickerDialogService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ClockPickerDirective = /** @class */ (function (_super) {
    __extends(ClockPickerDirective, _super);
    function ClockPickerDirective(elementRef, viewContainerRef, clockPickerDialogService) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.viewContainerRef = viewContainerRef;
        _this.clockPickerDialogService = clockPickerDialogService;
        _this.ngClockPickerChange = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    ClockPickerDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clockPickerDialogService
            .showClockPickerDialog(this.ngClockPickerConfig)
            .subscribe(function (data) {
            if (data) {
                _this.elementRef.nativeElement.value = data;
                _this.onChange(data);
                _this.ngClockPickerChange.emit(data);
            }
        });
    };
    /**
     * @return {?}
     */
    ClockPickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.clockPickerDialogService.registerViewContainerRef(this.viewContainerRef);
    };
    ClockPickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngClockPicker]',
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return ClockPickerDirective; }), multi: true }],
                },] }
    ];
    /** @nocollapse */
    ClockPickerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ClockPickerDialogService }
    ]; };
    ClockPickerDirective.propDecorators = {
        ngClockPickerConfig: [{ type: Input }],
        ngClockPickerChange: [{ type: Output }],
        onFocus: [{ type: HostListener, args: ['focus',] }]
    };
    return ClockPickerDirective;
}(AbstractValueAccessor));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var scaleIn = trigger('scaleIn', [
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
var CircleComponent = /** @class */ (function () {
    function CircleComponent(clockPickerService) {
        this.clockPickerService = clockPickerService;
        this.onItemChange = new EventEmitter();
    }
    Object.defineProperty(CircleComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return config[this.mode];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleComponent.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    CircleComponent.prototype.isSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.selected[this.mode] === item;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CircleComponent.prototype.handleClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onItemChange.emit(item);
    };
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
    CircleComponent.ctorParameters = function () { return [
        { type: ClockPickerService }
    ]; };
    CircleComponent.propDecorators = {
        onItemChange: [{ type: Output }]
    };
    return CircleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CircleButtonComponent = /** @class */ (function () {
    function CircleButtonComponent() {
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
    CircleButtonComponent.ctorParameters = function () { return []; };
    CircleButtonComponent.propDecorators = {
        selected: [{ type: Input }]
    };
    return CircleButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TimeDisplayComponent = /** @class */ (function () {
    function TimeDisplayComponent(clockPickerService) {
        this.clockPickerService = clockPickerService;
    }
    Object.defineProperty(TimeDisplayComponent.prototype, "displayHours", {
        get: /**
         * @return {?}
         */
        function () {
            return convertToTimeFormat(this.clockPickerService.selected.hours);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeDisplayComponent.prototype, "displayMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return convertToTimeFormat(this.clockPickerService.selected.minutes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeDisplayComponent.prototype, "isHoursMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.isHoursMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeDisplayComponent.prototype, "hoursMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.hoursMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimeDisplayComponent.prototype.handleMinutesClick = /**
     * @return {?}
     */
    function () {
        this.clockPickerService.setMode(MODE_MINUTES);
    };
    /**
     * @return {?}
     */
    TimeDisplayComponent.prototype.handleHoursClick = /**
     * @return {?}
     */
    function () {
        this.clockPickerService.setMode(MODE_HOURS);
    };
    TimeDisplayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-time-display',
                    template: "<div class=\"clock-picker__time-display\">\n  <button\n    (click)=\"handleHoursClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': isHoursMode}\"\n    >{{displayHours}}\n  </button>\n  <span class=\"clock-picker__time-display__divider\">:</span>\n  <button\n    (click)=\"handleMinutesClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': !isHoursMode}\"\n  >\n    {{displayMinutes}}\n  </button>\n  <ng-hours-mode-panel></ng-hours-mode-panel>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".clock-picker__time-display{display:flex;justify-content:center;align-items:center;margin:20px 0}.clock-picker__time-display__button,.clock-picker__time-display__divider,.clock-picker__time-display__hours-mode{color:#495351}.clock-picker__time-display__button,.clock-picker__time-display__divider{font:400 30px Arial,Helvetica,sans-serif}.clock-picker__time-display__hours-mode{margin:0 5px;font:400 20px Arial,Helvetica,sans-serif}.clock-picker__time-display__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:30px;cursor:pointer}.clock-picker__time-display__button--selected,.clock-picker__time-display__button:hover{color:#6d7c79}"]
                }] }
    ];
    /** @nocollapse */
    TimeDisplayComponent.ctorParameters = function () { return [
        { type: ClockPickerService }
    ]; };
    return TimeDisplayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var hoursModeSlide = trigger('hoursModeSlide', [
    state(HOURS_MODE_AM, style({
        transform: 'translateY(0)'
    })),
    state(HOURS_MODE_PM, style({
        transform: 'translateY(-19px)'
    })),
    transition(HOURS_MODE_AM + " => " + HOURS_MODE_PM, [
        animate('200ms ease')
    ]),
    transition(HOURS_MODE_PM + " => " + HOURS_MODE_AM, [
        animate('200ms ease')
    ]),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var HoursModePanelComponent = /** @class */ (function () {
    function HoursModePanelComponent(clockPickerService) {
        this.clockPickerService = clockPickerService;
        this.hoursModeOptions = [HOURS_MODE_AM, HOURS_MODE_PM];
    }
    Object.defineProperty(HoursModePanelComponent.prototype, "hoursMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.hoursMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HoursModePanelComponent.prototype.toggleMode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clockPickerService.setHoursMode(this.hoursModeOptions.find(function (mode) { return mode !== _this.hoursMode; }));
    };
    /**
     * @return {?}
     */
    HoursModePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    HoursModePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-hours-mode-panel',
                    template: "<div class=\"clock-picker__hours-mode-panel\">\n  <div [@hoursModeSlide]=\"hoursMode\" class=\"clock-picker__hours-mode-panel__scrollable\">\n    <button\n      *ngFor=\"let option of hoursModeOptions\"\n      (click)=\"toggleMode()\"\n      class=\"clock-picker__hours-mode-panel__button\"\n    >{{option.toLowerCase()}}</button>\n  </div>\n</div>\n",
                    animations: [hoursModeSlide],
                    styles: [".clock-picker__hours-mode-panel{position:relative;height:19px;overflow:hidden}.clock-picker__hours-mode-panel__scrollable{display:flex;flex-direction:column}.clock-picker__hours-mode-panel__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:19px;cursor:pointer;margin:0 5px;font:400 13px Arial,Helvetica,sans-serif;color:#495351}"]
                }] }
    ];
    /** @nocollapse */
    HoursModePanelComponent.ctorParameters = function () { return [
        { type: ClockPickerService }
    ]; };
    return HoursModePanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NgClockPickerLibModule = /** @class */ (function () {
    function NgClockPickerLibModule() {
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
    return NgClockPickerLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NgClockPickerLibModule, ClockPickerDialogService, hoursModeSlide as ɵm, scaleIn as ɵh, DialogComponent as ɵe, AbstractValueAccessor as ɵb, CircleButtonComponent as ɵi, CircleComponent as ɵg, ClockPickerDialogComponent as ɵd, HoursModePanelComponent as ɵl, TimeDisplayComponent as ɵj, ClockPickerDirective as ɵa, MovementEmitterDirective as ɵk, ClockPickerService as ɵf, DynamicComponentsService as ɵc, HOURS_MODE_AM as ɵn, HOURS_MODE_PM as ɵo };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2xvY2stcGlja2VyLWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY2xhc3Nlcy9hYnN0cmFjdC12YWx1ZS1hY2Nlc3Nvci50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvc2VydmljZXMvZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NsYXNzZXMvYWJzdHJhY3QtZGlhbG9nLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9jbGFzc2VzL3ZlcnRpY2FsLWV2ZW50LWhhbmRsZXIudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL3V0aWxzL2NvbnN0YW50cy50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvdXRpbHMvdGltZS50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvc2VydmljZXMvY2xvY2stcGlja2VyLWRpYWxvZy5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9kaXJlY3RpdmVzL2Nsb2NrLXBpY2tlci5kaXJlY3RpdmUudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2FuaW1hdGlvbnMvc2NhbGUtaW4udHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NvbXBvbmVudHMvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NvbXBvbmVudHMvY2lyY2xlLWJ1dHRvbi9jaXJjbGUtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY29tcG9uZW50cy90aW1lLWRpc3BsYXkvdGltZS1kaXNwbGF5LmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvZGlyZWN0aXZlcy9tb3ZlbWVudC1lbWl0dGVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvYW5pbWF0aW9ucy9ob3Vycy1tb2RlLXNsaWRlLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9jb21wb25lbnRzL2hvdXJzLW1vZGUtcGFuZWwvaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL25nLWNsb2NrLXBpY2tlci1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgX3ZhbHVlOiBhbnk7XG4gIG9uQ2hhbmdlKG9iajogYW55KTogdm9pZCB7fVxuICBvblRvdWNoZWQoKTogdm9pZCB7fVxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSBvYmo7XG4gICAgdGhpcy5vbkNoYW5nZShvYmopO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jbGFzc2VzL2Fic3RyYWN0LWRpYWxvZyc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cblxuICBwdWJsaWMgbG9hZER5bmFtaWNDb21wb25lbnQ8VCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudD4oXG4gICAgY29tcG9uZW50OiBUeXBlPFQ+LFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBzdWJzY3JpYmVyLFxuICAgIGNvbmZpZz86IENsb2NrUGlja2VyQ29uZmlnXG4gICkge1xuICAgIGNvbnN0IGZhY3Rvcnk6IGFueSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdmNyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAoPFQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKVtrZXldID0gY29uZmlnW2tleV07XG4gICAgfVxuXG4gICAgKDxUPmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuY2xvc2UgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgc3Vic2NyaWJlci5uZXh0KGRhdGEpO1xuICAgIH07XG4gIH1cbn1cbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWFsb2dDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgd3JhcHBlckNsYXNzTmFtZTogc3RyaW5nO1xuICBidXR0b25DbG9zZSA9ICdjbG9zZSc7XG4gIGJ1dHRvbkNvbmZpcm0gPSAnY29uZmlybSc7XG4gIGNsb3NlT25PdmVybGF5Q2xpY2sgPSBmYWxzZTtcbiAgY2xvc2UoZGF0YTogYW55KTogdm9pZCB7fVxuXG59XG4iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRXZlbnRIYW5kbGVyIHtcbiAgc3RhdGljIE1vdmVtZW50VXAgPSAndXAnO1xuICBzdGF0aWMgTW92ZW1lbnREb3duID0gJ2Rvd24nO1xuXG4gIHByZXZpb3VzQ2xpZW50WTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGN1cnJlbnRDbGllbnRZOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgaXNNb3ZlTG9ja2VkID0gdHJ1ZTtcbiAgdmVydGljYWxNb3ZlbWVudEVtaXR0ZXI6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0TW92ZUxvY2soaXNMb2NrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzTW92ZUxvY2tlZCA9IGlzTG9ja2VkO1xuICB9XG5cbiAgaGFuZGxlTW92ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50XG4gICAgICA/IHRoaXMuaGFuZGxlTW91c2VNb3ZlKGV2ZW50KVxuICAgICAgOiB0aGlzLmhhbmRsZVRvdWNoTW92ZShldmVudCk7XG5cbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNhbGN1bGF0ZURlbHRhKGNsaWVudFkpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3ZlTG9ja2VkKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICB0aGlzLmVtaXRNb3ZlbWVudERpcmVjdGlvbihkZWx0YSk7XG4gIH1cblxuICBoYW5kbGVUb3VjaE1vdmUoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNhbGN1bGF0ZURlbHRhKGNsaWVudFkpO1xuXG4gICAgdGhpcy5lbWl0TW92ZW1lbnREaXJlY3Rpb24oZGVsdGEpO1xuICB9XG5cbiAgZW1pdE1vdmVtZW50RGlyZWN0aW9uKGRlbHRhOiBudW1iZXIpIHtcbiAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsTW92ZW1lbnRFbWl0dGVyLm5leHQoJ2Rvd24nKTtcbiAgICB9IGVsc2UgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgdGhpcy52ZXJ0aWNhbE1vdmVtZW50RW1pdHRlci5uZXh0KCd1cCcpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZURlbHRhKGNsaWVudFk6IG51bWJlcik6IG51bWJlciB7XG4gICAgdGhpcy5wcmV2aW91c0NsaWVudFkgPSB0aGlzLmN1cnJlbnRDbGllbnRZO1xuICAgIHRoaXMuY3VycmVudENsaWVudFkgPSBjbGllbnRZO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENsaWVudFkgLSB0aGlzLnByZXZpb3VzQ2xpZW50WTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlVXAoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb3ZlTG9jayh0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vdmVMb2NrKGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZSg8TW91c2VFdmVudD5ldmVudCk7XG4gICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW91c2VVcCgpO1xuICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW91c2VEb3duKCk7XG4gICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb3ZlKDxUb3VjaEV2ZW50PmV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGhvdXJzOiBBcnJheSgxMikuZmlsbCgwLCAwLCAxMikubWFwKChfLCBpKSA9PiBpICsgMSksXG4gIG1pbnV0ZXM6IEFycmF5KDYwKS5maWxsKDAsIDAsIDYwKS5tYXAoKF8sIGkpID0+IGkpLFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzID0ge1xuICBob3VyczogMTIsXG4gIG1vbnV0ZXM6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgTU9ERV9NSU5VVEVTID0gJ21pbnV0ZXMnO1xuZXhwb3J0IGNvbnN0IE1PREVfSE9VUlMgPSAnaG91cnMnO1xuZXhwb3J0IGNvbnN0IEhPVVJTX01PREVfQU0gPSAnQU0nO1xuZXhwb3J0IGNvbnN0IEhPVVJTX01PREVfUE0gPSAnUE0nO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1RpbWVGb3JtYXQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZSA8IDEwID8gYDAke3ZhbHVlfWAgOiB2YWx1ZS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZShob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIsIG1vZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHRpbWVTdHJpbmcgPSBgICR7aG91cnN9OiR7bWludXRlc30gJHttb2RlfWA7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSArIHRpbWVTdHJpbmcpO1xuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5VGltZShob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIsIG1vZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRUaW1lKGhvdXJzLCBtaW51dGVzLCBtb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyW10ge1xuICByZXR1cm4gdmFsdWVcbiAgICAuc3BsaXQoJzonKVxuICAgIC5tYXAoaXRlbSA9PiBOdW1iZXIoaXRlbSkpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb25maWcsIEhPVVJTX01PREVfQU0sIE1PREVfSE9VUlMsIE1PREVfTUlOVVRFUywgZGVmYXVsdHMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheVRpbWUsIHBhcnNlVGltZSB9IGZyb20gJy4uL3V0aWxzL3RpbWUnO1xuaW1wb3J0IHsgU2VsZWN0ZWRUaW1lIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbG9ja1BpY2tlclNlcnZpY2Uge1xuICBfbW9kZSA9IE1PREVfSE9VUlM7XG4gIF9ob3Vyc01vZGUgPSBIT1VSU19NT0RFX0FNO1xuICBfc2VsZWN0ZWQ6IFNlbGVjdGVkVGltZSA9IHsgaG91cnM6IDEyLCBtaW51dGVzOiAwIH07XG5cbiAgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIGdldCBob3Vyc01vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faG91cnNNb2RlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCk6IFNlbGVjdGVkVGltZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgZ2V0IGlzSG91cnNNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IE1PREVfSE9VUlM7XG4gIH1cblxuICBnZXQgaXNNaW51dGVzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBNT0RFX01JTlVURVM7XG4gIH1cblxuICBnZXQgZnVsbFRpbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0RGlzcGxheVRpbWUodGhpcy5zZWxlY3RlZC5ob3VycywgdGhpcy5zZWxlY3RlZC5taW51dGVzLCB0aGlzLmhvdXJzTW9kZSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEhvdXJzTW9kZShIT1VSU19NT0RFX0FNKTtcbiAgICB0aGlzLnNldE1vZGUoTU9ERV9IT1VSUyk7XG4gICAgdGhpcy5zZXRIb3VycygxMik7XG4gICAgdGhpcy5zZXRNaW51dGVzKDApO1xuICB9XG5cbiAgaW5jcmVtZW50KG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNvbmZpZ1ttb2RlXS5pbmRleE9mKHRoaXMuc2VsZWN0ZWRbbW9kZV0pO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gY29uZmlnW21vZGVdW25leHRJbmRleF07XG5cbiAgICB0aGlzLl9zZWxlY3RlZFttb2RlXSA9IG5leHRWYWx1ZSB8fCBjb25maWdbbW9kZV1bMF07XG4gIH1cblxuICBkZWNyZW1lbnQobW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gY29uZmlnW21vZGVdLmluZGV4T2YodGhpcy5zZWxlY3RlZFttb2RlXSk7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBjb25maWdbbW9kZV1bbmV4dEluZGV4XTtcblxuICAgIHRoaXMuX3NlbGVjdGVkW21vZGVdID0gbmV4dFZhbHVlIHx8IGNvbmZpZ1ttb2RlXVtjb25maWdbbW9kZV0ubGVuZ3RoIC0gMV07XG4gIH1cblxuICBzZXRIb3VycyhpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZC5ob3VycyA9IGl0ZW07XG4gIH1cblxuICBzZXRNaW51dGVzKGl0ZW06IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkLm1pbnV0ZXMgPSBpdGVtO1xuICB9XG5cbiAgaGFuZGxlU3dpdGNoKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgfVxuXG4gIHNldE1vZGUobW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gIH1cblxuICBzZXRIb3Vyc01vZGUobW9kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5faG91cnNNb2RlID0gbW9kZTtcbiAgfVxuXG4gIHNldE1vZGVUb01pbnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb2RlKE1PREVfTUlOVVRFUyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NsYXNzZXMvYWJzdHJhY3QtZGlhbG9nJztcbmltcG9ydCB7IFZlcnRpY2FsRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy92ZXJ0aWNhbC1ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBjb25maWcsXG4gIE1PREVfTUlOVVRFUyxcbiAgTU9ERV9IT1VSUyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2xvY2stcGlja2VyLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcblxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IHN1cGVyKCk7IH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1t0aGlzLmNsb2NrUGlja2VyU2VydmljZS5tb2RlXTtcbiAgfVxuXG4gIGdldCBmdWxsVGltZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5mdWxsVGltZTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UodGhpcy5mdWxsVGltZSk7XG4gIH1cblxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZShudWxsKTsgLy9cbiAgfVxuXG4gIGhhbmRsZU92ZXJsYXlDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmNsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQobW92ZW1lbnQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAobW92ZW1lbnQpIHtcbiAgICAgIGNhc2UgVmVydGljYWxFdmVudEhhbmRsZXIuTW92ZW1lbnRVcDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZW1lbnRVcCgpO1xuICAgICAgY2FzZSBWZXJ0aWNhbEV2ZW50SGFuZGxlci5Nb3ZlbWVudERvd246XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdmVtZW50RG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50VXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmlzSG91cnNNb2RlXG4gICAgICA/IHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmluY3JlbWVudChNT0RFX0hPVVJTKVxuICAgICAgOiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5pbmNyZW1lbnQoTU9ERV9NSU5VVEVTKTtcbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaXNIb3Vyc01vZGVcbiAgICAgID8gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuZGVjcmVtZW50KE1PREVfSE9VUlMpXG4gICAgICA6IHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmRlY3JlbWVudChNT0RFX01JTlVURVMpO1xuICB9XG5cbiAgaGFuZGxlSXRlbUNoYW5nZShpdGVtOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaXNIb3Vyc01vZGUpIHtcbiAgICAgIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNldEhvdXJzKGl0ZW0pO1xuICAgICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0TW9kZVRvTWludXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZXRNaW51dGVzKGl0ZW0pO1xuICAgICAgdGhpcy5jbG9zZSh0aGlzLmZ1bGxUaW1lKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5yZXNldCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2Nsb2NrLXBpY2tlci1kaWFsb2cvY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlIHtcbiAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlOiBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyByZWdpc3RlclZpZXdDb250YWluZXJSZWYodmNyOiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmID0gdmNyO1xuICB9XG5cbiAgcHVibGljIHNob3dDbG9ja1BpY2tlckRpYWxvZyhjb25maWc/OiBDbG9ja1BpY2tlckNvbmZpZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyKSA9PiB0aGlzLmR5bmFtaWNDb21wb25lbnRzU2VydmljZS5sb2FkRHluYW1pY0NvbXBvbmVudChcbiAgICAgIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50LFxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgICAgc3Vic2NyaWJlcixcbiAgICAgIGNvbmZpZ1xuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgVmlld0NvbnRhaW5lclJlZiwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi9jbGFzc2VzL2Fic3RyYWN0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7IENsb2NrUGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbG9jay1waWNrZXItZGlhbG9nLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdDbG9ja1BpY2tlcl0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbG9ja1BpY2tlckRpcmVjdGl2ZSksIG11bHRpOiB0cnVlIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9ja1BpY2tlckRpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0VmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2U6IENsb2NrUGlja2VyRGlhbG9nU2VydmljZSxcbiAgKSB7IHN1cGVyKCk7IH1cblxuICBASW5wdXQoKSBuZ0Nsb2NrUGlja2VyQ29uZmlnOiBDbG9ja1BpY2tlckNvbmZpZztcbiAgQE91dHB1dCgpIG5nQ2xvY2tQaWNrZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlXG4gICAgICAuc2hvd0Nsb2NrUGlja2VyRGlhbG9nKHRoaXMubmdDbG9ja1BpY2tlckNvbmZpZylcbiAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gZGF0YTtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGRhdGEpO1xuICAgICAgICAgIHRoaXMubmdDbG9ja1BpY2tlckNoYW5nZS5lbWl0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlLnJlZ2lzdGVyVmlld0NvbnRhaW5lclJlZih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IHNjYWxlSW46IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoXG4gICdzY2FsZUluJywgW1xuICAgIHRyYW5zaXRpb24oJ2hvdXJzID0+IG1pbnV0ZXMnLCBbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJ30pLFxuICAgICAgYW5pbWF0ZSgnMjAwbXMgZWFzZScsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oJ21pbnV0ZXMgPT4gaG91cnMnLCBbXG4gICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICBdKVxuICBdXG4pO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2NhbGVJbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvc2NhbGUtaW4nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFNlbGVjdGVkVGltZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1jaXJjbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2lyY2xlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtzY2FsZUluXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIG9uSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IH1cblxuICBnZXQgaXRlbXMoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGNvbmZpZ1t0aGlzLm1vZGVdO1xuICB9XG5cbiAgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UubW9kZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBTZWxlY3RlZFRpbWUge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZWxlY3RlZDtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRbdGhpcy5tb2RlXSA9PT0gaXRlbTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGl0ZW06IG51bWJlcikge1xuICAgIHRoaXMub25JdGVtQ2hhbmdlLmVtaXQoaXRlbSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElucHV0LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2lyY2xlLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaXJjbGUtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2lyY2xlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbnZlcnRUb1RpbWVGb3JtYXQgfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcbmltcG9ydCB7IE1PREVfSE9VUlMsIE1PREVfTUlOVVRFU30gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IENsb2NrUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctdGltZS1kaXNwbGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWUtZGlzcGxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUtZGlzcGxheS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lRGlzcGxheUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IH1cblxuICBnZXQgZGlzcGxheUhvdXJzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1RpbWVGb3JtYXQodGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2VsZWN0ZWQuaG91cnMpO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlNaW51dGVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNvbnZlcnRUb1RpbWVGb3JtYXQodGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2VsZWN0ZWQubWludXRlcyk7XG4gIH1cblxuICBnZXQgaXNIb3Vyc01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmlzSG91cnNNb2RlO1xuICB9XG5cbiAgZ2V0IGhvdXJzTW9kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5ob3Vyc01vZGU7XG4gIH1cblxuICBoYW5kbGVNaW51dGVzQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0TW9kZShNT0RFX01JTlVURVMpO1xuICB9XG5cbiAgaGFuZGxlSG91cnNDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZXRNb2RlKE1PREVfSE9VUlMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2NsYXNzZXMvdmVydGljYWwtZXZlbnQtaGFuZGxlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ01vdmVtZW50RW1pdHRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE1vdmVtZW50RW1pdHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vdXNlRG93biQ6IFN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICBtb3VzZVVwJDogIFN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICBtb3VzZU1vdmUkOiAgU3ViamVjdDxNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XG4gIHRvdWNoTW92ZSQ6IFN1YmplY3Q8VG91Y2hFdmVudD4gPSBuZXcgU3ViamVjdDxUb3VjaEV2ZW50PigpO1xuXG4gIHZlcnRpY2FsRXZlbnRIYW5kbGVyID0gbmV3IFZlcnRpY2FsRXZlbnRIYW5kbGVyKCk7XG5cbiAgQE91dHB1dCgpIG5nTW92ZW1lbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKSBvbk1vdXNlRG93bihldmVudCkgeyB0aGlzLm1vdXNlRG93biQubmV4dChldmVudCk7IH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50J10pIG9uTW91c2VVcChldmVudCkgeyB0aGlzLm1vdXNlVXAkLm5leHQoZXZlbnQpOyB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pIG9uTW91c2VNb3ZlKGV2ZW50KSB7IHRoaXMubW91c2VNb3ZlJC5uZXh0KGV2ZW50KTsgfVxuICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnLCBbJyRldmVudCddKSBvblRvdWNoTW92ZShldmVudCkgeyB0aGlzLnRvdWNoTW92ZSQubmV4dChldmVudCk7IH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2F0Y2hNb3ZlbWVudCgpO1xuICAgIHRoaXMudmVydGljYWxFdmVudEhhbmRsZXIudmVydGljYWxNb3ZlbWVudEVtaXR0ZXJcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMubmdNb3ZlbWVudEVtaXR0ZXIuZW1pdCh2YWx1ZSkpO1xuICB9XG5cbiAgd2F0Y2hNb3ZlbWVudCgpOiB2b2lkIHtcbiAgICBtZXJnZShcbiAgICAgIHRoaXMubW91c2VEb3duJCxcbiAgICAgIHRoaXMubW91c2VVcCQsXG4gICAgICB0aGlzLm1vdXNlTW92ZSQsXG4gICAgICB0aGlzLnRvdWNoTW92ZSRcbiAgICApLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB0aGlzLnZlcnRpY2FsRXZlbnRIYW5kbGVyLmhhbmRsZUV2ZW50KGV2ZW50KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCBzdGF0ZSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBIT1VSU19NT0RFX0FNLCBIT1VSU19NT0RFX1BNIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGhvdXJzTW9kZVNsaWRlOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKFxuICAnaG91cnNNb2RlU2xpZGUnLCBbXG4gICAgc3RhdGUoSE9VUlNfTU9ERV9BTSwgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICB9KSksXG4gICAgc3RhdGUoSE9VUlNfTU9ERV9QTSwgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTlweCknXG4gICAgfSkpLFxuICAgIHRyYW5zaXRpb24oYCR7SE9VUlNfTU9ERV9BTX0gPT4gJHtIT1VSU19NT0RFX1BNfWAsIFtcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnKVxuICAgIF0pLFxuICAgIHRyYW5zaXRpb24oYCR7SE9VUlNfTU9ERV9QTX0gPT4gJHtIT1VSU19NT0RFX0FNfWAsIFtcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnKVxuICAgIF0pLFxuICBdXG4pO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgaG91cnNNb2RlU2xpZGUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL2hvdXJzLW1vZGUtc2xpZGUnO1xuaW1wb3J0IHsgSE9VUlNfTU9ERV9BTSwgSE9VUlNfTU9ERV9QTSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWhvdXJzLW1vZGUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvdXJzLW1vZGUtcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW2hvdXJzTW9kZVNsaWRlXSxcbn0pXG5leHBvcnQgY2xhc3MgSG91cnNNb2RlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBob3Vyc01vZGVPcHRpb25zOiBzdHJpbmdbXSA9IFtIT1VSU19NT0RFX0FNLCBIT1VSU19NT0RFX1BNXTtcblxuICBnZXQgaG91cnNNb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmhvdXJzTW9kZTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0SG91cnNNb2RlKHRoaXMuaG91cnNNb2RlT3B0aW9ucy5maW5kKChtb2RlOiBzdHJpbmcpID0+IG1vZGUgIT09IHRoaXMuaG91cnNNb2RlKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2xvY2tQaWNrZXJTZXJ2aWNlOiBDbG9ja1BpY2tlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jbG9jay1waWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHluYW1pYy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2lyY2xlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NpcmNsZS1idXR0b24vY2lyY2xlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZURpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZS1kaXNwbGF5L3RpbWUtZGlzcGxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW92ZW1lbnRFbWl0dGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21vdmVtZW50LWVtaXR0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENsb2NrUGlja2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSG91cnNNb2RlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG91cnMtbW9kZS1wYW5lbC9ob3Vycy1tb2RlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci1kaWFsb2cuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENsb2NrUGlja2VyRGlyZWN0aXZlLFxuICAgIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50LFxuICAgIENpcmNsZUNvbXBvbmVudCxcbiAgICBDaXJjbGVCdXR0b25Db21wb25lbnQsXG4gICAgVGltZURpc3BsYXlDb21wb25lbnQsXG4gICAgTW92ZW1lbnRFbWl0dGVyRGlyZWN0aXZlLFxuICAgIEhvdXJzTW9kZVBhbmVsQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCcm93c2VyQW5pbWF0aW9uc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtDbG9ja1BpY2tlckRpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW0R5bmFtaWNDb21wb25lbnRzU2VydmljZSwgQ2xvY2tQaWNrZXJTZXJ2aWNlLCBDbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2VdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgTmdDbG9ja1BpY2tlckxpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0E7SUFDRTtLQUFnQjs7Ozs7SUFFaEIsd0NBQVE7Ozs7SUFBUixVQUFTLEdBQVEsS0FBVTs7OztJQUMzQix5Q0FBUzs7O0lBQVQsZUFBb0I7Ozs7O0lBQ3BCLDBDQUFVOzs7O0lBQVYsVUFBVyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7Ozs7O0lBRUQsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsaURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7SUFDSCw0QkFBQztDQUFBOzs7Ozs7QUNwQkQ7SUFRRSxrQ0FBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3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