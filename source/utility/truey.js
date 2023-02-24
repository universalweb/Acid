/**
 * Check if a value is truey which is anything but false, null, 0, "", undefined, and NaN.
 *
 * @function truey
 * @category Utility
 * @type {Function}
 * @param {*} source - Item to be truey checked.
 * @param {*} [returnIfTrue = true] - Item to be returned if item is truey.
 * @returns {boolean|*} - Returns true if the item is truey or returnIfTrue if provided otherwise returns false.
 *
 * @example
 * import { truey, assert } from './Acid.js';
 * assert(truey(1), true);
 * assert(truey(0), false);
 */
export function truey(source, returnIfTrue = true) {
	return Boolean(source) && returnIfTrue;
}
