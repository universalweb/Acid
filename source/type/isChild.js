/**
 * Checks if an object is the child of another. Typically used for classes.
 *
 * @function isChild
 * @category type
 * @param {*} sourceChild - Object to be checked as the child.
 * @param {*} targetParent - Object to be checked as the parent.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isChild, construct, assert } from 'Acid';
 * class parentClass{}
 * class otherClass{}
 * const child1 = construct(parentClass);
 * const child2 = construct(otherClass);
 * assert(isChild(child1, parentClass), true);
 * assert(isChild(child3, parentClass), false);
 * assert(isChild(parentClass, child1), false);
 * assert(isChild(child1, child3), false);
 */
export function isChild(source, target) {
	if (!source || !target) {
		return false;
	}
	if (target.call && !source.call) {
		return target instanceof source;
	}
	if (!target.call && source.call) {
		return source instanceof target;
	}
	return target.constructor === source.constructor;
}
