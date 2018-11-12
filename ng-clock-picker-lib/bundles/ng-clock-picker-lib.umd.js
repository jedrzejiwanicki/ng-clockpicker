(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/animations'), require('@angular/common'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('ng-clock-picker-lib', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/animations', '@angular/common', '@angular/platform-browser/animations'], factory) :
    (factory((global['ng-clock-picker-lib'] = {}),global.ng.core,global.rxjs,global.ng.forms,global.ng.animations,global.ng.common,global.ng.platformBrowser.animations));
}(this, (function (exports,core,rxjs,forms,animations,common,animations$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
                    (( /** @type {?} */(componentRef.instance)))[key] = config[key];
                }
                (( /** @type {?} */(componentRef.instance))).close = function (data) {
                    componentRef.destroy();
                    subscriber.next(data);
                };
            };
        DynamicComponentsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DynamicComponentsService.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver }
            ];
        };
        return DynamicComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ DialogComponent = /** @class */ (function () {
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
            this.verticalMovementEmitter = new rxjs.Subject();
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
                        return this.handleMove(( /** @type {?} */(event)));
                    case 'mouseup':
                        return this.handleMouseUp();
                    case 'mousedown':
                        return this.handleMouseDown();
                    case 'touchmove':
                        return this.handleMove(( /** @type {?} */(event)));
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
             */ function () {
                return this._mode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ClockPickerService.prototype, "hoursMode", {
            get: /**
             * @return {?}
             */ function () {
                return this._hoursMode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ClockPickerService.prototype, "selected", {
            get: /**
             * @return {?}
             */ function () {
                return this._selected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ClockPickerService.prototype, "isHoursMode", {
            get: /**
             * @return {?}
             */ function () {
                return this.mode === MODE_HOURS;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ClockPickerService.prototype, "isMinutesMode", {
            get: /**
             * @return {?}
             */ function () {
                return this.mode === MODE_MINUTES;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ClockPickerService.prototype, "fullTime", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Injectable }
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
             */ function () {
                return config[this.clockPickerService.mode];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ClockPickerDialogComponent.prototype, "fullTime", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'ng-clock-picker-dialog',
                        template: "<div [ngClass]=\"wrapperClassName\">\n  <div class=\"clock-picker__overlay\" (click)=\"handleOverlayClick($event)\"></div>\n  <div class=\"clock-picker__wrapper\">\n    <nav class=\"clock-picker__nav\">\n      <ng-time-display></ng-time-display>\n    </nav>\n    <ng-circle\n      (ngMovementEmitter)=\"handleMovement($event)\"\n      (onItemChange)=\"handleItemChange($event)\"\n    ></ng-circle>\n    <footer class=\"clock-picker__footer\">\n      <button\n        class=\"clock-picker__footer__dialog-control-button\"\n        (click)=\"cancel()\"\n      >\n        {{buttonClose}}\n      </button>\n      <button\n        class=\"clock-picker__footer__dialog-control-button\"\n        (click)=\"handleClose()\"\n      >\n        {{buttonConfirm}}\n      </button>\n    </footer>\n  </div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".clock-picker__wrapper{width:300px;height:auto;top:50%;right:auto;bottom:auto;left:50%;position:fixed;display:flex;flex-direction:column;align-items:center;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);box-shadow:1px 2px 30px rgba(0,0,0,.2)}.clock-picker__overlay{width:100vw;height:100vh;top:0;right:auto;bottom:auto;left:0;position:fixed;background-color:rgba(242,242,242,.6)}.clock-picker__footer,.clock-picker__nav{width:100%;height:70px;background-color:#f2f2f2}.clock-picker__nav{display:flex;justify-content:center;align-items:center;margin-bottom:10px}.clock-picker__footer{box-sizing:border-box;padding:0 5px;display:flex;align-items:center;justify-content:flex-end;margin-top:10px;background-color:#f2f2f2}.clock-picker__footer__dialog-control-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:5px;cursor:pointer;font:400 16px Arial,Helvetica,sans-serif;color:#495351}"]
                    }] }
        ];
        /** @nocollapse */
        ClockPickerDialogComponent.ctorParameters = function () {
            return [
                { type: ClockPickerService }
            ];
        };
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
                return new rxjs.Observable(function (subscriber) { return _this.dynamicComponentsService.loadDynamicComponent(ClockPickerDialogComponent, _this.viewContainerRef, subscriber, config); });
            };
        ClockPickerDialogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ClockPickerDialogService.ctorParameters = function () {
            return [
                { type: DynamicComponentsService }
            ];
        };
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
            _this.ngClockPickerChange = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        selector: '[ngClockPicker]',
                        providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return ClockPickerDirective; }), multi: true }],
                    },] }
        ];
        /** @nocollapse */
        ClockPickerDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ViewContainerRef },
                { type: ClockPickerDialogService }
            ];
        };
        ClockPickerDirective.propDecorators = {
            ngClockPickerConfig: [{ type: core.Input }],
            ngClockPickerChange: [{ type: core.Output }],
            onFocus: [{ type: core.HostListener, args: ['focus',] }]
        };
        return ClockPickerDirective;
    }(AbstractValueAccessor));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var scaleIn = animations.trigger('scaleIn', [
        animations.transition('hours => minutes', [
            animations.style({ opacity: 0, transform: 'scale(0)' }),
            animations.animate('200ms ease', animations.style({ opacity: 1, transform: 'scale(1)' }))
        ]),
        animations.transition('minutes => hours', [
            animations.style({ opacity: 0, transform: 'scale(0)' }),
            animations.animate('200ms ease', animations.style({ opacity: 1, transform: 'scale(1)' }))
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CircleComponent = /** @class */ (function () {
        function CircleComponent(clockPickerService) {
            this.clockPickerService = clockPickerService;
            this.onItemChange = new core.EventEmitter();
        }
        Object.defineProperty(CircleComponent.prototype, "items", {
            get: /**
             * @return {?}
             */ function () {
                return config[this.mode];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CircleComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */ function () {
                return this.clockPickerService.mode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CircleComponent.prototype, "selected", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'ng-circle',
                        template: "<div\n  [@scaleIn]=\"mode\"\n  class=\"clock-picker__circle\"\n  [ngClass]=\"{\n    'clock-picker__circle--minutes': clockPickerService.isMinutesMode,\n    'clock-picker__circle--hours': clockPickerService.isHoursMode\n  }\">\n  <ng-circle-button\n    [selected]=\"isSelected(item)\"\n    (click)=\"handleClick(item)\"\n    *ngFor=\"let item of items\">\n      {{item}}\n  </ng-circle-button>\n</div>\n",
                        animations: [scaleIn],
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".clock-picker__circle{border-radius:50%;border:30px solid #f2f2f2;background-color:#f2f2f2}.clock-picker__circle--minutes{position:relative;width:220px;height:220px;padding:0;border-radius:50%;list-style:none}.clock-picker__circle--minutes>*{justify-content:center;align-items:center;position:absolute;top:50%;left:50%;width:50px;height:50px;margin:-25px;display:none}.clock-picker__circle--minutes>:nth-of-type(1){-webkit-transform:rotate(-90deg) translate(110px) rotate(90deg);transform:rotate(-90deg) translate(110px) rotate(90deg)}.clock-picker__circle--minutes>:nth-of-type(2){-webkit-transform:rotate(-84deg) translate(110px) rotate(84deg);transform:rotate(-84deg) translate(110px) rotate(84deg)}.clock-picker__circle--minutes>:nth-of-type(3){-webkit-transform:rotate(-78deg) translate(110px) rotate(78deg);transform:rotate(-78deg) translate(110px) rotate(78deg)}.clock-picker__circle--minutes>:nth-of-type(4){-webkit-transform:rotate(-72deg) translate(110px) rotate(72deg);transform:rotate(-72deg) translate(110px) rotate(72deg)}.clock-picker__circle--minutes>:nth-of-type(5){-webkit-transform:rotate(-66deg) translate(110px) rotate(66deg);transform:rotate(-66deg) translate(110px) rotate(66deg)}.clock-picker__circle--minutes>:nth-of-type(6){-webkit-transform:rotate(-60deg) translate(110px) rotate(60deg);transform:rotate(-60deg) translate(110px) rotate(60deg)}.clock-picker__circle--minutes>:nth-of-type(7){-webkit-transform:rotate(-54deg) translate(110px) rotate(54deg);transform:rotate(-54deg) translate(110px) rotate(54deg)}.clock-picker__circle--minutes>:nth-of-type(8){-webkit-transform:rotate(-48deg) translate(110px) rotate(48deg);transform:rotate(-48deg) translate(110px) rotate(48deg)}.clock-picker__circle--minutes>:nth-of-type(9){-webkit-transform:rotate(-42deg) translate(110px) rotate(42deg);transform:rotate(-42deg) translate(110px) rotate(42deg)}.clock-picker__circle--minutes>:nth-of-type(10){-webkit-transform:rotate(-36deg) translate(110px) rotate(36deg);transform:rotate(-36deg) translate(110px) rotate(36deg)}.clock-picker__circle--minutes>:nth-of-type(11){-webkit-transform:rotate(-30deg) translate(110px) rotate(30deg);transform:rotate(-30deg) translate(110px) rotate(30deg)}.clock-picker__circle--minutes>:nth-of-type(12){-webkit-transform:rotate(-24deg) translate(110px) rotate(24deg);transform:rotate(-24deg) translate(110px) rotate(24deg)}.clock-picker__circle--minutes>:nth-of-type(13){-webkit-transform:rotate(-18deg) translate(110px) rotate(18deg);transform:rotate(-18deg) translate(110px) rotate(18deg)}.clock-picker__circle--minutes>:nth-of-type(14){-webkit-transform:rotate(-12deg) translate(110px) rotate(12deg);transform:rotate(-12deg) translate(110px) rotate(12deg)}.clock-picker__circle--minutes>:nth-of-type(15){-webkit-transform:rotate(-6deg) translate(110px) rotate(6deg);transform:rotate(-6deg) translate(110px) rotate(6deg)}.clock-picker__circle--minutes>:nth-of-type(16){-webkit-transform:rotate(0) translate(110px) rotate(0);transform:rotate(0) translate(110px) rotate(0)}.clock-picker__circle--minutes>:nth-of-type(17){-webkit-transform:rotate(6deg) translate(110px) rotate(-6deg);transform:rotate(6deg) translate(110px) rotate(-6deg)}.clock-picker__circle--minutes>:nth-of-type(18){-webkit-transform:rotate(12deg) translate(110px) rotate(-12deg);transform:rotate(12deg) translate(110px) rotate(-12deg)}.clock-picker__circle--minutes>:nth-of-type(19){-webkit-transform:rotate(18deg) translate(110px) rotate(-18deg);transform:rotate(18deg) translate(110px) rotate(-18deg)}.clock-picker__circle--minutes>:nth-of-type(20){-webkit-transform:rotate(24deg) translate(110px) rotate(-24deg);transform:rotate(24deg) translate(110px) rotate(-24deg)}.clock-picker__circle--minutes>:nth-of-type(21){-webkit-transform:rotate(30deg) translate(110px) rotate(-30deg);transform:rotate(30deg) translate(110px) rotate(-30deg)}.clock-picker__circle--minutes>:nth-of-type(22){-webkit-transform:rotate(36deg) translate(110px) rotate(-36deg);transform:rotate(36deg) translate(110px) rotate(-36deg)}.clock-picker__circle--minutes>:nth-of-type(23){-webkit-transform:rotate(42deg) translate(110px) rotate(-42deg);transform:rotate(42deg) translate(110px) rotate(-42deg)}.clock-picker__circle--minutes>:nth-of-type(24){-webkit-transform:rotate(48deg) translate(110px) rotate(-48deg);transform:rotate(48deg) translate(110px) rotate(-48deg)}.clock-picker__circle--minutes>:nth-of-type(25){-webkit-transform:rotate(54deg) translate(110px) rotate(-54deg);transform:rotate(54deg) translate(110px) rotate(-54deg)}.clock-picker__circle--minutes>:nth-of-type(26){-webkit-transform:rotate(60deg) translate(110px) rotate(-60deg);transform:rotate(60deg) translate(110px) rotate(-60deg)}.clock-picker__circle--minutes>:nth-of-type(27){-webkit-transform:rotate(66deg) translate(110px) rotate(-66deg);transform:rotate(66deg) translate(110px) rotate(-66deg)}.clock-picker__circle--minutes>:nth-of-type(28){-webkit-transform:rotate(72deg) translate(110px) rotate(-72deg);transform:rotate(72deg) translate(110px) rotate(-72deg)}.clock-picker__circle--minutes>:nth-of-type(29){-webkit-transform:rotate(78deg) translate(110px) rotate(-78deg);transform:rotate(78deg) translate(110px) rotate(-78deg)}.clock-picker__circle--minutes>:nth-of-type(30){-webkit-transform:rotate(84deg) translate(110px) rotate(-84deg);transform:rotate(84deg) translate(110px) rotate(-84deg)}.clock-picker__circle--minutes>:nth-of-type(31){-webkit-transform:rotate(90deg) translate(110px) rotate(-90deg);transform:rotate(90deg) translate(110px) rotate(-90deg)}.clock-picker__circle--minutes>:nth-of-type(32){-webkit-transform:rotate(96deg) translate(110px) rotate(-96deg);transform:rotate(96deg) translate(110px) rotate(-96deg)}.clock-picker__circle--minutes>:nth-of-type(33){-webkit-transform:rotate(102deg) translate(110px) rotate(-102deg);transform:rotate(102deg) translate(110px) rotate(-102deg)}.clock-picker__circle--minutes>:nth-of-type(34){-webkit-transform:rotate(108deg) translate(110px) rotate(-108deg);transform:rotate(108deg) translate(110px) rotate(-108deg)}.clock-picker__circle--minutes>:nth-of-type(35){-webkit-transform:rotate(114deg) translate(110px) rotate(-114deg);transform:rotate(114deg) translate(110px) rotate(-114deg)}.clock-picker__circle--minutes>:nth-of-type(36){-webkit-transform:rotate(120deg) translate(110px) rotate(-120deg);transform:rotate(120deg) translate(110px) rotate(-120deg)}.clock-picker__circle--minutes>:nth-of-type(37){-webkit-transform:rotate(126deg) translate(110px) rotate(-126deg);transform:rotate(126deg) translate(110px) rotate(-126deg)}.clock-picker__circle--minutes>:nth-of-type(38){-webkit-transform:rotate(132deg) translate(110px) rotate(-132deg);transform:rotate(132deg) translate(110px) rotate(-132deg)}.clock-picker__circle--minutes>:nth-of-type(39){-webkit-transform:rotate(138deg) translate(110px) rotate(-138deg);transform:rotate(138deg) translate(110px) rotate(-138deg)}.clock-picker__circle--minutes>:nth-of-type(40){-webkit-transform:rotate(144deg) translate(110px) rotate(-144deg);transform:rotate(144deg) translate(110px) rotate(-144deg)}.clock-picker__circle--minutes>:nth-of-type(41){-webkit-transform:rotate(150deg) translate(110px) rotate(-150deg);transform:rotate(150deg) translate(110px) rotate(-150deg)}.clock-picker__circle--minutes>:nth-of-type(42){-webkit-transform:rotate(156deg) translate(110px) rotate(-156deg);transform:rotate(156deg) translate(110px) rotate(-156deg)}.clock-picker__circle--minutes>:nth-of-type(43){-webkit-transform:rotate(162deg) translate(110px) rotate(-162deg);transform:rotate(162deg) translate(110px) rotate(-162deg)}.clock-picker__circle--minutes>:nth-of-type(44){-webkit-transform:rotate(168deg) translate(110px) rotate(-168deg);transform:rotate(168deg) translate(110px) rotate(-168deg)}.clock-picker__circle--minutes>:nth-of-type(45){-webkit-transform:rotate(174deg) translate(110px) rotate(-174deg);transform:rotate(174deg) translate(110px) rotate(-174deg)}.clock-picker__circle--minutes>:nth-of-type(46){-webkit-transform:rotate(180deg) translate(110px) rotate(-180deg);transform:rotate(180deg) translate(110px) rotate(-180deg)}.clock-picker__circle--minutes>:nth-of-type(47){-webkit-transform:rotate(186deg) translate(110px) rotate(-186deg);transform:rotate(186deg) translate(110px) rotate(-186deg)}.clock-picker__circle--minutes>:nth-of-type(48){-webkit-transform:rotate(192deg) translate(110px) rotate(-192deg);transform:rotate(192deg) translate(110px) rotate(-192deg)}.clock-picker__circle--minutes>:nth-of-type(49){-webkit-transform:rotate(198deg) translate(110px) rotate(-198deg);transform:rotate(198deg) translate(110px) rotate(-198deg)}.clock-picker__circle--minutes>:nth-of-type(50){-webkit-transform:rotate(204deg) translate(110px) rotate(-204deg);transform:rotate(204deg) translate(110px) rotate(-204deg)}.clock-picker__circle--minutes>:nth-of-type(51){-webkit-transform:rotate(210deg) translate(110px) rotate(-210deg);transform:rotate(210deg) translate(110px) rotate(-210deg)}.clock-picker__circle--minutes>:nth-of-type(52){-webkit-transform:rotate(216deg) translate(110px) rotate(-216deg);transform:rotate(216deg) translate(110px) rotate(-216deg)}.clock-picker__circle--minutes>:nth-of-type(53){-webkit-transform:rotate(222deg) translate(110px) rotate(-222deg);transform:rotate(222deg) translate(110px) rotate(-222deg)}.clock-picker__circle--minutes>:nth-of-type(54){-webkit-transform:rotate(228deg) translate(110px) rotate(-228deg);transform:rotate(228deg) translate(110px) rotate(-228deg)}.clock-picker__circle--minutes>:nth-of-type(55){-webkit-transform:rotate(234deg) translate(110px) rotate(-234deg);transform:rotate(234deg) translate(110px) rotate(-234deg)}.clock-picker__circle--minutes>:nth-of-type(56){-webkit-transform:rotate(240deg) translate(110px) rotate(-240deg);transform:rotate(240deg) translate(110px) rotate(-240deg)}.clock-picker__circle--minutes>:nth-of-type(57){-webkit-transform:rotate(246deg) translate(110px) rotate(-246deg);transform:rotate(246deg) translate(110px) rotate(-246deg)}.clock-picker__circle--minutes>:nth-of-type(58){-webkit-transform:rotate(252deg) translate(110px) rotate(-252deg);transform:rotate(252deg) translate(110px) rotate(-252deg)}.clock-picker__circle--minutes>:nth-of-type(59){-webkit-transform:rotate(258deg) translate(110px) rotate(-258deg);transform:rotate(258deg) translate(110px) rotate(-258deg)}.clock-picker__circle--minutes>:nth-of-type(60){-webkit-transform:rotate(264deg) translate(110px) rotate(-264deg);transform:rotate(264deg) translate(110px) rotate(-264deg)}.clock-picker__circle--minutes>:nth-child(5n+1){display:block}.clock-picker__circle--hours{position:relative;width:220px;height:220px;padding:0;border-radius:50%;list-style:none}.clock-picker__circle--hours>*{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;width:50px;height:50px;margin:-25px}.clock-picker__circle--hours>:nth-of-type(1){-webkit-transform:rotate(-60deg) translate(110px) rotate(60deg);transform:rotate(-60deg) translate(110px) rotate(60deg)}.clock-picker__circle--hours>:nth-of-type(2){-webkit-transform:rotate(-30deg) translate(110px) rotate(30deg);transform:rotate(-30deg) translate(110px) rotate(30deg)}.clock-picker__circle--hours>:nth-of-type(3){-webkit-transform:rotate(0) translate(110px) rotate(0);transform:rotate(0) translate(110px) rotate(0)}.clock-picker__circle--hours>:nth-of-type(4){-webkit-transform:rotate(30deg) translate(110px) rotate(-30deg);transform:rotate(30deg) translate(110px) rotate(-30deg)}.clock-picker__circle--hours>:nth-of-type(5){-webkit-transform:rotate(60deg) translate(110px) rotate(-60deg);transform:rotate(60deg) translate(110px) rotate(-60deg)}.clock-picker__circle--hours>:nth-of-type(6){-webkit-transform:rotate(90deg) translate(110px) rotate(-90deg);transform:rotate(90deg) translate(110px) rotate(-90deg)}.clock-picker__circle--hours>:nth-of-type(7){-webkit-transform:rotate(120deg) translate(110px) rotate(-120deg);transform:rotate(120deg) translate(110px) rotate(-120deg)}.clock-picker__circle--hours>:nth-of-type(8){-webkit-transform:rotate(150deg) translate(110px) rotate(-150deg);transform:rotate(150deg) translate(110px) rotate(-150deg)}.clock-picker__circle--hours>:nth-of-type(9){-webkit-transform:rotate(180deg) translate(110px) rotate(-180deg);transform:rotate(180deg) translate(110px) rotate(-180deg)}.clock-picker__circle--hours>:nth-of-type(10){-webkit-transform:rotate(210deg) translate(110px) rotate(-210deg);transform:rotate(210deg) translate(110px) rotate(-210deg)}.clock-picker__circle--hours>:nth-of-type(11){-webkit-transform:rotate(240deg) translate(110px) rotate(-240deg);transform:rotate(240deg) translate(110px) rotate(-240deg)}.clock-picker__circle--hours>:nth-of-type(12){-webkit-transform:rotate(270deg) translate(110px) rotate(-270deg);transform:rotate(270deg) translate(110px) rotate(-270deg)}"]
                    }] }
        ];
        /** @nocollapse */
        CircleComponent.ctorParameters = function () {
            return [
                { type: ClockPickerService }
            ];
        };
        CircleComponent.propDecorators = {
            onItemChange: [{ type: core.Output }]
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
            { type: core.Component, args: [{
                        selector: 'ng-circle-button',
                        template: "<button\n  class=\"clock-picker__item-button\"\n  [ngClass]=\"{'clock-picker__item-button--selected': selected}\"\n>\n  <ng-content></ng-content>\n</button>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".clock-picker__item-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:100%;height:100%;position:relative;cursor:pointer;border-radius:50%;font:400 16px Arial,Helvetica,sans-serif;color:#495351}.clock-picker__item-button:hover{background-color:#f5f5f5;color:#6d7c79}.clock-picker__item-button--selected{background-color:#f5f5f5}"]
                    }] }
        ];
        /** @nocollapse */
        CircleButtonComponent.ctorParameters = function () { return []; };
        CircleButtonComponent.propDecorators = {
            selected: [{ type: core.Input }]
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
             */ function () {
                return convertToTimeFormat(this.clockPickerService.selected.hours);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeDisplayComponent.prototype, "displayMinutes", {
            get: /**
             * @return {?}
             */ function () {
                return convertToTimeFormat(this.clockPickerService.selected.minutes);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeDisplayComponent.prototype, "isHoursMode", {
            get: /**
             * @return {?}
             */ function () {
                return this.clockPickerService.isHoursMode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeDisplayComponent.prototype, "hoursMode", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'ng-time-display',
                        template: "<div class=\"clock-picker__time-display\">\n  <button\n    (click)=\"handleHoursClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': isHoursMode}\"\n    >{{displayHours}}\n  </button>\n  <span class=\"clock-picker__time-display__divider\">:</span>\n  <button\n    (click)=\"handleMinutesClick()\"\n    class=\"clock-picker__time-display__button\"\n    [ngClass]=\"{'clock-picker__time-display__button--selected': !isHoursMode}\"\n  >\n    {{displayMinutes}}\n  </button>\n  <ng-hours-mode-panel></ng-hours-mode-panel>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".clock-picker__time-display{display:flex;justify-content:center;align-items:center;margin:20px 0}.clock-picker__time-display__button,.clock-picker__time-display__divider,.clock-picker__time-display__hours-mode{color:#495351}.clock-picker__time-display__button,.clock-picker__time-display__divider{font:400 30px Arial,Helvetica,sans-serif}.clock-picker__time-display__hours-mode{margin:0 5px;font:400 20px Arial,Helvetica,sans-serif}.clock-picker__time-display__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:30px;cursor:pointer}.clock-picker__time-display__button--selected,.clock-picker__time-display__button:hover{color:#6d7c79}"]
                    }] }
        ];
        /** @nocollapse */
        TimeDisplayComponent.ctorParameters = function () {
            return [
                { type: ClockPickerService }
            ];
        };
        return TimeDisplayComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MovementEmitterDirective = /** @class */ (function () {
        function MovementEmitterDirective() {
            this.mouseDown$ = new rxjs.Subject();
            this.mouseUp$ = new rxjs.Subject();
            this.mouseMove$ = new rxjs.Subject();
            this.touchMove$ = new rxjs.Subject();
            this.verticalEventHandler = new VerticalEventHandler();
            this.ngMovementEmitter = new core.EventEmitter();
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
                rxjs.merge(this.mouseDown$, this.mouseUp$, this.mouseMove$, this.touchMove$).subscribe(function (event) { return _this.verticalEventHandler.handleEvent(event); });
            };
        MovementEmitterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngMovementEmitter]'
                    },] }
        ];
        /** @nocollapse */
        MovementEmitterDirective.ctorParameters = function () { return []; };
        MovementEmitterDirective.propDecorators = {
            ngMovementEmitter: [{ type: core.Output }],
            onMouseDown: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
            onMouseUp: [{ type: core.HostListener, args: ['mouseup', ['$event'],] }],
            onMouseMove: [{ type: core.HostListener, args: ['mousemove', ['$event'],] }],
            onTouchMove: [{ type: core.HostListener, args: ['touchmove', ['$event'],] }]
        };
        return MovementEmitterDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var hoursModeSlide = animations.trigger('hoursModeSlide', [
        animations.state(HOURS_MODE_AM, animations.style({
            transform: 'translateY(0)'
        })),
        animations.state(HOURS_MODE_PM, animations.style({
            transform: 'translateY(-19px)'
        })),
        animations.transition(HOURS_MODE_AM + " => " + HOURS_MODE_PM, [
            animations.animate('200ms ease')
        ]),
        animations.transition(HOURS_MODE_PM + " => " + HOURS_MODE_AM, [
            animations.animate('200ms ease')
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
             */ function () {
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
            { type: core.Component, args: [{
                        selector: 'ng-hours-mode-panel',
                        template: "<div class=\"clock-picker__hours-mode-panel\">\n  <div [@hoursModeSlide]=\"hoursMode\" class=\"clock-picker__hours-mode-panel__scrollable\">\n    <button\n      *ngFor=\"let option of hoursModeOptions\"\n      (click)=\"toggleMode()\"\n      class=\"clock-picker__hours-mode-panel__button\"\n    >{{option.toLowerCase()}}</button>\n  </div>\n</div>\n",
                        animations: [hoursModeSlide],
                        styles: [".clock-picker__hours-mode-panel{position:relative;height:19px;overflow:hidden}.clock-picker__hours-mode-panel__scrollable{display:flex;flex-direction:column}.clock-picker__hours-mode-panel__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:0;width:auto;height:19px;cursor:pointer;margin:0 5px;font:400 13px Arial,Helvetica,sans-serif;color:#495351}"]
                    }] }
        ];
        /** @nocollapse */
        HoursModePanelComponent.ctorParameters = function () {
            return [
                { type: ClockPickerService }
            ];
        };
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
            { type: core.NgModule, args: [{
                        declarations: [
                            ClockPickerDirective,
                            ClockPickerDialogComponent,
                            CircleComponent,
                            CircleButtonComponent,
                            TimeDisplayComponent,
                            MovementEmitterDirective,
                            HoursModePanelComponent,
                        ],
                        imports: [common.CommonModule, animations$1.BrowserAnimationsModule],
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

    exports.NgClockPickerLibModule = NgClockPickerLibModule;
    exports.ClockPickerDialogService = ClockPickerDialogService;
    exports.ɵm = hoursModeSlide;
    exports.ɵh = scaleIn;
    exports.ɵe = DialogComponent;
    exports.ɵb = AbstractValueAccessor;
    exports.ɵi = CircleButtonComponent;
    exports.ɵg = CircleComponent;
    exports.ɵd = ClockPickerDialogComponent;
    exports.ɵl = HoursModePanelComponent;
    exports.ɵj = TimeDisplayComponent;
    exports.ɵa = ClockPickerDirective;
    exports.ɵk = MovementEmitterDirective;
    exports.ɵf = ClockPickerService;
    exports.ɵc = DynamicComponentsService;
    exports.ɵn = HOURS_MODE_AM;
    exports.ɵo = HOURS_MODE_PM;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2xvY2stcGlja2VyLWxpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9jbGFzc2VzL2Fic3RyYWN0LXZhbHVlLWFjY2Vzc29yLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9zZXJ2aWNlcy9keW5hbWljLWNvbXBvbmVudHMuc2VydmljZS50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY2xhc3Nlcy9hYnN0cmFjdC1kaWFsb2cudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NsYXNzZXMvdmVydGljYWwtZXZlbnQtaGFuZGxlci50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvdXRpbHMvY29uc3RhbnRzLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi91dGlscy90aW1lLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9zZXJ2aWNlcy9jbG9jay1waWNrZXIuc2VydmljZS50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY29tcG9uZW50cy9jbG9jay1waWNrZXItZGlhbG9nL2Nsb2NrLXBpY2tlci1kaWFsb2cuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9zZXJ2aWNlcy9jbG9jay1waWNrZXItZGlhbG9nLnNlcnZpY2UudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2RpcmVjdGl2ZXMvY2xvY2stcGlja2VyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvYW5pbWF0aW9ucy9zY2FsZS1pbi50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY29tcG9uZW50cy9jaXJjbGUvY2lyY2xlLmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvY29tcG9uZW50cy9jaXJjbGUtYnV0dG9uL2NpcmNsZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9jb21wb25lbnRzL3RpbWUtZGlzcGxheS90aW1lLWRpc3BsYXkuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9kaXJlY3RpdmVzL21vdmVtZW50LWVtaXR0ZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1jbG9jay1waWNrZXItbGliL2xpYi9hbmltYXRpb25zL2hvdXJzLW1vZGUtc2xpZGUudHMiLCJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvbGliL2NvbXBvbmVudHMvaG91cnMtbW9kZS1wYW5lbC9ob3Vycy1tb2RlLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2xvY2stcGlja2VyLWxpYi9saWIvbmctY2xvY2stcGlja2VyLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIF92YWx1ZTogYW55O1xuICBvbkNoYW5nZShvYmo6IGFueSk6IHZvaWQge31cbiAgb25Ub3VjaGVkKCk6IHZvaWQge31cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gb2JqO1xuICAgIHRoaXMub25DaGFuZ2Uob2JqKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY2xhc3Nlcy9hYnN0cmFjdC1kaWFsb2cnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnRzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgeyB9XG5cbiAgcHVibGljIGxvYWREeW5hbWljQ29tcG9uZW50PFQgZXh0ZW5kcyBEaWFsb2dDb21wb25lbnQ+KFxuICAgIGNvbXBvbmVudDogVHlwZTxUPixcbiAgICB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgc3Vic2NyaWJlcixcbiAgICBjb25maWc/OiBDbG9ja1BpY2tlckNvbmZpZ1xuICApIHtcbiAgICBjb25zdCBmYWN0b3J5OiBhbnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZjci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNvbmZpZykge1xuICAgICAgKDxUPmNvbXBvbmVudFJlZi5pbnN0YW5jZSlba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgIH1cblxuICAgICg8VD5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmNsb3NlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIHN1YnNjcmliZXIubmV4dChkYXRhKTtcbiAgICB9O1xuICB9XG59XG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhbG9nQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHdyYXBwZXJDbGFzc05hbWU6IHN0cmluZztcbiAgYnV0dG9uQ2xvc2UgPSAnY2xvc2UnO1xuICBidXR0b25Db25maXJtID0gJ2NvbmZpcm0nO1xuICBjbG9zZU9uT3ZlcmxheUNsaWNrID0gZmFsc2U7XG4gIGNsb3NlKGRhdGE6IGFueSk6IHZvaWQge31cblxufVxuIiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEV2ZW50SGFuZGxlciB7XG4gIHN0YXRpYyBNb3ZlbWVudFVwID0gJ3VwJztcbiAgc3RhdGljIE1vdmVtZW50RG93biA9ICdkb3duJztcblxuICBwcmV2aW91c0NsaWVudFk6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjdXJyZW50Q2xpZW50WTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGlzTW92ZUxvY2tlZCA9IHRydWU7XG4gIHZlcnRpY2FsTW92ZW1lbnRFbWl0dGVyOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldE1vdmVMb2NrKGlzTG9ja2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc01vdmVMb2NrZWQgPSBpc0xvY2tlZDtcbiAgfVxuXG4gIGhhbmRsZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgcmV0dXJuIGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudFxuICAgICAgPyB0aGlzLmhhbmRsZU1vdXNlTW92ZShldmVudClcbiAgICAgIDogdGhpcy5oYW5kbGVUb3VjaE1vdmUoZXZlbnQpO1xuXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50O1xuICAgIGNvbnN0IGRlbHRhID0gdGhpcy5jYWxjdWxhdGVEZWx0YShjbGllbnRZKTtcblxuICAgIGlmICh0aGlzLmlzTW92ZUxvY2tlZCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgdGhpcy5lbWl0TW92ZW1lbnREaXJlY3Rpb24oZGVsdGEpO1xuICB9XG5cbiAgaGFuZGxlVG91Y2hNb3ZlKGV2ZW50OiBUb3VjaEV2ZW50KSB7XG4gICAgY29uc3QgeyBjbGllbnRZIH0gPSBldmVudC50b3VjaGVzWzBdO1xuICAgIGNvbnN0IGRlbHRhID0gdGhpcy5jYWxjdWxhdGVEZWx0YShjbGllbnRZKTtcblxuICAgIHRoaXMuZW1pdE1vdmVtZW50RGlyZWN0aW9uKGRlbHRhKTtcbiAgfVxuXG4gIGVtaXRNb3ZlbWVudERpcmVjdGlvbihkZWx0YTogbnVtYmVyKSB7XG4gICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgdGhpcy52ZXJ0aWNhbE1vdmVtZW50RW1pdHRlci5uZXh0KCdkb3duJyk7XG4gICAgfSBlbHNlIGlmIChkZWx0YSA8IDApIHtcbiAgICAgIHRoaXMudmVydGljYWxNb3ZlbWVudEVtaXR0ZXIubmV4dCgndXAnKTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVEZWx0YShjbGllbnRZOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHRoaXMucHJldmlvdXNDbGllbnRZID0gdGhpcy5jdXJyZW50Q2xpZW50WTtcbiAgICB0aGlzLmN1cnJlbnRDbGllbnRZID0gY2xpZW50WTtcblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDbGllbnRZIC0gdGhpcy5wcmV2aW91c0NsaWVudFk7XG4gIH1cblxuICBoYW5kbGVNb3VzZVVwKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0TW92ZUxvY2sodHJ1ZSk7XG4gIH1cblxuICBoYW5kbGVNb3VzZURvd24oKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb3ZlTG9jayhmYWxzZSk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlbW92ZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdmUoPE1vdXNlRXZlbnQ+ZXZlbnQpO1xuICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdXNlVXAoKTtcbiAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdXNlRG93bigpO1xuICAgICAgY2FzZSAndG91Y2htb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZSg8VG91Y2hFdmVudD5ldmVudCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBob3VyczogQXJyYXkoMTIpLmZpbGwoMCwgMCwgMTIpLm1hcCgoXywgaSkgPT4gaSArIDEpLFxuICBtaW51dGVzOiBBcnJheSg2MCkuZmlsbCgwLCAwLCA2MCkubWFwKChfLCBpKSA9PiBpKSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0cyA9IHtcbiAgaG91cnM6IDEyLFxuICBtb251dGVzOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IE1PREVfTUlOVVRFUyA9ICdtaW51dGVzJztcbmV4cG9ydCBjb25zdCBNT0RFX0hPVVJTID0gJ2hvdXJzJztcbmV4cG9ydCBjb25zdCBIT1VSU19NT0RFX0FNID0gJ0FNJztcbmV4cG9ydCBjb25zdCBIT1VSU19NT0RFX1BNID0gJ1BNJztcbiIsImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9UaW1lRm9ybWF0KHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWUgPCAxMCA/IGAwJHt2YWx1ZX1gIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWUoaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyLCBtb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0aW1lU3RyaW5nID0gYCAke2hvdXJzfToke21pbnV0ZXN9ICR7bW9kZX1gO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gKyB0aW1lU3RyaW5nKTtcblxuICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgbWludXRlOiAnMi1kaWdpdCcsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheVRpbWUoaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyLCBtb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZ2V0VGltZShob3VycywgbWludXRlcywgbW9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRpbWUodmFsdWU6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnNwbGl0KCc6JylcbiAgICAubWFwKGl0ZW0gPT4gTnVtYmVyKGl0ZW0pKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29uZmlnLCBIT1VSU19NT0RFX0FNLCBNT0RFX0hPVVJTLCBNT0RFX01JTlVURVMsIGRlZmF1bHRzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldERpc3BsYXlUaW1lLCBwYXJzZVRpbWUgfSBmcm9tICcuLi91dGlscy90aW1lJztcbmltcG9ydCB7IFNlbGVjdGVkVGltZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJTZXJ2aWNlIHtcbiAgX21vZGUgPSBNT0RFX0hPVVJTO1xuICBfaG91cnNNb2RlID0gSE9VUlNfTU9ERV9BTTtcbiAgX3NlbGVjdGVkOiBTZWxlY3RlZFRpbWUgPSB7IGhvdXJzOiAxMiwgbWludXRlczogMCB9O1xuXG4gIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICBnZXQgaG91cnNNb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hvdXJzTW9kZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBTZWxlY3RlZFRpbWUge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIGdldCBpc0hvdXJzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSBNT0RFX0hPVVJTO1xuICB9XG5cbiAgZ2V0IGlzTWludXRlc01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gTU9ERV9NSU5VVEVTO1xuICB9XG5cbiAgZ2V0IGZ1bGxUaW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldERpc3BsYXlUaW1lKHRoaXMuc2VsZWN0ZWQuaG91cnMsIHRoaXMuc2VsZWN0ZWQubWludXRlcywgdGhpcy5ob3Vyc01vZGUpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRIb3Vyc01vZGUoSE9VUlNfTU9ERV9BTSk7XG4gICAgdGhpcy5zZXRNb2RlKE1PREVfSE9VUlMpO1xuICAgIHRoaXMuc2V0SG91cnMoMTIpO1xuICAgIHRoaXMuc2V0TWludXRlcygwKTtcbiAgfVxuXG4gIGluY3JlbWVudChtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjb25maWdbbW9kZV0uaW5kZXhPZih0aGlzLnNlbGVjdGVkW21vZGVdKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNvbmZpZ1ttb2RlXVtuZXh0SW5kZXhdO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRbbW9kZV0gPSBuZXh0VmFsdWUgfHwgY29uZmlnW21vZGVdWzBdO1xuICB9XG5cbiAgZGVjcmVtZW50KG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNvbmZpZ1ttb2RlXS5pbmRleE9mKHRoaXMuc2VsZWN0ZWRbbW9kZV0pO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gY29uZmlnW21vZGVdW25leHRJbmRleF07XG5cbiAgICB0aGlzLl9zZWxlY3RlZFttb2RlXSA9IG5leHRWYWx1ZSB8fCBjb25maWdbbW9kZV1bY29uZmlnW21vZGVdLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgc2V0SG91cnMoaXRlbTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWQuaG91cnMgPSBpdGVtO1xuICB9XG5cbiAgc2V0TWludXRlcyhpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZC5taW51dGVzID0gaXRlbTtcbiAgfVxuXG4gIGhhbmRsZVN3aXRjaChtb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gIH1cblxuICBzZXRNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX21vZGUgPSBtb2RlO1xuICB9XG5cbiAgc2V0SG91cnNNb2RlKG1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2hvdXJzTW9kZSA9IG1vZGU7XG4gIH1cblxuICBzZXRNb2RlVG9NaW51dGVzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0TW9kZShNT0RFX01JTlVURVMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jbGFzc2VzL2Fic3RyYWN0LWRpYWxvZyc7XG5pbXBvcnQgeyBWZXJ0aWNhbEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2NsYXNzZXMvdmVydGljYWwtZXZlbnQtaGFuZGxlcidcbmltcG9ydCB7IENsb2NrUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgY29uZmlnLFxuICBNT0RFX01JTlVURVMsXG4gIE1PREVfSE9VUlMsXG59IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWNsb2NrLXBpY2tlci1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nsb2NrLXBpY2tlci1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudCBleHRlbmRzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjbG9ja1BpY2tlclNlcnZpY2U6IENsb2NrUGlja2VyU2VydmljZSkgeyBzdXBlcigpOyB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiBjb25maWdbdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UubW9kZV07XG4gIH1cblxuICBnZXQgZnVsbFRpbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuZnVsbFRpbWU7XG4gIH1cblxuICBoYW5kbGVDbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKHRoaXMuZnVsbFRpbWUpO1xuICB9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UobnVsbCk7IC8vXG4gIH1cblxuICBoYW5kbGVPdmVybGF5Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5jbG9zZU9uT3ZlcmxheUNsaWNrKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50KG1vdmVtZW50OiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKG1vdmVtZW50KSB7XG4gICAgICBjYXNlIFZlcnRpY2FsRXZlbnRIYW5kbGVyLk1vdmVtZW50VXA6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdmVtZW50VXAoKTtcbiAgICAgIGNhc2UgVmVydGljYWxFdmVudEhhbmRsZXIuTW92ZW1lbnREb3duOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb3ZlbWVudERvd24oKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3ZlbWVudFVwKCkge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5pc0hvdXJzTW9kZVxuICAgICAgPyB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5pbmNyZW1lbnQoTU9ERV9IT1VSUylcbiAgICAgIDogdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaW5jcmVtZW50KE1PREVfTUlOVVRFUyk7XG4gIH1cblxuICBoYW5kbGVNb3ZlbWVudERvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmlzSG91cnNNb2RlXG4gICAgICA/IHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmRlY3JlbWVudChNT0RFX0hPVVJTKVxuICAgICAgOiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5kZWNyZW1lbnQoTU9ERV9NSU5VVEVTKTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1DaGFuZ2UoaXRlbTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmlzSG91cnNNb2RlKSB7XG4gICAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZXRIb3VycyhpdGVtKTtcbiAgICAgIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNldE1vZGVUb01pbnV0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0TWludXRlcyhpdGVtKTtcbiAgICAgIHRoaXMuY2xvc2UodGhpcy5mdWxsVGltZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UucmVzZXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtY29tcG9uZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jbG9jay1waWNrZXItZGlhbG9nL2Nsb2NrLXBpY2tlci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENsb2NrUGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlhbG9nU2VydmljZSB7XG4gIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGR5bmFtaWNDb21wb25lbnRzU2VydmljZTogRHluYW1pY0NvbXBvbmVudHNTZXJ2aWNlKSB7IH1cblxuICBwdWJsaWMgcmVnaXN0ZXJWaWV3Q29udGFpbmVyUmVmKHZjcjogVmlld0NvbnRhaW5lclJlZik6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZjcjtcbiAgfVxuXG4gIHB1YmxpYyBzaG93Q2xvY2tQaWNrZXJEaWFsb2coY29uZmlnPzogQ2xvY2tQaWNrZXJDb25maWcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcikgPT4gdGhpcy5keW5hbWljQ29tcG9uZW50c1NlcnZpY2UubG9hZER5bmFtaWNDb21wb25lbnQoXG4gICAgICBDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudCxcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICAgIHN1YnNjcmliZXIsXG4gICAgICBjb25maWdcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQWJzdHJhY3RWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vY2xhc3Nlcy9hYnN0cmFjdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBDbG9ja1BpY2tlckNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2xvY2stcGlja2VyLWRpYWxvZy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nQ2xvY2tQaWNrZXJdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2xvY2tQaWNrZXJEaXJlY3RpdmUpLCBtdWx0aTogdHJ1ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlOiBDbG9ja1BpY2tlckRpYWxvZ1NlcnZpY2UsXG4gICkgeyBzdXBlcigpOyB9XG5cbiAgQElucHV0KCkgbmdDbG9ja1BpY2tlckNvbmZpZzogQ2xvY2tQaWNrZXJDb25maWc7XG4gIEBPdXRwdXQoKSBuZ0Nsb2NrUGlja2VyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyRGlhbG9nU2VydmljZVxuICAgICAgLnNob3dDbG9ja1BpY2tlckRpYWxvZyh0aGlzLm5nQ2xvY2tQaWNrZXJDb25maWcpXG4gICAgICAuc3Vic2NyaWJlKChkYXRhOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZShkYXRhKTtcbiAgICAgICAgICB0aGlzLm5nQ2xvY2tQaWNrZXJDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyRGlhbG9nU2VydmljZS5yZWdpc3RlclZpZXdDb250YWluZXJSZWYodGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBzY2FsZUluOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKFxuICAnc2NhbGVJbicsIFtcbiAgICB0cmFuc2l0aW9uKCdob3VycyA9PiBtaW51dGVzJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKSd9KSxcbiAgICAgIGFuaW1hdGUoJzIwMG1zIGVhc2UnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSlcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCdtaW51dGVzID0+IGhvdXJzJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKScgfSksXG4gICAgICBhbmltYXRlKCcyMDBtcyBlYXNlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpXG4gICAgXSlcbiAgXVxuKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsb2NrUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IHNjYWxlSW4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL3NjYWxlLWluJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTZWxlY3RlZFRpbWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2lyY2xlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NpcmNsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NpcmNsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbc2NhbGVJbl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENpcmNsZUNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSBvbkl0ZW1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjbG9ja1BpY2tlclNlcnZpY2U6IENsb2NrUGlja2VyU2VydmljZSkgeyB9XG5cbiAgZ2V0IGl0ZW1zKCk6IEFycmF5PG51bWJlcj4ge1xuICAgIHJldHVybiBjb25maWdbdGhpcy5tb2RlXTtcbiAgfVxuXG4gIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLm1vZGU7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKTogU2VsZWN0ZWRUaW1lIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2VsZWN0ZWQ7XG4gIH1cblxuICBpc1NlbGVjdGVkKGl0ZW06IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkW3RoaXMubW9kZV0gPT09IGl0ZW07XG4gIH1cblxuICBoYW5kbGVDbGljayhpdGVtOiBudW1iZXIpIHtcbiAgICB0aGlzLm9uSXRlbUNoYW5nZS5lbWl0KGl0ZW0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbnB1dCwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWNpcmNsZS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2lyY2xlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NpcmNsZS1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb252ZXJ0VG9UaW1lRm9ybWF0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgeyBNT0RFX0hPVVJTLCBNT0RFX01JTlVURVN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbG9jay1waWNrZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXRpbWUtZGlzcGxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLWRpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aW1lLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZURpc3BsYXlDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjbG9ja1BpY2tlclNlcnZpY2U6IENsb2NrUGlja2VyU2VydmljZSkgeyB9XG5cbiAgZ2V0IGRpc3BsYXlIb3VycygpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb252ZXJ0VG9UaW1lRm9ybWF0KHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNlbGVjdGVkLmhvdXJzKTtcbiAgfVxuXG4gIGdldCBkaXNwbGF5TWludXRlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb252ZXJ0VG9UaW1lRm9ybWF0KHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNlbGVjdGVkLm1pbnV0ZXMpO1xuICB9XG5cbiAgZ2V0IGlzSG91cnNNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5pc0hvdXJzTW9kZTtcbiAgfVxuXG4gIGdldCBob3Vyc01vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaG91cnNNb2RlO1xuICB9XG5cbiAgaGFuZGxlTWludXRlc0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNldE1vZGUoTU9ERV9NSU5VVEVTKTtcbiAgfVxuXG4gIGhhbmRsZUhvdXJzQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0TW9kZShNT0RFX0hPVVJTKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBPbkluaXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVmVydGljYWxFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9jbGFzc2VzL3ZlcnRpY2FsLWV2ZW50LWhhbmRsZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdNb3ZlbWVudEVtaXR0ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBNb3ZlbWVudEVtaXR0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb3VzZURvd24kOiBTdWJqZWN0PE1vdXNlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKTtcbiAgbW91c2VVcCQ6ICBTdWJqZWN0PE1vdXNlRXZlbnQ+ID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKTtcbiAgbW91c2VNb3ZlJDogIFN1YmplY3Q8TW91c2VFdmVudD4gPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICB0b3VjaE1vdmUkOiBTdWJqZWN0PFRvdWNoRXZlbnQ+ID0gbmV3IFN1YmplY3Q8VG91Y2hFdmVudD4oKTtcblxuICB2ZXJ0aWNhbEV2ZW50SGFuZGxlciA9IG5ldyBWZXJ0aWNhbEV2ZW50SGFuZGxlcigpO1xuXG4gIEBPdXRwdXQoKSBuZ01vdmVtZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgb25Nb3VzZURvd24oZXZlbnQpIHsgdGhpcy5tb3VzZURvd24kLm5leHQoZXZlbnQpOyB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKSBvbk1vdXNlVXAoZXZlbnQpIHsgdGhpcy5tb3VzZVVwJC5uZXh0KGV2ZW50KTsgfVxuICBASG9zdExpc3RlbmVyKCdtb3VzZW1vdmUnLCBbJyRldmVudCddKSBvbk1vdXNlTW92ZShldmVudCkgeyB0aGlzLm1vdXNlTW92ZSQubmV4dChldmVudCk7IH1cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSkgb25Ub3VjaE1vdmUoZXZlbnQpIHsgdGhpcy50b3VjaE1vdmUkLm5leHQoZXZlbnQpOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoTW92ZW1lbnQoKTtcbiAgICB0aGlzLnZlcnRpY2FsRXZlbnRIYW5kbGVyLnZlcnRpY2FsTW92ZW1lbnRFbWl0dGVyXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLm5nTW92ZW1lbnRFbWl0dGVyLmVtaXQodmFsdWUpKTtcbiAgfVxuXG4gIHdhdGNoTW92ZW1lbnQoKTogdm9pZCB7XG4gICAgbWVyZ2UoXG4gICAgICB0aGlzLm1vdXNlRG93biQsXG4gICAgICB0aGlzLm1vdXNlVXAkLFxuICAgICAgdGhpcy5tb3VzZU1vdmUkLFxuICAgICAgdGhpcy50b3VjaE1vdmUkXG4gICAgKS5zdWJzY3JpYmUoKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdGhpcy52ZXJ0aWNhbEV2ZW50SGFuZGxlci5oYW5kbGVFdmVudChldmVudCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgc3RhdGUsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSE9VUlNfTU9ERV9BTSwgSE9VUlNfTU9ERV9QTSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBob3Vyc01vZGVTbGlkZTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcihcbiAgJ2hvdXJzTW9kZVNsaWRlJywgW1xuICAgIHN0YXRlKEhPVVJTX01PREVfQU0sIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgfSkpLFxuICAgIHN0YXRlKEhPVVJTX01PREVfUE0sIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTE5cHgpJ1xuICAgIH0pKSxcbiAgICB0cmFuc2l0aW9uKGAke0hPVVJTX01PREVfQU19ID0+ICR7SE9VUlNfTU9ERV9QTX1gLCBbXG4gICAgICBhbmltYXRlKCcyMDBtcyBlYXNlJylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKGAke0hPVVJTX01PREVfUE19ID0+ICR7SE9VUlNfTU9ERV9BTX1gLCBbXG4gICAgICBhbmltYXRlKCcyMDBtcyBlYXNlJylcbiAgICBdKSxcbiAgXVxuKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsb2NrUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IGhvdXJzTW9kZVNsaWRlIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucy9ob3Vycy1tb2RlLXNsaWRlJztcbmltcG9ydCB7IEhPVVJTX01PREVfQU0sIEhPVVJTX01PREVfUE0gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1ob3Vycy1tb2RlLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvdXJzLW1vZGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob3Vycy1tb2RlLXBhbmVsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtob3Vyc01vZGVTbGlkZV0sXG59KVxuZXhwb3J0IGNsYXNzIEhvdXJzTW9kZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaG91cnNNb2RlT3B0aW9uczogc3RyaW5nW10gPSBbSE9VUlNfTU9ERV9BTSwgSE9VUlNfTU9ERV9QTV07XG5cbiAgZ2V0IGhvdXJzTW9kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5ob3Vyc01vZGU7XG4gIH1cblxuICB0b2dnbGVNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNldEhvdXJzTW9kZSh0aGlzLmhvdXJzTW9kZU9wdGlvbnMuZmluZCgobW9kZTogc3RyaW5nKSA9PiBtb2RlICE9PSB0aGlzLmhvdXJzTW9kZSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2xvY2stcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2R5bmFtaWMtY29tcG9uZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nsb2NrLXBpY2tlci1kaWFsb2cvY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NpcmNsZS9jaXJjbGUuY29tcG9uZW50JztcbmltcG9ydCB7IENpcmNsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaXJjbGUtYnV0dG9uL2NpcmNsZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RpbWUtZGlzcGxheS90aW1lLWRpc3BsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IE1vdmVtZW50RW1pdHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tb3ZlbWVudC1lbWl0dGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbG9ja1BpY2tlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Nsb2NrLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEhvdXJzTW9kZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvdXJzLW1vZGUtcGFuZWwvaG91cnMtbW9kZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jbG9jay1waWNrZXItZGlhbG9nLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDbG9ja1BpY2tlckRpcmVjdGl2ZSxcbiAgICBDbG9ja1BpY2tlckRpYWxvZ0NvbXBvbmVudCxcbiAgICBDaXJjbGVDb21wb25lbnQsXG4gICAgQ2lyY2xlQnV0dG9uQ29tcG9uZW50LFxuICAgIFRpbWVEaXNwbGF5Q29tcG9uZW50LFxuICAgIE1vdmVtZW50RW1pdHRlckRpcmVjdGl2ZSxcbiAgICBIb3Vyc01vZGVQYW5lbENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVdLFxuICBleHBvcnRzOiBbQ2xvY2tQaWNrZXJEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtEeW5hbWljQ29tcG9uZW50c1NlcnZpY2UsIENsb2NrUGlja2VyU2VydmljZSwgQ2xvY2tQaWNrZXJEaWFsb2dTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2xvY2tQaWNrZXJEaWFsb2dDb21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIE5nQ2xvY2tQaWNrZXJMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIlN1YmplY3QiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiT2JzZXJ2YWJsZSIsIkV2ZW50RW1pdHRlciIsIkRpcmVjdGl2ZSIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIkVsZW1lbnRSZWYiLCJWaWV3Q29udGFpbmVyUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0TGlzdGVuZXIiLCJ0cmlnZ2VyIiwidHJhbnNpdGlvbiIsInN0eWxlIiwiYW5pbWF0ZSIsIm1lcmdlIiwic3RhdGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkJyb3dzZXJBbmltYXRpb25zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsYUFBZ0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFB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