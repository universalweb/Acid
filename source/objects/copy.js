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
 * assert(copy({a: 1}, {b: 2}, function c() { return 3; }, 'd', 5), {a: 1, b: 2, c, d: 'd', 5: 5});
 */
export function copy(target) {
	if (!target) {
		return;
	}
	return objectAssign({}, target);
}
// console.log(copy({}));