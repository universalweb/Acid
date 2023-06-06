import { mapArray } from '../arrays/map.js';
/**
 * Returns an array of the plucked values from the collection.
 *
 * @function pluck
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array used to determine what value to be plucked.
 * @param {String} pluckThis - Property name.
 * @returns {Array} - An array of plucked values.
 *
 * @example
 * pluck([{lucy: 'Ants moving around on the walls.'}, {lucy: 'In the sky with diamonds.'}], 'lucy');
 * // => ['Ants moving around on the walls.', 'In the sky with diamonds.']
 */
export function pluck(collection, pluckThis) {
	return mapArray(collection, (item) => {
		const result = item[pluckThis];
		return result;
	});
}

