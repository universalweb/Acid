import { eachArray } from './each.js';
import { forEach } from '../utility/forEach.js';
import { flattenDeep } from './flattenDeep.js';
import { construct } from '../class/construct.js';
/**
 * Checks for primitive differences between a source array to other arrays, then returns a new array containing those differences.
 *
 * @function difference
 * @category array
 * @type {Function}
 * @param {Array} source - Source array.
 * @param {...Array} compare - Array(s) source array is compared against.
 * @returns {Array} - An array which contains the differences between the source and compare array.
 *
 * @example
 * import { difference, assert } from 'Acid';
 * assert(difference([1, 2, 3], [1, 2]));
 */
export function difference(...sources) {
	const differencesMap = construct(Map);
	const differences = [];
	eachArray(sources, (currentArray, parentIndex) => {
		eachArray(currentArray, (child, childIndex) => {
			let childRoot = differencesMap.get(child);
			if (!childRoot) {
				childRoot = {
					count: 1,
					parentIndex,
					child
				};
				differencesMap.set(child, childRoot);
			} else if (childRoot.parentIndex === parentIndex) {
				return;
			} else {
				childRoot.count++;
			}
		});
	});
	forEach(differencesMap, (item) => {
		if (item.count === 1 && item.parentIndex === 0) {
			differences.push(item.child);
		}
	});
	return differences;
}

