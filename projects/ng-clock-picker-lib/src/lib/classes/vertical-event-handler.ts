import { Subject } from 'rxjs';

export class VerticalEventHandler {
  static MovementUp = 'up';
  static MovementDown = 'down';

  previousClientY: number | null = null;
  currentClientY: number | null = null;
  isMoveLocked = true;
  verticalMovementEmitter: Subject<string> = new Subject<string>();

  constructor() {}

  setMoveLock(isLocked: boolean) {
    this.isMoveLocked = isLocked;
  }

  handleMove(event: MouseEvent | TouchEvent): void {
    return event instanceof MouseEvent
      ? this.handleMouseMove(event)
      : this.handleTouchMove(event);

  }

  handleMouseMove(event: MouseEvent) {
    const { clientY } = event;
    const delta = this.calculateDelta(clientY);

    if (this.isMoveLocked) { return null; }

    this.emitMovementDirection(delta);
  }

  handleTouchMove(event: TouchEvent) {
    const { clientY } = event.touches[0];
    const delta = this.calculateDelta(clientY);

    this.emitMovementDirection(delta);
  }

  emitMovementDirection(delta: number) {
    if (delta > 0) {
      this.verticalMovementEmitter.next('down');
    } else if (delta < 0) {
      this.verticalMovementEmitter.next('up');
    }
  }

  calculateDelta(clientY: number): number {
    this.previousClientY = this.currentClientY;
    this.currentClientY = clientY;

    return this.currentClientY - this.previousClientY;
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
