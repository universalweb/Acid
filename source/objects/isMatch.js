import { isMatchArray } from '../arrays/isMatch.js';
import { everyArray } from '../arrays/every.js';
import { keys } from './keys.js';
/**
 * Performs a shallow strict comparison between two objects.
 *
 * @function isMatchObject
 * @type {Function}
 * @category object
 * @param {Object} source - Source object.
 * @param {Object} target - Object to compare to source.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { assert, isMatchObject } from 'Acid';
 * assert(isMatchObject({a: 1}, {a: 1}), true);
 */
export const isMatchObject = (source, target) => {
	if (source === target) {
		return true;
	}
	const sourceKeys = keys(source);
	const targetKeys = keys(target);
	if (sourceKeys.length === targetKeys.length) {
		return everyArray(sourceKeys, (key) => {
			return source[key] === target[key];
		});
	}
	return false;
};

