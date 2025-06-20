import { isConstructorFactory } from './isConstructorFactory.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object(s) is a Set.
 *
 * @function isSet
 * @category type
 * @param {...*} sources - Objects to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isSet, assert } from '@universalweb/acid';
 * assert(isSet(new Set()), true);
 */
export const isSetCall = isConstructorFactory(Set);
export const isSet = isTypeFactory(isSetCall);
