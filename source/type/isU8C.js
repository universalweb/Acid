import { isConstructorFactory, isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Uint8ClampedArray.
 *
 * @function isU8C
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isU8C } from 'Acid';
 * isU8C(new Uint8ClampedArray());
 * // => true
 */
export const isU8CCall = isConstructorNameFactory('Uint8ClampedArray');
export const isU8C = isTypeFactory(isU8CCall);
