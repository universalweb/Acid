import { isNegative } from '../numbers/isNegative.js';
export function rangeUp(start, end, step, sourceArray) {
	let position = start;
	while (position < end) {
		sourceArray.push(position);
		position += step;
	}
	return sourceArray;
}
export function rangeDown(start, end, step, sourceArray) {
	let position = start;
	while (position > end) {
		sourceArray.push(position);
		position -= step;
	}
	return sourceArray;
}
/**
 * Create a numbered list of integers.
 *
 * @function range
 * @category array
 * @type {Function}
 * @param {Number} start - Value which determines the start of the range.
 * @param {Number} end - Value which determines the end of the range.
 * @param {Number} step - Value used to step between integers.
 * @returns {Array} - An array of integers.
 *
 * @example
 * import { range, assert } from '@universalweb/acid';
 * assert(range(0, 30, 5), [0, 5, 10, 15, 20, 25]);
 */
export function range(start, end, step = 1, sourceArray = []) {
	if (isNegative(step)) {
		return sourceArray;
	}
	if (start < end) {
		return rangeUp(start, end, step, sourceArray);
	} else {
		return rangeDown(start, end, step, sourceArray);
	}
}
