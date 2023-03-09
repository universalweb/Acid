import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a BigInt.
 *
 * @function isBigInt
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isBigInt, assert } from 'Acid';
 * assert(isBigInt(BigInt(123)), true);
 */
export const isBigInt = isConstructorFactory('BigInt');
