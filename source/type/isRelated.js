/**
 * Checks if objects are related to each other using instanceof. There is no required order for arguments given it will check all available ways.
 *
 * @function isRelated
 * @category type
 * @param {*} targetOne - Object to be checked.
 * @param {*} targetTwo - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isRelated, construct, assert } from 'Acid';
 * class parentClass{}
 * class otherClass{}
 * const child1 = construct(parentClass);
 * const child2 = construct(parentClass);
 * const child3 = construct(otherClass);
 * assert(isRelated(child1, child2), true);
 * assert(isRelated(child1, parentClass), true);
 * assert(isRelated(parentClass, child2), true);
 * assert(isRelated(child1, child3), false);
 */
export function isRelated(targetOne, targetTwo) {
	if (!targetOne || !targetTwo) {
		return false;
	}
	if (targetTwo.call && !targetOne.call) {
		return targetTwo instanceof targetOne;
	}
	if (!targetTwo.call && targetOne.call) {
		return targetOne instanceof targetTwo;
	}
	return targetTwo.constructor === targetOne.constructor;
}
