/**
 * Iterates based on the amount given invoking the iteratee with the current index as an argument.
 *
 * @function times
 * @category utility
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index.
 * @param {*} [contextThis] - Optional `this` binding for the iteratee.
 * @returns {undefined} - Nothing.
 *
 * @example
 * import { times, assert } from '@universalweb/acid';
 * const collected = [];
 * times(3, (item) => { collected.push(item); });
 * assert(collected, [0, 1, 2]);
 */
export function times(amount, iteratee, contextThis) {
	if (contextThis) {
		for (let index = 0; index < amount; index++) {
			iteratee.call(contextThis, index);
		}
		return;
	}
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
 * @param {Function} iteratee - Transformation function which is passed index.
 * @param {Array} [results = []] - Array that will have iteratee return pushed to.
 * @returns {Array} - An array with iteratee's returned values.
 *
 * @example
 * import { timesMap, assert } from '@universalweb/acid';
 * assert(timesMap(3, (item) => item), [0, 1, 2]);
 */
export function timesMap(amount, iteratee, results = []) {
	for (let index = 0; index < amount; index++) {
		results[index] = iteratee(index);
	}
	return results;
}
