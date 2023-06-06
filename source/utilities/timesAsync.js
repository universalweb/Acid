/**
  * Asynchronously iterates based on the amount given awaiting on the iteratee with the current index as an argument.
  *
  * @async
  * @function timesAsync
  * @category utility
  * @type {Function}
  * @param {Number} amount - The amount of times to loop invoking the iteratee.
  * @param {Function} iteratee - Transformation function which is passed index and amount.
  * @returns {undefined} - Nothing.
  *
  * @example
  * import { timesAsync } from 'Acid';
  * await timesAsync(3, async (item) => {
  *   console.log(item);
  * });
  * // 0
  * // 1
  * // 2
  * // => undefined
*/
export async function timesAsync(amount, iteratee) {
	for (let index = 0; index < amount; index++) {
		await iteratee(amount);
	}
}
/**
  * Asynchronously iterates based on the amount given and maps the results awaited on by the iteratee each time to an array.
  *
  * @async
  * @function timesMapAsync
  * @category array
  * @type {Function}
  * @param {Number} amount - The amount of times to loop invoking the iteratee.
  * @param {Function} iteratee - Transformation function which is passed index and amount.
  * @param {Array} [results = []] - Array that will have iteratee return pushed to.
  * @returns {Array} - An array with iteratee's returned values.
  *
  * @example
  * import { timesMapAsync } from 'Acid';
  * await timesMapAsync(3, (item) => {
  *   return item;
  * });
  * // => [0, 1, 2]
*/
export async function timesMapAsync(amount, iteratee, results = []) {
	for (let index = 0; index < amount; index++) {
		results[index] = await iteratee(amount);
	}
	return results;
}
