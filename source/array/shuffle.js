import { randomInt } from '../number/math';
import { toArray } from '../internal/array';
/**
  * Shuffle an array and return a new array.
  *
  * @function shuffle
  * @category array
  * @param {Array} target - Target Array to be shuffled.
  * @returns {Array} - An array with the shuffled results.
  *
  * @test
  * (async () => {
  *   const tempResult = shuffle([1, 2]);
  *   return assert(tempResult.includes(1) && tempResult.includes(2), true);
  * });
  *
  * @example
  * shuffle([1, 2, 3, 4]);
  * // => [3, 4, 2, 1]
*/
export const shuffle = (target, amount = target.length) => {
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
};

