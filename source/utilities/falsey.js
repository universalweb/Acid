/**
 * Check if a value is falsey which are false, null, 0, "", undefined, and NaN.
 *
 * @function falsey
 * @category Utility
 * @type {Function}
 * @param {*} source - Item to be falsey checked.
 * @param {*} [returnIfTrue = true] - Item to be returned if item is falsey.
 * @returns {Boolean|*} - Returns true if the item is falsey or returnIfTrue if provided otherwise returns false.
 *
 * @example
 * import { falsey, assert } from 'Acid';
 * assert(falsey(0), true);
 * assert(falsey(1), false);
 */
export function falsey(source, returnIfTrue = true) {
	return Boolean(source) === false && returnIfTrue;
}
