import { randomInt } from '../math/randomInt.js';
import { shuffle } from './shuffle.js';
/**
 * Produce a random sample from `source`. Without `amount` returns a single random element. With `amount` returns an array of `amount` unique elements (clamped to source length).
 *
 * @function sample
 * @category array
 * @param {Array} source - The array to pull sample(s) from.
 * @param {Number} [amount] - The amount of samples to take. Omit for a single random element.
 * @returns {*|Array} - The single element or an array of samples.
 *
 * @example
 * import { sample, assert } from '@universalweb/acid';
 * const one = sample([1, 2, 3, 4]);
 * assert([1, 2, 3, 4].includes(one), true);
 * const two = sample([1, 2, 3, 4], 2);
 * assert(two.length, 2);
 */
export function sample(source, amount) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	if (amount === undefined) {
		return source[randomInt(arrayLength - 1, 0)];
	}
	if (amount >= arrayLength) {
		return shuffle(source);
	}
	if (amount === 1) {
		return [source[randomInt(arrayLength - 1, 0)]];
	}
	const sampleArray = [];
	const used = new Set();
	let count = 0;
	while (count < amount) {
		const index = randomInt(arrayLength - 1, 0);
		if (!used.has(index)) {
			sampleArray.push(source[index]);
			used.add(index);
			count++;
		}
	}
	return sampleArray;
}
