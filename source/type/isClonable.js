import { hasValue } from './hasValue.js';
import { multiCall } from '../utility/everyArg.js';
import { isConstructorNameRegexFactory } from './isConstructor.js';
import { isTypeFactory } from './isTypeFactory.js';
import { isSet } from './isSet';
/**
 * Checks if an object or objects are a structured-cloneable type.
 *
 * @function isStructCloneable
 * @category type
 * @param {...*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isStructCloneable, assert } from 'Acid';
 * assert(isStructCloneable(new Set()), true);
 */
// PlainObject Only - TypedArrays
const constructorNames = 'Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set';
const errorNames = 'Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError';
