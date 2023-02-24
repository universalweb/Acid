import { ensureArray } from '../array/ensure.js';
/**
 * Flattens an array up to the provided level.
 *
 * @function flatten
 * @type {Function}
 * @category array
 * @param {Array} source - Array to flatten.
 * @param {number} [level = 1] - Number which determines how deep the array nest can be.
 * @returns {Array} - Returns an array.
 *
 * @example
 * import { flatten, assert } from './Acid.js';
 * assert(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5]);
 */
export function flatten(source, level = 1) {
	let sourceArray = source;
	for (let i = 0; i < level; i++) {
		sourceArray = sourceArray.reduce((previousValue, currentValue) => {
			return previousValue.concat(ensureArray(currentValue));
		}, []);
	}
	return sourceArray;
}

