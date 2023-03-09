import { isConstructorFactory } from './isConstructor.js';
/**
 * Checks if the source is a Uint8ClampedArray.
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
export const isU8C = isConstructorFactory('Uint8ClampedArray');
