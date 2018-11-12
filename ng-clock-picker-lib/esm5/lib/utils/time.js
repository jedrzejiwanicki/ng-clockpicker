/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
export function convertToTimeFormat(value) {
    return value < 10 ? "0" + value : value.toString();
}
/**
 * @param {?} hours
 * @param {?} minutes
 * @param {?} mode
 * @return {?}
 */
export function getTime(hours, minutes, mode) {
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
export function getDisplayTime(hours, minutes, mode) {
    return getTime(hours, minutes, mode);
}
/**
 * @param {?} value
 * @return {?}
 */
export function parseTime(value) {
    return value
        .split(':')
        .map(function (item) { return Number(item); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFhO0lBQy9DLE9BQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBSSxLQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyRCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLElBQVk7O1FBQzVELFVBQVUsR0FBRyxNQUFJLEtBQUssU0FBSSxPQUFPLFNBQUksSUFBTTs7UUFDM0MsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUUxRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLElBQVk7SUFDekUsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBYTtJQUNyQyxPQUFPLEtBQUs7U0FDVCxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udmVydFRvVGltZUZvcm1hdCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlIDwgMTAgPyBgMCR7dmFsdWV9YCA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lKGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlciwgbW9kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdGltZVN0cmluZyA9IGAgJHtob3Vyc306JHttaW51dGVzfSAke21vZGV9YDtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdICsgdGltZVN0cmluZyk7XG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlUaW1lKGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlciwgbW9kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldFRpbWUoaG91cnMsIG1pbnV0ZXMsIG1vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lKHZhbHVlOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5zcGxpdCgnOicpXG4gICAgLm1hcChpdGVtID0+IE51bWJlcihpdGVtKSk7XG59XG4iXX0=