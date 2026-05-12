const objectAssign = Object.assign;
/**
 * Shallow copy a source plain object and return the new copy.
 *
 * @function copy
 * @category object
 * @param {...Object} source - The source object.
 * @returns {Object} - Returns the copied object.
 *
 * @example
 * import { copy, assert } from '@universalweb/acid';
 * assert(copy({a: 1, b: 2}), {a: 1, b: 2});
 */
export function copy(target) {
	if (!target) {
		return;
	}
	return objectAssign({}, target);
}