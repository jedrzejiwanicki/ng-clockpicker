/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
export function convertToTimeFormat(value) {
    return value < 10 ? `0${value}` : value.toString();
}
/**
 * @param {?} hours
 * @param {?} minutes
 * @param {?} mode
 * @return {?}
 */
export function getTime(hours, minutes, mode) {
    /** @type {?} */
    const timeString = ` ${hours}:${minutes} ${mode}`;
    /** @type {?} */
    const date = new Date(new Date().toISOString().split('T')[0] + timeString);
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
        .map(item => Number(item));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFhO0lBQy9DLE9BQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3JELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsSUFBWTs7VUFDNUQsVUFBVSxHQUFHLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7O1VBQzNDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7SUFFMUUsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxJQUFZO0lBQ3pFLE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQWE7SUFDckMsT0FBTyxLQUFLO1NBQ1QsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udmVydFRvVGltZUZvcm1hdCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlIDwgMTAgPyBgMCR7dmFsdWV9YCA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lKGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlciwgbW9kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdGltZVN0cmluZyA9IGAgJHtob3Vyc306JHttaW51dGVzfSAke21vZGV9YDtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdICsgdGltZVN0cmluZyk7XG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlUaW1lKGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlciwgbW9kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldFRpbWUoaG91cnMsIG1pbnV0ZXMsIG1vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lKHZhbHVlOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5zcGxpdCgnOicpXG4gICAgLm1hcChpdGVtID0+IE51bWJlcihpdGVtKSk7XG59XG4iXX0=