import { eachArray } from './each';
import { unique } from './unique';
/**
  * Creates an array that is the symmetric difference of the provided arrays.
  *
  * @function xor
  * @category array
  * @type {Function}
  * @param {...Array} arrays - The array(s) to be filtered.
  * @returns {Array} - The filtered array.
  *
  * @example
  * xor([2, 1], [2, 3]);
  * // => [1, 3]
*/
export const xor = (...arrays) => {
	const xored = [];
	eachArray(arrays, (array) => {
		eachArray(unique(array), (item) => {
			if (xored.includes(item)) {
				xored.splice(xored.indexOf(item), 1);
			} else {
				xored.push(item);
			}
		});
	});
	return xored;
};

