/**
 * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
 *
 * @function asyncEach
 * @type {Function}
 * @category Array
 * @async
 * @param {Array} source - Array of async functions that will be looped through.
 * Functions are given the supplied object, index, the calling array, and the array length.
 * @param {*} firstArgument - The first argument given to each function.
 * @returns {object} - The originally given array.
 * @test
 * (async () => {
 *   const tempList = [];
 *   await asyncEach([async (item, index) => {
 *     tempList.push(index);
 *   }, async (item, index) => {
 *     tempList.push(index);
 *   }], {a:1});
 *   return assert(tempList, [0, 1]);
 * });
 * @example
 * asyncEach([async (item, index) =>{
 *  console.log(item, index);
 * }, async (item) =>{
 *  console.log(item, index);
 * }], {a:1});
 * // {a:1} 0
 * // {a:1} 1
 */
export const asyncEach = async (source, firstArgument) => {
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		const item = source[index];
		await item(firstArgument, index, source, arrayLength);
	}
	return source;
};

