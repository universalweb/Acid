import { hasValue } from './hasValue.js';
/**
 * Checks if the value is a plain object.
 *
 * @function isPlainObject
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isPlainObject } from '@universalweb/acid';
 * isPlainObject({});
 * // => true
 */
export const isPlainObject = (source) => {
	if (hasValue(source)) {
		return source.constructor.toString().trim()
			.slice(9, 16) === 'Object(';
	}
	return false;
};
