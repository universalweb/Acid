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
function sortNewestFilter(previous, next, propertyName) {
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
}
export function sortNewest(collection, propertyName, pureMode = true) {
	const array = (pureMode) ? collection : [...collection];
	return array.sort((previous, next) => {
		return sortNewestFilter(previous, next, propertyName);
	});
}

