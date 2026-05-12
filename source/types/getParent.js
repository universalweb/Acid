/**
 * Returns the parent prototype of the given object's prototype chain.
 *
 * @function getParent
 * @category type
 * @param {*} source - Object to retrieve the parent prototype from.
 * @returns {*} - Returns the parent prototype or null when none exists.
 *
 * @example
 * import { getParent, assert } from '@universalweb/acid';
 * class Parent {}
 * class Child extends Parent {}
 * assert(getParent(Child.prototype), Parent.prototype);
 */
export function getParent(source) {
	if (source === null || source === undefined) {
		return null;
	}
	return Object.getPrototypeOf(source);
}
