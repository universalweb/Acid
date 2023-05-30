import { getType } from './getType.js';
import { construct } from '../classes/construct.js';
/**
 * Returns a new empty object of the same type.
 *
 * @function cloneType
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { cloneType, assert } from 'Acid';
 * assert(cloneType([1]), []);
 */
export function cloneType(source, args = []) {
	const sourceType = getType(source);
	if (sourceType === Function) {
		if (sourceType.name === 'function') {
			return function() {};
		}
	}
	return construct(sourceType, args);
}
