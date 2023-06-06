/**
 * Iterates based on the amount given invoking the iteratee with the current index as an argument.
 *
 * @function times
 * @category utility
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index and amount.
 * @returns {undefined} - Nothing.
 *
 * @example
 * import { times } from 'Acid';
 * times(3, (item) => {
 *   console.log(item);
 * });
 * // 0
 * // 1
 * // 2
 * // => undefined
 */
export function times(amount, iteratee) {
	for (let index = 0; index < amount; index++) {
		iteratee(index);
	}
}
/**
 * Iterates based on the amount given and maps the results returned by the iteratee each time to an array.
 *
 * @function timesMap
 * @category utility
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index and amount.
 * @param {Array} [results = []] - Array that will have iteratee return pushed to.
 * @returns {Array} - An array with iteratee's returned values.
 *
 * @example
 * import { timesMap } from 'Acid';
 * timesMap(3, (item) => {
 *   return item;
 * });
 * // => [0, 1, 2]
 */
export function timesMap(amount, iteratee, results = []) {
	for (let index = 0; index < amount; index++) {
		results[index] = iteratee(amount);
	}
	return results;
}
