/**
 * Checks if two values share the same primitive typeof.
 *
 * @function sameType
 * @category type
 * @param {*} source - First value.
 * @param {*} target - Second value.
 * @returns {Boolean} - Returns true when typeof source equals typeof target.
 *
 * @example
 * import { sameType, assert } from '@universalweb/acid';
 * assert(sameType(1, 2), true);
 * assert(sameType(1, '2'), false);
 */
export function sameType(source, target) {
	return typeof source === typeof target;
}
