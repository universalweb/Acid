/**
 * Strictly checks if a number is zero.
 *
 * @function isZero
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isZero, assert } from '@universalweb/acid';
 * assert(isZero(0), true);
 */
export function isZero(source) {
	return source === 0;
}
export { isZero as equalsZero };
