/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
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
export { VerticalEventHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvY2xhc3Nlcy92ZXJ0aWNhbC1ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBU0U7UUFMQSxvQkFBZSxHQUFrQixJQUFJLENBQUM7UUFDdEMsbUJBQWMsR0FBa0IsSUFBSSxDQUFDO1FBQ3JDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLDRCQUF1QixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO0lBRWxELENBQUM7Ozs7O0lBRWhCLDBDQUFXOzs7O0lBQVgsVUFBWSxRQUFpQjtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxLQUE4QjtRQUN2QyxPQUFPLEtBQUssWUFBWSxVQUFVO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsQyxDQUFDOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBaUI7UUFDdkIsSUFBQSx1QkFBTzs7WUFDVCxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFFMUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUV2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCw4Q0FBZTs7OztJQUFmLFVBQWdCLEtBQWlCO1FBQ3ZCLElBQUEsa0NBQU87O1lBQ1QsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO1FBRTFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELG9EQUFxQjs7OztJQUFyQixVQUFzQixLQUFhO1FBQ2pDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQsNkNBQWM7Ozs7SUFBZCxVQUFlLE9BQWU7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLEtBQThCO1FBQ3hDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFZLEtBQUssRUFBQSxDQUFDLENBQUM7WUFDNUMsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzlCLEtBQUssV0FBVztnQkFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNoQyxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFZLEtBQUssRUFBQSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBdkVNLCtCQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLGlDQUFZLEdBQUcsTUFBTSxDQUFDO0lBdUUvQiwyQkFBQztDQUFBLEFBekVELElBeUVDO1NBekVZLG9CQUFvQjs7O0lBQy9CLGdDQUF5Qjs7SUFDekIsa0NBQTZCOztJQUU3QiwrQ0FBc0M7O0lBQ3RDLDhDQUFxQzs7SUFDckMsNENBQW9COztJQUNwQix1REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRXZlbnRIYW5kbGVyIHtcbiAgc3RhdGljIE1vdmVtZW50VXAgPSAndXAnO1xuICBzdGF0aWMgTW92ZW1lbnREb3duID0gJ2Rvd24nO1xuXG4gIHByZXZpb3VzQ2xpZW50WTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGN1cnJlbnRDbGllbnRZOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgaXNNb3ZlTG9ja2VkID0gdHJ1ZTtcbiAgdmVydGljYWxNb3ZlbWVudEVtaXR0ZXI6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0TW92ZUxvY2soaXNMb2NrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzTW92ZUxvY2tlZCA9IGlzTG9ja2VkO1xuICB9XG5cbiAgaGFuZGxlTW92ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50XG4gICAgICA/IHRoaXMuaGFuZGxlTW91c2VNb3ZlKGV2ZW50KVxuICAgICAgOiB0aGlzLmhhbmRsZVRvdWNoTW92ZShldmVudCk7XG5cbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNhbGN1bGF0ZURlbHRhKGNsaWVudFkpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3ZlTG9ja2VkKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICB0aGlzLmVtaXRNb3ZlbWVudERpcmVjdGlvbihkZWx0YSk7XG4gIH1cblxuICBoYW5kbGVUb3VjaE1vdmUoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgY29uc3QgZGVsdGEgPSB0aGlzLmNhbGN1bGF0ZURlbHRhKGNsaWVudFkpO1xuXG4gICAgdGhpcy5lbWl0TW92ZW1lbnREaXJlY3Rpb24oZGVsdGEpO1xuICB9XG5cbiAgZW1pdE1vdmVtZW50RGlyZWN0aW9uKGRlbHRhOiBudW1iZXIpIHtcbiAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsTW92ZW1lbnRFbWl0dGVyLm5leHQoJ2Rvd24nKTtcbiAgICB9IGVsc2UgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgdGhpcy52ZXJ0aWNhbE1vdmVtZW50RW1pdHRlci5uZXh0KCd1cCcpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZURlbHRhKGNsaWVudFk6IG51bWJlcik6IG51bWJlciB7XG4gICAgdGhpcy5wcmV2aW91c0NsaWVudFkgPSB0aGlzLmN1cnJlbnRDbGllbnRZO1xuICAgIHRoaXMuY3VycmVudENsaWVudFkgPSBjbGllbnRZO1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENsaWVudFkgLSB0aGlzLnByZXZpb3VzQ2xpZW50WTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlVXAoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRNb3ZlTG9jayh0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vdmVMb2NrKGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZSg8TW91c2VFdmVudD5ldmVudCk7XG4gICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW91c2VVcCgpO1xuICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW91c2VEb3duKCk7XG4gICAgICBjYXNlICd0b3VjaG1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb3ZlKDxUb3VjaEV2ZW50PmV2ZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==