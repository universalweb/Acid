import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Uint8ClampedArray.
 *
 * @function isU8C
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU8C } from '@universalweb/acid';
 * isU8C(new Uint8ClampedArray());
 * // => true
 */
export const isU8CCall = isConstructorFactory(Uint8ClampedArray);
export const isU8C = isTypeFactory(isU8CCall);
