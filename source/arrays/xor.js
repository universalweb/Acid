import { construct } from '../classes/construct.js';
import { difference } from './difference.js';
import { eachArray } from './each.js';
import { forEach } from '../utilities/forEach.js';
/**
 * Creates an array that is the symmetric difference of the provided arrays.
 *
 * @function xor
 * @category array
 * @type {Function}
 * @param {...Array} sources - The array(s) to be filtered.
 * @returns {Array|undefined} - The filtered array.
 *
 * @example
 * xor([2, 1], [2, 3, 5], [6]);
 * // => [1, 3, 5, 6]
 */
export function xor(...sources) {
	const xorMap = construct(Map);
	const xored = [];
	const sourcesLength = sources.length;
	if (sourcesLength === 2) {
		return difference(sources[0], sources[1]);
	}
	eachArray(sources, (currentArray, parentIndex) => {
		eachArray(currentArray, (child, childIndex) => {
			let childRoot = xorMap.get(child);
			if (!childRoot) {
				childRoot = {
					count: 1,
					parentIndex,
					child
				};
				xorMap.set(child, childRoot);
			} else if (childRoot.parentIndex === parentIndex) {
				return;
			} else {
				childRoot.count++;
			}
		});
	});
	forEach(xorMap, (item) => {
		if (item.count === 1) {
			xored.push(item.child);
		}
	});
	return xored;
}

