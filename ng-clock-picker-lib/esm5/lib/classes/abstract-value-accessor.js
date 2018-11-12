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
export { AbstractValueAccessor };
if (false) {
    /** @type {?} */
    AbstractValueAccessor.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtdmFsdWUtYWNjZXNzb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2NsYXNzZXMvYWJzdHJhY3QtdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBO0lBQ0U7SUFBZSxDQUFDOzs7OztJQUVoQix3Q0FBUTs7OztJQUFSLFVBQVMsR0FBUSxJQUFTLENBQUM7Ozs7SUFDM0IseUNBQVM7OztJQUFULGNBQW1CLENBQUM7Ozs7O0lBQ3BCLDBDQUFVOzs7O0lBQVYsVUFBVyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlEQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7Ozs7SUFmQyx1Q0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgX3ZhbHVlOiBhbnk7XG4gIG9uQ2hhbmdlKG9iajogYW55KTogdm9pZCB7fVxuICBvblRvdWNoZWQoKTogdm9pZCB7fVxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSBvYmo7XG4gICAgdGhpcy5vbkNoYW5nZShvYmopO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==