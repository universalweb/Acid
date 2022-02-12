import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Asynchronously Iterates through the given array. Each async function is awaited as to ensure synchronous order.
  *
  * @function eachAsync
  * @category array
  * @type {Function}
  * @async
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} - The originally given array.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   await eachAsync([1, 2, 3], async (item) => {
  *     tempList.push(item);
  *   });
  *   return assert(tempList, [1, 2, 3]);
  * });
  *
  * @example
  * eachAsync([3,4], async (item, index) =>{
  *  console.log(item, index);
  * });
  * // 3 0
  * // 4 1
*/
export const eachAsync = async (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = 0; index < arrayLength; index++) {
    await iteratee(callingArray[index], index, callingArray, arrayLength);
  }
  return callingArray;
};
/**
  * Asynchronously Iterates through the given array in reverse. Each async function is awaited as to ensure synchronous order.
  *
  * @function eachAsyncRight
  * @category array
  * @type {Function}
  * @async
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} - The originally given array.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   await eachAsyncRight([1, 2, 3], async (item) => {
  *     tempList.push(item);
  *   });
  *   return assert(tempList, [3, 2, 1]);
  * });
  *
  * @example
  * eachAsyncRight([3,4], async (item, index) =>{
  *  console.log(item, index);
  * });
  * // 4 0
  * // 3 1
*/
export const eachAsyncRight = async (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    await iteratee(callingArray[index], index, callingArray, arrayLength);
  }
  return callingArray;
};
assign(acid, {
  eachAsync,
  eachAsyncRight,
});
