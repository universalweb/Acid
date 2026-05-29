/**
 * Asynchronously iterates based on the amount given awaiting on the iteratee with the current index as an argument.
 *
 * @async
 * @function timesAsync
 * @category utility
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index.
 * @param {*} [contextThis] - Optional `this` binding for the iteratee.
 * @returns {undefined} - Nothing.
 *
 * @example
 * import { timesAsync, assert } from '@universalweb/acid';
 * const collected = [];
 * await timesAsync(3, async (item) => { collected.push(item); });
 * assert(collected, [0, 1, 2]);
 */
export async function timesAsync(amount, iteratee, contextThis) {
	if (contextThis) {
		for (let index = 0; index < amount; index++) {
			await iteratee.call(contextThis, index);
		}
		return;
	}
	for (let index = 0; index < amount; index++) {
		await iteratee(index);
	}
}
/**
 * Asynchronously iterates based on the amount given and maps the awaited results to an array.
 *
 * @async
 * @function timesMapAsync
 * @category array
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index.
 * @param {Array} [results = []] - Array that will have iteratee return pushed to.
 * @returns {Array} - An array with iteratee's returned values.
 *
 * @example
 * import { timesMapAsync, assert } from '@universalweb/acid';
 * assert(await timesMapAsync(3, async (item) => item), [0, 1, 2]);
 */
export async function timesMapAsync(amount, iteratee, results = []) {
	for (let index = 0; index < amount; index++) {
		results[index] = await iteratee(index);
	}
	return results;
}
