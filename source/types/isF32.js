import { isConstructorFactory, isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Float32Array.
 *
 * @function isF32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isF32, assert } from 'Acid';
 * assert(isF32(new Float32Array()), true);
 */
export const isF32Call = isConstructorNameFactory('Float32Array');
export const isF32 = isTypeFactory(isF32Call);
