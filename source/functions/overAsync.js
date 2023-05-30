import { map } from '../utilities/map.js';
/**
 * Creates a function that asynchronously invokes iteratee with the arguments it receives and returns their results.
 *
 * @function overAsync
 * @category function
 * @type {Function}
 * @param {(Array.<function>|Object.<function>)} iteratees - The list of functions to loop through.
 * @returns {Function} - Returns the new over wrapped function.
 *
 * @example
 * import { overAsync, assert } from 'Acid';
 * assert(overAsync([async(...items) => {return Math.max(item);}])(1, 2, 3, 4), [4]);
 */
export function overAsync(iteratees) {
	return async (...args) => {
		return map(iteratees, async (item) => {
			return item(...args);
		});
	};
}
