import namespace from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Sorts an array in place using a key from newest to oldest.
  *
  * @function sortNewest
  * @category collection
  * @type {Function}
  * @param {Array} collection - Collection to be sorted.
  * @param {string} propertyName - The property name to sort by based on it's value.
  * @param {boolean} [pureMode = true] - Mutates the source array. If set to false creates a new array.
  * @returns {Array} - The sorted array and or a clone of the array sorted.
  *
  * @example
  * sortNewest([{id: 1}, {id: 0}], 'id');
  * // => [{id: 1}, {id: 0}]
*/
export const sortNewest = (collection, propertyName, pureMode = true) => {
	const array = (pureMode) ? collection : [...collection];
	return array.sort((previous, next) => {
		if (!next[propertyName]) {
			return -1;
		} else if (!previous[propertyName]) {
			return 1;
		} else if (previous[propertyName] < next[propertyName]) {
			return 1;
		} else if (previous[propertyName] > next[propertyName]) {
			return -1;
		}
		return 0;
	});
};
/**
  * Sorts an array in place using a key from newest to oldest and returns the latest. Does not mutate the array.
  *
  * @function getNewest
  * @category collection
  * @type {Function}
  * @param {Array} collection - Collection to be sorted.
  * @param {string} propertyName - The property name to sort by based on it's value.
  * @returns {Object} - The newest object in the collection.
  *
  * @example
  * getNewest([{id: 1}, {id: 0}], 'id');
  * // => {id: 1}
*/
export const getNewest = (collection, propertyName) => {
	return sortNewest(collection, propertyName, false)[0];
};
assign(namespace, {
	getNewest,
	sortNewest,
});
