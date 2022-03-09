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
export function eachArray(source, iteratee, thisBind) {
	const arrayLength = source.length;
	for (let index = 0;index < arrayLength;index++) {
		iteratee(source[index], index, source, arrayLength, thisBind);
	}
	return source;
}
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
export function eachArrayRight(source, iteratee, thisBind) {
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		iteratee(source[index], index, source, arrayLength, thisBind);
	}
	return source;
}
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
export function whileArray(source, iteratee, thisBind) {
	const arrayLength = source.length;
	for (let index = 0;index < arrayLength;index++) {
		if (iteratee(source[index], index, source, arrayLength, thisBind) === false) {
			return false;
		}
	}
	return true;
}
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
export function filterArray(source, iteratee, results = [], thisBind) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		if (iteratee(item, index, results, arrayOriginal, arrayLength, thisBind) === true) {
			results.push(item);
		}
	});
	return results;
}
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
export function mapArray(source, iteratee, results = [], thisBind) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		results[index] = iteratee(item, index, results, arrayOriginal, arrayLength, thisBind);
	});
	return results;
}
/**
  * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array in reverse.
  *
  * @function mapArrayRight
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results. Default value is a new empty array.
  * @returns {Object} - An array of the same calling array's type.
  *
  * @example
  * mapArrayRight([1, 2, 3], (item) => {
  *   return item * 2;
  * });
  * // => [6, 4, 2]
*/
export function mapArrayRight(source, iteratee, results = [], thisBind) {
	let trueIndex = 0;
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		results[trueIndex] = iteratee(source[index], index, source, arrayLength, thisBind);
		trueIndex++;
	}
	return results;
}
/**
  * Iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
  *
  * @function compactMapArray
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results. Default value is a new empty array.
  * @returns {Object} - An array with mapped properties that are not null or undefined.
  *
  * @example
  * compactMapArray([null, 2, 3], (item) => {
  *   return item;
  * });
  * // => [2, 3]
*/
export function compactMapArray(source, iteratee, results = [], thisBind) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		const returned = iteratee(item, index, results, arrayOriginal, arrayLength, thisBind);
		if (hasValue(returned)) {
			results.push(returned);
		}
	});
	return results;
}
/**
  * Iterates through the given and creates an object with all elements that pass the test implemented by the iteratee.
  *
  * @function mapWhile
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results. Default value is a new empty array.
  * @returns {Array} - An array with properties that passed the test.
  *
  * @example
  * mapWhile([true, true, false], (item) => {
  *   return item;
  * });
  * // => [true, true]
*/
export function mapWhile(source, iteratee, results = [], thisBind) {
	const arrayLength = source.length;
	for (let index = 0;index < arrayLength;index++) {
		const item = source[index];
		const returned = iteratee(item, index, results, source, arrayLength, thisBind);
		if (returned === false) {
			break;
		}
		results[index] = item;
	}
	return results;
}
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
export function whileEachArray(source, iteratee, thisBind) {
	let index = 0;
	while (index < source.length) {
		iteratee(source[index], index, source, source.length, thisBind);
		index++;
	}
	return source;
}
/**
  * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
  * Re-checks the length each loop.
  *
  * @function whileMapArray
  * @category array
  * @type {Function}
  * @param {Array} source - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results. Default value is a new empty array.
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
export function whileMapArray(source, iteratee, results = [], thisBind) {
	let index = 0;
	while (index < source.length) {
		results.push(iteratee(source[index], index, source, source.length, thisBind));
		index++;
	}
	return source;
}
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
  * @param {Array} [results = []] - Array that will be used to assign results. Default value is a new empty array.
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
export function whileCompactMap(source, iteratee, results = [], thisBind) {
	let index = 0;
	while (index < source.length) {
		const result = results.push(iteratee(source[index], index, source, source.length, thisBind));
		index++;
		if (hasValue(result)) {
			results.push(result);
		}
	}
	return source;
}

