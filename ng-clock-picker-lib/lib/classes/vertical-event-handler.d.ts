import { Subject } from "rxjs";
export declare class VerticalEventHandler {
    static MovementUp: string;
    static MovementDown: string;
    previousClientY: number | null;
    currentClientY: number | null;
    isMoveLocked: boolean;
    verticalMovementEmitter: Subject<string>;
    constructor();
    setMoveLock(isLocked: boolean): void;
    handleMove(event: MouseEvent | TouchEvent): void;
    handleMouseMove(event: MouseEvent): any;
    handleTouchMove(event: TouchEvent): void;
    emitMovementDirection(delta: number): void;
    calculateDelta(clientY: number): number;
    handleMouseUp(): void;
    handleMouseDown(): void;
    handleEvent(event: MouseEvent | TouchEvent): void;
}
