/**
 * Checks if an object is a primitive.
 *
 * @function isPrimitive
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isPrimitive, assert } from '@universalweb/acid';
 * assert(isPrimitive(1), true);
 * assert(isPrimitive(() => {}), false);
 */
export function isPrimitive(source) {
	const sourceType = typeof source;
	return source === null || source === undefined || (sourceType !== 'object' && sourceType !== 'function');
}
