import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { filter, map } from 'rxjs/internal/operators';

import { LockEventHandler } from '../../classes/LockEventHandler';

@Component({
  selector: 'ng-movement-emitter',
  templateUrl: './movement-emitter.component.html',
  styleUrls: ['./movement-emitter.component.scss']
})
export class MovementEmitterComponent implements OnInit {
  mouseDown$: Subject<MouseEvent> = new Subject<MouseEvent>();
  mouseUp$:  Subject<MouseEvent> = new Subject<MouseEvent>();
  mouseMove$:  Subject<MouseEvent> = new Subject<MouseEvent>();
  touchMove$: Subject<TouchEvent> = new Subject<TouchEvent>();

  lockEventHandler: LockEventHandler = new LockEventHandler();

  @Input() constraintElement: any;
  @Output() elementEmitted: EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();

  @HostListener('mousedown', ['$event']) onMouseDown(event) { this.mouseDown$.next(event); }
  @HostListener('mouseup', ['$event']) onMouseUp(event) { this.mouseUp$.next(event); }
  @HostListener('mousemove', ['$event']) onMouseMove(event) { this.mouseMove$.next(event); }
  @HostListener('document:touchmove', ['$event']) onTouchMove(event) { this.touchMove$.next(event); }

  constructor() { }

  ngOnInit(): void {
    this.watchMovement();
    this.lockEventHandler.eventEmitter()
      .pipe(
        map((event: MouseEvent | TouchEvent) =>
          event instanceof MouseEvent
            ? <HTMLElement>document.elementFromPoint(event.clientX, event.clientY)
            : <HTMLElement>document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY)
          ),
        filter((target: HTMLElement) => target instanceof this.constraintElement)
      )
      .subscribe((HTMLElement) => this.elementEmitted.emit(HTMLElement));
  }

  watchMovement(): void {
    merge(
      this.mouseDown$,
      this.mouseUp$,
      this.mouseMove$,
      this.touchMove$
    ).subscribe((event: MouseEvent | TouchEvent) => this.lockEventHandler.handleEvent(event));
  }
}
