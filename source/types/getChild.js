/**
 * Returns the immediate child class (subclass) name list for an object's constructor by inspecting its prototype.
 * For primitives or values without a constructor, returns null. Useful as a structural inverse of getParent.
 *
 * @function getChild
 * @category type
 * @param {*} source - Object to retrieve child constructor info from.
 * @returns {Function|null} - Returns the constructor function (the "child" type) or null when none exists.
 *
 * @example
 * import { getChild, assert } from '@universalweb/acid';
 * class Parent {}
 * class Child extends Parent {}
 * const child = new Child();
 * assert(getChild(child), Child);
 */
export function getChild(source) {
	if (source === null || source === undefined) {
		return null;
	}
	return source.constructor ?? null;
}
