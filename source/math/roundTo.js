const { round, floor, ceil } = Math;
function withPrecision(method, value, decimals) {
	if (!decimals) {
		return method(value);
	}
	const factor = 10 ** decimals;
	return method(value * factor) / factor;
}
/**
 * Rounds a number to the given number of decimals.
 *
 * @function roundTo
 * @category math
 * @type {Function}
 * @param {Number} value - The number to round.
 * @param {Number} [decimals=0] - The number of decimals to round to.
 * @returns {Number} - Returns the rounded number.
 *
 * @example
 * import { roundTo, assert } from '@universalweb/acid';
 * assert(roundTo(1.2345, 2), 1.23);
 */
export function roundTo(value, decimals = 0) {
	return withPrecision(round, value, decimals);
}
/**
 * Floors a number to the given number of decimals.
 *
 * @function floorTo
 * @category math
 * @type {Function}
 * @param {Number} value - The number to floor.
 * @param {Number} [decimals=0] - The number of decimals to floor to.
 * @returns {Number} - Returns the floored number.
 *
 * @example
 * import { floorTo, assert } from '@universalweb/acid';
 * assert(floorTo(1.99, 1), 1.9);
 */
export function floorTo(value, decimals = 0) {
	return withPrecision(floor, value, decimals);
}
/**
 * Ceils a number to the given number of decimals.
 *
 * @function ceilTo
 * @category math
 * @type {Function}
 * @param {Number} value - The number to ceil.
 * @param {Number} [decimals=0] - The number of decimals to ceil to.
 * @returns {Number} - Returns the ceiled number.
 *
 * @example
 * import { ceilTo, assert } from '@universalweb/acid';
 * assert(ceilTo(1.21, 1), 1.3);
 */
export function ceilTo(value, decimals = 0) {
	return withPrecision(ceil, value, decimals);
}
