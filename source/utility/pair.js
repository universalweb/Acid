import { eachRight } from '../array/eachRight';
/**
 * Takes the first two arguments given and returns them inside a new array.
 *
 * @function pair
 * @category utility
 * @param {*} source - The source object.
 * @param {*} source - The source object.
 * @returns {Array} The array which holds the pair.
 *
 * @example
 * import { pair, assert } from 'Acid';
 * assert(air(1, 2), [1, 2]);
 */
export function pair(argument1, argument2) {
	return [argument1, argument2];
}
