import { map } from '../utility/map.js';
/**
 * Creates a function that invokes iteratee with the arguments it receives and returns their results.
 *
 * @function over
 * @category function
 * @type {Function}
 * @param {(Array.<function>|Object.<function>)} iteratee - The list of functions to loop through.
 * @returns {Function} - Returns the new over wrapped function.
 *
 * @example
 * over([Math.max, Math.min])(1, 2, 3, 4);
 * // => [4, 1]
 */
export function over(iteratee) {
	return (...args) => {
		return map(iteratee, (item) => {
			return item(...args);
		});
	};
}
