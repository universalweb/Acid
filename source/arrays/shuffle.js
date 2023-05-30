import { randomInt } from '../math/randomInt.js';
import { toArray } from '../internal/array.js';
import { isNumberEqual } from '../numbers/isNumberEqual.js';
/**
 * Shuffle an array and return a new array.
 *
 * @function shuffle
 * @category array
 * @param {Array} target - Target Array to be shuffled.
 * @param {number} amount - The amount of times to shuffle the array.
 * @returns {Array} - An array with the shuffled results.
 *
 * @example
 * import { shuffle, assert } from 'Acid';
 * assert(shuffle([1, 2, 3, 4]), [3, 4, 2, 1]);
 */
export function shuffle(target, amount = target.length) {
	if (target.length <= 1) {
		return toArray(target);
	}
	const shuffleArray = toArray(target);
	let count = 0;
	let index;
	let value;
	while (count < amount) {
		index = randomInt(shuffleArray.length - 1, 0);
		value = shuffleArray[count];
		shuffleArray[count] = shuffleArray[index];
		shuffleArray[index] = value;
		count++;
	}
	return shuffleArray;
}

