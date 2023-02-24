/**
   * Perform alphabetical sort on a collection with the provided key name. Mutates the array.
   *
   * @function sortAlphabetical
   * @category collection
   * @type {Function}
   * @param {Array} collection - Collection to be sorted.
   * @param {string} propertyName - Name of property to compare.
   * @returns {Array} - The sorted array.
   *
   * @example
   * sortAlphabetical([{letter:'a'}, {letter:'f'}, {letter:'c'}], 'letter');
   * // => [{"letter":"a"},{"letter":"c"},{"letter":"f"}]
 */
export function sortAlphabetical(collection, propertyName) {
	return collection.sort((current, next) => {
		const currentKey = current[propertyName];
		const nextKey = next[propertyName];
		if (currentKey < nextKey) {
			return -1;
		} else if (currentKey > nextKey) {
			return 1;
		}
		return 0;
	});
}

