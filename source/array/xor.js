import { eachArray } from './each.js';
import { eachObject } from '../object/each.js';
import { difference } from './difference.js';
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
 * xor([2, 1], [2, 3, 5], [6]);
 * // => [1, 3, 5, 6]
 */
export function xor(...sources) {
	const xorMap = {};
	const xored = [];
	const sourcesLength = sources.length;
	if (sourcesLength === 2) {
		return difference(sources[0], sources[1]);
	}
	eachArray(sources, (currentArray, parentIndex) => {
		eachArray(currentArray, (child, childIndex) => {
			const childType = typeof child;
			let parentType = xorMap[childType];
			if (!parentType) {
				parentType = xorMap[childType] = {};
			}
			let childRoot = parentType[child];
			if (!childRoot) {
				childRoot = parentType[child] = {
					count: 1,
					parentIndex,
					child
				};
			} else if (childRoot.parentIndex === parentIndex) {
				return;
			} else {
				childRoot.count++;
			}
		});
	});
	eachObject(xorMap, (parentType) => {
		eachObject(parentType, (item) => {
			if (item.count === 1) {
				xored.push(item.child);
			}
		});
	});
	return xored;
}

