import { hasValue } from './hasValue.js';
import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a Map.
 *
 * @function isMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isMap } from 'Acid';
 * isMap(new Map());
 * // => true
 */
export const isMapCall = isConstructorNameFactory('Map');
export const isMap = isTypeFactory(isMapCall);
