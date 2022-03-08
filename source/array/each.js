import { hasValue } from '../internal/is';
/**
  * Iterates through the given array.
  *
  * @function eachArray
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} - The originally given array.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   eachArray([1, 2, 3], (item) => {
  *     tempList.push(item);
  *   });
  *   return assert(tempList, [1, 2, 3]);
  * });
  *
  * @example
  * eachArray([1, 2, 3], (item) => {
  *   console.log(item);
  * });
  * // => [1, 2, 3]
*/
export const eachArray = (source, iteratee) => {
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		iteratee(source[index], index, source, arrayLength);
	}
	return source;
};
/**
  * Iterates through the given array in reverse.
  *
  * @function eachArrayRight
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} - The originally given array.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   eachArrayRight([1, 2, 3], (item) => {
  *     tempList.push(item);
  *   });
  *   return assert(tempList, [3, 2, 1]);
  * });
  *
  * @example
  * eachArrayRight([1, 2, 3], (item) => {
  *   console.log(item);
  * });
  * // => [1, 2, 3]
*/
export const eachArrayRight = (source, iteratee) => {
	const arrayLength = source.length;
	for (let index = arrayLength - 1; index >= 0; index--) {
		iteratee(source[index], index, source, arrayLength);
	}
	return source;
};
/**
  * Iterates through the given array while the iteratee returns true.
  *
  * @function whileArray
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
  * @returns {boolean} - Returns true if all returns are true or false if one value returns false.
  *
  * @example
  * whileArray([true, true, false], (item) => {
  *   return item;
  * });
  * // => false
*/
export const whileArray = (source, iteratee) => {
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		if (iteratee(source[index], index, source, arrayLength) === false) {
			return false;
		}
	}
	return true;
};
/**
  * Iterates through the calling array and creates an array with all elements that pass the test implemented by the iteratee.
  *
  * @function filterArray
  * @category array
  * @type {Function}
  * @category array
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created object, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} - An array with properties that passed the test.
  *
  * @example
  * filterArray([false, true, true], (item) => {
  *   return item;
  * });
  * // => [true, true]
*/
export const filterArray = (source, iteratee, results = []) => {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		if (iteratee(item, index, results, arrayOriginal, arrayLength) === true) {
			results.push(item);
		}
	});
	return results;
};
const generateMap = (callable) => {
	return (source, iteratee, results = []) => {
		callable(source, (item, index, arrayOriginal, arrayLength) => {
			results[index] = iteratee(item, index, results, arrayOriginal, arrayLength);
		});
		return results;
	};
};
/**
  * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
  *
  * @function mapArray
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} - An array of the same calling array's type.
  *
  * @example
  * mapArray([1, 2, 3], (item) => {
  *   return item * 2;
  * });
  * // => [2, 4, 6]
*/
export const mapArray = generateMap(eachArray);
/**
  * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array in reverse.
  *
  * @function mapArrayRight
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} - An array of the same calling array's type.
  *
  * @example
  * mapArrayRight([1, 2, 3], (item) => {
  *   return item * 2;
  * });
  * // => [6, 4, 2]
*/
export const mapArrayRight = (source, iteratee, results = []) => {
	let trueIndex = 0;
	const arrayLength = source.length;
	for (let index = arrayLength - 1; index >= 0; index--) {
		results[trueIndex] = iteratee(source[index], index, source, arrayLength);
		trueIndex++;
	}
	return results;
};
/**
  * Iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
  *
  * @function compactMapArray
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} - An array with mapped properties that are not null or undefined.
  *
  * @example
  * compactMapArray([null, 2, 3], (item) => {
  *   return item;
  * });
  * // => [2, 3]
*/
export const compactMapArray = (source, iteratee, results = []) => {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		const returned = iteratee(item, index, results, arrayOriginal, arrayLength);
		if (hasValue(returned)) {
			results.push(returned);
		}
	});
	return results;
};
/**
  * Iterates through the given and creates an object with all elements that pass the test implemented by the iteratee.
  *
  * @function mapWhile
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Array} - An array with properties that passed the test.
  *
  * @example
  * mapWhile([true, true, false], (item) => {
  *   return item;
  * });
  * // => [true, true]
*/
export const mapWhile = (source, iteratee, results = []) => {
	const arrayLength = source.length;
	for (let index = 0;index < arrayLength;index++) {
		const item = source[index];
		const returned = iteratee(item, index, results, source, arrayLength);
		if (returned === false) {
			break;
		}
		results[index] = item;
	}
	return results;
};
/**
  * Iterates through the given array but re-checks the length each loop. Usefull while mutating the same array being looped over.
  *
  * @function whileEachArray
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} - The originally given array.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   whileEachArray([1, 2, 3], (item) => {
  *     tempList.push(item);
  *   });
  *   return assert(tempList, [1, 2, 3]);
  * });
  *
  * @example
  * whileEachArray([1, 2, 3], (item) => {
  *   console.log(item);
  * });
  * // => [1, 2, 3]
*/
export const whileEachArray = (source, iteratee) => {
	let index = 0;
	while (index < source.length) {
		iteratee(source[index], index, source, source.length);
		index++;
	}
	return source;
};
/**
  * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
  * Re-checks the length each loop.
  *
  * @function whileMapArray
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} - The originally given array.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   whileMapArray([1, 2, 3, false, null], (item) => {
  *     tempList.push(item);
  *   });
  *   return assert(tempList, [1, 2, 3, false, null]);
  * });
  *
  * @example
  * whileMapArray([1, 2, 3, false, null], (item) => {
  *   return item;
  * });
  * // => [1, 2, 3, false, null]
*/
export const whileMapArray = (source, iteratee, results = []) => {
	let index = 0;
	while (index < source.length) {
		results.push(iteratee(source[index], index, source, source.length));
		index++;
	}
	return source;
};
/**
  * Iterates through the calling object and creates a new object based on the calling object's type with the results,
  * (excludes results which are null or undefined), of the iteratee on every element in the calling object.
  * Re-checks the length each loop.
  *
  * @function whileCompactMap
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} - The originally given array.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   whileCompactMap([1, 2, 3, false, undefined, null], (item) => {
  *     return item;
  *   });
  *   return assert(tempList, [1, 2, 3, false]);
  * });
  *
  * @example
  * whileCompactMap([1, 2, 3, false, undefined, null], (item) => {
  *   return item;
  * });
  * // => [1, 2, 3, false]
*/
export const whileCompactMap = (source, iteratee, results = []) => {
	let index = 0;
	while (index < source.length) {
		const result = results.push(iteratee(source[index], index, source, source.length));
		index++;
		if (hasValue(result)) {
			results.push(result);
		}
	}
	return source;
};

