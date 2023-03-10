import { hasValue } from './hasValue.js';
import { multiCall } from '../utility/everyArg.js';
import { isConstructorNameFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
/**
 * Checks if an object(s) is a Set.
 *
 * @function isSet
 * @category type
 * @param {...*} sources - Objects to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isSet, assert } from 'Acid';
 * assert(isSet(new Set()), true);
 */
export const isSetCall = isConstructorNameFactory('Set');
export const isSet = isTypeFactory(isSetCall);
