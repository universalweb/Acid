import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
/**
  * Iterates through the given array.
  *
  * @function eachArray
  * @category array
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
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
export const eachArray = (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = 0; index < arrayLength; index++) {
    iteratee(callingArray[index], index, callingArray, arrayLength);
  }
  return callingArray;
};
/**
  * Iterates through the given array in reverse.
  *
  * @function eachArrayRight
  * @category array
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
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
export const eachArrayRight = (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    iteratee(callingArray[index], index, callingArray, arrayLength);
  }
  return callingArray;
};
/**
  * Iterates through the given array while the iteratee returns true.
  *
  * @function whileArray
  * @category array
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
  * @returns {boolean} - Returns the true if all values returned are true or false if one value returns false.
  *
  * @example
  * whileArray([true, true, false], (item) => {
  *   return item;
  * });
  * // => false
*/
export const whileArray = (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = 0; index < arrayLength; index++) {
    if (iteratee(callingArray[index], index, callingArray, arrayLength) === false) {
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
  * @param {Array} callingArray - Array that will be looped through.
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
export const filterArray = (callingArray, iteratee, results = []) => {
  eachArray(callingArray, (item, index, arrayOriginal, arrayLength) => {
    if (iteratee(item, index, results, arrayOriginal, arrayLength) === true) {
      results.push(item);
    }
  });
  return results;
};
const generateMap = (callable) => {
  return (callingArray, iteratee, results = []) => {
    callable(callingArray, (item, index, arrayOriginal, arrayLength) => {
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
  * @param {Array} callingArray - Array that will be looped through.
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
  * @param {Array} callingArray - Array that will be looped through.
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
export const mapArrayRight = (callingArray, iteratee, results = []) => {
  let trueIndex = 0;
  const arrayLength = callingArray.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    results[trueIndex] = iteratee(callingArray[index], index, callingArray, arrayLength);
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
  * @param {Array} callingArray - Array that will be looped through.
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
export const compactMapArray = (callingArray, iteratee, results = []) => {
  eachArray(callingArray, (item, index, arrayOriginal, arrayLength) => {
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
  * @param {Array} callingArray - Array that will be looped through.
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
export const mapWhile = (callingArray, iteratee, results = []) => {
  const arrayLength = callingArray.length;
  for (let index = 0; index < arrayLength; index++) {
    const returned = iteratee(callingArray[index], index, results, callingArray, arrayLength);
    if (returned === false) {
      break;
    }
    results[index] = returned;
  }
  return results;
};
assign(acid, {
  compactMapArray,
  eachArray,
  eachArrayRight,
  filterArray,
  mapArray,
  mapArrayRight,
  mapWhile,
  whileArray,
});
