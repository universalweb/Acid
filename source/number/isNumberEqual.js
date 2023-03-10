import { isBigInt } from '../type/isBigInt.js';
/**
 * Checks if two objects are the same type.
 *
 * @function isTypeSame
 * @category number
 * @type {Function}
 * @param {number} source - Number to be checked against num.
 * @param {number} target - Number to be checked against item.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isTypeSame } from 'Acid';
 * isTypeSame(0, 0);
 */
export const isTypeSame = (source, target) => {
	const isSourceBigInt = isBigInt(source);
	const isTargetBigInt = isBigInt(target);
	return source === target;
};
