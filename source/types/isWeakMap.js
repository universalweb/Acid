import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object or objects are a WeakMap.
 *
 * @function isWeakMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isWeakMap } from '@universalweb/acid';
 * assert(isWeakMap(new WeakMap()), true);
 */
export const isWeakMapCall = isConstructorFactory(WeakMap);
export const isWeakMap = isTypeFactory(isWeakMapCall);
