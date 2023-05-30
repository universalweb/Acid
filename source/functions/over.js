import { map } from '../utilities/map.js';
/**
 * Creates a function that invokes iteratee with the arguments it receives and returns their results.
 *
 * @function over
 * @category function
 * @type {Function}
 * @param {(Array.<function>|Object.<function>)} iteratees - The list of functions to loop through.
 * @returns {Function} - Returns the new over wrapped function.
 *
 * @example
 * import { overEvery, assert } from 'Acid';
 * assert(over([Math.max, Math.min])(1, 2, 3, 4), [4, 1]);
 */
export function over(iteratees) {
	return (...args) => {
		return map(iteratees, (item) => {
			return item(...args);
		});
	};
}
