import { hasValue } from './hasValue.js';
/**
 * Checks if the value is a plain object.
 *
 * @function isPlainObject
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isPlainObject } from 'Acid';
 * isPlainObject({});
 * // => true
 */
export const isPlainObject = (value) => {
	if (hasValue(value)) {
		return value.constructor.toString().trim()
			.slice(9, 16) === 'Object(';
	}
	return false;
};
