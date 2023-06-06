import { randomInt } from '../math/randomInt.js';
import { shuffle } from './shuffle.js';
/**
 * Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
 *
 * @function sample
 * @category array
 * @param {Array} source - The array to pull sample(s) from.
 * @param {Number} amount - The amount of samples to take.
 * @returns {Array} - An array of randomly pulled samples.
 *
 * @test
 * (async () => {
 *   const tempResult = sample([1, 2] , 2);
 *   return assert(tempResult.includes(1) && tempResult.includes(2), true);
 * });
 *
 * @example
 * sample([1, 2, 3, 4] , 2);
 * // => [1, 3]
 */
export function sample(source, amount) {
	if (!source) {
		return false;
	}
	const arrayLength = source.length;
	if (arrayLength === amount || amount > arrayLength) {
		return shuffle(source);
	}
	if (amount === 1) {
		return [source[randomInt(arrayLength - 1, 0)]];
	}
	const sampleArray = [];
	const used = {};
	let count = 0;
	let index;
	while (count < amount) {
		index = randomInt(source.length - 1, 0);
		if (!used[index]) {
			sampleArray.push(source[index]);
			used[index] = true;
			count++;
		}
	}
	return sampleArray;
}

