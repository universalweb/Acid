import { hasLength } from '../utilities/hasLength.js';
/**
 * Checks if the value is null.
 *
 * @function isNull
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNull, assert } from 'Acid';
 * assert(isNull(null), true);
 */
export function isNull(source) {
	return source === null;
}
