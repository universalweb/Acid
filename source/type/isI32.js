import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Int32Array.
 *
 * @function isI32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isI32 } from 'Acid';
 * isI32(new Int32Array());
 * // => true
 */
export const isI32Call = isConstructorNameFactory('Int32Array');
export const isI32 = isTypeFactory(isI32Call);
