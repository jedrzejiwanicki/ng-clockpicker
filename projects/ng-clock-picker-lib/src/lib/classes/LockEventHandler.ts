import { Observable, Subject } from 'rxjs';

export class LockEventHandler {
  isMoveLocked = true;
  private eventEmitter$: Subject<MouseEvent | TouchEvent> = new Subject<MouseEvent | TouchEvent>();

  constructor() {}

  eventEmitter(): Observable<MouseEvent | TouchEvent> {
    return this.eventEmitter$.asObservable();
  }

  setMoveLock(isLocked: boolean) {
    this.isMoveLocked = isLocked;
  }

  handleMove(event: MouseEvent | TouchEvent): void {
    if (!this.isMoveLocked || event instanceof TouchEvent) {
      this.emitMovement(event);
    }
  }

  emitMovement(event: MouseEvent | TouchEvent): void {
    this.eventEmitter$.next(event);
  }

  handleMouseUp(): void {
    this.setMoveLock(true);
  }

  handleMouseDown(): void {
    this.setMoveLock(false);
  }

  handleEvent(event: MouseEvent | TouchEvent): void {
    switch (event.type) {
      case 'mousemove':
        return this.handleMove(<MouseEvent>event);
      case 'mouseup':
        return this.handleMouseUp();
      case 'mousedown':
        return this.handleMouseDown();
      case 'touchmove':
        return this.handleMove(<TouchEvent>event);
    }
  }
}
