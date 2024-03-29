import { ensureArray } from './ensure.js';
/**
 * Flattens an array up to the provided level.
 *
 * @function flatten
 * @type {Function}
 * @category array
 * @param {Array} source - Array to flatten.
 * @param {Number} [level = 1] - Number which determines how deep the array nest can be.
 * @returns {Array|undefined} - Returns an array.
 *
 * @example
 * import { flatten, assert } from '@universalweb/acid';
 * assert(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5]);
 */
export function flatten(source, level = 1) {
	if (!source) {
		return;
	}
	let sourceArray = source;
	for (let i = 0; i < level; i++) {
		sourceArray = sourceArray.reduce((previousValue, currentValue) => {
			return previousValue.concat(ensureArray(currentValue));
		}, []);
	}
	return sourceArray;
}

