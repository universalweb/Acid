import { hasValue } from '../types/hasValue.js';
/**
 * If source has a value then return source or invoke a function (if present) with source as the argument.
 *
 * @function ifValue
 * @category function
 * @param {*} source - The source object to be hasValue checked.
 * @returns {source} The source object if it passes the hasValue check.
 */
export function ifValue(source, callback) {
	if (hasValue(source)) {
		if (callback) {
			return callback(source);
		}
		return source;
	}
}
