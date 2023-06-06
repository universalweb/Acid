import { hasValue } from './hasValue.js';
/**
 * Checks if an object or objects are a structured-cloneable type.
 *
 * @function isCloneable
 * @category type
 * @param {...*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isCloneable, assert } from 'Acid';
 * assert(isCloneable(function (){}), false);
 */
const constructorNames = RegExp('Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError');
export function isCloneable(source) {
	if (hasValue(source)) {
		const constructorName = source?.constructor?.name;
		return constructorNames.test(constructorName);
	}
	return false;
}
