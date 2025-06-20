import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Uint16Array.
 *
 * @function isU16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU16 } from '@universalweb/acid';
 * isU16(new Uint16Array());
 * // => true
 */
export const isU16Call = isConstructorFactory(Uint16Array);
export const isU16 = isTypeFactory(isU16Call);
