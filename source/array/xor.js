import { eachArray } from './each.js';
import { each } from '../utility/each.js';
import { difference } from './difference.js';
import { construct } from '../class/construct.js';
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
	each(xorMap, (item) => {
		if (item.count === 1) {
			xored.push(item.child);
		}
	});
	return xored;
}

