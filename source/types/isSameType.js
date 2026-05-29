import { getType } from './getType.js';
/**
 * Checks if two values share the same runtime type (constructor identity).
 *
 * @function isSameType
 * @category type
 * @param {*} source - First value.
 * @param {*} other - Second value.
 * @returns {Boolean} - True when both share the same type.
 *
 * @example
 * import { isSameType, assert } from '@universalweb/acid';
 * assert(isSameType(1, 2), true);
 * assert(isSameType(1, 'a'), false);
 */
export function isSameType(source, other) {
	return getType(source) === getType(other);
}
