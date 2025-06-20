import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Uint32Array.
 *
 * @function isU32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU32 } from '@universalweb/acid';
 * isU32(new Uint32Array());
 * // => true
 */
export const isU32Call = isConstructorFactory(Uint32Array);
export const isU32 = isTypeFactory(isU32Call);
