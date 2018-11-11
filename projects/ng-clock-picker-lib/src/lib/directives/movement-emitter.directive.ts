import { Directive, HostListener, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject, merge } from 'rxjs';

import { VerticalEventHandler } from '../classes/vertical-event-handler';

@Directive({
  selector: '[ngMovementEmitter]'
})
export class MovementEmitterDirective implements OnInit {
  mouseDown$: Subject<MouseEvent> = new Subject<MouseEvent>();
  mouseUp$:  Subject<MouseEvent> = new Subject<MouseEvent>();
  mouseMove$:  Subject<MouseEvent> = new Subject<MouseEvent>();
  touchMove$: Subject<TouchEvent> = new Subject<TouchEvent>();

  verticalEventHandler = new VerticalEventHandler();

  @Output() ngMovementEmitter: EventEmitter<string> = new EventEmitter<string>();
  @HostListener('mousedown', ['$event']) onMouseDown(event) { this.mouseDown$.next(event); }
  @HostListener('mouseup', ['$event']) onMouseUp(event) { this.mouseUp$.next(event); }
  @HostListener('mousemove', ['$event']) onMouseMove(event) { this.mouseMove$.next(event); }
  @HostListener('touchmove', ['$event']) onTouchMove(event) { this.touchMove$.next(event); }

  constructor() { }

  ngOnInit(): void {
    this.watchMovement();
    this.verticalEventHandler.verticalMovementEmitter
      .subscribe((value: string) => this.ngMovementEmitter.emit(value));
  }

  watchMovement(): void {
    merge(
      this.mouseDown$,
      this.mouseUp$,
      this.mouseMove$,
      this.touchMove$
    ).subscribe((event: MouseEvent | TouchEvent) => this.verticalEventHandler.handleEvent(event));
  }
}
