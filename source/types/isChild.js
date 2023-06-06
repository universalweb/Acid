/**
 * Checks if an object is the child of another. Typically used for classes.
 *
 * @function isChild
 * @category type
 * @param {*} sourceChild - Object to be checked as the child.
 * @param {*} targetParent - Object to be checked as the parent.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isChild, construct, assert } from 'Acid';
 * class Grandparent{}
 * class Parent extends Grandparent{}
 * class Child extends Parent{}
 * const child = construct(Child);
 * assert(isChild(Child, Grandparent), true);
 * assert(isChild(Child, Parent), false);
 * assert(isChild(Parent, Grandparent), false);
 * assert(isChild(child1, child3), false);
 */
export function isChild(sourceChild, targetParent) {
	if (!sourceChild || !targetParent) {
		return false;
	}
	return sourceChild instanceof targetParent;
}
