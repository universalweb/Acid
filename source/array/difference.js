import { eachArray } from './each.js';
import { eachObject } from '../object/each.js';
import { flattenDeep } from './flattenDeep.js';
/**
 * Checks for primitive differences between a source array and other arrays, then returns a new array containing those differences.
 *
 * @function difference
 * @category array
 * @type {Function}
 * @param {Array} source - Source array.
 * @param {...Array} compare - Array(s) source array is compared against.
 * @returns {Array} - An array which contains the differences between the source and compare array.
 *
 * @example
 * import { difference, assert } from './Acid.js';
 * assert(difference([1, 2, 3], [1, 2]));
 */
export function difference(...sources) {
	const differencesMap = {};
	const differences = [];
	const sourcesLength = sources.length;
	if (sourcesLength === 2) {
		return difference(sources[0], sources[1]);
	}
	eachArray(sources, (currentArray, parentIndex) => {
		eachArray(currentArray, (child, childIndex) => {
			const childType = typeof child;
			let parentType = differencesMap[childType];
			if (!parentType) {
				parentType = differencesMap[childType] = {};
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
	eachObject(differencesMap, (parentType) => {
		eachObject(parentType, (item) => {
			if (item.count === 1 && item.parentIndex === 0) {
				differences.push(item.child);
			}
		});
	});
	return differences;
}

