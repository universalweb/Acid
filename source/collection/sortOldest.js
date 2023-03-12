/**
  * Sorts an array in place using a key from oldest to newest.
  *
  * @function sortOldest
  * @category collection
  * @type {Function}
  * @param {Array} collection - Collection to be sorted.
  * @param {string} propertyName - The property name to sort by based on it's value.
  * @param {boolean} [pureMode = true] - Mutates the source array. If set to false creates a new array.
  * @returns {Array} - The sorted array and or a clone of the array sorted.
  *
  * @example
  * sortOldest([{id: 1}, {id: 0}], 'id');
  * // => [{id: 0}, {id: 1}]
*/
export function sortOldestFilter(previous, next, propertyName) {
	if (!next[propertyName]) {
		return 1;
	} else if (!previous[propertyName]) {
		return -1;
	} else if (previous[propertyName] < next[propertyName]) {
		return -1;
	} else if (previous[propertyName] > next[propertyName]) {
		return 1;
	}
	return 0;
}
export function sortOldest(collection, key = 'id', pureMode = true) {
	const source = (pureMode) ? collection : [...collection];
	return source.sort((previous, next) => {
		return sortOldestFilter(previous, next, key);
	});
}
