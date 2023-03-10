import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a BigInt.
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
export const isBigIntCall = isConstructorNameFactory('BigInt');
export const isBigInt = isTypeFactory(isBigIntCall);
