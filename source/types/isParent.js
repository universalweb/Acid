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
 * import { isParent, construct, assert } from '@universalweb/acid';
 * class ParentClass {}
 * class OtherClass {}
 * const child1 = construct(ParentClass);
 * const other = construct(OtherClass);
 * assert(isParent(child1, ParentClass), true);
 * assert(isParent(other, ParentClass), false);
 * assert(isParent(ParentClass, child1), false);
 */
export function isParent(sourceParent, targetChild) {
	if (!sourceParent || !targetChild || !targetChild.call) {
		return false;
	}
	return sourceParent instanceof targetChild;
}
