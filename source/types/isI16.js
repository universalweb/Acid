import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Int16Array.
 *
 * @function isI16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isI16 } from '@universalweb/acid';
 * isI16(new Int16Array());
 * // => true
 */
export const isI16Call = isConstructorFactory(Int16Array);
export const isI16 = isTypeFactory(isI16Call);
