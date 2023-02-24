import { hasValue } from '../type/hasValue.js';
/**
 * @function ifValue
 * @category function
 * @param {*} source - The source object to be hasValue checked.
 * @returns {source} The source object if it passes the hasValue check.
 */
export function ifValue(source) {
	if (hasValue(source)) {
		return source;
	}
}
