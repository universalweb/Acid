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
	const type = typeof value;
	return source === null || source === undefined || (type !== 'object' && type !== 'function');
}
