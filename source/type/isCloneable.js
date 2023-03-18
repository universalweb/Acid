import { hasValue } from './hasValue.js';
import { isTypeFactory } from './isTypeFactory.js';
import { isSet } from './isSet.js';
/**
 * Checks if an object or objects are a structured-cloneable type.
 *
 * @function isStructCloneable
 * @category type
 * @param {...*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isCloneable, assert } from 'Acid';
 * assert(isCloneable(function (){}), false);
 */
const constructorNames = /Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError/;
function isCloneable(source) {
	if (hasValue(source)) {
		const constructorName = source.constructor.name;
		return constructorName.match(constructorName);
	}
	return false;
}
