/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
export class VerticalEventHandler {
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
if (false) {
    /** @type {?} */
    VerticalEventHandler.MovementUp;
    /** @type {?} */
    VerticalEventHandler.MovementDown;
    /** @type {?} */
    VerticalEventHandler.prototype.previousClientY;
    /** @type {?} */
    VerticalEventHandler.prototype.currentClientY;
    /** @type {?} */
    VerticalEventHandler.prototype.isMoveLocked;
    /** @type {?} */
    VerticalEventHandler.prototype.verticalMovementEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy92ZXJ0aWNhbC1ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE1BQU0sT0FBTyxvQkFBb0I7SUFTL0I7UUFMQSxvQkFBZSxHQUFrQixJQUFJLENBQUM7UUFDdEMsbUJBQWMsR0FBa0IsSUFBSSxDQUFDO1FBQ3JDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLDRCQUF1QixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO0lBRWxELENBQUM7Ozs7O0lBRWhCLFdBQVcsQ0FBQyxRQUFpQjtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUE4QjtRQUN2QyxPQUFPLEtBQUssWUFBWSxVQUFVO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsQyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFpQjtjQUN6QixFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUs7O2NBQ25CLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUUxQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRXZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFpQjtjQUN6QixFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOztjQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFFMUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsS0FBYTtRQUNqQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO2FBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFlO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztRQUU5QixPQUFPLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQThCO1FBQ3hDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFZLEtBQUssRUFBQSxDQUFDLENBQUM7WUFDNUMsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlCLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNoQyxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFZLEtBQUssRUFBQSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOztBQXZFTSwrQkFBVSxHQUFHLElBQUksQ0FBQztBQUNsQixpQ0FBWSxHQUFHLE1BQU0sQ0FBQzs7O0lBRDdCLGdDQUF5Qjs7SUFDekIsa0NBQTZCOztJQUU3QiwrQ0FBc0M7O0lBQ3RDLDhDQUFxQzs7SUFDckMsNENBQW9COztJQUNwQix1REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRXZlbnRIYW5kbGVyIHtcbiAgc3RhdGljIE1vdmVtZW50VXAgPSAndXAnO1xuICBzdGF0aWMgTW92ZW1lbnREb3duID0gJ2Rvd24nO1xuXG4gIHByZXZpb3VzQ2xpZW50WTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGN1cnJlbnRDbGllbnRZOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgaXNNb3ZlTG9ja2VkID0gdHJ1ZTtcbiAgdmVydGljYWxNb3ZlbWVudEVtaXR0ZXI6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0TW92ZUxvY2soaXNMb2NrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzTW92ZUxvY2tlZCA9IGlzTG9ja2VkO1xuICB9XG5cbiAgaGFuZGxlTW92ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50XG4gICAgICA/IHRoaXMuaGFuZGxlTW91c2VNb3ZlKGV2ZW50KVxuICAgICAgOiB0aGlzLmhhbmRsZVRvdWNoTW92ZShldmVudCk7XG5cbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNhbGN1bGF0ZURlbHRhKGNsaWVudFkpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3ZlTG9ja2VkKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICB0aGlzLmVtaXRNb3ZlbWVudERpcmVjdGlvbihkZWx0YSk7XG4gIH1cblxuICBoYW5kbGVUb3VjaE1vdmUoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNhbGN1bGF0ZURlbHRhKGNsaWVudFkpO1xuXG4gICAgdGhpcy5lbWl0TW92ZW1lbnREaXJlY3Rpb24oZGVsdGEpO1xuICB9XG5cbiAgZW1pdE1vdmVtZW50RGlyZWN0aW9uKGRlbHRhOiBudW1iZXIpIHtcbiAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsTW92ZW1lbnRFbWl0dGVyLm5leHQoJ2Rvd24nKTtcbiAgICB9IGVsc2UgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgdGhpcy52ZXJ0aWNhbE1vdmVtZW50RW1pdHRlci5uZXh0KCd1cCcpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZURlbHRhKGNsaWVudFk6IG51bWJlcik6IG51bWJlciB7XG4gICAgdGhpcy5wcmV2aW91c0NsaWVudFkgPSB0aGlzLmN1cnJlbnRDbGllbnRZO1xuICAgIHRoaXMuY3VycmVudENsaWVudFkgPSBjbGllbnRZO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENsaWVudFkgLSB0aGlzLnByZXZpb3VzQ2xpZW50WTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlVXAoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb3ZlTG9jayh0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vdmVMb2NrKGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZSg8TW91c2VFdmVudD5ldmVudCk7XG4gICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW91c2VVcCgpO1xuICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW91c2VEb3duKCk7XG4gICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb3ZlKDxUb3VjaEV2ZW50PmV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==