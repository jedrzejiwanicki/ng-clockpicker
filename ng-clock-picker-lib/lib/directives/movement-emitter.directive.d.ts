import { EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { VerticalEventHandler } from '../classes/vertical-event-handler';
export declare class MovementEmitterDirective implements OnInit {
    mouseDown$: Subject<MouseEvent>;
    mouseUp$: Subject<MouseEvent>;
    mouseMove$: Subject<MouseEvent>;
    touchMove$: Subject<TouchEvent>;
    verticalEventHandler: VerticalEventHandler;
    ngMovementEmitter: EventEmitter<string>;
    onMouseDown(event: any): void;
    onMouseUp(event: any): void;
    onMouseMove(event: any): void;
    onTouchMove(event: any): void;
    constructor();
    ngOnInit(): void;
    watchMovement(): void;
}
