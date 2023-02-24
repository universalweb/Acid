import { isMatchArray } from '../array/isMatch.js';
import { everyArray } from '../array/every.js';
import { keys } from '../object/keys.js';
/**
 * Performs a shallow strict comparison between two objects.
 *
 * @function isMatchObject
 * @type {Function}
 * @category object
 * @param {Object} source - Source object.
 * @param {Object} compareObject - Object to compare to source.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isMatchObject({a: 1}, {a: 1});
 * // => true
 */
export const isMatchObject = (source, compareObject) => {
	const sourceProperties = keys(source);
	if (isMatchArray(sourceProperties, keys(compareObject))) {
		return everyArray(sourceProperties, (key) => {
			return source[key] === compareObject[key];
		});
	}
	return false;
};

