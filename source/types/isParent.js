/**
 * Checks if an object is the child of another. Typically used for classes.
 *
 * @function isParent
 * @category type
 * @param {*} sourceParent - Object to be checked as the child.
 * @param {*} targetChild - Object to be checked as the parent.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isParent, construct, assert } from 'Acid';
 * class parentClass{}
 * class otherClass{}
 * const child1 = construct(parentClass);
 * const child2 = construct(otherClass);
 * assert(isParent(child1, parentClass), true);
 * assert(isParent(child3, parentClass), false);
 * assert(isParent(parentClass, child1), false);
 * assert(isParent(child1, child3), false);
 */
export function isParent(sourceParent, targetChild) {
	if (!sourceParent || !targetChild || !targetChild.call) {
		return false;
	}
	return sourceParent instanceof targetChild;
}
