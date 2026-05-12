import { getType } from './getType.js';
/**
 * Checks if two values share the exact same constructor (class).
 *
 * @function sameClass
 * @category type
 * @param {*} source - First value.
 * @param {*} target - Second value.
 * @returns {Boolean} - Returns true when both values' constructors strictly equal one another.
 *
 * @example
 * import { sameClass, assert } from '@universalweb/acid';
 * assert(sameClass([], []), true);
 * assert(sameClass({}, []), false);
 */
export function sameClass(source, target) {
	const sourceType = getType(source);
	const targetType = getType(target);
	return Boolean(sourceType) && sourceType === targetType;
}
