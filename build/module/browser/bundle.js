/**
 * Chunks an array according to a user defined number.
 *
 * @function chunk
 * @category array
 * @type {Function}
 * @param {Array} array - Array to be chunked.
 * @param {Number} size - Number which determines the size of each chunk.
 * @returns {Array} - A chunked version of the source array.
 *
 * @example
 * import { chunk, assert } from '@universalweb/acid';
 * assert(chunk([1,2,3], 1), [[1],[2],[3]]);
 */
function chunk(array, size = 1) {
	const chunked = [];
	let index = 0;
	array.forEach((item, key) => {
		if (!(key % size)) {
			chunked.push([]);
			if (key) {
				index++;
			}
		}
		chunked[index].push(item);
	});
	return chunked;
}

/**
 * Clears the values out of an array.
 *
 * @function clearArray
 * @category array
 * @type {Function}
 * @param {Array} source - Takes an array to be emptied.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { clearArray, assert } from '@universalweb/acid';
 * assert(clearArray([1,'B', 'Cat']), []);
 */
function clearArray(source) {
	source.length = 0;
	return source;
}

/**
 * Clone an array (uses .slice()) and assign the source arrays values to the new array.
 *
 * @function cloneArray
 * @category array
 * @type {Function}
 * @param {Array} source - The array to be quick cloned.
 * @returns {Array} - The newly cloned array with assigned items.
 *
 * @example
 * import { cloneArray, assert } from '@universalweb/acid';
 * assert(cloneArray([1,'B', 'Cat']), [1, 'B', 'Cat']);
 */
function cloneArray(source) {
	return source.slice();
}

/** Checks if the value is undefined.
 *
 * @function isUndefined
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isUndefined, assert } from '@universalweb/acid';
 * assert(isUndefined(undefined), true);
 */
function isUndefined(source) {
	return source === undefined;
}

/**
 * Checks if the value has length greater than 0.
 *
 * @function hasLength
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { hasLength, assert } from '@universalweb/acid';
 * assert(hasLength([1]), true);
 */
function hasLength(source) {
	return Boolean(source.length);
}

/**
 * Checks if the value is null.
 *
 * @function isNull
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNull, assert } from '@universalweb/acid';
 * assert(isNull(null), true);
 */
function isNull(source) {
	return source === null;
}

/**
 * Checks if the value is not null or undefined.
 *
 * @function hasValue
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { hasValue, assert } from '@universalweb/acid';
 * assert(hasValue(1), true);
 */
function hasValue(source) {
	return !isUndefined(source) && !isNull(source);
}

/**
 * A simple function which returns the value it's given.
 *
 * @function returnValue
 * @category utility
 * @param {*} source - The source object.
 * @returns {source} The source object.
 */
function returnValue(source) {
	return source;
}

/**
 * Iterates through the given array.
 *
 * @function eachArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, array length, and additionalArg.
 * @param {*} thisBind - Iteratee called with thisBind as this.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - The originally given array.
 *
 * @example
 * import { eachArray, assert } from '@universalweb/acid';
 * const list = [];
 * eachArray([1, 2, 3], (item, index) => {
 *   list[index] = item;
 * });
 * assert(list, [1, 2, 3]);
 */
function eachArray(source, iteratee, thisBind, additionalArg) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	if (hasValue(thisBind)) {
		for (let index = 0; index < arrayLength; index++) {
			iteratee.call(thisBind, source[index], index, source, arrayLength, additionalArg);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			iteratee(source[index], index, source, arrayLength, additionalArg);
		}
	}
	return source;
}

/**
 * Iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
 *
 * @function compactMapArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {Array = []} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array} - An array with mapped properties that are not null or undefined.
 *
 * @example
 * import { compactMapArray, assert } from '@universalweb/acid';
 * assert(compactMapArray([null, 2, 3], (item) => {
 *   return item;
 * }), [2, 3]);
 */
function compactMapArray(source, iteratee = returnValue, results = [], thisCall, additionalArg) {
	if (hasValue(thisCall)) {
		eachArray(source, (item, index, arrayOriginal, arrayLength) => {
			const returned = iteratee.call(thisCall, item, index, results, arrayOriginal, arrayLength, additionalArg);
			if (hasValue(returned)) {
				results.push(returned);
			}
		});
	} else {
		eachArray(source, (item, index, arrayOriginal, arrayLength) => {
			const returned = iteratee(item, index, results, arrayOriginal, arrayLength, thisCall, additionalArg);
			if (hasValue(returned)) {
				results.push(returned);
			}
		});
	}
	return results;
}

/**
 * Asynchronously Iterates through the given array. Each async function is awaited as to ensure synchronous order.
 *
 * @function eachAsyncArray
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, array length, and additionalArg.
 * @param {*} thisCall - Iteratee called with thisCall as this.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - Returns source the originally given array.
 *
 * @example
 * import { eachAsyncArray, assert } from '@universalweb/acid';
 * const tempList = [];
 * await eachAsyncArray([1, 2, 3], async (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [1, 2, 3]);
 */
async function eachAsyncArray(source, iteratee, thisCall, additionalArg) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	if (hasValue(thisCall)) {
		for (let index = 0; index < arrayLength; index++) {
			await iteratee.call(thisCall, source[index], index, source, arrayLength, additionalArg);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			await iteratee(source[index], index, source, arrayLength, additionalArg);
		}
	}
	return source;
}

/**
 * Asynchronously iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
 *
 * @function compactMapAsyncArray
 * @type {Function}
 * @category array
 * @async
 * @param {Array} source - Array to be compacted.
 * @param {Function} iteratee - Iteratee to be performed on array.
 * @returns {Array} - Array values after being put through an iterator.
 *
 * @example
 * import { compactMapAsyncArray, assert } from '@universalweb/acid';
 * assert(await compactMapAsyncArray([1, 2, 3, null], async (item) => item), [1, 2, 3]);
 */
async function compactMapAsyncArray(source, iteratee = returnValue) {
	const results = [];
	await eachAsyncArray(source, async (item, index, arrayLength) => {
		const result = await iteratee(item, index, results, arrayLength);
		if (hasValue(result)) {
			results.push(result);
		}
	});
	return results;
}

/**
 * Checks if a number is negative & returns true or false.
 *
 * @function isNegative
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNegative, assert } from '@universalweb/acid';
 * assert(isNegative(-1), true);
 */
const { sign: sign$1 } = Math;
function isNegative(source) {
	return sign$1(source) === -1;
}

function rangeUp(start, end, step, sourceArray) {
	let position = start;
	while (position < end) {
		sourceArray.push(position);
		position += step;
	}
	return sourceArray;
}
function rangeDown(start, end, step, sourceArray) {
	let position = start;
	while (position > end) {
		sourceArray.push(position);
		position -= step;
	}
	return sourceArray;
}
/**
 * Create a numbered list of integers.
 *
 * @function range
 * @category array
 * @type {Function}
 * @param {Number} start - Value which determines the start of the range.
 * @param {Number} end - Value which determines the end of the range.
 * @param {Number} step - Value used to step between integers.
 * @returns {Array} - An array of integers.
 *
 * @example
 * import { range, assert } from '@universalweb/acid';
 * assert(range(0, 30, 5), [0, 5, 10, 15, 20, 25]);
 */
function range(start, end, step = 1, sourceArray = []) {
	if (isNegative(step)) {
		return sourceArray;
	}
	if (start < end) {
		return rangeUp(start, end, step, sourceArray);
	} else {
		return rangeDown(start, end, step, sourceArray);
	}
}

/**
 * Iterates through the given array while the iteratee returns true else the loop exits & returns false.
 *
 * @function everyArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - Returns true if all returns are true or false if one value returns false.
 *
 * @example
 * import { everyArray, assert } from '@universalweb/acid';
 * assert(everyArray([true, true, false], (item, index, source, sourceLength, additionalArgument) => {
 *   return item;
 * }), false);
 * assert(everyArray([true, true, true], (item, index, source, sourceLength, additionalArgument) => {
 *   return item;
 * }), true);
 */
function returnBoolean(value) {
	return Boolean(value);
}
function everyArray(source, iteratee = returnBoolean, additionalArgument) {
	if (!source) {
		return;
	}
	const sourceLength = source.length;
	if (!sourceLength) {
		return;
	}
	for (let index = 0; index < sourceLength; index++) {
		if (iteratee(source[index], index, source, sourceLength, additionalArgument) === false) {
			return false;
		}
	}
	return true;
}

function isTypeFactory(method) {
	return function(primarySource, ...otherSources) {
		if (otherSources?.length) {
			return method(primarySource) && everyArray(otherSources, method);
		}
		return method(primarySource);
	};
}

const isArrayNative = Array.isArray;
/**
 * Checks if the value is an array. This references Array.isArray.
 *
 * @function isArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArray, assert } from '@universalweb/acid';
 * assert(isArray([]), true);
 * assert(isArray(2), false);
 */
const isArray = isTypeFactory(isArrayNative);
/**
 * Checks if the value is not an array. This references Array.isArray.
 *
 * @function isNotArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotArray, assert } from '@universalweb/acid';
 * assert(isNotArray([]), false);
 * assert(isNotArray(2), true);
 */
function isNotArray(source, ...args) {
	return !isArray(source, ...args);
}

/**
 * A function which acts like the "new" operator and can pass arguments. This is a safe version of the original which will error if given undefined
 * This is useful when working with classes and prefering to avoid the new operator and it's potential side effects.
 *
 * @function construct
 * @category class
 * @param {Function} target - The target function or class.
 * @param {Array} [argumentsList =[]] - An array-like object specifying the arguments with which target should be called. Default value is a new empty array.
 * @param {Array} newTarget - The constructor whose prototype should be used. See also the new.target operator. If newTarget is not present, its value defaults to target.
 * @returns {*} - A new instance of target (or newTarget, if present), initialized by target as a constructor with the given argumentsList.
 *
 * @example
 * import { construct, assert } from '@universalweb/acid';
 * class Greeter {
 *   constructor(name) {
 *     this.name = name;
 *   }
 * }
 * const greeter = construct(Greeter, ['world']);
 * assert(greeter.name, 'world');
 */
const reflectConstruct = Reflect.construct;
function construct(target, argumentsList = [], newTarget) {
	const args = (isArray(argumentsList)) ? argumentsList : [argumentsList];
	if (newTarget) {
		return reflectConstruct(target, args, newTarget);
	}
	return reflectConstruct(target, args);
}

/**
 * Ensures the source is an array if not the source is wrapped in a array or an empty array is returned.
 *
 * @function ensureArray
 * @category array
 * @type {Function}
 * @param {*} source - Object to be checked.
 * @returns {Array} - Returns an array.
 *
 * @example
 * import { ensureArray, assert } from '@universalweb/acid';
 * assert(ensureArray('test'), ['test']);
 */
function ensureArray(source) {
	return (isArray(source) && source) || (hasValue(source) && [source]) || [];
}

/**
 * Flattens an array to a single level.
 *
 * @function flattenDeep
 * @type {Function}
 * @category array
 * @param {Array} source - Array to flatten.
 * @returns {Array} - Returns a completely flattened array.
 *
 * @example
 * import { flattenDeep, assert } from '@universalweb/acid';
 * assert(flattenDeep([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
 */
function flattenDeep(source) {
	return source.flat(Infinity);
}

function forEach(source, callback) {
	source.forEach(callback);
	return source;
}

/**
 * Checks for primitive differences between a source array to other arrays, then returns a new array containing those differences.
 *
 * @function difference
 * @category array
 * @type {Function}
 * @param {...Array} sources - List of arrays to be compared.
 * @returns {Array|undefined} - An array which contains the differences between the source and compare array.
 *
 * @example
 * import { difference, assert } from '@universalweb/acid';
 * assert(difference([1, 2, 3], [1, 2]), [3]);
 */
function difference(...sources) {
	const differencesMap = construct(Map);
	const differences = [];
	eachArray(sources, (currentArray, parentIndex) => {
		eachArray(currentArray, (child, childIndex) => {
			let childRoot = differencesMap.get(child);
			if (!childRoot) {
				childRoot = {
					count: 1,
					parentIndex,
					child
				};
				differencesMap.set(child, childRoot);
			} else if (childRoot.parentIndex === parentIndex) {
				return;
			} else {
				childRoot.count++;
			}
		});
	});
	forEach(differencesMap, (item) => {
		if (item.count === 1 && item.parentIndex === 0) {
			differences.push(item.child);
		}
	});
	return differences;
}

/**
 * Removes all items from an array after a specified index.
 *
 * @function drop
 * @category array
 * @type {Function}
 * @param {Array} array - Source array.
 * @param {Number} amount - Amount of items to drop from the array.
 * @param {Number} [upTo = array.length] - Index to stop at.
 * @returns {Array} - An array with all values removed after a user defined index.
 *
 * @example
 * import { drop, assert } from '@universalweb/acid';
 * assert(drop([1, 2, 3]), [2, 3]);
 * assert(drop([1, 2, 3], 2), [3]);
 */
function drop(array, amount = 1, upTo = array.length) {
	return array.splice(amount, upTo);
}

/**
 * Removes all items from an array before a specified index.
 *
 * @function dropRight
 * @type {Function}
 * @category array
 * @param {Array} array - Source array.
 * @param {Number} amount - Amount of items to drop from the array.
 * @param {Number} [upTo = array.length] - Index to stop at.
 * @returns {Array} - An array with all values removed before a user defined index.
 *
 * @example
 * import { dropRight, assert } from '@universalweb/acid';
 * assert(dropRight([1, 2, 3]), [1, 2]);
 * assert(dropRight([1, 2, 3], 2), [1]);
 */
const dropRight = (array, amount = 1, upTo = array.length) => {
	return drop(array, 0, upTo - amount);
};

/**
 * Iterates through the given array in reverse.
 *
 * @function eachRight
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - The originally given array.
 *
 * @example
 * import { eachRight, assert } from '@universalweb/acid';
 * const tempList = [];
 * eachRight([1, 2, 3], (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [3, 2, 1]);
 */
function eachRight(source, iteratee, additionalArgument) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		iteratee(source[index], index, source, arrayLength, additionalArgument);
	}
	return source;
}

/**
 * Asynchronously Iterates through the given array in reverse. Each async function is awaited as to ensure synchronous order.
 *
 * @function eachRightAsync
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @returns {Object|undefined} - The originally given array.
 *
 * @example
 * import { eachRightAsync, assert } from '@universalweb/acid';
 * const tempList = [];
 * await eachRightAsync([1, 2, 3], async (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [3, 2, 1]);
 */
async function eachRightAsync(source, iteratee) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	for (let index = arrayLength - 1; index >= 0; index--) {
		await iteratee(source[index], index, source, arrayLength);
	}
	return source;
}

/**
 * Iterates through the given array while the iteratee returns true else the loop exits & returns false.
 *
 * @function everyAsyncArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array|undefined} - Returns true if all returns are true or false if one value returns false.
 *
 * @example
 * import { everyAsyncArray, assert } from '@universalweb/acid';
 * assert(everyAsyncArray([true, true, false], (item, index, source, sourceLength, additionalArgument) => {
 *   return item;
 * }), false);
 * assert(everyAsyncArray([true, true, true], (item, index, source, sourceLength, additionalArgument) => {
 *   return item;
 * }), true);
 */
async function everyAsyncArray(source, iteratee, additionalArgument) {
	if (!source) {
		return;
	}
	const sourceLength = source.length;
	for (let index = 0; index < sourceLength; index++) {
		if (await iteratee(source[index], index, source, sourceLength, additionalArgument) === false) {
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
 * @param {Array} results - Array that will be used to assign results.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - An array with properties that passed the test.
 *
 * @example
 * import { filterArray, assert } from '@universalweb/acid';
 * assert(filterArray([false, true, true], (item) => {
 *   return item;
 * }), [true, true]);
 */
function filterArray(source, iteratee, results = [], additionalArgument) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		if (iteratee(item, index, results, arrayOriginal, arrayLength, additionalArgument) === true) {
			results.push(item);
		}
	});
	return results;
}

/**
 * Iterates through the calling array and creates an array with all elements that pass the test implemented by the iteratee.
 *
 * @function filterAsyncArray
 * @category array
 * @type {Function}
 * @category array
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created object, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - An array with properties that passed the test.
 *
 * @example
 * import { filterAsyncArray, assert } from '@universalweb/acid';
 * assert(filterAsyncArray([false, true, true], (item) => {
 *   return item;
 * }), [true, true]);
 */
async function filterAsyncArray(source, iteratee, results = [], additionalArgument) {
	await eachAsyncArray(source, async (item, index, arrayOriginal, arrayLength) => {
		if (await iteratee(item, index, results, arrayOriginal, arrayLength, additionalArgument) === true) {
			results.push(item);
		}
	});
	return results;
}

/**
 * Takes the first or multiple items from an array.
 *
 * @function first
 * @type {Function}
 * @category array
 * @param {Array} array - Array to extract from.
 * @param {Number} upTo - Number which determines how many items after the first item are extracted from the array.
 * @returns {Array} - Returns an array.
 *
 * @example
 * import { first, assert } from '@universalweb/acid';
 * assert(first([1, 2, 3]), 1);
 */
function first(array, upTo) {
	return (upTo) ? array.slice(0, upTo) : array[0];
}

/**
 * Flattens an array up to the provided level.
 *
 * @function flatten
 * @type {Function}
 * @category array
 * @param {Array} source - Array to flatten.
 * @param {Number} [level = 1] - Number which determines how deep the array nest can be.
 * @returns {Array|undefined} - Returns an array.
 *
 * @example
 * import { flatten, assert } from '@universalweb/acid';
 * assert(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5]);
 */
function flatten(source, level = 1) {
	if (!source) {
		return;
	}
	let sourceArray = source;
	for (let i = 0; i < level; i++) {
		sourceArray = sourceArray.reduce((previousValue, currentValue) => {
			return previousValue.concat(ensureArray(currentValue));
		}, []);
	}
	return sourceArray;
}

/**
 * Takes all but the last item in the array.
 *
 * @function initial
 * @category array
 * @type {Function}
 * @param {Array} array - Array to have items extracted from.
 * @returns {Array} - Returns a completely flattened array.
 *
 * @example
 * import { initial, assert } from '@universalweb/acid';
 * assert(initial([1, 2, 3, 4, 5]), [1, 2, 3, 4]);
 */
function initial(array) {
	return array.slice(0, array.length - 1);
}

// Add intersectionBy & intersectionWith
/**
 * Returns an new array that is the [set intersection](http://en.wikipedia.org/wiki/Intersection_(set_theory))
 * of the array and the input array(s).
 *
 * @function intersection
 * @param {Array} array - Array to compare other arrays to.
 * @param {...Array} arrays - A variable number of arrays.
 * @category array
 * @returns {Array} - The new array of unique values shared by all of the arrays.
 *
 * @example
 * import { intersection, assert } from '@universalweb/acid';
 * assert(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
 */
function intersection(array, ...arrays) {
	return compactMapArray(array, (item) => {
		const shouldReturn = everyArray(arrays, (otherItem) => {
			return otherItem.includes(item);
		});
		if (shouldReturn) {
			return item;
		}
	});
}

/**
 * Invoke each function in the given array.
 *
 * @function invokeArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} additionalArg - An object to be given each time to the iteratee.
 * @param {*} thisCall - Iteratee called with thisCall as this.
 * @returns {Array|undefined} - The originally given array.
 *
 * @example
 * import { invokeArray, assert } from '@universalweb/acid';
 * const collected = [];
 * function test(arg) { collected.push([this, arg]); }
 * invokeArray([test], 1, 'thisValue');
 * assert(collected, [['thisValue', 1]]);
 */
function invokeArray(source, additionalArg, thisCall) {
	if (!source) {
		return;
	}
	const arrayLength = source.length;
	if (hasValue(thisCall)) {
		for (let index = 0; index < arrayLength; index++) {
			source[index].call(thisCall, additionalArg);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			source[index](additionalArg);
		}
	}
	return source;
}

function isConstructorFactory(source) {
	if (!source) {
		return () => {
			return false;
		};
	}
	return (target) => {
		return target?.constructor === source || false;
	};
}

/**
 * Checks if an object or objects are a Buffer.
 *
 * @function isBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isBuffer, assert } from '@universalweb/acid';
 * assert(isBuffer(Buffer.from('test')), true);
 */
const isBufferCall = isConstructorFactory(globalThis.Buffer);
const isBufferFunc = isTypeFactory(isBufferCall);
function isBuffer(source, ...otherSources) {
	if (!globalThis.Buffer) {
		return Error('Buffer is not available in this environment');
	}
	if (Buffer.isBuffer) {
		return Buffer.isBuffer(source) && (!otherSources?.length || everyArray(otherSources, Buffer.isBuffer));
	}
	return isBufferFunc(source, ...otherSources);
}

/**
 * Checks if the value is a Date.
 *
 * @function isDate
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isDate, assert } from '@universalweb/acid';
 * assert(isDate(new Date()), true);
 */
const isDateCall = isConstructorFactory(Date);
const isDate = isTypeFactory(isDateCall);

/**
 * Checks if the value is a plain object.
 *
 * @function isPlainObject
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isPlainObject } from '@universalweb/acid';
 * isPlainObject({});
 * // => true
 */
const isPlainObject = (source) => {
	if (hasValue(source)) {
		return source.constructor.toString().trim()
			.slice(9, 16) === 'Object(';
	}
	return false;
};

/**
 * Checks if the value is a RegExp.
 *
 * @function isRegex
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isRegex, assert } from '@universalweb/acid';
 * assert(isRegex(/test/), true);
 */
const isRegexCall = isConstructorFactory(RegExp);
const isRegex = isTypeFactory(isRegexCall);

/**
 * Returns the constructor of an object.
 *
 * @function getType
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Function|undefined} - Returns the constructor or undefined for null/undefined.
 *
 * @example
 * import { getType, assert } from '@universalweb/acid';
 * assert(getType(1), Number);
 */
function getType(source) {
	return source?.constructor;
}

/**
 * Returns the constructor name of an object.
 *
 * @function getTypeName
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {String|undefined} - Returns the constructor name or undefined for null/undefined.
 *
 * @example
 * import { getTypeName, assert } from '@universalweb/acid';
 * assert(getTypeName(1), 'Number');
 */
function getTypeName(source) {
	return getType(source)?.name;
}

/**
 * Checks if an object is a TypedArray. A TypedArray object is an array-like view of an underlying binary data buffer.
 *
 * @function isTypedArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isTypedArray, assert } from '@universalweb/acid';
 * assert(isTypedArray([]), false);
 * assert(isTypedArray(new Int8Array()), true);
 */
const typedArrayRegex = /Array/;
const arrayConstructorName = 'Array';
function isTypedArray(source) {
	if (source) {
		const constructorName = getTypeName(source);
		if (typedArrayRegex.test(constructorName) && constructorName !== arrayConstructorName) {
			return true;
		}
	}
	return false;
}

/**
 * Get object's keys.
 *
 * @function keys
 * @category object
 * @param {*} source - The source object to pull keys from.
 * @returns {Array} - Array of keys.
 *
 * @example
 * import { keys, assert } from '@universalweb/acid';
 * assert(keys({a: 1, b: 2}), ['a', 'b']);
 */
const objectKeys = Object.keys;
function keys(source) {
	if (source) {
		return objectKeys(source);
	}
}

/**
 * Performs a deep comparison between two values.
 * Supports plain objects, arrays, typed arrays, buffers, dates, and regexes.
 *
 * @function isEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source value.
 * @param {*} target - Value to be compared.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isEqual, assert } from '@universalweb/acid';
 * assert(isEqual({a: [1, 2, 3]}, {a: [1, 2, 3]}), true);
 * assert(isEqual([1, 2], [1, 2, 3]), false);
 */
function isEqual(source, target) {
	if (source === target) {
		return true;
	}
	if (source === null || target === null || source === undefined || target === undefined) {
		return false;
	}
	if (typeof source !== typeof target) {
		return false;
	}
	if (isBuffer(source)) {
		return isBuffer(target) && source.equals(target);
	}
	if (isDate(source)) {
		return isDate(target) && source.getTime() === target.getTime();
	}
	if (isRegex(source)) {
		return isRegex(target) && source.source === target.source && source.flags === target.flags;
	}
	if (isArray(source) || isTypedArray(source)) {
		if (source.length !== target?.length) {
			return false;
		}
		return everyArray(source, (item, index) => {
			return isEqual(item, target[index]);
		});
	}
	if (isPlainObject(source)) {
		if (!isPlainObject(target)) {
			return false;
		}
		const sourceKeys = keys(source);
		if (sourceKeys.length !== keys(target).length) {
			return false;
		}
		return everyArray(sourceKeys, (key) => {
			return isEqual(source[key], target[key]);
		});
	}
	return false;
}

/**
 * Performs a shallow strict comparison between two objects.
 *
 * @function isMatchArray
 * @type {Function}
 * @category array
 * @param {Array} source - Source object.
 * @param {Array} compareArray - Object to compare to source.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isMatchArray, assert } from '@universalweb/acid';
 * assert(isMatchArray([1, 2, 3], [1, 2, 3]), true);
 */
function isMatchArray(source, compareArray) {
	if (source.length === compareArray.length) {
		return everyArray(source, (item, index) => {
			return isEqual(compareArray[index], item);
		});
	}
	return false;
}

const mathNativeMax = Math.max;
/**
 * Plucks the largest value from an array.
 *
 * @function largest
 * @type {Function}
 * @category array
 * @param {Array} array - Array from which largest number is taken.
 * @returns {Number} - The largest number.
 *
 * @example
 * import { largest, assert } from '@universalweb/acid';
 * assert(largest([1,2,3]), 3);
 */
function largest(array) {
	return mathNativeMax(...array);
}

/**
 * Extracts item(s) from an array starting from the last item in the array.
 *
 * @function last
 * @type {Function}
 * @category array
 * @param {Array} array - Array to have items extracted from.
 * @param {Number} [indexFrom = 0] - Value which determines how many items are extracted from the array.
 * @returns {Array} - Items from the array.
 *
 * @example
 * import { last, assert } from '@universalweb/acid';
 * assert(last([1, 2, 3, 4, 5] , 2), [4, 5]);
 */
function last(array, indexFrom) {
	const arrayLength = array.length;
	return (indexFrom) ? array.slice(arrayLength - indexFrom, arrayLength) : array[arrayLength - 1];
}

/**
 * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
 *
 * @function mapArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapArray, assert } from '@universalweb/acid';
 * assert(mapArray([1, 2, 3], (item) => {
 *   return item * 2;
 * }), [2, 4, 6]);
 */
function mapArray(source, iteratee, results = [], thisCall, additionalArg) {
	if (hasValue(thisCall)) {
		eachArray(source, (item, index, arrayOriginal, arrayLength) => {
			results[index] = iteratee.call(thisCall, item, index, results, arrayOriginal, arrayLength, additionalArg);
		});
	} else {
		eachArray(source, (item, index, arrayOriginal, arrayLength) => {
			results[index] = iteratee(item, index, results, arrayOriginal, arrayLength, additionalArg);
		});
	}
	return results;
}

/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.all on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrentEachArray
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @returns {Promise|Array|undefined} - An array of the same calling array's type.
 *
 * @example
 * import { concurrentEachArray, has, assert } from '@universalweb/acid';
 * const results = await concurrentEachArray([1, 2, 3], async (item) => {
 *   return item * 2;
 * });
 * assert(has(results, [2, 4, 6]), true);
 */
async function concurrentEachArray(source, iteratee, thisBind) {
	if (!source) {
		return;
	}
	const results = [];
	const arrayLength = source.length;
	if (thisBind) {
		for (let index = 0; index < arrayLength; index++) {
			results[index] = iteratee.call(thisBind, source[index], index, results, arrayLength);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			results[index] = iteratee(source[index], index, results, arrayLength);
		}
	}
	return Promise.all(results);
}

/**
 * Asynchronously iterates through the calling array and creates an array with the results of the iteratee (invoked and awaited one at a time) on every element in the calling array. If you want things happenign in parallel, use mapAllAsyncArray.
 *
 * @function mapAsyncArray
 * @category array
 * @type {Function}
 * @async
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapAsyncArray, assert } from '@universalweb/acid';
 * assert(await mapAsyncArray([1, 2, 3], async (item) => {
 *   return item * 2;
 * }), [2, 4, 6]);
 */
async function mapAsyncArray(source, iteratee) {
	const results = [];
	await eachAsyncArray(source, async (item, index, arrayLength) => {
		results[index] = await iteratee(item, index, results, arrayLength);
	});
	return results;
}

/**
 * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array in reverse.
 *
 * @function mapRightArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapRightArray, assert } from '@universalweb/acid';
 * assert(mapRightArray([1, 2, 3], (item) => {
 *   return item * 2;
 * }), [6, 4, 2]);
 */
function mapRightArray(source, iteratee, results = [], additionalArgument) {
	let trueIndex = 0;
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		results[trueIndex] = iteratee(source[index], index, source, arrayLength, additionalArgument);
		trueIndex++;
	}
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
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - An array with properties that passed the test.
 *
 * @example
 * import { mapWhile, assert } from '@universalweb/acid';
 * assert(mapWhile([1, 2, 0], (item) => {
 *   return Boolean(item);
 * }), [1, 2]);
 */
function mapWhile(source, iteratee, results = [], additionalArgument) {
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		const item = source[index];
		const returned = iteratee(item, index, results, source, arrayLength, additionalArgument);
		if (returned === false) {
			break;
		}
		results[index] = item;
	}
	return results;
}

/**
 * Subtracts the subtrahend (second argument) from the minuend (first argument).
 *
 * @function subtract
 * @category math
 * @type {Function}
 * @param {Number} minuend - The minuend.
 * @param {Number} subtrahend - The subtrahend.
 * @returns {Number} - Returns the difference.
 *
 * @example
 * import { subtract, assert } from '@universalweb/acid';
 * assert(subtract(3, 1), 2);
 */
function subtract(minuend, subtrahend) {
	return minuend - subtrahend;
}

/**
 * Sorts an array of numbers in ascending order. Smallest to largest.
 *
 * @function sortNumberAscending
 * @category array
 * @param {Array} numberList - Array of numbers.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * import { sortNumberAscending, assert } from '@universalweb/acid';
 * assert(sortNumberAscending([10, 0, 2, 1]),  [0, 1, 2, 10]);
 */
function sortNumberAscending(numberList) {
	return numberList.sort(subtract);
}

/**
 * Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
 *
 * @function partition
 * @type {Function}
 * @category array
 * @param {Array} array - Takes an array to split.
 * @param {Function} predicate - Function run on each item in the array.
 * @returns {Array} - One array split into two arrays.
 *
 * @example
 * import { partition, assert } from '@universalweb/acid';
 * const result = partition([
 *  {user: 'barney', age: 36, active: false},
 *  {user: 'fred', age: 40, active: true},
 *  {user: 'pebbles', age: 1, active: false}
 * ], (item) => item.active);
 * assert(result, [
 *   [{user: 'fred', age: 40, active: true}],
 *   [{user: 'barney', age: 36, active: false}, {user: 'pebbles', age: 1, active: false}]
 * ]);
 */
function partition(array, predicate) {
	const rejected = [];
	return [
		compactMapArray(array, (item, index) => {
			if (predicate(item, index)) {
				return item;
			}
			rejected.push(item);
		}),
		rejected
	];
}

/**
 * Subtracts the subtrahend (first argument) from the minuend (second argument). The arguments are reversed compared to the subtract function.
 *
 * @function subtractReverse
 * @category math
 * @type {Function}
 * @param {Number} subtrahend - The subtrahend.
 * @param {Number} minuend - The minuend.
 * @returns {Number} - Returns the difference.
 *
 * @example
 * import { subtractReverse, assert } from '@universalweb/acid';
 * assert(subtractReverse(1, 3), 2);
 */
function subtractReverse(subtrahend, minuend) {
	return minuend - subtrahend;
}

/**
 * Sorts an array of numbers in descending order. Largest to smallest.
 *
 * @function sortNumberDescending
 * @category array
 * @param {Array} numberList - Array of numbers.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * import { sortNumberDescending, assert } from '@universalweb/acid';
 * assert(sortNumberDescending([10, 0, 2, 1]), [10, 2, 1, 0]);
 */
function sortNumberDescending(numberList) {
	return numberList.sort(subtractReverse);
}

/**
 * Removes all occurrences of the passed in items from the array and returns the array. This mutates the given array. Clone the array if you desire to avoid mutation.
 *
 * @function remove
 * @category array
 * @param {Array} array - Array to be mutated.
 * @param {String|Array} removeThese - Items to remove from the array.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * import { remove, assert } from '@universalweb/acid';
 * assert(remove([1, 2, 3, 3, 4, 3, 5], [1]), [2, 3, 3, 4, 3, 5]);
 * @example
 * import { remove, assert } from '@universalweb/acid';
 * assert(remove([3, 3, 4, 5], [3, 4]), [5]);
 */
function remove(array, removeThese) {
	let arrayLength = array.length;
	for (let index = 0; index < arrayLength; index++) {
		const item = array[index];
		if (removeThese.includes(item)) {
			array.splice(index, 1);
			index--;
			arrayLength--;
		}
	}
	return array;
}
/**
 * Removes items that pass the method's test. This mutates the given array. Clone the array if you desire to avoid mutation.
 *
 * @function removeBy
 * @category array
 * @param {Array} source - Array to be mutated.
 * @param {Function} iteratee - Function used to check object. Return true to remove the value.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * import { removeBy, assert } from '@universalweb/acid';
 * assert(removeBy([1, 2, 3, 3, 4, 3, 5], (item) => { return Boolean(item % 2); }), [2, 4]);
 */
function removeBy(source, iteratee) {
	let arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		const item = source[index];
		if (iteratee(item, index)) {
			source.splice(index, 1);
			index--;
			arrayLength--;
		}
	}
	return source;
}

/**
 * Extracts all items in array except the first and last item.
 *
 * @function rest
 * @type {Function}
 * @category array
 * @param {Array} array - Array to be sliced.
 * @returns {Array} - Returns the aggregated array.
 *
 * @example
 * import { rest, assert } from '@universalweb/acid';
 * assert(rest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
 */
function rest(array) {
	return array.slice(1, array.length);
}

/**
 * Get the item at the supplied index starting at the end of the array.
 *
 * @function right
 * @type {Function}
 * @category array
 * @param {Array} source - Array to be sliced.
 * @param {Number} amount - Amount from the right.
 * @returns {*} - Returns the object at the evaluated position.
 *
 * @example
 * import { right, assert } from '@universalweb/acid';
 * assert(right([1, 2, 3, 4, 5], 1), 4);
 */
function right(source, amount) {
	return source[source.length - 1 - amount];
}

const {
	floor: floor$1,
	random: random$1
} = Math;
/**
 * Produces a random whole number between min (included) and max (excluded). Do not use for security or encryption.
 *
 * @function randomInt
 * @category math
 * @type {Function}
 * @param {Number} max - The highest possible value for the random number (excluded).
 * @param {Number} [min=0] - Establishes lowest possible value for the random number (included).
 * @returns {Number} - Returns random integer between the max and min range.
 *
 * @example
 * import { randomInt, assert } from '@universalweb/acid';
 * assert(randomInt(10, 0), (value) => { return value >= 0 && value < 10; });
 */
function randomInt(max, min = 0) {
	return floor$1(random$1() * (max - min)) + min;
}

/**
 * Checks if two numbers are the same.
 *
 * @function isNumberEqual
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @param {Number} target - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumberEqual, assert } from '@universalweb/acid';
 * assert(isNumberEqual(0, 0), true);
 */
function isNumberEqual(source, target) {
	return source === target;
}

const arrayFrom = Array.from;
/**
 * The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. This just has a null & undefined safety check.
 *
 * @function toArray
 * @category array
 * @param {*} arrayLike - Array like object.
 * @param {Function} mapFn - Function to map over the array.
 * @param {*} thisArg - MapFn's "this".
 * @returns {Array|undefined} - New array.
 *
 * @example
 * import { toArray, assert } from '@universalweb/acid';
 * assert(toArray(new Map([[1, 2]])), [[1, 2]]);
 */
function toArray(arrayLike, mapFn, thisArg) {
	if (hasValue(arrayLike)) {
		return arrayFrom(arrayLike, mapFn, thisArg);
	}
}

/**
 * Shuffle an array and return a new array.
 *
 * @function shuffle
 * @category array
 * @param {Array} target - Target Array to be shuffled.
 * @param {Number} amount - The amount of times to shuffle the array.
 * @returns {Array} - An array with the shuffled results.
 *
 * @example
 * import { shuffle, assert } from '@universalweb/acid';
 * assert(shuffle([1, 2, 3, 4]), (result) => result.length === 4 && result.every((n) => [1, 2, 3, 4].includes(n)));
 */
function shuffle(target, amount = target.length) {
	if (target.length <= 1) {
		return toArray(target);
	}
	const shuffleArray = toArray(target);
	let count = 0;
	let index;
	let value;
	while (count < amount) {
		index = randomInt(shuffleArray.length - 1, 0);
		value = shuffleArray[count];
		shuffleArray[count] = shuffleArray[index];
		shuffleArray[index] = value;
		count++;
	}
	return shuffleArray;
}

/**
 * Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
 *
 * @function sample
 * @category array
 * @param {Array} source - The array to pull sample(s) from.
 * @param {Number} amount - The amount of samples to take.
 * @returns {Array} - An array of randomly pulled samples.
 *
 * @example
 * import { sample, assert } from '@universalweb/acid';
 * assert(sample([1, 2, 3, 4], 2), (result) => Array.isArray(result) && result.length === 2);
 */
function sample(source, amount) {
	if (!source) {
		return false;
	}
	const arrayLength = source.length;
	if (arrayLength === amount || amount > arrayLength) {
		return shuffle(source);
	}
	if (amount === 1) {
		return [source[randomInt(arrayLength - 1, 0)]];
	}
	const sampleArray = [];
	const used = {};
	let count = 0;
	let index;
	while (count < amount) {
		index = randomInt(source.length - 1, 0);
		if (!used[index]) {
			sampleArray.push(source[index]);
			used[index] = true;
			count++;
		}
	}
	return sampleArray;
}

const mathNativeMin = Math.min;
/**
 * Plucks the smallest value from an array.
 *
 * @function smallest
 * @category array
 * @type {Function}
 * @param {Array} array - Array from which smallest number is taken.
 * @returns {Number} - The smallest number.
 *
 * @example
 * import { smallest, assert } from '@universalweb/acid';
 * assert(smallest([1, 2, 3]), 1);
 */
function smallest(array) {
	return mathNativeMin(...array);
}

/**
 * What index should the number be inserted at to keep a sorted array still sorted.
 *
 * @function getNumberInsertIndex
 * @category array
 * @type {Function}
 * @param {Array} source - Array to be checked.
 * @param {Number} target - Number to check where to be inserted.
 * @returns {Number} - The index at which to insert.
 *
 * @example
 * import { getNumberInsertIndex, assert } from '@universalweb/acid';
 * assert(getNumberInsertIndex([30, 39, 50], 40), 2);
 */
function getNumberInsertIndex(source, target) {
	let insertIndex = 0;
	everyArray(source, (item, index) => {
		insertIndex = index;
		if (target >= item) {
			insertIndex = index + 1;
			return true;
		} else {
			return false;
		}
	});
	return insertIndex;
}

/**
 * Returns a shallow copy of the array up to an amount.
 *
 * @function take
 * @category array
 * @type {Function}
 * @param {Array} source - The source array to take from.
 * @param {Array} [endIndex = 1] - Zero-based index before which to end extraction.
 * @returns {Array} - The aggregated array.
 *
 * @example
 * import { take, assert } from '@universalweb/acid';
 * assert(take([1,2,3], 2), [1, 2]);
 */
function take(source, endIndex = 1) {
	return source.slice(0, endIndex);
}

/**
 * Returns a shallow copy of the array up to an amount starting from the right.
 *
 * @function takeRight
 * @category array
 * @type {Function}
 * @param {Array} source - The source array to take right from.
 * @param {Array} [indexRight = 1] - Zero-based index from the right to begin extraction.
 * @returns {Array} - The aggregated array.
 *
 * @example
 * import { takeRight, assert } from '@universalweb/acid';
 * assert(takeRight([1,2,3], 2), [2, 3]);
 */
function takeRight(source, indexRight = 1) {
	const arrayLength = source.length;
	return source.slice(arrayLength - indexRight, arrayLength);
}

function onlyUnique(value, index, array) {
	return array.indexOf(value) === index;
}
function sortUnique(item, index, array) {
	return item !== array[index - 1];
}
/**
 * Filters the array down to unique elements.
 *
 * @function unique
 * @category array
 * @type {Function}
 * @param {Array} source - The array to be filtered.
 * @param {Boolean} isSorted - Flag which means the array is already sorted.
 * @returns {Array} - The filtered array.
 *
 * @example
 * import { unique, assert } from '@universalweb/acid';
 * assert(unique([1, 2, 2, 4]), [1, 2, 4]);
 */
function unique(source, isSorted) {
	if (isSorted) {
		return source.filter(sortUnique);
	}
	return source.filter(onlyUnique);
}

/**
 * Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
 *
 * @function union
 * @category array
 * @type {Function}
 * @param {...Array} arrays - The arrays to be evaluated.
 * @returns {Array} - The aggregated array.
 *
 * @example
 * import { union, assert } from '@universalweb/acid';
 * assert(union([1, 2, 4], [1, 2, 3]), [1, 2, 4, 3]);
 */
function union(...arrays) {
	return unique(flattenDeep(arrays));
}

/**
 * Loops through an array invoking an iteratee with (value, key). If the iteratee always yields true then true is returned.
 * If and when the iteratee yields false the loop stops & false is returned.
 *
 * @function untilFalseArray
 * @category array
 * @type {Function}
 * @param {Array} source - The array to iterate over.
 * @param {Function} iteratee - Transformation function which is passed item & key and expects a boolean to be returned.
 * @returns {Array} - Returns true if all returns are true or false if one value returns false.
 *
 * @example
 * import { untilFalseArray, assert } from '@universalweb/acid';
 * assert(untilFalseArray([true, true, false], (item) => {
 *   return item;
 * }), false);
 * assert(untilFalseArray([true, true, true], (item) => {
 *   return item;
 * }), true);
 */
function untilFalseArray(source, iteratee) {
	const sourceLength = source.length;
	for (let index = 0; index < sourceLength; index++) {
		if (iteratee(source[index], index) === false) {
			return false;
		}
	}
	return true;
}

/**
 * Loops through an array invoking an iteratee with (value, key). If the iteratee always yields false then true is returned.
 * If and when the iteratee yields true the loop stops & false is returned.
 *
 * @function untilTrueArray
 * @category array
 * @type {Function}
 * @param {Array} source - The array to iterate over.
 * @param {Function} iteratee - Transformation function which is passed item & key and expects a boolean to be returned.
 * @returns {Array} - Returns true if all returns are false or false if one value returns true.
 *
 * @example
 * import { untilTrueArray, assert } from '@universalweb/acid';
 * assert(untilTrueArray([true], (item) => item), false);
 * assert(untilTrueArray([false, false, false], (item) => item), true);
 */
function untilTrueArray(source, iteratee) {
	const sourceLength = source.length;
	for (let index = 0; index < sourceLength; index++) {
		if (iteratee(source[index], index) === true) {
			return false;
		}
	}
	return true;
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
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileCompactMap, assert } from '@universalweb/acid';
 * assert(whileCompactMap([1, 2, 3, false, undefined, null], (item) => {
 *   return item;
 * }), [1, 2, 3, false]);
 */
function whileCompactMap(source, iteratee, results = [], additionalArgument) {
	let index = 0;
	while (index < source.length) {
		const result = iteratee(source[index], index, source, source.length, additionalArgument);
		if (hasValue(result)) {
			results.push(result);
		}
		index++;
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
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileEachArray, assert } from '@universalweb/acid';
 * const list = [];
 * whileEachArray([1, 2, 3], (item, index) => {
 *   list[index] = item;
 * });
 * assert(list, [1, 2, 3]);
 */
function whileEachArray(source, iteratee, additionalArgument) {
	let index = 0;
	while (index < source.length) {
		iteratee(source[index], index, source, source.length, additionalArgument);
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
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileMapArray, assert } from '@universalweb/acid';
 * assert(whileMapArray([1, 2, 3], (item, index, source) => {
 *   if (index === 0) {
 *     source.push(4);
 *   }
 *   return item;
 * }), [1, 2, 3, 4]);
 */
function whileMapArray(source, iteratee, results = [], additionalArgument) {
	let index = 0;
	while (index < source.length) {
		results.push(iteratee(source[index], index, source, source.length, additionalArgument));
		index++;
	}
	return source;
}

/**
 * Returns a copy of the array with all instances of the values removed.
 *
 * @function without
 * @type {Function}
 * @category array
 * @param {Array} target - The target array to be filtered.
 * @param {Array} sources - Items to be removed.
 * @returns {Array} - The target array filtered.
 *
 * @example
 * import { without, assert } from '@universalweb/acid';
 * assert(without([1, 2, 2, 4], [4]), [1, 2, 2]);
 */
function without(target, sources) {
	if (!sources) {
		return target;
	}
	const sourcesSet = construct(Set, [sources]);
	return target.filter((item) => {
		return !sourcesSet.has(item);
	});
}

/**
 * Creates an array that is the symmetric difference of the provided arrays.
 *
 * @function xor
 * @category array
 * @type {Function}
 * @param {...Array} sources - The array(s) to be filtered.
 * @returns {Array|undefined} - The filtered array.
 *
 * @example
 * import { xor, assert } from '@universalweb/acid';
 * assert(xor([2, 1], [2, 3, 5], [6]), [1, 3, 5, 6]);
 */
function xor(...sources) {
	const xorMap = construct(Map);
	const xored = [];
	const sourcesLength = sources.length;
	if (sourcesLength === 2) {
		return difference(sources[0], sources[1]);
	}
	eachArray(sources, (currentArray, parentIndex) => {
		eachArray(currentArray, (child, childIndex) => {
			let childRoot = xorMap.get(child);
			if (!childRoot) {
				childRoot = {
					count: 1,
					parentIndex,
					child
				};
				xorMap.set(child, childRoot);
			} else if (childRoot.parentIndex === parentIndex) {
				return;
			} else {
				childRoot.count++;
			}
		});
	});
	forEach(xorMap, (item) => {
		if (item.count === 1) {
			xored.push(item.child);
		}
	});
	return xored;
}

/**
 * Merges together the values of each of the arrays with the values at the corresponding position.
 *
 * @function zip
 * @type {Function}
 * @category array
 * @param {Array} arrays - The arrays to process.
 * @returns {Array} - Returns the new array of regrouped elements.
 *
 * @example
 * import { zip, assert } from '@universalweb/acid';
 * assert(zip(['a', 'b'], [1, 2], [true, false]), [['a', 1, true], ['b', 2, false]]);
 */
function zip(...arrays) {
	return arrays[0].map((item, index) => {
		return arrays.map((array) => {
			return array[index];
		});
	});
}
/**
 * Takes an array of grouped elements and creates an array regrouping the elements to their pre-zip array configuration.
 *
 * @function unZip
 * @type {Function}
 * @category array
 * @param {Array} source - The array of grouped elements to process.
 * @returns {Array} - Returns the new array of regrouped elements.
 *
 * @example
 * import { unZip, assert } from '@universalweb/acid';
 * assert(unZip([['a', 1, true], ['b', 2, false]]), [['a', 'b'], [1, 2], [true, false]]);
 */
function unZip(source) {
	return source[0].map((item, index) => {
		return source.map((arraySet) => {
			return arraySet[index];
		});
	});
}

/**
 * Ensures the source is a Buffer if not the source is used to create a buffer using Buffer.from else if there's no source an empty Buffer is returned with Buffer.alloc(0). Keep in mind not all objects can be used to create a Buffer.
 *
 * @function ensureBuffer
 * @category buffer
 * @type {Function}
 * @param {*} source - Object to be checked.
 * @returns {Array} - Returns an array.
 *
 * @example
 * import { isBuffer, ensureBuffer, assert } from '@universalweb/acid';
 * assert(isBuffer(ensureBuffer('test')), true);
 */
function ensureBuffer(source) {
	if (!globalThis.Buffer) {
		return Error('Buffer is not available in this environment');
	}
	return (isBuffer(source) && source) || (hasValue(source) && Buffer.from(source)) || Buffer.alloc(0);
}

/**
 * Zero-fills a Buffer in place and returns it.
 *
 * @function clearBuffer
 * @category buffer
 * @type {Function}
 * @param {Buffer} source - Buffer to be zero-filled.
 * @returns {Buffer} - The originally given buffer, now filled with zeros.
 *
 * @example
 * import { clearBuffer, assert } from '@universalweb/acid';
 * assert(clearBuffer(Buffer.from([1, 2, 3])), Buffer.from([0, 0, 0]));
 */
function clearBuffer(source) {
	if (isBuffer(source) || source?.fill) {
		source.fill(0);
	}
	return source;
}

/**
 * Tiny event emitter. Supports on/once/off/emit and chainable returns.
 *
 * @class Emitter
 * @category class
 *
 * @example
 * import { Emitter } from '@universalweb/acid';
 * const bus = new Emitter();
 * bus.on('greet', (recipient) => console.log(`hello ${recipient}`));
 * bus.emit('greet', 'world');
 */
class Emitter {
	constructor() {
		this.listeners = new Map();
	}
	on(eventName, handler) {
		const handlers = this.listeners.get(eventName);
		if (handlers) {
			handlers.push(handler);
		} else {
			this.listeners.set(eventName, [handler]);
		}
		return this;
	}
	once(eventName, handler) {
		const wrappedHandler = (...handlerArgs) => {
			this.off(eventName, wrappedHandler);
			handler(...handlerArgs);
		};
		return this.on(eventName, wrappedHandler);
	}
	off(eventName, handler) {
		const handlers = this.listeners.get(eventName);
		if (!handlers) {
			return this;
		}
		if (!handler) {
			this.listeners.delete(eventName);
			return this;
		}
		const remaining = handlers.filter((registered) => registered !== handler);
		if (remaining.length) {
			this.listeners.set(eventName, remaining);
		} else {
			this.listeners.delete(eventName);
		}
		return this;
	}
	emit(eventName, ...handlerArgs) {
		const handlers = this.listeners.get(eventName);
		if (!handlers) {
			return false;
		}
		for (const handler of [...handlers]) {
			handler(...handlerArgs);
		}
		return true;
	}
	clear() {
		this.listeners.clear();
	}
}

/**
 * Checks if an object or objects are a plain object.
 *
 * @function isFunction
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFunction } from '@universalweb/acid';
 * isFunction(() => {});
 * // => true
 */
const isFunction = (source) => {
	return (hasValue(source)) ? source instanceof Function : false;
};

/**
 * Checks if the value is a number.
 *
 * @function isNumber
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumber, assert } from '@universalweb/acid';
 * assert(isNumber(1), true);
 */
const isNumberCall = isConstructorFactory(Number);
const isNumber = isTypeFactory(isNumberCall);
/**
 * Checks if the value is not a number.
 *
 * @function isNotNumber
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotNumber, assert } from '@universalweb/acid';
 * assert(isNotNumber(1), false);
 */
function isNotNumber(source) {
	return !isNumber(source);
}

const isStringCall = isConstructorFactory(String);
/**
 * Checks if the value is a string.
 *
 * @function isString
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isString, assert } from '@universalweb/acid';
 * assert(isString('hello'), true);
 * assert(isString(1), false);
 */
const isString = isTypeFactory(isStringCall);
/**
 * Checks if the value is not a string.
 *
 * @function isNotString
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNotString, assert } from '@universalweb/acid';
 * assert(isNotString(1), true);
 * assert(isNotString('hello'), false);
 */
function isNotString(source) {
	return !isString(source);
}

/**
 * Checks to see if the constructor is that of a native object.
 *
 * @function isType
 * @category type
 * @param {Object} target - The object to be checked.
 * @param {Object} source - The source constructor object.
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { isType, assert } from '@universalweb/acid';
 * assert(isType(2, Number), true);
 */
function isType(target, source) {
	const constructorObject = getType(target);
	return (constructorObject && constructorObject === source) || false;
}
function isTypeNameFactory(source) {
	return (target) => {
		const constructorNameString = getTypeName(target);
		return (constructorNameString && constructorNameString === source) || false;
	};
}

const objectAssign$2 = Object.assign;
function assignToObject(target, source) {
	if (isPlainObject(source)) {
		objectAssign$2(target, source);
	} else if (isFunction(source)) {
		const key = source.name;
		if (key) {
			target[key] = source;
		} else {
			objectAssign$2(target, source);
		}
	} else if (isString(source) || isNumber(source)) {
		target[source] = source;
	}
	return target;
}
/**
 * Copy the values of all enumerable own properties from one or more source objects to a target object. However, if an object is a function it will try and use its name as the key and the function itself as the value to assign to the target object. If it's a function without a name then it will do a straight object assign. It will do the same for strings and numbers except that it will use for both the key and the value the provided string or number. It will return the target object. If a raw object.assign is needed just import objectAssign from this module.
 *
 * @function assign
 * @category object
 * @param {Object} target - The target object.
 * @param {...Object} sources - The source object(s).
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { assign, assert } from '@universalweb/acid';
 * function c() { return 3; }
 * assert(assign({a: 1}, {b: 2}, c, 'd', 5), {a: 1, b: 2, c, d: 'd', 5: 5});
 */
function assign(target = {}, ...sources) {
	const sourceLength = sources.length;
	for (let index = 0; index < sourceLength; index++) {
		assignToObject(target, sources[index]);
	}
	return target;
}

function assignToClass(target, source) {
	if (isPlainObject(source)) {
		objectAssign$2(target.prototype, source);
	} else if (isFunction(source)) {
		const key = source.name;
		if (key) {
			target.prototype[key] = source;
		}
	} else if (isType(source)) {
		const key = source.constructor?.name;
		if (key) {
			target.prototype[key] = source;
		}
	} else if (isString(source) || isNumber(source)) {
		target.prototype[source] = source;
	}
	return target;
}
/**
 * The function adds a new method to a class.
 * @param {Class} target - The target parameter refers to the Class or constructor function to which you want
 * to add a new method.
 * @param {Function|Object|String|Number} sources - What you want to add to the class.
 * @returns {Class} - Returns the Class provided in the target parameter.
 *
 * @example
 * import { extendClass, assert } from '@universalweb/acid';
 * class Test {}
 * function a(){return 1;}
 * extendClass(Test, a)
 * assert((new Test()).a(), 1);
 */
function extendClass(target, ...sources) {
	const sourceLength = sources.length;
	for (let index = 0; index < sourceLength; index++) {
		assignToClass(target, sources[index]);
	}
	return target;
}

/**
 * Fixed-size LRU (least recently used) cache backed by Map insertion order.
 * Reading or writing a key marks it as most recently used. When capacity is exceeded,
 * the oldest entry is evicted.
 *
 * @class LRUCache
 * @category class
 *
 * @example
 * import { LRUCache, assert } from '@universalweb/acid';
 * const cache = new LRUCache(2);
 * cache.set('a', 1);
 * cache.set('b', 2);
 * cache.set('c', 3);
 * assert(cache.has('a'), false);
 */
class LRUCache {
	constructor(capacity = 100) {
		this.capacity = capacity;
		this.store = new Map();
	}
	get(key) {
		if (!this.store.has(key)) {
			return;
		}
		const value = this.store.get(key);
		this.store.delete(key);
		this.store.set(key, value);
		return value;
	}
	set(key, value) {
		if (this.store.has(key)) {
			this.store.delete(key);
		} else if (this.store.size >= this.capacity) {
			const oldest = this.store.keys().next().value;
			this.store.delete(oldest);
		}
		this.store.set(key, value);
		return this;
	}
	has(key) {
		return this.store.has(key);
	}
	delete(key) {
		return this.store.delete(key);
	}
	clear() {
		this.store.clear();
	}
	get size() {
		return this.store.size;
	}
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection through iteratee.
 *
 * @function countBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {Function} iteratee - The iteratee to transform keys.
 * @returns {Object} - Returns the composed aggregate object.
 *
 * @example
 * import { countBy, assert } from '@universalweb/acid';
 * assert(countBy([{a:1}, {a:3}], (item) => { return 'a';}), {a: 2});
 */
function countBy(collection, iteratee) {
	const object = {};
	let result;
	eachArray(collection, (item) => {
		result = iteratee(item);
		if (!object[result]) {
			object[result] = 0;
		}
		object[result]++;
	});
	return object;
}

/**
 * Count the amount of times a key is present in a collection.
 *
 * @function countKey
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {Function} propertyName - The name of the key.
 * @returns {Number} - The count.
 *
 * @example
 * import { countKey, assert } from '@universalweb/acid';
 * assert(countKey([{a:1}, {a:3}], 'a'), 2);
 */
function countKey(collection, propertyName) {
	let count = 0;
	eachArray(collection, (item) => {
		if (item[propertyName]) {
			count++;
		}
	});
	return count;
}

/**
 * Count the amount of times a key is not present in a collection.
 *
 * @function countWithoutKey
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {String} propertyName - The name of the key.
 * @returns {Number} - The count.
 *
 * @example
 * import { countWithoutKey, assert } from '@universalweb/acid';
 * assert(countWithoutKey([{a:1}, {a:3}], 'b'), 2);
 */
function countWithoutKey(collection, propertyName) {
	let count = 0;
	eachArray(collection, (item) => {
		if (!item[propertyName]) {
			count++;
		}
	});
	return count;
}

function findIndexCache(element, index, array, indexMatch, propertyName) {
	if (element[propertyName] === indexMatch) {
		return true;
	}
}

/**
 * Finds an object in a collection by the given id and property name and returns the array index of the object.
 *
 * @function findIndex
 * @type {Function}
 * @category collection
 * @param {Array} collection - Collection to be checked for an item.
 * @param {Number|string} id - The value to look for.
 * @param {String} [propertyName = 'id'] - The name of the property to compare.
 * @returns {Number} - The index of the object.
 *
 * @example
 * import { findIndex, assert } from '@universalweb/acid';
 * assert(findIndex([{id: 1}, {id: 2}], 1), 0);
 */
function findIndex(collection, id, propertyName = 'id') {
	const result = collection.findIndex((element, index) => {
		return findIndexCache(element, index, collection, id, propertyName);
	});
	return (result === -1) ? false : result;
}

/**
 * Finds an object in a collection by the given id and property name.
 *
 * @function findItem
 * @type {Function}
 * @category collection
 * @param {Array} collection - Collection to be checked for an item.
 * @param {Number|string} id - The value to look for.
 * @param {String} [propertyName = 'id'] - The name of the property to compare.
 * @returns {Object} - The found object.
 *
 * @example
 * import { findItem, assert } from '@universalweb/acid';
 * assert(findItem([{id: 1}, {id: 2}], 1), {id: 1});
 */
function findItem(collection, id, propertyName = 'id') {
	const result = collection.find((element, index) => {
		return findIndexCache(element, index, collection, id, propertyName);
	});
	return (result === -1) ? false : result;
}

/**
 * What index should the object be inserted at to keep a sorted array still sorted.
 *
 * @function getCollectionInsertIndex
 * @category array
 * @type {Function}
 * @param {Array} source - Array to be checked.
 * @param {Number} target - Object to check where to be inserted.
 * @returns {Number} - The index at which to insert.
 *
 * @example
 * import { getCollectionInsertIndex, assert } from '@universalweb/acid';
 * assert(getCollectionInsertIndex([{a:1},{a:3},{a:4}], {a:2}, 'a'), 1);
 */
function getCollectionInsertIndex(source, target, propertyName) {
	let insertIndex = 0;
	everyArray(source, (item, index) => {
		insertIndex = index;
		if (target[propertyName] >= item[propertyName]) {
			insertIndex = index + 1;
			return true;
		} else {
			return false;
		}
	});
	return insertIndex;
}

function sortCollectionDescendingFilter(previous, next, propertyName, ifMatch) {
	const previousKey = previous[propertyName];
	const nextKey = next[propertyName];
	if (previousKey === nextKey && ifMatch) {
		return ifMatch(previous, next, propertyName);
	}
	if (!nextKey) {
		return -1;
	} else if (!previousKey) {
		return 1;
	} else if (previousKey < nextKey) {
		return 1;
	} else if (previousKey > nextKey) {
		return -1;
	}
	return 0;
}
/**
 * Sorts an array in place using a key in descending order.
 *
 * @function sortCollectionDescending
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - The property name to sort by based on it's value.
 * @param {Function} ifMatch - A function which returns a number for the sort function if two object properties match.
 * @returns {Array} - The sorted array and or a clone of the array sorted.
 *
 * @example
 * import { sortCollectionDescending, assert } from '@universalweb/acid';
 * const result = [{id: 1}, {id: 0}];
 * const collect = [{id: 0}, {id: 1}];
 * const prop = 'id';
 * assert(sortCollectionDescending(collect, prop), result);
 */
function sortCollectionDescending(collection, propertyName = 'id', ifMatch) {
	return collection.sort((previous, next) => {
		return sortCollectionDescendingFilter(previous, next, propertyName, ifMatch);
	});
}

/**
 * Sorts an array in place using a key from newest to oldest and returns the latest. Does not mutate the array.
 *
 * @function getLowest
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - The property name to sort by based on it's value.
 * @returns {Object} - The newest object in the collection.
 *
 * @example
 * import { getLowest, assert } from '@universalweb/acid';
 * assert(getLowest([{id: 1}, {id: 0}], 'id'), {id: 1});
 */
function getLowest(collection, propertyName) {
	return sortCollectionDescending(collection, propertyName, false)[0];
}

function sortCollectionAscendingFilter(previous, next, propertyName, ifMatch) {
	const previousKey = previous[propertyName];
	const nextKey = next[propertyName];
	if (previousKey === nextKey && ifMatch) {
		return ifMatch(previous, next, propertyName);
	}
	if (!nextKey) {
		return 1;
	} else if (!previousKey) {
		return -1;
	} else if (previousKey < nextKey) {
		return -1;
	} else if (previousKey > nextKey) {
		return 1;
	}
	return 0;
}
/**
 * Sorts an array in place using a key in ascending order.
 *
 * @function sortCollectionAscending
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - The property name to sort by based on it's value.
 * @param {Function} ifMatch - A function which returns a number for the sort function if two object properties match.
 * @returns {Array} - The sorted array and or a clone of the array sorted.
 *
 * @example
 * import { sortCollectionAscending, assert } from '@universalweb/acid';
 * const result = [{id: 0}, {id: 1}];
 * const collect = [{id: 1}, {id: 0}];
 * const prop = 'id';
 * assert(sortCollectionAscending(collect, prop), result);
 */
function sortCollectionAscending(collection, propertyName = 'id', ifMatch) {
	return collection.sort((previous, next) => {
		return sortCollectionAscendingFilter(previous, next, propertyName, ifMatch);
	});
}

/**
 * Sorts an array in place using a key from oldest to newest and returns the oldest. Does not mutate the array.
 *
 * @function getHighest
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - The property name to sort by based on it's value.
 * @returns {Object} - The newest object in the collection.
 *
 * @example
 * import { getHighest, assert } from '@universalweb/acid';
 * assert(getHighest([{id: 1}, {id: 0}], 'id'), {id: 0});
 */
function getHighest(collection, propertyName = 'id') {
	return sortCollectionAscending(collection, propertyName)[0];
}

/**
 * Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
 * The order of grouped values is determined by the order they occur in collection.
 * The corresponding value of each key is an array of elements responsible for generating the key.
 *
 * @function groupBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {Function} iteratee - The iteratee to transform keys.
 * @returns {Object} - Returns the composed aggregate object.
 *
 * @example
 * import { groupBy, assert } from '@universalweb/acid';
 * assert(groupBy([6.1, 4.2, 6.3], Math.floor), { '4': [4.2], '6': [6.1, 6.3] });
 */
function groupBy(collection, iteratee) {
	const sortedObject = {};
	eachArray(collection, (item) => {
		const results = iteratee(item);
		if (!sortedObject[results]) {
			sortedObject[results] = [];
		}
		sortedObject[results].push(item);
	});
	return sortedObject;
}

/**
 * Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know the keys are unique.
 *
 * @function indexBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {String} propertyName - The property name to index by.
 * @returns {Object} - Returns the composed aggregate object.
 *
 * @example
 * import { indexBy, assert } from '@universalweb/acid';
 * const result = { "0": {name: 'test', id: 0}, "1": {name: 'test2', id: 1}};
 * const indexed = indexBy([{name: 'test', id: 0}, {name: 'test2', id: 1}], 'id');
 * assert(indexed, result);
 */
function indexBy(collection, propertyName = 'id') {
	const sortedObject = {};
	eachArray(collection, (item) => {
		sortedObject[item[propertyName]] = item;
	});
	return sortedObject;
}

/**
 * Invokes a function on the provided property name in each object in the collection.
 *
 * @function invokeCollection
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection from which method will be taken.
 * @param {String} property - Value used to pluck method from object.
 * @param {*} value - Value to be passed to callable property.
 * @returns {Array} - Returns the results of the invoked method.
 *
 * @example
 * import { invokeCollection, assert } from '@universalweb/acid';
 * const results = invokeCollection([{
 *   test(arg) { return [arg]; }
 * }], 'test', 'EXAMPLE');
 * assert(results, [['EXAMPLE']]);
 */
function invokeCollection(collection, property, value, thisBind) {
	if (thisBind) {
		return mapArray(collection, (item, index) => {
			return item[property].call(thisBind, value);
		});
	}
	return mapArray(collection, (item, index) => {
		return item[property](value);
	});
}

/**
 * Asynchronously awaits & invokes a function on the provided property name in each object in the collection.
 *
 * @function invokeCollectionAsync
 * @category collection
 * @type {Function}
 * @async
 * @param {Array} collection - Collection from which method will be taken.
 * @param {String} property - Value used to pluck method from object.
 * @param {*} value - Value to be passed to callable property.
 * @returns {Array} - Returns the results of the invoked method.
 *
 * @example
 * import { invokeCollectionAsync, assert } from '@universalweb/acid';
 * const results = await invokeCollectionAsync([{
 *   async test(arg) { return [arg]; }
 * }], 'test', 'EXAMPLE');
 * assert(results, [['EXAMPLE']]);
 */
function invokeCollectionAsync(collection, property, value, thisBind) {
	if (thisBind) {
		return mapAsyncArray(collection, (item) => {
			return item[property].call(thisBind, value);
		});
	}
	return mapAsyncArray(collection, async (item) => {
		return item[property](value);
	});
}

/**
 * Indexes a collection of items by the result of an iteratee or property name.
 * Like indexBy, but the second argument may be a function returning the key.
 *
 * @function keyBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of objects.
 * @param {Function|String} iteratee - Function returning the key, or a property name.
 * @returns {Object} - Object indexed by the resolved key.
 *
 * @example
 * import { keyBy, assert } from '@universalweb/acid';
 * const result = keyBy([{id: 'a'}, {id: 'b'}], 'id');
 * assert(result, {a: {id: 'a'}, b: {id: 'b'}});
 */
function keyBy(collection, iteratee) {
	const accumulator = {};
	const isFn = typeof iteratee === 'function';
	for (let index = 0; index < collection.length; index++) {
		const item = collection[index];
		const key = isFn ? iteratee(item, index, collection) : item[iteratee];
		accumulator[key] = item;
	}
	return accumulator;
}

/**
 * Returns an array of the plucked sources from the object. Sources are plucked in the order given by the array.
 *
 * @function pluckObject
 * @category object
 * @type {Function}
 * @param {Object} source - Array used to determine what sources to be plucked.
 * @param {String|Array} targets - Property name.
 * @returns {Array|undefined} - An array of plucked sources.
 *
 * @example
 * import { pluckObject, assert } from '@universalweb/acid';
 * assert(pluckObject({a: 1, b:3}, ['a','b']), [1, 3]);
 */
function pluckObject(source, targets) {
	if (!source) {
		return;
	} else if (isString(targets)) {
		return source[targets];
	}
	return mapArray(targets, (item) => {
		return source[item];
	});
}

/**
 * Returns an array of the plucked values from the collection.
 *
 * @function pluck
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array used to determine what value to be plucked.
 * @param {(String|Number|Array.<string, number>)} targets - Property name.
 * @returns {Array} - An array of plucked values.
 *
 * @example
 * import { pluck, assert } from '@universalweb/acid';
 * assert(pluck([{a: 1}, {a: 2}], 'a'), [1, 2]);
 * assert(pluck([{a: 1, b:3}, {a: 1, b:3}], ['a','b']), [[1, 3], [1, 3]]);
 */
function pluck(collection, targets) {
	return mapArray(collection, (item) => {
		return pluckObject(item, targets);
	});
}

function compare(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}
/**
 * Returns a new array sorted by the value returned from an iteratee or property name.
 * Stable sort, ascending order. Does not mutate the source.
 *
 * @function sortBy
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array of items to sort.
 * @param {Function|String} iteratee - Function returning the comparison key, or a property name.
 * @returns {Array} - New sorted array.
 *
 * @example
 * import { sortBy, assert } from '@universalweb/acid';
 * assert(sortBy([{n: 3}, {n: 1}, {n: 2}], 'n'), [{n: 1}, {n: 2}, {n: 3}]);
 */
function sortBy(collection, iteratee) {
	const isFn = typeof iteratee === 'function';
	return [...collection].sort((a, b) => {
		return compare(isFn ? iteratee(a) : a[iteratee], isFn ? iteratee(b) : b[iteratee]);
	});
}

function sortObjectsAlphabetically(previous, next, propertyName, ifMatch) {
	const previousKey = previous[propertyName];
	const nextKey = next[propertyName];
	if (previousKey === nextKey && ifMatch) {
		return ifMatch(previous, next, propertyName);
	}
	return previousKey.localeCompare(nextKey);
}
/**
 * Perform alphabetical A-Z sort on a collection with the provided key name. Mutates the array.
 *
 * @function sortCollectionAlphabetically
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - Name of property to compare.
 * @param {Function} ifMatch - A function which returns a number for the sort function if two object properties match.
 * @returns {Array} - The sorted array.
 *
 * @example
 * import { sortCollectionAlphabetically, assert } from '@universalweb/acid';
 * const result = [{"letter":"a"},{"letter":"c", g: 0},{"letter":"c", g: 2}, {letter:'f'}];
 * const collect = [{letter:'a'}, {letter:'f'}, {"letter":"c", g: 2}, {letter:'c', g: 0}];
 * const prop = 'letter';
 * function ifMatchSort(c, n) {
 * if (c.g < n.g) {
 * return -1;
 * }
 * if (c.g > n.g) {
 * return 1;
	* }
 * }
 * assert(sortCollectionAlphabetically(collect, prop, ifMatchSort), result);
 */
function sortCollectionAlphabetically(collection, propertyName = 'id', ifMatch) {
	return collection.sort((previous, next) => {
		return sortObjectsAlphabetically(previous, next, propertyName, ifMatch);
	});
}

function sortObjectsAlphabeticallyReverse(previous, next, propertyName, ifMatch) {
	const previousKey = previous[propertyName];
	const nextKey = next[propertyName];
	if (previousKey === nextKey && ifMatch) {
		return ifMatch(previous, next, propertyName);
	}
	return nextKey.localeCompare(previousKey);
}
/**
 * Perform alphabetical in reverse Z-A sort on a collection with the provided key name. Mutates the array.
 *
 * @function sortCollectionAlphabeticallyReverse
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection to be sorted.
 * @param {String} propertyName - Name of property to compare.
 * @param {Function} ifMatch - A function which returns a number for the sort function if two object properties match.
 * @returns {Array} - The sorted array.
 *
 * @example
 * import { sortCollectionAlphabeticallyReverse, assert } from '@universalweb/acid';
 * const result = [{letter:'f'},{"letter":"c"}, {"letter":"a"}];
 * const collect = [{letter:'a'}, {letter:'f'}, {"letter":"c"}];
 * const prop = 'letter';
 * assert(sortCollectionAlphabeticallyReverse(collect, prop), result);
 */
function sortCollectionAlphabeticallyReverse(collection, propertyName = 'id', ifMatch) {
	return collection.sort((previous, next) => {
		return sortObjectsAlphabeticallyReverse(previous, next, propertyName, ifMatch);
	});
}

/**
 * Return the file extension.
 *
 * @function getFileExtension
 * @category file
 * @param {*} source - Object to be checked.
 * @returns {String|undefined} - Returns the extension.
 *
 * @example
 * import { getFileExtension, assert } from '@universalweb/acid';
 * assert(getFileExtension('test.js'),'js');
 */
function getFileExtension(source) {
	if (source) {
		return source.substring(source.lastIndexOf('.') + 1);
	}
}

/**
 * Return the file extension.
 *
 * @function getFilename
 * @category file
 * @param {*} source - Object to be checked.
 * @returns {String|undefined} - Returns the extension.
 *
 * @example
 * import { getFilename, assert } from '@universalweb/acid';
 * assert(getFilename('./universalweb/test.js'),'test.js');
 */
function getFilename(source) {
	if (source) {
		return source.substring(source.lastIndexOf('/') + 1);
	}
}

function regexTestFactory(regexType) {
	return (item) => {
		return (hasValue(item)) ? regexType.test(item) : false;
	};
}

/**
 * Checks if the string has a .css extension.
 *
 * @function isFileCSS
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFileCSS, assert } from '@universalweb/acid';
 * assert(isFileCSS('test.css'), true);
 */
const isFileCSS = regexTestFactory(/\.css$/);

/**
 * Checks if the string has a .html extension.
 *
 * @function isFileHTML
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFileHTML, assert } from '@universalweb/acid';
 * assert(isFileHTML('test.html'), true);
 */
const isFileHTML = regexTestFactory(/\.html$/);

/**
 * Checks if the string has a .js extension.
 *
 * @function isFileJS
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFileJS, assert } from '@universalweb/acid';
 * assert(isFileJS('test.js'), true);
 */
const isFileJS = regexTestFactory(/\.js$/);

/**
 * Checks if the string has a .json extension.
 *
 * @function isFileJSON
 * @category file
 * @param {String} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFileJSON, assert } from '@universalweb/acid';
 * assert(isFileJSON('test.json'), true);
 */
const isFileJSON = regexTestFactory(/\.json$/);

/**
 * Creates a function that executes callable, only after being called n times.
 *
 * @function after
 * @category function
 * @type {Function}
 * @param {Number} amount - The number of calls until method is invoked.
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @example
 * import { after, assert } from '@universalweb/acid';
 * const onlyAfter = after(2, (item) => item);
 * assert(onlyAfter(1), undefined);
 * assert(onlyAfter(2), 2);
 */
function after(amount, callable) {
	let point = amount;
	let value;
	const onlyAfter = (...args) => {
		if (point !== null) {
			point--;
		}
		if (point <= 0) {
			value = callable(...args);
			point = null;
		}
		return value;
	};
	return onlyAfter;
}

/**
 * Creates a function that invokes callable, with up to n arguments, ignoring any additional arguments.
 *
 * @function ary
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to cap arguments for.
 * @param {Number} amount - The arity cap.
 * @returns {Object} - Returns the new capped function.
 *
 * @example
 * import { ary, assert } from '@universalweb/acid';
 * assert(ary((...args) => { return args;}, 2)(1, 2, 3), [1, 2]);
 */
function ary(callable, amount) {
	return (...args) => {
		return callable(...args.splice(0, amount));
	};
}

/**
 * Creates a function that executes callable, only before n times.
 *
 * @function before
 * @category function
 * @type {Function}
 * @param {Number} amount - The number of calls before n.
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @example
 * import { before, assert } from '@universalweb/acid';
 * const onlyBefore = before(3, () => { return 1;});
 * assert(onlyBefore(1), 1);
 */
function before(amount, callable) {
	let point = amount;
	let value;
	const onlyBefore = (...args) => {
		if (point !== null) {
			point--;
		}
		if (point >= 1) {
			value = callable(...args);
		} else {
			point = null;
		}
		return value;
	};
	return onlyBefore;
}

/**
 * Asynchronously iterates through the given object.
 *
 * @function eachAsyncObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, array of keys, and additionalArg.
 * @param {*} thisCall - Iteratee called with thisCall as this.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Object|Function|undefined} - Returns source.
 *
 * @example
 * import { eachAsyncObject, assert } from '@universalweb/acid';
 * const collected = {};
 * await eachAsyncObject({a: 1, b: 2, c: 3}, async (item, key) => {
 *   collected[key] = item;
 * });
 * assert(collected, {a: 1, b: 2, c: 3});
 */
const eachAsyncObject = async (source, iteratee, thisCall, additionalArg) => {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	if (hasValue(thisCall)) {
		await eachAsyncArray(objectKeys, (key, index, array, propertyCount) => {
			return iteratee.call(thisCall, source[key], key, source, propertyCount, objectKeys, additionalArg);
		});
	} else {
		await eachAsyncArray(objectKeys, (key, index, array, propertyCount) => {
			return iteratee(source[key], key, source, propertyCount, objectKeys, additionalArg);
		});
	}
	return source;
};

/**
 * Iterates through the given object.
 *
 * @function eachObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Object|Function|undefined} - Returns the calling object.
 *
 * @example
 * import { eachObject, assert } from '@universalweb/acid';
 * assert(eachObject({a: 1, b: 2, c: 3}, (item) => {
 *   console.log(item);
 * }), {a: 1, b: 2, c: 3});
 */
function eachObject(source, iteratee, thisCall, additionalArg) {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	if (hasValue(thisCall)) {
		eachArray(objectKeys, (key, index, objectKeysArray, propertyCount) => {
			iteratee.call(thisCall, source[key], key, source, propertyCount, objectKeysArray, additionalArg);
		});
	} else {
		eachArray(objectKeys, (key, index, objectKeysArray, propertyCount) => {
			iteratee(source[key], key, source, propertyCount, objectKeysArray, additionalArg);
		});
	}
	return source;
}

async function forEachAsync(source, callback) {
	const values = [];
	const properties = [];
	let valuesLength = 0;
	source.forEach((item, key) => {
		values[valuesLength] = item;
		properties[valuesLength] = item;
		valuesLength++;
	});
	for (let index = 0; index < valuesLength; index++) {
		await callback(values[index], properties[index]);
	}
	return source;
}

/**
 * Checks if an object(s) is a Set.
 *
 * @function isSet
 * @category type
 * @param {...*} sources - Objects to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isSet, assert } from '@universalweb/acid';
 * assert(isSet(new Set()), true);
 */
const isSetCall = isConstructorFactory(Set);
const isSet = isTypeFactory(isSetCall);

function forOf(source, iteratee) {
	if (isSet(source)) {
		for (const value of source) {
			iteratee(value, source);
		}
		return source;
	}
	for (const [
		key,
		value
	] of source) {
		iteratee(value, key, source);
	}
	return source;
}

/**
 * Checks if an object or objects are a Int16Array.
 *
 * @function isGenerator
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isGenerator } from '@universalweb/acid';
 * isGenerator(function* (){});
 * // => true
 */
const isGeneratorCall = isTypeNameFactory('GeneratorFunction');
const isGenerator = isTypeFactory(isGeneratorCall);

async function forOfAsync(source, iteratee, generatorArgs) {
	if (isSet(source)) {
		for (const value of source) {
			await iteratee(value, source);
		}
		return source;
	}
	if (isGenerator(source)) {
		for await (const item of source(...generatorArgs)) {
			await iteratee(item, source);
		}
	}
	for (const [key, value] of source) {
		await iteratee(value, key, source);
	}
	return source;
}

/**
 * Checks if an object is an async function.
 *
 * @function isAsync
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isAsync, assert } from '@universalweb/acid';
 * assert(isAsync(async() => {}), true);
 */
const isAsyncCall = isTypeNameFactory('AsyncFunction');
const isAsync = isTypeFactory(isAsyncCall);

function generateLoop(arrayLoop, arrayLoopAsync, objectLoop, objectLoopAsync, forOfLoop, forOfLoopAsync) {
	return (source, iteratee, argument1, argument2, argument3) => {
		let returned;
		const isIterateeAsync = isAsync(iteratee);
		if (!hasValue(source) || !iteratee) {
			return;
		} else if (isArray(source)) {
			returned = isIterateeAsync ? arrayLoopAsync : arrayLoop;
		} else if (isPlainObject(source) || isFunction(source)) {
			returned = isIterateeAsync ? objectLoopAsync : objectLoop;
		} else if (forOfLoop) {
			returned = isIterateeAsync ? forOfLoopAsync : forOfLoop;
		} else if (isGenerator(source)) {
			returned = forOfLoopAsync;
		} else {
			returned = isIterateeAsync ? objectLoopAsync : objectLoop;
		}
		return returned(source, iteratee, argument1, argument2, argument3);
	};
}

/**
 * Iterates through the given object.
 *
 * @function each
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array | object | Function} - The originally given object.
 *
 * @example
 * import { each, assert } from '@universalweb/acid';
 * const list = {};
 * each({a: 1, b: 2, c: 3}, (item, key) => {
 *   list[key] = item;
 * });
 * assert(list, {a: 1, b: 2, c: 3});
 */
const each = generateLoop(eachArray, eachAsyncArray, eachObject, eachAsyncObject, forOf, forOfAsync);

class Chain {
	constructor(methods) {
		this.addChainMethod(methods);
	}
	addChainMethod(methods) {
		const thisChain = this;
		each(methods, (method, methodName) => {
			thisChain[methodName] = function(...args) {
				this.value = method.call(thisChain, thisChain.value, ...args);
				return thisChain;
			};
		});
	}
	setValue(value) {
		this.value = value;
		return this;
	}
	done() {
		const value = this.value;
		this.value = null;
		return value;
	}
	value = null;
}
/**
 * Creates a chainable set of functions.
 *
 * @function chain
 * @category function
 * @type {Function}
 * @param {Array|Object} config - The object to take methods from.
 * @returns {*} - Returns a function which has value, methods, add, and done. When invoking the function the argument is saved as the value property for further chaining.
 *
 * @example
 * import { chain, assert } from '@universalweb/acid';
 * const chained = chain({
 * 	a(value, c) {
 * 		return value + c;
 * 	}
 * }).setValue(2).a(1).done();
 * assert(chained, 3);
 */
function chain(config) {
	return construct(Chain, [config]);
}

/**
 * Creates a function that iterates predicate/handler pairs and invokes the first handler whose predicate returns truthy.
 * Each pair is `[predicate, handler]`. Predicate and handler each receive the same arguments.
 *
 * @function cond
 * @category function
 * @type {Function}
 * @param {Array<Array<Function>>} pairs - Array of [predicate, handler] pairs.
 * @returns {Function} - The new wrapped function.
 *
 * @example
 * import { cond, assert } from '@universalweb/acid';
 * const fn = cond([
 *   [(n) => n < 0, () => 'neg'],
 *   [(n) => n === 0, () => 'zero'],
 *   [() => true, () => 'pos']
 * ]);
 * assert(fn(-1), 'neg');
 * assert(fn(0), 'zero');
 * assert(fn(2), 'pos');
 */
function cond(pairs) {
	return function(...args) {
		for (const [predicate, handler] of pairs) {
			if (predicate.apply(this, args)) {
				return handler.apply(this, args);
			}
		}
	};
}

/**
 * Returns a function that always returns the given value.
 *
 * @function constant
 * @category function
 * @type {Function}
 * @param {*} value - Value to return.
 * @returns {Function} - Function that returns the value.
 *
 * @example
 * import { constant, assert } from '@universalweb/acid';
 * const always7 = constant(7);
 * assert(always7(), 7);
 */
function constant(value) {
	return () => value;
}

/**
 * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method length is not sufficient.
 *
 * @function curry
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to curry.
 * @param {Number} arity - The arity of method.
 * @returns {*} - Returns the new curried function.
 *
 * @example
 * import { curry, assert } from '@universalweb/acid';
 * const result = curry((a, b, c) => {
 *   return [a, b, c];
 * })(1)(2)(3);
 * assert(result, [1, 2, 3]);
 */
function curry(callable, arity = callable.length) {
	const curries = [];
	const curried = (...curryArgs) => {
		curries.push(...curryArgs);
		if (curries.length === arity) {
			const result = callable(...curries);
			clearArray(curries);
			return result;
		}
		return curried;
	};
	return curried;
}

/**
 * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method.length is not sufficient. The arguments are given in reverse order.
 *
 * @function curryRight
 * @type {Function}
 * @param {Function} callable - The function to curry.
 * @param {Number} arity - The arity of method.
 * @returns {*} - Returns the new curried function.
 *
 * @example
 * import { curryRight, assert } from '@universalweb/acid';
 * const result = curryRight((a, b, c) => {
 *   return [a, b, c];
 * })(1)(2)(3);
 * assert(result, [3, 2, 1]);
 */
function curryRight(callable, arity = callable.length) {
	const curries = [];
	const curried = (...curryArgs) => {
		curries.unshift(...curryArgs);
		if (curries.length === arity) {
			const result = callable(...curries);
			clearArray(curries);
			return result;
		}
		return curried;
	};
	return curried;
}

class Timers {
	list = construct(Map);
	/**
	 * Remove a timer that was created using the timer function.
	 *
	 * @param {Number} id - The id of the timer to remove.
	 * @returns {undefined} - Returns nothing.
	 *
	 * @example
	 * import { timer, assert } from '@universalweb/acid';
	 * timer(() => {}, 100);
	 * // => 0
	 */
	remove(id) {
		clearTimeout(id);
		this.list.delete(id);
	}
	has(id) {
		return this.list.has(id);
	}
	get(id) {
		return this.list.get(id);
	}
	/**
	 * Create a timer and add it to the list of timers.
	 *
	 * @type {Function}
	 * @param {Function} callable - The function to be invoked.
	 * @param {Number} time - The time in milliseconds.
	 * @returns {Object} - Returns setTimeoutId ID.
	 *
	 * @example
	 * import { timers, assert } from '@universalweb/acid';
	 * timers.set(() => {}, 100);
	 * // => 0
	 */
	set(callable, time) {
		const currentThis = this;
		const id = setTimeout(() => {
			callable();
			currentThis.remove(id);
		}, time);
		this.list.set(id, true);
		return id;
	}
	/**
	 * Clear all active timers.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { timers, assert } from '@universalweb/acid';
	 * timers.clear();
	 * // => undefined
	 */
	clear() {
		const currentThis = this;
		currentThis.list.forEach((id) => {
			currentThis.remove(id);
		});
	}
}
const timers = construct(Timers);
/**
 * Timer wrapper.
 *
 * @function timer
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Number} time - The time in milliseconds.
 * @returns {Object} - Returns setTimeoutId ID.
 *
 * @example
 * import { timer, assert } from '@universalweb/acid';
 * timer(() => {}, 100);
 * // => 0
 */
function timer(callable, time) {
	return timers.set(callable, time);
}
/**
 * Clears all timers tracked by the Timers registry.
 *
 * @function clearTimers
 * @category utility
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * import { clearTimers } from '@universalweb/acid';
 * clearTimers();
 */
function clearTimers() {
	timers.clear();
}

const applyNative = Reflect.apply;
/**
 * Calls a target function with an optional "this" and optional arguments as specified. Same as Reflect.apply but with a function check.
 *
 * @function apply
 * @category function
 * @param {Function} target - The target function to call.
 * @param {*} thisArgument - Array like object.
 * @param {Array} argumentsList - An array-like object specifying the arguments with which target should be called.
 * @returns {*} - The result of calling the given target function with the specified this value and arguments.
 *
 * @example
 * import { apply, assert } from '@universalweb/acid';
 * assert(apply(function (a) {return a;}, undefined, [2]), 2);
 */
function apply(target, thisArgument, argumentsList) {
	if (isFunction(target)) {
		return applyNative(target, thisArgument, argumentsList);
	}
}

/**
 * Creates a debounced function that delays invoking callable until after milliseconds have elapsed since the last time the debounced function was invoked. The debounce function has a clear method to cancel the timer.
 *
 * @function debounce
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Number} time - The time in milliseconds.
 * @returns {Function} - The debounced function.
 *
 * @example
 * import { debounce, assert } from '@universalweb/acid';
 * const result = await new Promise((resolve) => {
 *   const debounced = debounce(() => resolve('debounced'), 0);
 *   debounced();
 * });
 * assert(result, 'debounced');
 */
function debounce(callable, time) {
	function debounced(...args) {
		if (debounced.id !== false) {
			timers.remove(debounced.id);
		}
		debounced.id = timer(() => {
			debounced.callable(...args);
			debounced.id = false;
		}, time);
	}
	debounced.id = false;
	debounced.callable = callable.bind(debounced);
	debounced.clear = () => {
		if (debounced.id !== false) {
			timers.remove(debounced.id);
			debounced.id = false;
		}
	};
	return debounced;
}

/**
 * Checks if the given method is a function. If it is then it invokes it with the given arguments.
 *
 * @function ifInvoke
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked if possible.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args - Arguments to pass to the function.
 * @returns {*} - Returns the method invoked or undefined.
 *
 * @example
 * import { ifInvoke, assert } from '@universalweb/acid';
 * assert(ifInvoke((...args) => args, null, 1, 2), [1, 2]);
 */
function ifInvoke(callable, thisBind, ...args) {
	if (isFunction(callable)) {
		if (thisBind) {
			return callable.call(thisBind, ...args);
		}
		return callable(...args);
	}
}

/**
 * Creates a function that negates the result of the predicate callable.
 *
 * @function negate
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @returns {*} - Returns the given methods result.
 *
 * @example
 * import { negate, assert } from '@universalweb/acid';
 * assert(negate(() => false)(), true);
 */
function negate(callable) {
	return (...args) => {
		return !callable(...args);
	};
}

/**
 * Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.
 *
 * @function nthArg
 * @category function
 * @type {Function}
 * @param {Number} [index = 0] - The index of the argument to return.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @example
 * import { nthArg, assert } from '@universalweb/acid';
 * assert(nthArg(1)('a', 'b'), 'b');
 */
function nthArg(index = 0) {
	return (...args) => {
		return args[index];
	};
}

/**
 * Creates a function that is restricted to execute method once. Repeat calls to the function will return the value of the first call. The method is executed with the this binding of the created function.
 *
 * @function once
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @example
 * import { once, assert } from '@universalweb/acid';
 * const onceOnly = once((item) => item);
 * onceOnly(5);
 * assert(onceOnly(3), 5);
 */
const once = (callable) => {
	let value;
	const onlyOnce = (...args) => {
		if (!hasValue(value)) {
			value = callable(...args);
		}
		return value;
	};
	return onlyOnce;
};

/**
 * Returns a new empty object of the same type.
 *
 * @function cloneType
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { cloneType, assert } from '@universalweb/acid';
 * assert(cloneType([1]), []);
 */
function cloneType(source, args = []) {
	const sourceType = getType(source);
	if (sourceType === Function) {
		if (sourceType.name === 'function') {
			return function() {};
		}
	}
	return construct(sourceType, args);
}

/**
 * Iterates through (using for of) the calling object and creates an object with the results of the iteratee on every element in the calling object.
 *
 * @function forOfMap
 * @category utility
 * @type {Function}
 * @param {Map|Set|Array} source - Iterable that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, and calling object.
 * @param {Map|Set|Array} resultsObject - Object that will be used to assign results else source is type cloned.
 * @returns {Map|Set|Array} - An object with mapped values.
 *
 * @example
 * import { forOfMap, assert } from '@universalweb/acid';
 * assert(forOfMap([1, 2, 3], (item) => item * 2), [2, 4, 6]);
 */
function forOfMap(source, iteratee = returnValue, resultsObject) {
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = iteratee(value, results, source);
			methodPushBound(result);
		}
		return results;
	}
	const methodSet = isFunction(results.set);
	for (const [key, value] of source) {
		const result = iteratee(value, key, results, source);
		if (methodSet) {
			results.set(key, result);
		} else {
			results[key] = result;
		}
	}
	return results;
}

/**
 * Asynchronously iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfMapAsync
 * @category utility
 * @type {Function}
 * @param {Map|Set|Array} source - Iterable that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, and calling object.
 * @param {Map|Set|Array} resultsObject - Object that will be used to assign results.
 * @returns {Map|Set|Array} - An object with the mapped values.
 *
 * @example
 * import { forOfMapAsync, assert } from '@universalweb/acid';
 * assert(await forOfMapAsync([1, 2, 3], async (item) => item * 2), [2, 4, 6]);
 */
async function forOfMapAsync(source, iteratee = returnValue, resultsObject, generatorArgs) {
	if (isGenerator(source)) {
		const resultsGenerator = [];
		for await (const item of source(...generatorArgs)) {
			resultsGenerator.push(await iteratee(item, resultsGenerator, source));
		}
		return resultsGenerator;
	}
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = await iteratee(value, results, source);
			methodPushBound(result);
		}
		return results;
	}
	const methodSet = isFunction(results.set);
	for await (const [key, value] of source) {
		const result = await iteratee(value, key, results, source);
		if (methodSet) {
			results.set(key, result);
		} else {
			results[key] = result;
		}
	}
	return results;
}

/**
 * Asynchronously iterates through the calling object and creates an object with the results of the iteratee on every element in the calling object.
 *
 * @function mapObjectAsync
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function|undefined} - An object of the same calling object's type.
 *
 * @example
 * import { mapAsyncObject, assert } from '@universalweb/acid';
 * assert(await mapAsyncObject({a: 1, b: undefined, c: 3}, (item) => {
 *   return item;
 * }), {a: 1, b: undefined, c: 3});
 */
async function mapAsyncObject(source, iteratee, results = {}) {
	if (!source) {
		return;
	}
	await eachAsyncObject(source, async (item, key, thisObject, propertyCount, objectKeys) => {
		results[key] = await iteratee(item, key, results, thisObject, propertyCount, objectKeys);
	});
	return results;
}

/**
 * Iterates through the calling object and creates an object with the results of the iteratee on every element in the calling object.
 *
 * @function mapObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Object|Function|undefined} - An object of the same calling object's type.
 *
 * @example
 * import { mapObject, assert } from '@universalweb/acid';
 * assert(mapObject({a: 1, b: undefined, c: 3}, (item) => {
 *   return item;
 * }), {a: 1, b: undefined, c: 3});
 */
function mapObject(source, iteratee, results = {}, thisCall, additionalArg) {
	if (!source) {
		return;
	}
	if (hasValue(thisCall)) {
		eachObject(source, (item, key, original, propertyCount, objectKeys) => {
			results[key] = iteratee.call(thisCall, item, key, results, original, propertyCount, objectKeys, additionalArg);
		});
	} else {
		eachObject(source, (item, key, original, propertyCount, objectKeys) => {
			results[key] = iteratee(item, key, results, original, propertyCount, objectKeys, additionalArg);
		});
	}
	return results;
}

/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results of the iteratee on every element in the calling object.
 *
 * @function map
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {Object | Function} [results = {}] - Object that will be used to assign results.
 * @param {*} thisCall - An object to be given each time to the iteratee.
 * @param {*} additionalArg - An object to be given each time to the iteratee.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 *
 * @example
 * import { map, assert } from '@universalweb/acid';
 * assert(map({a: 1, b: 2, c: 3}, (item) => {
 *   return item * 2;
 * }), {a: 2, b: 4, c: 6});
 */
const map = generateLoop(mapArray, mapAsyncArray, mapObject, mapAsyncObject, forOfMap, forOfMapAsync);

/**
 * Creates a function that invokes iteratee with the arguments it receives and returns their results.
 *
 * @function over
 * @category function
 * @type {Function}
 * @param {(Array.<function>|Object.<function>)} iteratees - The list of functions to loop through.
 * @returns {Function} - Returns the new over wrapped function.
 *
 * @example
 * import { over, assert } from '@universalweb/acid';
 * assert(over([Math.max, Math.min])(1, 2, 3, 4), [4, 1]);
 */
function over(iteratees) {
	return (...args) => {
		return map(iteratees, (item) => {
			return item(...args);
		});
	};
}

/**
 * Creates a function that asynchronously invokes iteratee with the arguments it receives and returns their results.
 *
 * @function overAsync
 * @category function
 * @type {Function}
 * @param {(Array.<function>|Object.<function>)} iteratees - The list of functions to loop through.
 * @returns {Function} - Returns the new over wrapped function.
 *
 * @example
 * import { overAsync, assert } from '@universalweb/acid';
 * assert(await overAsync([async (...items) => Math.max(...items)])(1, 2, 3, 4), [4]);
 */
function overAsync(iteratees) {
	return async (...args) => {
		return map(iteratees, async (item) => {
			return item(...args);
		});
	};
}

/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function everyAsyncObject
 * @category object
 * @type {Function}
 * @param {Object} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {Boolean|undefined} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { everyAsyncObject, assert } from '@universalweb/acid';
 * const result =  await everyAsyncObject({a: true, b: true, c: true}, (item) => {
 *   return item;
 * });
 * assert(result, true);
 */
async function everyAsyncObject(source, iteratee) {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	return everyAsyncArray(objectKeys, (key, index, original, propertyCount) => {
		return iteratee(source[key], key, source, propertyCount, original);
	});
}

/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function everyObject
 * @category object
 * @type {Function}
 * @param {Object} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {Boolean|undefined} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { everyObject, assert } from '@universalweb/acid';
 * const result =  everyObject({a: true, b: true, c: true}, (item) => {
 *   return item;
 * });
 * assert(result, true);
 */
function everyObject(source, iteratee) {
	if (!source) {
		return;
	}
	const objectKeys = keys(source);
	return everyArray(objectKeys, (key, index, original, propertyCount) => {
		return iteratee(source[key], key, source, propertyCount, original);
	});
}

/**
 * Iterates (for of) through the given object while the iteratee returns true using a for of loop.
 *
 * @function forOfEvery
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @returns {Boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { forOfEvery, assert } from '@universalweb/acid';
 * assert(forOfEvery([true, true, true], (item) => item), true);
 * assert(forOfEvery([true, false, true], (item) => item), false);
 */
function forOfEvery(source, iteratee = returnValue) {
	if (isArray(source) || isSet(source)) {
		for (const value of source) {
			const result = iteratee(value, source);
			if (result === false) {
				return false;
			}
		}
	} else {
		for (const [key, value] of source) {
			const result = iteratee(value, key, source);
			if (result === false) {
				return false;
			}
		}
	}
	return true;
}

/**
 * Asynchronously iterates (for of) through the given object while the iteratee returns true using a for of loop.
 *
 * @function forOfEveryAsync
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @returns {Boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { forOfEveryAsync, assert } from '@universalweb/acid';
 * assert(await forOfEveryAsync([true, true, true], async (item) => item), true);
 * assert(await forOfEveryAsync([true, false, true], async (item) => item), false);
 */
async function forOfEveryAsync(source, iteratee = returnValue, generatorArgs) {
	if (isGenerator(source)) {
		for await (const item of source(...generatorArgs)) {
			const result = await iteratee(item, source);
			if (result === false) {
				return false;
			}
		}
	} else if (isArray(source) || isSet(source)) {
		for (const value of source) {
			const result = await iteratee(value, source);
			if (result === false) {
				return false;
			}
		}
	} else {
		for (const [key, value] of source) {
			const result = await iteratee(value, key, source);
			if (result === false) {
				return false;
			}
		}
	}
	return true;
}

/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function every
 * @category utility
 * @type {Function}
 * @param {Object | Array | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {Boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { every, assert } from '@universalweb/acid';
 * assert(every({a: false, b: true, c: true}, (item) => {
 *  return item;
 * }), false);
 */
const every = generateLoop(everyArray, everyAsyncArray, everyObject, everyAsyncObject, forOfEvery, forOfEveryAsync);

/**
 * Creates a function that checks if all of the predicates return truthy when invoked with the arguments it receives.
 *
 * @function overEvery
 * @category function
 * @type {Function}
 * @param {(Array.<function>|Object.<function>)} predicates - The list of functions to loop through.
 * @returns {Function} - Returns the new overEvery wrapped function.
 *
 * @example
 * import { overEvery, assert } from '@universalweb/acid';
 * assert(overEvery([Boolean, isFinite])('1'), true);
 */
function overEvery(predicates) {
	return (arg) => {
		return every(predicates, (predicate) => {
			return predicate(arg);
		});
	};
}

const regexToPath = /\.|\[/;
const regexCloseBracket = /]/g;
const emptyString = '';
/**
 * Breaks up string into object chain list.
 *
 * @function toPath
 * @type {Function}
 * @category utility
 * @param {String} source - String to be broken up.
 * @returns {Array} - Array used to go through object chain.
 *
 * @example
 * import { toPath, assert } from '@universalweb/acid';
 * assert(toPath('post.like[2]'), ['post', 'like', '2']);
 */
function toPath(source) {
	return source.replace(regexCloseBracket, emptyString).split(regexToPath);
}

/**
 * Returns property on an object.
 *
 * @function get
 * @category utility
 * @type {Function}
 * @param {String} propertyString - String used to retrieve properties.
 * @param {Object} target - Object which has a property retrieved from it.
 * @returns {Object} - Returns property from the given object.
 *
 * @example
 * import { get, assert } from '@universalweb/acid';
 * const objectTarget = {
 *   post: {
 *     like: ['a','b','c']
 *   }
 * };
 * assert(get('post.like[2]', objectTarget), 'c');
 */
function get(propertyString, target) {
	if (!target) {
		return false;
	}
	let link = target;
	const pathArray = isArray(propertyString) ? propertyString : toPath(propertyString);
	everyArray(pathArray, (item) => {
		link = link[item];
		return hasValue(link);
	});
	return link;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @function property
 * @category function
 * @type {Function}
 * @param {String|Array} path - Property path.
 * @returns {Function} - Function that takes an object and returns the value at path.
 *
 * @example
 * import { property, assert } from '@universalweb/acid';
 * assert(property('a.b')({a: {b: 5}}), 5);
 */
function property(path) {
	return (object) => get(path, object);
}
/**
 * Creates a function that returns the value at `path` from a fixed `object`.
 *
 * @function propertyOf
 * @category function
 * @type {Function}
 * @param {Object} object - Object to read from.
 * @returns {Function} - Function that takes a path and returns the value at that path.
 *
 * @example
 * import { propertyOf, assert } from '@universalweb/acid';
 * assert(propertyOf({a: {b: 5}})('a.b'), 5);
 */
function propertyOf(object) {
	return (path) => get(path, object);
}

/**
 * Creates a function that invokes method with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
 *
 * @function reArg
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Array} indexes - The arranged argument indexes.
 * @returns {Function} - Returns the new function.
 *
 * @example
 * import { reArg, assert } from '@universalweb/acid';
 * assert(reArg((a, b, c) => [a, b, c], [1, 2, 0])(1, 2, 3), [2, 3, 1]);
 */
function reArg(callable, indexes) {
	return (...args) => {
		return callable(...indexes.map((item) => {
			return args[item];
		}));
	};
}

/**
 * Creates a throttled function that only invokes callable at most once per every milliseconds. The throttle function has a clear method to cancel the timer.
 *
 * @function throttle
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Number} time - The time in milliseconds.
 * @returns {Function|undefined} - The throttled function.
 *
 * @example
 * import { throttle, assert } from '@universalweb/acid';
 * let calls = 0;
 * const throttled = throttle(() => { calls++; }, 50);
 * throttled(); throttled(); throttled();
 * assert(calls, 1);
 */
function throttle(callable, time) {
	function throttled(...args) {
		if (throttled.id) {
			throttled.shouldThrottle = true;
			return;
		}
		throttled.callable(...args);
		throttled.id = timer(() => {
			if (throttled.shouldThrottle) {
				throttled.callable(...args);
			}
			throttled.id = false;
		}, time);
	}
	throttled.id = false;
	throttled.callable = callable.bind(throttled);
	throttled.clear = () => {
		timers.remove(throttled.id);
		throttled.id = false;
	};
	return throttled;
}

/**
 * Creates a function that provides value to wrapper as its first argument. The wrapper function is given two arguments the value and the provided argument from the newly created function.
 *
 * @function wrap
 * @category function
 * @type {Function}
 * @param {*} value - The value to wrap.
 * @param {Function} wrapper - The wrapper function.
 * @returns {Function} - The new function.
 *
 * @example
 * import { wrap, assert } from '@universalweb/acid';
 * const greet = wrap('Lucy', (firstName, lastName) => `My name is ${firstName} ${lastName}.`);
 * assert(greet('Diamonds'), 'My name is Lucy Diamonds.');
 */
function wrap(value, wrapper) {
	return (...arg) => {
		return wrapper(value, ...arg);
	};
}

const functionPrototype = Function.prototype;
/**
 * Caches a prototype method.
 *
 * @function cacheNativeMethod
 * @category utility
 * @type {Function}
 * @param {Function} method - Prototype method.
 * @returns {Function} - Cached method.
 *
 * @example
 * import { cacheNativeMethod, assert } from '@universalweb/acid';
 * assert(cacheNativeMethod(Array.prototype.push)([], 1), 1);
 */
function cacheNativeMethod(method) {
	return functionPrototype.call.bind(method);
}

/**
 * Returns an array of all properties (enumerable or not) found directly upon a given object.
 *
 * @function getPropNames
 * @category object
 * @ignoreTest
 * @param {Object} source - The object whose enumerable and non-enumerable own properties are to be returned.
 * @returns {Object} - An array of strings that correspond to the properties found directly upon the given object.
 *
 * @example
 * import { getPropNames, assert } from '@universalweb/acid';
 * assert(getPropNames({ 0: 'a', 1: 'b', 2: 'c' }), ['0', '1', '2']);
 */
const getPropNames = Object.getOwnPropertyNames;
/**
 * Returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.
 *
 * @function getPropDesc
 * @category object
 * @ignoreTest
 * @param {Object} target - The target object.
 * @param {String} property - The name of the property whose description is to be retrieved.
 * @returns {Object} - A property descriptor of the given property if it exists on the object, undefined otherwise.
 *
 * @example
 * getPropDesc({ bar: 42 }, 'bar');
 * // => { configurable: true, enumerable: true, value: 42, writable: true }
 */
const getPropDesc = Object.getOwnPropertyDescriptor;
/**
 * Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
 *
 * @function defProp
 * @category object
 * @ignoreTest
 * @param {Object} target - The object on which to define the property.
 * @param {String} property - The name of the property whose description is to be retrieved.
 * @param {Object} descriptor - The descriptor for the property being defined or modified.
 * @returns {Object} - The object that was passed to the function.
 *
 * @example
 * defProp({}, 'key', {
 *  enumerable: false,
 *  configurable: false,
 *  writable: false,
 *  value: 'static'
 * }).key;
 * // => 'static'
 */
const defProp = Object.defineProperty;
const hasProp = cacheNativeMethod(Object.hasOwnProperty);

/**
 * Determines whether two values are the same value.
 *
 * @function isSame
 * @category object
 * @param {*} source - Value to compare to.
 * @param {*} target - A value to compare.
 * @returns {Boolean} - A Boolean indicating whether or not the two arguments are the same value.
 *
 * @example
 * import { isSame, assert } from '@universalweb/acid';
 * assert(isSame('foo', 'foo'), true);
 */
const isSame = Object.is;

/**
 * Adds two numbers.
 *
 * @function add
 * @category math
 * @type {Function}
 * @param {Number} augend - First number.
 * @param {Number} addend - Second number which is being added to another (augend).
 * @returns {Number} - Returns the sum of the arguments.
 *
 * @example
 * import { add, assert } from '@universalweb/acid';
 * assert(add(1, 1), 2);
 */
function add(augend, addend) {
	return augend + addend;
}

/**
 * Constrains a number to lie within an inclusive range.
 *
 * @function clamp
 * @category math
 * @type {Function}
 * @param {Number} value - The number to clamp.
 * @param {Number} lower - The lower bound (inclusive).
 * @param {Number} upper - The upper bound (inclusive).
 * @returns {Number} - Returns the clamped value.
 *
 * @example
 * import { clamp, assert } from '@universalweb/acid';
 * assert(clamp(15, 0, 10), 10);
 * assert(clamp(-5, 0, 10), 0);
 * assert(clamp(5, 0, 10), 5);
 */
function clamp(value, lower, upper) {
	if (value < lower) {
		return lower;
	}
	if (value > upper) {
		return upper;
	}
	return value;
}

/**
 * Decrements a number.
 *
 * @function deduct
 * @category math
 * @type {Function}
 * @param {Number} source - First number.
 * @returns {Number} - Returns a decremented version of the number.
 *
 * @example
 * import { deduct, assert } from '@universalweb/acid';
 * assert(deduct(10), 9);
 */
function deduct(source) {
	return source - 1;
}

/**
 * Divides two numbers.
 *
 * @function divide
 * @category math
 * @type {Function}
 * @param {Number} source - First number.
 * @param {Number} value - Second number.
 * @returns {Number} - Returns the quotient of the arguments.
 *
 * @example
 * import { divide, assert } from '@universalweb/acid';
 * assert(divide(10, 5), 2);
 */
function divide(source, value) {
	return source / value;
}

/**
 * Increments a number.
 *
 * @function increment
 * @category math
 * @type {Function}
 * @param {Number} source - First number.
 * @returns {Number} - Returns an incremented version of the number.
 *
 * @example
 * import { increment, assert } from '@universalweb/acid';
 * assert(increment(10), 11);
 */
function increment(source) {
	return source + 1;
}

/**
 * Multiplies two numbers.
 *
 * @function multiply
 * @category math
 * @type {Function}
 * @param {Number} source - First number.
 * @param {Number} value - Second number.
 * @returns {Number} - Returns the product of the arguments.
 *
 * @example
 * import { multiply, assert } from '@universalweb/acid';
 * assert(multiply(10, 5), 50);
 */
function multiply(source, value) {
	return source * value;
}

/**
 * Calculate the progress from a given total and current amount.
 *
 * @function calcProgress
 * @category utility
 * @type {Function}
 * @param {Number} total - The total amount.
 * @param {Number} currentAmount - The current amount.
 * @returns {Number} - The progress as a percentage.
 *
 * @example
 * import { calcProgress, assert } from '@universalweb/acid';
 * assert(calcProgress(100, 1), 1);
 */
function calcProgress(total, currentAmount) {
	if (total === 0) {
		return false;
	}
	if (currentAmount === 0) {
		return 0;
	}
	return (currentAmount / total) * 100;
}

const { random } = Math;
/**
 * Roduces a random floating-point number between min (included) and max (excluded). Do not use for security or encryption..
 *
 * @function randomFloat
 * @category math
 * @type {Function}
 * @param {Number} max - Establishes highest possible value for the random number.
 * @param {Number} [min = 0] - Establishes lowest possible value for the random number.
 * @returns {Number} - Returns random integer between the max and min range.
 *
 * @example
 * import { randomFloat, assert } from '@universalweb/acid';
 * assert(randomFloat(10, 0), (value) => { return value > 0 && value < 10;});
 * // => 9.1
 */
function randomFloat(max, min = 0) {
	return random() * (max - min) + min;
}

/**
 * Extracts the remainder between two numbers.
 *
 * @function remainder
 * @category math
 * @type {Function}
 * @param {Number} source - First number.
 * @param {Number} value - Second number.
 * @returns {Number} - Returns the remainder of the arguments.
 *
 * @example
 * import { remainder, assert } from '@universalweb/acid';
 * assert(remainder(10, 6), 4);
 */
function remainder(source, value) {
	return source % value;
}

const { round, floor, ceil } = Math;
function withPrecision(method, value, decimals) {
	if (!decimals) {
		return method(value);
	}
	const factor = 10 ** decimals;
	return method(value * factor) / factor;
}
/**
 * Rounds a number to the given number of decimals.
 *
 * @function roundTo
 * @category math
 * @type {Function}
 * @param {Number} value - The number to round.
 * @param {Number} [decimals=0] - The number of decimals to round to.
 * @returns {Number} - Returns the rounded number.
 *
 * @example
 * import { roundTo, assert } from '@universalweb/acid';
 * assert(roundTo(1.2345, 2), 1.23);
 */
function roundTo(value, decimals = 0) {
	return withPrecision(round, value, decimals);
}
/**
 * Floors a number to the given number of decimals.
 *
 * @function floorTo
 * @category math
 * @type {Function}
 * @param {Number} value - The number to floor.
 * @param {Number} [decimals=0] - The number of decimals to floor to.
 * @returns {Number} - Returns the floored number.
 *
 * @example
 * import { floorTo, assert } from '@universalweb/acid';
 * assert(floorTo(1.99, 1), 1.9);
 */
function floorTo(value, decimals = 0) {
	return withPrecision(floor, value, decimals);
}
/**
 * Ceils a number to the given number of decimals.
 *
 * @function ceilTo
 * @category math
 * @type {Function}
 * @param {Number} value - The number to ceil.
 * @param {Number} [decimals=0] - The number of decimals to ceil to.
 * @returns {Number} - Returns the ceiled number.
 *
 * @example
 * import { ceilTo, assert } from '@universalweb/acid';
 * assert(ceilTo(1.21, 1), 1.3);
 */
function ceilTo(value, decimals = 0) {
	return withPrecision(ceil, value, decimals);
}

/**
 * Returns the smallest value in a numeric array.
 *
 * @function min
 * @category math
 * @type {Function}
 * @param {Number[]} numbers - Array of numbers.
 * @returns {Number|undefined} - Smallest number or undefined when empty.
 *
 * @example
 * import { min, assert } from '@universalweb/acid';
 * assert(min([3, 1, 2]), 1);
 */
function min(numbers) {
	if (!numbers?.length) {
		return;
	}
	return Math.min(...numbers);
}
/**
 * Returns the largest value in a numeric array.
 *
 * @function max
 * @category math
 * @type {Function}
 * @param {Number[]} numbers - Array of numbers.
 * @returns {Number|undefined} - Largest number or undefined when empty.
 *
 * @example
 * import { max, assert } from '@universalweb/acid';
 * assert(max([3, 1, 2]), 3);
 */
function max(numbers) {
	if (!numbers?.length) {
		return;
	}
	return Math.max(...numbers);
}
/**
 * Returns the arithmetic mean of a numeric array.
 *
 * @function mean
 * @category math
 * @type {Function}
 * @param {Number[]} numbers - Array of numbers.
 * @returns {Number|undefined} - Mean or undefined when empty.
 *
 * @example
 * import { mean, assert } from '@universalweb/acid';
 * assert(mean([1, 2, 3, 4]), 2.5);
 */
function mean(numbers) {
	if (!numbers?.length) {
		return;
	}
	let total = 0;
	for (let index = 0; index < numbers.length; index++) {
		total += numbers[index];
	}
	return total / numbers.length;
}
/**
 * Returns the median value of a numeric array. Does not mutate the input.
 *
 * @function median
 * @category math
 * @type {Function}
 * @param {Number[]} numbers - Array of numbers.
 * @returns {Number|undefined} - Median or undefined when empty.
 *
 * @example
 * import { median, assert } from '@universalweb/acid';
 * assert(median([3, 1, 2]), 2);
 */
function median(numbers) {
	if (!numbers?.length) {
		return;
	}
	const sorted = [...numbers].sort((a, b) => a - b);
	const mid = sorted.length >> 1;
	if (sorted.length % 2) {
		return sorted[mid];
	}
	return (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Subtract all numbers in the array starting from left to right & return the difference.
 *
 * @function subtractAll
 * @category math
 * @type {Function}
 * @param {Number[]} source - Array of numbers.
 * @returns {Number} - Returns the final difference.
 *
 * @example
 * import { subtractAll, assert } from '@universalweb/acid';
 * assert(subtractAll([10, 1, 2, 3]), 4);
 */
function subtractAll(source) {
	return source.reduce((a, b) => a - b);
}

/**
 * Sum all numbers in a given array.
 *
 * @function sumAll
 * @category math
 * @type {Function}
 * @param {Number[]} source - Array of numbers.
 * @returns {Number} - Returns a single number.
 *
 * @example
 * import { sumAll, assert } from '@universalweb/acid';
 * assert(sumAll([10, 1, 2, 3]), 16);
 */
function sumAll(source) {
	return source.reduce((a, b) => {
		return a + b;
	}, 0);
}

/**
 * Checks if a number is within a range.
 *
 * @function isNumberInRange
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @param {Number} start - Beginning of range.
 * @param {Number} end - End of range.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumberInRange, assert } from '@universalweb/acid';
 * assert(isNumberInRange(1, 0, 2), true);
 * assert(isNumberInRange(1, 2, 5), false);
 */
function isNumberInRange(source, start, end) {
	return source > start && source < end;
}

/**
 * Checks if a number is within a range.
 *
 * @function isNumberNotInRange
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @param {Number} start - Beginning of range.
 * @param {Number} end - End of range.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNumberNotInRange, assert } from '@universalweb/acid';
 * assert(isNumberNotInRange(1, 0, 2), false);
 * assert(isNumberNotInRange(1, 2, 5), true);
 */
function isNumberNotInRange(source, start, end) {
	return source < start || source > end;
}

/**
 * Checks if a number is negative & returns true or false.
 *
 * @function isPositive
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isPositive, assert } from '@universalweb/acid';
 * assert(isPositive(1), true);
 */
const { sign } = Math;
function isPositive(source) {
	return sign(source) === 1;
}

/**
 * Strictly checks if a number is zero.
 *
 * @function isZero
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isZero, assert } from '@universalweb/acid';
 * assert(isZero(0), true);
 */
function isZero(source) {
	return source === 0;
}

/**
 * Checks if a number is odd & returns true or false.
 *
 * @function isOdd
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isOdd, assert } from '@universalweb/acid';
 * assert(isOdd(1), true);
 */
function isOdd(source) {
	return (source & 1) === 1;
}

/**
 * Checks if a number is even & returns true or false.
 *
 * @function isEven
 * @category number
 * @type {Function}
 * @param {Number} source - Number to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isEven, assert } from '@universalweb/acid';
 * assert(isEven(2), true);
 * assert(isEven(1), false);
 */
function isEven(source) {
	return (source & 1) === 0;
}

/**
 * Extracts all keys from an object whose values are not null or undefined.
 *
 * @function compactKeys
 * @category object
 * @type {Function}
 * @param {Object} object - Object from which keys are extracted.
 * @returns {Array} - Returns an array of key values.
 *
 * @example
 * import { compactKeys, assert } from '@universalweb/acid';
 * assert(compactKeys({a: 1, b: 0, c: undefined, d: false, e: null}), ['a', 'b', 'd']);
 */
function compactKeys(object) {
	const compactedKeys = [];
	eachObject(object, (item, key) => {
		if (hasValue(item)) {
			compactedKeys.push(key);
		}
	});
	return compactedKeys;
}

/**
 * Asynchronously iterates through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMapAsyncObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * import { compactMapAsyncObject, assert } from '@universalweb/acid';
 * assert(await compactMapAsyncObject({a: 1, b: undefined, c: 3}, (item) => {
 *   return item;
 * }), {a: 1, c: 3});
 */
async function compactMapAsyncObject(source, iteratee = returnValue, results = {}) {
	await eachAsyncObject(source, async (item, key, original, propertyCount, objectKeys) => {
		const result = await iteratee(item, key, results, original, propertyCount, objectKeys);
		if (hasValue(result)) {
			results[key] = result;
		}
	});
	return results;
}

/**
 * Iterates through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMapObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * import { compactMapObject, assert } from '@universalweb/acid';
 * assert(compactMapObject({a: 1, b: undefined, c: 3}, (item) => {
 *   return item;
 * }), {a: 1, c: 3});
 */
function compactMapObject(source, iteratee = returnValue, results = {}) {
	eachObject(source, (item, key, original, propertyCount, objectKeys) => {
		const result = iteratee(item, key, results, original, propertyCount, objectKeys);
		if (hasValue(result)) {
			results[key] = result;
		}
	});
	return results;
}

const objectAssign$1 = Object.assign;
/**
 * Copy the values (which are not undefined or null) of all enumerable own properties from one or more source objects to a new object. It will return a new object.
 *
 * @function consolidate
 * @category object
 * @param {...Object} sources - The source object(s).
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { consolidate, assert } from '@universalweb/acid';
 * assert(consolidate({b: 2}, {a: 1}), {b: 2, a: 1});
 */
function consolidate(...sources) {
	return objectAssign$1({}, ...sources);
}

const objectAssign = Object.assign;
/**
 * Shallow copy a source plain object and return the new copy.
 *
 * @function copy
 * @category object
 * @param {...Object} source - The source object.
 * @returns {Object} - Returns the copied object.
 *
 * @example
 * import { copy, assert } from '@universalweb/acid';
 * assert(copy({a: 1, b: 2}), {a: 1, b: 2});
 */
function copy(target) {
	if (!target) {
		return;
	}
	return objectAssign({}, target);
}

/**
 * Returns a new object that fills missing keys on `target` from later source objects.
 * Existing keys on `target` (other than undefined) are preserved.
 *
 * @function defaults
 * @category object
 * @type {Function}
 * @param {Object} target - Object whose defined values take precedence.
 * @param {...Object} sources - Source objects providing fallback values.
 * @returns {Object} - A new object combining target with defaults.
 *
 * @example
 * import { defaults, assert } from '@universalweb/acid';
 * assert(defaults({a: 1}, {a: 2, b: 2}), {a: 1, b: 2});
 */
function defaults(target, ...sources) {
	const result = { ...target };
	const sourceCount = sources.length;
	for (let sourceIndex = 0; sourceIndex < sourceCount; sourceIndex++) {
		const source = sources[sourceIndex];
		const keys = Object.keys(source);
		const keysLength = keys.length;
		for (let index = 0; index < keysLength; index++) {
			const key = keys[index];
			if (result[key] === undefined) {
				result[key] = source[key];
			}
		}
	}
	return result;
}

/**
 * Iterates through the calling object and creates an object with all elements that pass the test implemented by the iteratee.
 *
 * @function filterObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with properties that passed the test.
 *
 * @example
 * import { filterObject, assert } from '@universalweb/acid';
 * assert(filterObject({a: false, b: true, c: true}, (item) => item), {b: true, c: true});
 */
function filterObject(source, iteratee, results = {}) {
	eachObject(source, (item, key, original, propertyCount, objectKeys) => {
		if (iteratee(item, key, results, original, propertyCount, objectKeys) === true) {
			results[key] = item;
		}
	});
	return results;
}

/**
 * Iterates through the calling object and creates an object with all elements that pass the test implemented by the iteratee.
 *
 * @function filterAsyncObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with properties that passed the test.
 *
 * @example
 * import { filterAsyncObject, assert } from '@universalweb/acid';
 * assert(await filterAsyncObject({a: false, b: true, c: true}, async (item) => item), {b: true, c: true});
 */
async function filterAsyncObject(source, iteratee, results = {}) {
	await eachAsyncObject(source, async (item, key, original, propertyCount, objectKeys) => {
		if (await iteratee(item, key, results, original, propertyCount, objectKeys) === true) {
			results[key] = item;
		}
	});
	return results;
}

const objectEntries = Object.entries;
/**
 * Return turns an array of arrays of key & value pairs. The first element in each key & value pair is the property key, and the second element is the associated value. If source is null or undefined it will not crash or error.
 *
 * @function getEntries
 * @category object
 * @param {Object} source - The source object.
 * @returns {Array|undefined} - Returns the Object.entries of the source object.
 *
 * @example
 * import { getEntries, assert } from '@universalweb/acid';
 * assert(getEntries({b: 2, a: 1}), [['b', 2],['a', 1]]);
 */
function getEntries(source) {
	if (hasValue(source)) {
		return objectEntries(source);
	}
}

const hasOwn = Object.hasOwn;
/**
 * Checks to see if an object has all of the given property names.
 *
 * @function hasKeys
 * @category object
 * @type {Function}
 * @param {Object} source - Source object to check for keys.
 * @param {...String} properties - List of strings to check.
 * @returns {Boolean|undefined} - Returns true or false.
 *
 * @example
 * import { hasKeys, assert } from '@universalweb/acid';
 * assert(hasKeys({a: {b: { c: 1}}}, 'a', 'a.b', 'a.b.c'), true);
 */
function hasKeys(source, ...properties) {
	if (!source) {
		return;
	}
	return everyArray(properties, (item) => {
		const pathArray = toPath(item);
		if (pathArray.length === 1) {
			return hasOwn(source, item);
		} else {
			const lastPath = pathArray.pop();
			const initialPathObject = get(pathArray, source);
			if (initialPathObject) {
				return hasOwn(initialPathObject, lastPath);
			}
			return false;
		}
	});
}
/**
 * Checks to see if an object has any of the given property names.
 *
 * @function hasAnyKeys
 * @category object
 * @type {Function}
 * @param {Object} source - Source object to check for keys.
 * @param {Array} properties - List of strings to check.
 * @returns {Boolean|undefined} - Returns true or false.
 *
 * @example
 * import { hasAnyKeys, assert } from '@universalweb/acid';
 * assert(hasAnyKeys({a: {b: { yes : 1}}}, 'no', 'nope', 'a.b.yes'), true);
 * assert(hasAnyKeys({a: {b: { yes : 1}}}, 'no', 'nope', 'a.b.noped'), false);
 */
function hasAnyKeys(source, ...properties) {
	if (!source) {
		return;
	}
	return Boolean(properties.find((item) => {
		const pathArray = toPath(item);
		if (pathArray.length === 1) {
			return hasOwn(source, item);
		} else {
			const lastPath = pathArray.pop();
			const initialPathObject = get(pathArray, source);
			if (initialPathObject) {
				return hasOwn(initialPathObject, lastPath);
			}
			return false;
		}
	}));
}

/**
 * Creates an inverted version of a given object by switching it's keys and values.
 *
 * @function invert
 * @type {Function}
 * @category object
 * @param {Object} source - Object to be inverted.
 * @param {Array} [target = {}] - Empty object to be populated with inverted values from source.
 * @returns {Object|undefined} - Returns object with keys and values switched.
 *
 * @example
 * import { invert, assert } from '@universalweb/acid';
 * assert(invert({a:1}), {1:'a'});
 */
function invert(source, target = {}) {
	if (!source) {
		return;
	}
	eachObject(source, (item, key) => {
		target[item] = key;
	});
	return target;
}

/**
 * Performs a shallow strict comparison between two objects.
 *
 * @function isMatchObject
 * @type {Function}
 * @category object
 * @param {Object} source - Source object.
 * @param {Object} target - Object to compare to source.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { assert, isMatchObject } from '@universalweb/acid';
 * assert(isMatchObject({a: 1}, {a: 1}), true);
 */
const isMatchObject = (source, target) => {
	if (source === target) {
		return true;
	}
	const sourceKeys = keys(source);
	const targetKeys = keys(target);
	if (sourceKeys.length === targetKeys.length) {
		return everyArray(sourceKeys, (key) => {
			return source[key] === target[key];
		});
	}
	return false;
};

/**
 * Returns a new object where each key is transformed by the iteratee.
 *
 * @function mapKeys
 * @category object
 * @type {Function}
 * @param {Object} source - Source object.
 * @param {Function} iteratee - Receives (value, key, source) and returns the new key.
 * @returns {Object} - New object with transformed keys.
 *
 * @example
 * import { mapKeys, assert } from '@universalweb/acid';
 * assert(mapKeys({a: 1}, (value, key) => key.toUpperCase()), {A: 1});
 */
function mapKeys(source, iteratee) {
	const result = {};
	const keys = Object.keys(source);
	const keysLength = keys.length;
	for (let index = 0; index < keysLength; index++) {
		const key = keys[index];
		const value = source[key];
		result[iteratee(value, key, source)] = value;
	}
	return result;
}

/**
 * Returns a new object where each value is transformed by the iteratee. Keys are preserved.
 *
 * @function mapValues
 * @category object
 * @type {Function}
 * @param {Object} source - Source object.
 * @param {Function} iteratee - Receives (value, key, source) and returns the new value.
 * @returns {Object} - New object with transformed values.
 *
 * @example
 * import { mapValues, assert } from '@universalweb/acid';
 * assert(mapValues({a: 1, b: 2}, (value) => value * 10), {a: 10, b: 20});
 */
function mapValues(source, iteratee) {
	const result = {};
	const keys = Object.keys(source);
	const keysLength = keys.length;
	for (let index = 0; index < keysLength; index++) {
		const key = keys[index];
		result[key] = iteratee(source[key], key, source);
	}
	return result;
}

const escapeRegexRegex = /[()[\]{}*+?^$|#.,/\\\s-]/g;
/**
 * Returns a regex-safe version of a string with special characters escaped.
 *
 * @function escapeRegex
 * @category regex
 * @type {Function}
 * @param {String} source - String to make regex-safe.
 * @returns {String} - Regex-safe version of the string.
 *
 * @example
 * import { escapeRegex, assert } from '@universalweb/acid';
 * assert(escapeRegex('.+'), '\\.\\+');
 */
function escapeRegex(source) {
	return source.replace(escapeRegexRegex, '\\$&');
}

/**
 * Convert array of strings to regex.
 *
 * @function arrayToRegex
 * @category regex
 * @type {Function}
 * @param {Object} source - Array of strings.
 * @returns {Object} - Returns a regex safe version of the string.
 *
 * @example
 * import { arrayToRegex, assert } from '@universalweb/acid';
 * assert(String(arrayToRegex(['a','b'])), String(/a|b/));
 */
function arrayToRegex(source, makeSafe) {
	if (makeSafe) {
		return arrayToRegex(mapArray(source, escapeRegex));
	}
	return RegExp(source.join('|'));
}

/**
 * Returns a clone of the given object without the given properties.
 *
 * @function omit
 * @category object
 * @type {Function}
 * @param {Object} source - Object from which keys are extracted.
 * @param {Array|RegExp|String} blacklist - List of property keys to omit from the returned object.
 * @returns {Object|undefined} - A new object with the removed.
 *
 * @example
 * import { omit, assert } from '@universalweb/acid';
 * assert(omit({a:1, b:2}, ['a']), {b:2});
 * assert(omit({a:1, b:2}, 'a'), {b:2});
 * assert(omit({1:'test', b:2}, 1), {b:2});
 */
function omit(source, blacklist) {
	if (!source) {
		return {};
	}
	if (isArray(blacklist)) {
		const blacklistRegex = arrayToRegex(blacklist);
		return filterObject(source, (item, key) => {
			return !blacklistRegex.test(key);
		});
	}
	if (isRegex(blacklist)) {
		return filterObject(source, (item, key) => {
			return !blacklist.test(key);
		});
	}
	if (isString(blacklist)) {
		return filterObject(source, (item, key) => {
			return key !== blacklist;
		});
	}
	if (isNumber(blacklist)) {
		const numberToString = blacklist.toString();
		return filterObject(source, (item, key) => {
			return key !== numberToString;
		});
	}
	if (isFunction(blacklist)) {
		return filterObject(source, (item, key) => {
			return !blacklist(item, key);
		});
	}
	return objectAssign$2({}, source);
}

/**
 * Returns a clone of the source object with the plucked properties.
 *
 * @function pick
 * @type {Function}
 * @category object
 * @param {Object} source - Object to be cloned.
 * @param {Array} whitelist - Array of property names used to determine what values to pluck.
 * @param {Object} [target = {}] - Object to be populated with plucked values.
 * @returns {Object|undefined} - A new object with plucked properties.
 *
 * @example
 * import { pick, assert } from '@universalweb/acid';
 * assert(pick({a:1, b:2, c:3}, ['a','b']), {a:1, b:2});
 */
const pick = (source, whitelist, target = {}) => {
	if (!source) {
		return;
	}
	eachArray(whitelist, (item) => {
		target[item] = source[item];
	});
	return target;
};

/**
 * Returns the amount of keys on an object or if the length or size property of an object is present it will return it else it will default to returning the amount of keys on an object.
 *
 * @function objectSize
 * @category object
 * @param {Object} source - The source object.
 * @returns {Number|undefined} - The amount of keys.
 *
 * @example
 * import { objectSize, assert } from '@universalweb/acid';
 * assert(objectSize({ 0: 'a', 1: 'b', 2: 'c' }), 3);
 */
function objectSize(source) {
	if (!source) {
		return;
	}
	if (isPlainObject(source)) {
		return keys(source).length;
	}
	const objectLengthProperty = source.length;
	if (hasValue(objectLengthProperty)) {
		return objectLengthProperty;
	}
	const objectSizeProperty = source.size;
	if (hasValue(objectLengthProperty)) {
		return objectSizeProperty;
	}
	return keys(source).length;
}

/**
 * Creates an object from two arrays, one of property identifiers and one of corresponding values.
 *
 * @function zipObject
 * @type {Function}
 * @category object
 * @param {Array} properties - The property identifiers.
 * @param {Array} values - The property values.
 * @returns {Object} - Returns the new object.
 *
 * @example
 * import { zipObject, assert } from '@universalweb/acid';
 * assert(zipObject(['a', 'b'], [1, 2]), { a: 1, b: 2 });
 */
const zipObject = (properties, values) => {
	const source = {};
	eachArray(properties, (item, key) => {
		source[item] = values[key];
	});
	return source;
};
/**
 * Takes an array of grouped elements and creates an array regrouping the elements to their pre-zip object configuration.
 *
 * @function unZipObject
 * @type {Function}
 * @category object
 * @param {Object} object - The object to process.
 * @returns {Array} - Returns two arrays one of keys and the other of values inside a single array.
 *
 * @example
 * import { unZipObject, assert } from '@universalweb/acid';
 * assert(unZipObject({ a: 1, b: 2 }), [['a', 'b'], [1, 2]]);
 */
const unZipObject = (object) => {
	const objectKeys = [];
	const objectValues = [];
	eachObject(object, (item, key) => {
		objectKeys.push(key);
		objectValues.push(item);
	});
	return [
		objectKeys,
		objectValues,
	];
};

const normalizeCase$4 = /[ _-]+/g;
/**
 * Converts a string into Camel case format.
 *
 * @function camelCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into Camel case.
 * @returns {String} - Converted string in Camel case.
 *
 * @example
 * import { camelCase, assert } from '@universalweb/acid';
 * assert(camelCase('camel case'), 'camelCase');
 */
function camelCase(source) {
	let result = '';
	source.replace(normalizeCase$4, ' ').trim()
		.split(' ')
		.forEach((item, index) => {
			if (index === 0) {
				result += item.toLowerCase();
			} else {
				result += item[0].toUpperCase() + item.slice(1).toLowerCase();
			}
		});
	return result;
}

const normalizeCase$3 = /[ _-]+/g;
const space$1 = /[ ]+/g;
/**
 * Converts a string into single space sepperated words in Kebab case.
 *
 * @function kebabCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into Kebab case.
 * @returns {String} - Converted string in Kebab case.
 *
 * @example
 * import { kebabCase, assert } from '@universalweb/acid';
 * assert(kebabCase('kebab case'), 'kebab-case');
 */
function kebabCase(source) {
	return source.replace(/([A-Z]+)/g, ' $1')
		.replace(normalizeCase$3, ' ')
		.trim()
		.toLowerCase()
		.replace(space$1, '-');
}

const normalizeCase$2 = /[ _-]+/g;
const space = /[ ]+/g;
/**
 * Converts a string into single space sepperated words in snake case.
 *
 * @function snakeCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into snake case.
 * @returns {String} - Converted string in Snake case.
 *
 * @example
 * import { snakeCase, assert } from '@universalweb/acid';
 * assert(snakeCase('snake case'), 'snake_case');
 */
function snakeCase(source) {
	return source.replace(/([A-Z]+)/g, ' $1')
		.replace(normalizeCase$2, ' ')
		.trim()
		.toLowerCase()
		.replace(space, '_');
}

const normalizeCase$1 = /[ _-]+/g;
/**
 * Converts a string into single space sepperated words in uppercase.
 *
 * @function upperCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into upper case.
 * @returns {String} - Converted string in upper case.
 *
 * @example
 * import { upperCase, assert } from '@universalweb/acid';
 * assert(upperCase('upper-case'), 'UPPER CASE');
 * assert(upperCase('upper_case'), 'UPPER CASE');
 */
function upperCase(source) {
	return source
		.replace(/([A-Z]+)/g, ' $1')
		.replace(normalizeCase$1, ' ')
		.trim()
		.toUpperCase();
}

const normalizeCase = /[ _-]+/g;
/**
 * Converts a string into single space sepperated words in lowerCase.
 *
 * @function lowerCase
 * @category string
 * @type {Function}
 * @param {String} source - String to be converted into upper case.
 * @returns {String} - Converted string in upper case.
 *
 * @example
 * import { lowerCase, assert } from '@universalweb/acid';
 * assert(lowerCase('lower-CASE'), 'lower case');
 */
function lowerCase(source) {
	return source
		.replace(/([A-Z]+)/g, ' $1')
		.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase();
}

const defaultAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 * Generates a non-cryptographic random string. Do not use for security-sensitive identifiers.
 *
 * @function randomString
 * @category string
 * @type {Function}
 * @param {Number} length - Length of the string to generate.
 * @param {String} [alphabet] - Optional alphabet to draw characters from. Defaults to alphanumerics.
 * @returns {String} - Random string of the given length.
 *
 * @example
 * import { randomString, assert } from '@universalweb/acid';
 * assert(randomString(8).length, 8);
 */
function randomString(length, alphabet = defaultAlphabet) {
	const max = alphabet.length;
	let result = '';
	for (let index = 0; index < length; index++) {
		result += alphabet[Math.floor(Math.random() * max)];
	}
	return result;
}

/**
 * Inserts text into a string at a given position.
 *
 * @function insertInRange
 * @category string
 * @type {Function}
 * @param {String} string - String to insert the text into.
 * @param {Number} index - Point of insertion.
 * @param {String} text - The string to be inserted.
 * @returns {String} - The string with the text inserted at the given point.
 *
 * @example
 * import { insertInRange, assert } from '@universalweb/acid';
 * assert(insertInRange('A from Lucy.', 1, ' tab'), 'A tab from Lucy.');
 */
function insertInRange(string, index, text) {
	return string.slice(0, index) + text + string.slice(index, string.length);
}
/**
 * Plucks a letter using the index starting from the right.
 *
 * @function rightString
 * @category string
 * @type {Function}
 * @param {String} string - String to extract the letter from.
 * @param {Number} [index=1] - The starting position.
 * @returns {String} - A letter at the given index.
 *
 * @example
 * import { rightString, assert } from '@universalweb/acid';
 * assert(rightString('rightString'), 'g');
 * assert(rightString('rightString', 2), 'n');
 */
function rightString(string, index = 1) {
	return string[string.length - index];
}
/**
 * Splits up a string into chunks.
 *
 * @function chunkString
 * @category string
 * @type {Function}
 * @param {String} string - String to chunked.
 * @param {Number} [size] - The max string length per chunk.
 * @returns {Array} - An array with strings that are <= size parameter.
 *
 * @example
 * import { chunkString, assert } from '@universalweb/acid';
 * assert(chunkString('chunk', 2), ['ch', 'un', 'k']);
 */
function chunkString(string, size) {
	return string.match(new RegExp(`(.|[\r\n]){1,${size}}`, 'g'));
}
/**
 * Truncates everything before the index starting from the right.
 *
 * @function initialString
 * @category string
 * @type {Function}
 * @param {String} string - String to extract the initial letters from.
 * @param {Number} [index=1] - Starting point from the right.
 * @returns {String} - A string with the characters before the index starting from the right.
 *
 * @example
 * import { initialString, assert } from '@universalweb/acid';
 * assert(initialString('initialString', 2), 'initialStri');
 */
function initialString(string, index = 1) {
	return string.slice(0, index * -1);
}
/**
 * Truncates everything after a index.
 *
 * @function restString
 * @category string
 * @type {Function}
 * @param {String} string - String to extract the rest of the letters from.
 * @param {Number} [index=1] - Starting point.
 * @returns {String} - A string without the characters up-to to the index.
 *
 * @example
 * import { restString, assert } from '@universalweb/acid';
 * assert(restString('restString', 2), 'stString');
 */
function restString(string, index = 1) {
	return string.substring(index);
}

/**
 * Replaces all occurrences of strings in an array with a value.
 *
 * @function replaceList
 * @category string
 * @type {Function}
 * @param {String} string - String to be replaced.
 * @param {Array} words - Strings to replace.
 * @param {String} value - The match replacement.
 * @returns {String} - The string with the replacement.
 *
 * @example
 * import { replaceList, assert } from '@universalweb/acid';
 * assert(replaceList('user name was user.', ['user'], 'this'), 'this name was this.');
 */
function replaceList(string, words, value) {
	return string.replace(new RegExp(`\\b${words.join('|')}\\b`, 'gi'), value);
}

const rawURLDecodeRegex = /%(?![\da-f]{2})/gi;
const andRegex = /&/g;
const lessThanRegex = /</g;
const moreThanRegex = />/g;
const doubleQuoteRegex = /"/g;
/**
 * Raw URL decoder.
 *
 * @function rawURLDecode
 * @category string
 * @type {Function}
 * @param {String} string - String to be replaced.
 * @returns {String} - Converted string into the decoded URI Component .
 *
 * @example
 * import { rawURLDecode, assert } from '@universalweb/acid';
 * assert(rawURLDecode('Lucy%20saw%20diamonds%20in%20the%20sky.'), 'Lucy saw diamonds in the sky.');
 */
function rawURLDecode(string) {
	return decodeURIComponent(string.replace(rawURLDecodeRegex, () => {
		return '%25';
	}));
}
/**
 * Replaced sensitive characters with their matching html entity.
 *
 * @function htmlEntities
 * @category string
 * @type {Function}
 * @param {String} string - String to be replaced.
 * @returns {String} - Replaced string.
 *
 * @example
 * import { htmlEntities, assert } from '@universalweb/acid';
 * assert(htmlEntities(`<script>console.log('Lucy & diamonds.')</script>`), `&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;`);
 */
function htmlEntities(string) {
	return string.replace(andRegex, '&amp;')
		.replace(lessThanRegex, '&lt;')
		.replace(moreThanRegex, '&gt;')
		.replace(doubleQuoteRegex, '&quot;');
}
/**
 * Executes rawURLDecode followd by htmlEntities methods on a string.
 *
 * @function sanitize
 * @category string
 * @type {Function}
 * @param {String} string - String to be replaced.
 * @returns {String} - Replaced string.
 *
 * @example
 * import { sanitize, assert } from '@universalweb/acid';
 * assert(sanitize(`<script>console.log('Lucy%20&%20diamonds.')</script>`),`&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;`);
 */
function sanitize(string) {
	return htmlEntities(rawURLDecode(string));
}

const diacriticsRegex = /[̀-ͯ]/g;
const nonAlnumRegex = /[^a-z0-9]+/g;
const trimDashRegex = /^-+|-+$/g;
/**
 * Converts a string into a URL-safe slug. Lowercases, strips diacritics,
 * replaces non-alphanumeric runs with a separator, and trims leading/trailing separators.
 *
 * @function slugify
 * @category string
 * @type {Function}
 * @param {String} source - String to slugify.
 * @param {String} [separator='-'] - Replacement for non-alphanumeric runs.
 * @returns {String} - Slugified string.
 *
 * @example
 * import { slugify, assert } from '@universalweb/acid';
 * assert(slugify('Héllo World!'), 'hello-world');
 */
function slugify(source, separator = '-') {
	const normalized = source.normalize('NFKD').replace(diacriticsRegex, '').toLowerCase();
	const replaced = normalized.replace(nonAlnumRegex, separator);
	if (separator === '-') {
		return replaced.replace(trimDashRegex, '');
	}
	const escaped = separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	return replaced.replace(new RegExp(`^${escaped}+|${escaped}+$`, 'g'), '');
}

const tokenizeRegEx = /\S+/g;
const wordsRegEx = /\w+/g;
/**
 * Break string by non-white space characters matches.
 *
 * @function tokenize
 * @type {Function}
 * @category string
 * @param {String} string - String to be broken up.
 * @returns {Array} - Array of words without white space characters.
 *
 * @example
 * import { tokenize, assert } from '@universalweb/acid';
 * assert(tokenize('I am Acid!'), ['I', 'am', 'Acid!']);
 */
function tokenize(string) {
	return string.match(tokenizeRegEx) || [];
}
/**
 * Break string into word matches.
 *
 * @function words
 * @type {Function}
 * @param {String} string - String to be broken up.
 * @returns {Array} - Array of words with word characters only.
 *
 * @example
 * import { words, assert } from '@universalweb/acid';
 * assert(words('I am Acid!'), ["I", "am", "Acid"]);
 */
function words(string) {
	return string.match(wordsRegEx) || [];
}

const truncateDown = (string, maxLength, stringLength) => {
	const breakAll = string.split('');
	const breakAllLength = breakAll.length;
	let item;
	let index = stringLength - maxLength;
	for (; index < breakAllLength && index >= 0; index--) {
		item = breakAll[index];
		if (item === ' ') {
			break;
		}
	}
	return string.slice(0, index).trim();
};
const truncateUp = (string, maxLength, stringLength) => {
	const breakAll = string.split('');
	const breakAllLength = breakAll.length;
	let item;
	let index = maxLength;
	for (; index < breakAllLength && index > 0; index++) {
		item = breakAll[index];
		if (item === ' ') {
			break;
		}
	}
	return string.substring(index, stringLength).trim();
};
/**
 * Truncates the string, accounting for word placement and character count.
 *
 * @function truncate
 * @type {Function}
 * @category string
 * @param {String} string - String to be truncated.
 * @param {Number} maxLength - The desired max length of the string.
 * @returns {String} - The mutated string.
 *
 * @example
 * import { truncate, assert } from '@universalweb/acid';
 * assert(truncate('Where is Lucy?', 2), 'Where is');
 */
function truncate(string, maxLength) {
	const stringLength = string.length;
	return (stringLength > maxLength) ? truncateDown(string, maxLength, stringLength) : string;
}
/**
 * Truncates the string, accounting for word placement and character count from the right.
 *
 * @function truncateRight
 * @type {Function}
 * @category string
 * @param {String} string - String to be truncated.
 * @param {Number} maxLength - The desired max length of the string.
 * @returns {String} - The mutated string.
 *
 * @example
 * import { truncateRight, assert } from '@universalweb/acid';
 * assert(truncateRight('Where is Lucy?', 6), 'Lucy?');
 */
function truncateRight(string, maxLength) {
	const stringLength = string.length;
	return (stringLength > maxLength) ? truncateUp(string, maxLength, stringLength) : string;
}

const getWords = /\w+/g;
/**
 * Returns the first letter capitalized.
 *
 * @function upperFirstLetter
 * @type {Function}
 * @category string
 * @param {String} string - String to extract first letter from.
 * @returns {String} - An upper case letter.
 *
 * @example
 * import { upperFirstLetter, assert } from '@universalweb/acid';
 * assert(upperFirstLetter('upper'), 'U');
 */
function upperFirstLetter(string) {
	return string[0].toUpperCase();
}
/**
 * Capitalizes the first letter.
 *
 * @function upperFirst
 * @type {Function}
 * @category string
 * @param {String} string - String to be mutated.
 * @returns {String} - String with first letter capitalized.
 *
 * @example
 * import { upperFirst, assert } from '@universalweb/acid';
 * assert(upperFirst('upper'), 'Upper');
 */
function upperFirst(string) {
	return upperFirstLetter(string) + restString(string);
}
/**
 * Capitalize first letter and lower case the rest.
 *
 * @function upperFirstOnly
 * @type {Function}
 * @category string
 * @param {String} string - String to be mutated.
 * @returns {String} - String with first letter capitalized.
 *
 * @example
 * import { upperFirstOnly, assert } from '@universalweb/acid';
 * assert(upperFirstOnly('upper'), 'Upper');
 */
function upperFirstOnly(string) {
	return upperFirstLetter(string) + restString(string).toLowerCase();
}
/**
 * Capitalize all first letters.
 *
 * @function upperFirstAll
 * @type {Function}
 * @category string
 * @param {String} string - String to be mutated.
 * @returns {String} - String with all first letters capitalized.
 *
 * @example
 * import { upperFirstAll, assert } from '@universalweb/acid';
 * assert(upperFirstAll('uPPer'), 'UPPer');
 */
function upperFirstAll(string) {
	return string.replace(getWords, (match) => {
		return upperFirst(match);
	});
}
/**
 * Capitalize all first letters and lower case the rest.
 *
 * @function upperFirstOnlyAll
 * @type {Function}
 * @category string
 * @param {String} string - String to be mutated.
 * @returns {String} - String with all first letters capitalized.
 *
 * @example
 * import { upperFirstOnlyAll, assert } from '@universalweb/acid';
 * assert(upperFirstOnlyAll('this is'), 'This Is');
 */
function upperFirstOnlyAll(string) {
	return string.replace(getWords, (match) => {
		return upperFirstOnly(match);
	});
}

/**
 * Returns the immediate child class (subclass) name list for an object's constructor by inspecting its prototype.
 * For primitives or values without a constructor, returns null. Useful as a structural inverse of getParent.
 *
 * @function getChild
 * @category type
 * @param {*} source - Object to retrieve child constructor info from.
 * @returns {Function|null} - Returns the constructor function (the "child" type) or null when none exists.
 *
 * @example
 * import { getChild, assert } from '@universalweb/acid';
 * class Parent {}
 * class Child extends Parent {}
 * const child = new Child();
 * assert(getChild(child), Child);
 */
function getChild(source) {
	if (source === null || source === undefined) {
		return null;
	}
	return source.constructor ?? null;
}

/**
 * Returns the parent prototype of the given object's prototype chain.
 *
 * @function getParent
 * @category type
 * @param {*} source - Object to retrieve the parent prototype from.
 * @returns {*} - Returns the parent prototype or null when none exists.
 *
 * @example
 * import { getParent, assert } from '@universalweb/acid';
 * class Parent {}
 * class Child extends Parent {}
 * assert(getParent(Child.prototype), Parent.prototype);
 */
function getParent(source) {
	if (source === null || source === undefined) {
		return null;
	}
	return Object.getPrototypeOf(source);
}

/**
 * Checks if the value is an Arguments object.
 *
 * @function isArguments
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArguments, assert } from '@universalweb/acid';
 * assert(isArguments((function() { return arguments;})()), true);
 * assert(isArguments([]), false);
 */
const objectArguments = '[object Arguments]';
function isArguments(source) {
	return (hasValue(source)) ? source.toString() === objectArguments : false;
}

/**
 * Checks if an object or objects are a Map.
 *
 * @function isMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isMap } from '@universalweb/acid';
 * isMap(new Map());
 * // => true
 */
const isMapCall = isConstructorFactory(Map);
const isMap = isTypeFactory(isMapCall);

/**
 * Checks if an object is null or undefined.
 *
 * @function noValue
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { noValue, assert } from '@universalweb/acid';
 * assert(noValue(null), true);
 * assert(noValue(undefined), true);
 * assert(noValue(1), false);
 * assert(noValue(0), false);
 */
function noValue(source) {
	return !hasValue(source);
}

/**
 * Checks if an object has a .length property that's greater than or equal to 0 & is not a function. If strict is enabled it will check to see if there is an item returned in range of the number returned bu the length property.
 *
 * @function isArrayLike
 * @category type
 * @param {*} source - Object to be checked.
 * @param {*} strictFlag - Strict flag to also check to see if keys are whole intigers greater than or equal to 0.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArrayLike, assert } from '@universalweb/acid';
 * assert(isArrayLike([]), true);
 * assert(isArrayLike(2), false);
 */
function isArrayLike(source, strictFlag) {
	if (noValue(source) || isFunction(source)) {
		return false;
	}
	if (isArray(source) || isTypedArray(source)) {
		return true;
	}
	const sourceLength = source.length;
	if (noValue(sourceLength) || !isNumber(sourceLength) || sourceLength < 0) {
		return false;
	}
	if (strictFlag) {
		const indexes = keys(source);
		if (indexes) {
			return every(indexes, (value, index) => {
				return index >= 0 && isNumber(index);
			});
		}
		return false;
	}
	return true;
}

/**
 * Checks if an object or objects are a BigInt.
 *
 * @function isBigInt
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isBigInt, assert } from '@universalweb/acid';
 * assert(isBigInt(BigInt(123)), true);
 */
const isBigIntCall = isConstructorFactory(BigInt);
const isBigInt = isTypeFactory(isBigIntCall);

/**
 * Checks if the value is a Boolean.
 *
 * @function isBoolean
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isBoolean } from '@universalweb/acid';
 * isBoolean(true);
 * // => true
 */
const isBooleanCall = isConstructorFactory(Boolean);
const isBoolean = isTypeFactory(isBooleanCall);

/**
 * Checks if an object or objects are a ArrayBuffer.
 *
 * @function isArrayBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isArrayBuffer, assert } from '@universalweb/acid';
 * assert(isArrayBuffer(new ArrayBuffer()), true);
 */
const isArrayBufferCall = isConstructorFactory(ArrayBuffer);
const isArrayBuffer = isTypeFactory(isArrayBufferCall);

/**
 * Checks if an object is the child of another. Typically used for classes.
 *
 * @function isChild
 * @category type
 * @param {*} sourceChild - Object to be checked as the child.
 * @param {*} targetParent - Object to be checked as the parent.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isChild, construct, assert } from '@universalweb/acid';
 * class Grandparent {}
 * class Parent extends Grandparent {}
 * class Child extends Parent {}
 * const child = construct(Child);
 * assert(isChild(child, Grandparent), true);
 * assert(isChild(child, Parent), true);
 * assert(isChild(child, Child), true);
 * assert(isChild(child, Map), false);
 */
function isChild(sourceChild, targetParent) {
	if (!sourceChild || !targetParent) {
		return false;
	}
	return sourceChild instanceof targetParent;
}

/**
 * Checks if an object or objects are a structured-cloneable type.
 *
 * @function isCloneable
 * @category type
 * @param {...*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isCloneable, assert } from '@universalweb/acid';
 * assert(isCloneable(function (){}), false);
 */
const constructorNames = RegExp('Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError');
function isCloneable(source) {
	if (hasValue(source)) {
		const constructorName = source?.constructor?.name;
		return constructorNames.test(constructorName);
	}
	return false;
}

/**
 * Checks if the value is empty.
 *
 * @function isEmpty
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isEmpty, assert } from '@universalweb/acid';
 * assert(isEmpty([]), true);
 */
function isEmpty(source) {
	if (isString(source) || isArray(source)) {
		return !hasLength(source);
	} else if (isPlainObject(source)) {
		return !objectSize(source);
	}
	return !hasValue(source);
}

/**
 * Checks if an object or objects are an Error object.
 *
 * @function isError
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isError } from '@universalweb/acid';
 * isError(new Error());
 * // => true
 */
const isErrorCall = isConstructorFactory(Error);
const isError = isTypeFactory(isErrorCall);

/**
 * Check if a value equals false using strict comparison.
 *
 * @function isFalse
 * @category utility
 * @type {Function}
 * @param {Boolean} source - Item to compare.
 * @returns {Boolean} - Returns true if the item equals false.
 *
 * @example
 * import { isFalse, assert } from '@universalweb/acid';
 * assert(isFalse(1), false);
 * assert(isFalse(true), false);
 * assert(isFalse(false), true);
 */
function isFalse(source) {
	return source === false;
}

/**
 * Checks if an object or objects are a Float32Array.
 *
 * @function isF32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isF32, assert } from '@universalweb/acid';
 * assert(isF32(new Float32Array()), true);
 */
const isF32Call = isConstructorFactory(Float32Array);
const isF32 = isTypeFactory(isF32Call);

/**
 * Checks if an object or objects are a Float64Array.
 *
 * @function isF64
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isF64 } from '@universalweb/acid';
 * isF64(new Float64Array());
 * // => true
 */
const isF64Call = isConstructorFactory(Float64Array);
const isF64 = isTypeFactory(isF64Call);

const { isInteger } = Number;
/**
 * Checks if the value (typically a number) as a string has a decimal point. Alias of Number.isInteger.
 *
 * @function isFloat
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isFloat } from '@universalweb/acid';
 * isFloat(1.01);
 * // => true
 */
const isFloat = isInteger;

/**
 * Checks if an object or objects are a Int16Array.
 *
 * @function isI16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isI16 } from '@universalweb/acid';
 * isI16(new Int16Array());
 * // => true
 */
const isI16Call = isConstructorFactory(Int16Array);
const isI16 = isTypeFactory(isI16Call);

/**
 * Checks if an object or objects are a Int32Array.
 *
 * @function isI32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isI32, assert } from '@universalweb/acid';
 * assert(isI32(new Int32Array()), true);
 */
const isI32Call = isConstructorFactory(Int32Array);
const isI32 = isTypeFactory(isI32Call);

/**
 * Checks if an object or objects are a Int8Array.
 *
 * @function isI8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isI8, assert } from '@universalweb/acid';
 * assert(isI8(new Int8Array()), true);
 */
const isI8Call = isConstructorFactory(Int8Array);
const isI8 = isTypeFactory(isI8Call);

/**
 * Checks if the value can be accessed by integer indexes (Array, TypedArray, String, or array-like).
 *
 * @function isIndexable
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isIndexable, assert } from '@universalweb/acid';
 * assert(isIndexable([1, 2]), true);
 * assert(isIndexable('abc'), true);
 * assert(isIndexable({}), false);
 */
function isIndexable(source) {
	return isArray(source) || isTypedArray(source) || isString(source) || isArrayLike(source);
}

/**
 * Checks if the object has inherited properties from the built-in Iterator class and which implements the Symbol.iterator interface. Built-in Iterators: String, Array, TypedArray, Map, Set, and Segments.
 *
 * @function isIterable
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isIterable, assert } from '@universalweb/acid';
 * assert(isIterable([]), true);
 * assert(isIterable(new Int8Array()), true);
 * assert(isIterable('test'), true);
 * assert(isIterable({}), false);
 */
function isIterable(source) {
	return hasValue(source) && typeof source[Symbol.iterator] === 'function';
}

/**
 * Checks if an object is a promise.
 *
 * @function isPromise
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isPromise } from '@universalweb/acid';
 * isPromise(new Promise(() => {}));
 * // => true
 */
function isPromise(source) {
	if (source) {
		return source instanceof Promise;
	}
	return false;
}

/**
 * Checks if an object is a kind of async object such as async function, promise, or generator.
 *
 * @function isKindAsync
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isKindAsync, assert } from '@universalweb/acid';
 * assert(isKindAsync(async() => {}), true);
 */
function isKindAsync(source) {
	if (source) {
		return isPromise(source) || isAsync(source) || isGenerator(source);
	}
	return false;
}

/**
 * Checks if an object is the child of another. Typically used for classes.
 *
 * @function isParent
 * @category type
 * @param {*} sourceParent - Object to be checked as the child.
 * @param {*} targetChild - Object to be checked as the parent.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isParent, construct, assert } from '@universalweb/acid';
 * class ParentClass {}
 * class OtherClass {}
 * const child1 = construct(ParentClass);
 * const other = construct(OtherClass);
 * assert(isParent(child1, ParentClass), true);
 * assert(isParent(other, ParentClass), false);
 * assert(isParent(ParentClass, child1), false);
 */
function isParent(sourceParent, targetChild) {
	if (!sourceParent || !targetChild || !targetChild.call) {
		return false;
	}
	return sourceParent instanceof targetChild;
}

/**
 * Checks if an object is a primitive.
 *
 * @function isPrimitive
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - True or false.
 *
 * @example
 * import { isPrimitive, assert } from '@universalweb/acid';
 * assert(isPrimitive(1), true);
 * assert(isPrimitive(() => {}), false);
 */
function isPrimitive(source) {
	const type = typeof source;
	return source === null || source === undefined || (type !== 'object' && type !== 'function');
}

/**
 * Checks if objects are related to each other using instanceof. There is no required order for arguments given it will check all available ways.
 *
 * @function isRelated
 * @category type
 * @param {*} targetOne - Object to be checked.
 * @param {*} targetTwo - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isRelated, construct, assert } from '@universalweb/acid';
 * class parentClass{}
 * class otherClass{}
 * const child1 = construct(parentClass);
 * const child2 = construct(parentClass);
 * const child3 = construct(otherClass);
 * assert(isRelated(child1, child2), true);
 * assert(isRelated(child1, parentClass), true);
 * assert(isRelated(parentClass, child2), true);
 * assert(isRelated(child1, child3), false);
 */
function isRelated(targetOne, targetTwo) {
	if (noValue(targetOne) || noValue(targetTwo)) {
		return false;
	}
	if (targetOne.call) {
		return targetTwo instanceof targetOne;
	}
	if (targetTwo.call) {
		return targetOne instanceof targetTwo;
	}
	return targetTwo.constructor === targetOne.constructor;
}

const { isSafeInteger } = Number;
/**
 * Checks if the value (typically a number) as a string has a decimal point. Alias of Number.isInteger.
 *
 * @function isSafeInt
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isSafeInt } from '@universalweb/acid';
 * isSafeInt(1.01);
 * // => true
 */
const isSafeInt = isSafeInteger;

function isSameType(source, other) {
	const sourceType = getType(source);
	const otherType = getType(other);
	if (sourceType === otherType) {
		if (sourceType.name === otherType.name) {
			return true;
		}
	}
	return false;
}

/**
 * Check if a value equals true using strict comparison.
 *
 * @function isTrue
 * @category utility
 * @type {Function}
 * @param {Boolean} source - Item to check.
 * @returns {Boolean} - Returns true if the item is true.
 *
 * @example
 * import { isTrue, assert } from '@universalweb/acid';
 * assert(isTrue(1), false);
 * assert(isTrue(true), true);
 * assert(isTrue(false), false);
 */
function isTrue(source) {
	return source === true;
}

/**
 * Checks if an object or objects are a Uint16Array.
 *
 * @function isU16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU16 } from '@universalweb/acid';
 * isU16(new Uint16Array());
 * // => true
 */
const isU16Call = isConstructorFactory(Uint16Array);
const isU16 = isTypeFactory(isU16Call);

/**
 * Checks if an object or objects are a Uint32Array.
 *
 * @function isU32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU32 } from '@universalweb/acid';
 * isU32(new Uint32Array());
 * // => true
 */
const isU32Call = isConstructorFactory(Uint32Array);
const isU32 = isTypeFactory(isU32Call);

/**
 * Checks if an object or objects are a Uint8Array.
 *
 * @function isU8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU8 } from '@universalweb/acid';
 * isU8(new Uint8Array());
 * // => true
 */
const isU8Call = isConstructorFactory(Uint8Array);
const isU8 = isTypeFactory(isU8Call);

/**
 * Checks if an object or objects are a Uint8ClampedArray.
 *
 * @function isU8C
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isU8C } from '@universalweb/acid';
 * isU8C(new Uint8ClampedArray());
 * // => true
 */
const isU8CCall = isConstructorFactory(Uint8ClampedArray);
const isU8C = isTypeFactory(isU8CCall);

/**
 * Checks if an object or objects are a WeakMap.
 *
 * @function isWeakMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isWeakMap, assert } from '@universalweb/acid';
 * assert(isWeakMap(new WeakMap()), true);
 */
const isWeakMapCall = isConstructorFactory(WeakMap);
const isWeakMap = isTypeFactory(isWeakMapCall);

/**
 * Checks if the value is empty.
 *
 * @function notEmpty
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { notEmpty, assert } from '@universalweb/acid';
 * assert(notEmpty([1]), true);
 */
function notEmpty(source) {
	if (isString(source) || isArray(source)) {
		return hasLength(source);
	} else if (isPlainObject(source)) {
		return objectSize(source) > 0;
	}
	return hasValue(source);
}

const isDeno = typeof globalThis.Deno !== 'undefined';

const isNodejs = typeof globalThis.process !== 'undefined' && process.versions && process.versions.node;

/**
 * Check if a value is isTruthy which is anything but false, null, 0, "", undefined, and NaN.
 *
 * @function isTruthy
 * @category type
 * @type {Function}
 * @param {*} source - Item to be isTruthy checked.
 * @param {*} [returnIfTrue = true] - Item to be returned if item is isTruthy.
 * @returns {Boolean|*} - Returns true if the item is isTruthy or returnIfTrue if provided otherwise returns false.
 *
 * @example
 * import { isTruthy, assert } from '@universalweb/acid';
 * assert(isTruthy(1), true);
 * assert(isTruthy(0), false);
 */
function isTruthy(source, returnIfTrue = true) {
	return Boolean(source) && returnIfTrue;
}

/**
 * Check if a value is isFalsy which are false, null, 0, "", undefined, and NaN.
 *
 * @function isFalsy
 * @category type
 * @type {Function}
 * @param {*} source - Item to be isFalsy checked.
 * @param {*} [returnIfTrue = true] - Item to be returned if item is isFalsy.
 * @returns {Boolean|*} - Returns true if the item is isFalsy or returnIfTrue if provided otherwise returns false.
 *
 * @example
 * import { isFalsy, assert } from '@universalweb/acid';
 * assert(isFalsy(0), true);
 * assert(isFalsy(1), false);
 */
function isFalsy(source, returnIfTrue = true) {
	return Boolean(source) === false && returnIfTrue;
}

/**
 * Checks if two values share the exact same constructor (class).
 *
 * @function sameClass
 * @category type
 * @param {*} source - First value.
 * @param {*} target - Second value.
 * @returns {Boolean} - Returns true when both values' constructors strictly equal one another.
 *
 * @example
 * import { sameClass, assert } from '@universalweb/acid';
 * assert(sameClass([], []), true);
 * assert(sameClass({}, []), false);
 */
function sameClass(source, target) {
	const sourceType = getType(source);
	const targetType = getType(target);
	return Boolean(sourceType) && sourceType === targetType;
}

/**
 * Checks if two values share the same primitive typeof.
 *
 * @function sameType
 * @category type
 * @param {*} source - First value.
 * @param {*} target - Second value.
 * @returns {Boolean} - Returns true when typeof source equals typeof target.
 *
 * @example
 * import { sameType, assert } from '@universalweb/acid';
 * assert(sameType(1, 2), true);
 * assert(sameType(1, '2'), false);
 */
function sameType(source, target) {
	return typeof source === typeof target;
}

/**
 * Takes all but the last item in the array.
 *
 * @function arraysToObject
 * @type {Function}
 * @category utility
 * @param {Array} source - Array to have items extracted from.
 * @param {Array} properties - Array to have items extracted from.
 * @returns {Array} - Returns a completely flattened array.
 *
 * @example
 * import { arraysToObject, assert } from '@universalweb/acid';
 * assert(arraysToObject([1, 2, 3], ['a', 'b', 'c']), {a:1, b:2, c: 3});
 */
function arraysToObject(source, properties) {
	const sortedObject = {};
	eachArray(source, (item, key) => {
		sortedObject[properties[key]] = item;
	});
	return sortedObject;
}

/**
 * Performs a deep comparison between two objects & determines if they're different using strict comparison.
 *
 * @function notEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source object.
 * @param {*} target - Object to be compared.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { notEqual, assert } from '@universalweb/acid';
 * assert(notEqual({a: [1,2,3]}, {a: [1,3,3]}), true);
 */
function notEqual(source, target) {
	return isFalse(isEqual(source, target));
}

const jsonNative = JSON;
const jsonParseNative = jsonNative.parse;
/**
 * Parses JSON string with safety check for undefined.
 *
 * @function jsonParse
 * @category utility
 * @type {Function}
 * @param {String} source - String to be parsed.
 * @param {Function} reviver - A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @returns {Object|undefined} - Returns the parsed object.
 *
 * @example
 * import { jsonParse, assert } from '@universalweb/acid';
 * assert(jsonParse('{"a":1}'), {a: 1});
 */
function jsonParse(source, reviver) {
	if (isString(source)) {
		return jsonParseNative(source, reviver);
	}
}
/**
 * Parses JSON string with safety check for undefined.
 *
 * @function jsonParseTry
 * @category utility
 * @type {Function}
 * @param {String} source - String to be parsed.
 * @param {Function} reviver - A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @returns {Object|undefined} - Returns the parsed object.
 *
 * @example
 * import { jsonParseTry, assert } from '@universalweb/acid';
 * assert(jsonParseTry('not json'), undefined);
 * assert(jsonParseTry('{"a":1}'), {a: 1});
 */
function jsonParseTry(source, reviver) {
	if (source) {
		try {
			return jsonParse(source, reviver);
		} catch (error) {
			return;
		}
	}
}
/**
 * Stringify an object into a JSON string.
 *
 * @function stringify
 * @category utility
 * @type {Function}
 * @param {Object} object - Object to Stringify.
 * @returns {String} - Returns the object as a valid JSON string.
 *
 * @example
 * import { stringify, assert } from '@universalweb/acid';
 * assert(stringify({a: 1}), '{"a":1}');
 */
const stringify = jsonNative.stringify;

function createAssertError(source, expected, localOptions) {
	const options = globalThis.options || localOptions;
	let errorTitle;
	if (isFunction(options)) {
		errorTitle = `${options.name} : ${options.constructor.name}`;
	} else if (options) {
		errorTitle = `${options.title || options.method.name} -> ${options.file}`;
	}
	return new Error(
		`Test Failed: ${errorTitle}\n\t\t\tResult: ${stringify(source)}\n\t\t\tExpected: ${stringify(expected)}`,
		options,
	);
}
async function unwrap(value) {
	if (isPromise(value) || isKindAsync(value)) {
		return await value;
	}
	return value;
}
const classPattern = /^class[\s{]/;
function isClassConstructor(target) {
	return typeof target === 'function' && classPattern.test(Function.prototype.toString.call(target));
}
function isPredicate(target) {
	return isFunction(target) && !isClassConstructor(target);
}
/**
 * Async assertion. Awaits both `sourceArg` and `expected` (so either may be a Promise) before comparing.
 * If `expected` is a function (sync or async) it is invoked with the resolved source; a `false` return
 * marks the assertion failed. Returns `true` on success or an Error instance on failure (matching the
 * sync `assert` contract).
 *
 * @function assertAsync
 * @category utility
 * @async
 * @type {Function}
 * @param {*} sourceArg - Value or Promise to compare against.
 * @param {*} expected - Expected value, async/sync predicate, or Promise.
 * @param {*} [options] - Test metadata used in error messages.
 * @returns {Promise<true|Error>} - `true` on pass, Error on fail.
 *
 * @example
 * import { assertAsync } from '@universalweb/acid';
 * await assertAsync(Promise.resolve(2), 2);
 * await assertAsync(Promise.resolve(2), Promise.resolve(2));
 * await assertAsync(Promise.resolve(3), async (value) => value === 3);
 */
async function assertAsync(sourceArg, expected, options) {
	const source = await unwrap(sourceArg);
	if (source === expected) {
		return true;
	}
	if (isPredicate(expected)) {
		const predicateResult = await expected(source, options);
		if (predicateResult === false) {
			return createAssertError(source, expected, options);
		}
		return true;
	}
	const expectedValue = await unwrap(expected);
	if (notEqual(source, expectedValue)) {
		return createAssertError(source, expectedValue, options);
	}
	return true;
}
/**
 * Check if source value matches the expected value. Routes to {@link assertAsync} when either argument
 * is async (Promise, async function, or thenable).
 *
 * @function assert
 * @category utility
 * @type {Function}
 * @param {*} source - The source value to compare.
 * @param {*} expected - Expected value or predicate.
 * @param {*} [options] - Test metadata used in error messages.
 * @returns {true|Error|Promise<true|Error>} - `true` on pass, Error on fail, or a Promise of the same when async.
 *
 * @example
 * import { assert } from '@universalweb/acid';
 * if (!assert(1, 1)) {
 *   throw new Error('Assert Method Failed');
 * }
 */
function assert(source, expected, options) {
	if (isKindAsync(source) || isKindAsync(expected) || isPromise(source) || isPromise(expected)) {
		return assertAsync(source, expected, options);
	}
	if (source === expected) {
		return true;
	}
	if (isPredicate(expected)) {
		const predicateResult = expected(source, options);
		if (predicateResult === false) {
			return createAssertError(source, expected, options);
		}
		return true;
	}
	if (notEqual(source, expected)) {
		return createAssertError(source, expected, options);
	}
	return true;
}

/**
 * Loops through an object or an array and binds the given object to all functions encountered. Optionally accepts an object which to assign the newly bound functions to.
 *
 * @function bindAll
 * @category utility
 * @type {Function}
 * @param {Object|Function|Array} collection - The functions to bind.
 * @param {*} bindThis - Object to be bound to functions.
 * @param {Object|Function|Array} targetAssign - Object to assign newly bound functions to.
 * @returns {Object|Function|Array} - Returns the collection of bound functions or the assign target provided.
 *
 * @example
 * import { assert, bindAll } from '@universalweb/acid';
 * const bounded = bindAll([function () { return this;}], 'Bounded');
 * assert(bounded[0](), 'Bounded');
 */
function bindAll(collection, bindThis, targetAssign) {
	const results = map(collection, (item) => {
		return isFunction(item) ? item.bind(bindThis) : item;
	});
	return (targetAssign) ? assign(targetAssign, results) : results;
}

/**
 * Clears the values out of an array, buffer, and objects like Map that have a clear method.
 *
 * @function clear
 * @category utility
 * @type {Function}
 * @param {Array} source - Takes an array to be emptied.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { clear, assert } from '@universalweb/acid';
 * assert(clear([1, 2, 3]), []);
 */
function clear(source) {
	if (source) {
		if (isBuffer(source)) {
			return clearBuffer(source);
		} else if (isArray(source)) {
			return clearArray(source);
		} else if (source.clear) {
			source.clear();
		} else if (source.length) {
			source.length = 0;
		}
	}
	return source;
}

/**
 * Creates a structured clone of an object which is a "structured-cloneable type".
 *
 * @function clone
 * @category utility
 * @type {Function}
 * @param {Object} source - Any structured-cloneable type object.
 * @returns {Object} - Returns a deep clone of an object.
 *
 * @example
 * import { clone, assert } from '@universalweb/acid';
 * assert(clone({a:{b:[2]}}), {a:{b:[2]}});
 */
const structuredCloneSafe = globalThis.structuredClone;
function clone(source) {
	return structuredCloneSafe(source);
}

/**
 * Creates an array with all isFalsy values removed. The values false, null, 0, "", undefined, and NaN are isFalsy.
 *
 * @function compact
 * @category utility
 * @type {Function}
 * @param {Array|Object} source - Array or Object to be compacted.
 * @returns {Array|Object} - A new object or array containing the filtered values.
 *
 * @example
 * import { compact, assert } from '@universalweb/acid';
 * assert(compact([1,'B', 'Cat', false, null, 0 , '', undefined, NaN]), [1, 'B', 'Cat']);
 */
function compact(source) {
	if (isPlainObject(source)) {
		const sourceKeys = keys(source);
		const sourceKeysLength = sourceKeys.length;
		const targetObject = {};
		for (let i = 0; i < sourceKeysLength; i++) {
			const keyName = sourceKeys[i];
			const item = source[keyName];
			const isisTruthy = isTruthy(item);
			if (isisTruthy) {
				targetObject[keyName] = item;
			}
		}
		return targetObject;
	}
	return source.filter((item) => {
		return isTruthy(item);
	});
}

/**
 * Asynchronously iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfCompactMapAsync
 * @category utility
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function|Class|Map|Set|Array} resultsObject - Object that will be used to assign results else source is type cloned.
 * @returns {Object|Function|Class|Map|Set|Array} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * import { forOfCompactMapAsync, assert } from '@universalweb/acid';
 * assert(await forOfCompactMapAsync([1, null, 2, undefined, 3], async (item) => item), [1, 2, 3]);
 */
async function forOfCompactMapAsync(source, iteratee = returnValue, resultsObject, generatorArgs) {
	if (isGenerator(source)) {
		const resultsGenerator = [];
		for await (const item of source(...generatorArgs)) {
			const result = await iteratee(item, resultsGenerator, source);
			if (hasValue(result)) {
				resultsGenerator.push(result);
			}
		}
		return resultsGenerator;
	}
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = await iteratee(value, results, source);
			if (hasValue(result)) {
				methodPushBound(result);
			}
		}
		return results;
	}
	const methodSet = isFunction(results.set);
	for await (const [key, value] of source) {
		const result = await iteratee(value, key, results, source);
		if (hasValue(result)) {
			if (methodSet) {
				results.set(key, result);
			} else {
				results[key] = result;
			}
		}
	}
	return results;
}

/**
 * Iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfCompactMap
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function|Class|Map|Set|Array} resultsObject - Object that will be used to assign results else source is type cloned.
 * @returns {Object|Function|Class|Map|Set|Array} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * import { forOfCompactMap, assert } from '@universalweb/acid';
 * assert(forOfCompactMap([1, null, 2, undefined, 3], (item) => item), [1, 2, 3]);
 */
function forOfCompactMap(source, iteratee = returnValue, resultsObject) {
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = iteratee(value, results, source);
			if (hasValue(result)) {
				methodPushBound(result);
			}
		}
		return results;
	}
	const methodSet = isFunction(results.set);
	for (const [key, value] of source) {
		const result = iteratee(value, key, results, source);
		if (hasValue(result)) {
			if (methodSet) {
				results.set(key, result);
			} else {
				results[key] = result;
			}
		}
	}
	return results;
}

/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMap
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {Object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 *
 * @example
 * import { compactMap, assert } from '@universalweb/acid';
 * assert(compactMap({a: null, b: 2, c: 3}, (item) => {
 *   return item;
 * }), {b: 2, c: 3});
 */
const compactMap = generateLoop(
	compactMapArray,
	compactMapAsyncArray,
	compactMapObject,
	compactMapAsyncObject,
	forOfCompactMap,
	forOfCompactMapAsync
);

/**
 * Iterates through the given array of async function(s) adding each call to a queue. Then uses Promise.all on the queue returning the values from each promise. Does not await on each async iteratee before the next.
 *
 * @function concurrent
 * @type {Function}
 * @category utility
 * @async
 * @param {Array} source - Array of async functions that will be looped through.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args - Arguments to pass to each function. Every argument after the first (thisBind) is passed to each function.
 * @returns {Object} - The originally given array.
 *
 * @example
 * import { concurrent, assert } from '@universalweb/acid';
 * const results = await concurrent([
 *   async (item) => item,
 *   async (item) => item,
 * ], null, 1);
 * assert(results, [1, 1]);
 */
async function concurrent(source, thisBind, ...args) {
	const arrayLength = source.length;
	const results = [];
	if (thisBind) {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = source[index].call(thisBind, ...args, index, results, callable);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = source[index](...args, index, results, callable);
		}
	}
	return Promise.all(results);
}

/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.all on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrentEach
 * @category utility
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @returns {Promise|Array|undefined} - The array from Promise.all.
 *
 * @example
 * import { concurrentEach, has, assert } from '@universalweb/acid';
 * const results = await concurrentEach([1, 2, 3], async (item) => {
 *   return item * 2;
 * });
 * assert(has(results, [2, 4, 6]), true);
 */
async function concurrentEach(source, iteratee, thisBind) {
	if (!source) {
		return;
	}
	if (isArray(source)) {
		return concurrentEachArray(source, iteratee, thisBind);
	}
	return;
}

/**
 * Iterates through an array, invokes the async iteratee, and adds the promises to a queue. Then uses & returns the Promise.allSettled on the queue returning the values from each promise. Does not await on the async iteratee.
 *
 * @function concurrentStatus
 * @category utility
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} additionalArgument - An object to be given each time to the iteratee.
 * @returns {Array} - The array from Promise.allSettled.
 *
 * @example
 * import { concurrentStatus, assert } from '@universalweb/acid';
 * const results = await concurrentStatus([1, 2], async (item) => item);
 * assert(results, [{status: 'fulfilled', value: 1}, {status: 'fulfilled', value: 2}]);
 */
function concurrentStatus(source, iteratee, additionalArgument) {
	const arrayLength = source.length;
	const queue = [];
	for (let index = 0; index < arrayLength; index++) {
		queue[index] = iteratee(source[index], index, source, arrayLength, additionalArgument);
	}
	return Promise.allSettled(queue);
}

/**
 * Returns a promise that resolves with `value` after `ms` milliseconds.
 *
 * @function delay
 * @category utility
 * @type {Function}
 * @async
 * @param {Number} ms - Milliseconds to wait.
 * @param {*} [value] - Optional value to resolve with.
 * @returns {Promise} - Promise that resolves with the given value.
 *
 * @example
 * import { delay } from '@universalweb/acid';
 * await delay(100);
 */
function delay(ms, value) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(value), ms);
	});
}
/**
 * Resolves on the next animation frame in the browser; falls back to setTimeout(0) in non-browser environments.
 *
 * @function nextFrame
 * @category utility
 * @type {Function}
 * @async
 * @returns {Promise} - Promise resolving when the next frame fires.
 *
 * @example
 * import { nextFrame } from '@universalweb/acid';
 * await nextFrame();
 */
const raf = globalThis.requestAnimationFrame;
function nextFrame() {
	if (raf) {
		return new Promise((resolve) => raf(resolve));
	}
	return new Promise((resolve) => setTimeout(resolve, 0));
}

function everyArg(...methods) {
	if (isAsync(methods[0])) {
		return async function(...args) {
			return every(methods, async (method) => {
				return every(args, async (item) => {
					return method(item);
				});
			});
		};
	}
	return function(...args) {
		return every(methods, (method) => {
			return every(args, (item) => {
				return method(item);
			});
		});
	};
}

/**
 * Iterates (for of) through the calling object and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
 *
 * @function forOfFilter
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function|Class|Map|Set|Array} resultsObject - Object that will be used to assign results else source is type cloned.
 * @returns {Object|Function|Class|Map|Set|Array} - An object with mapped properties.
 *
 * @example
 * import { forOfFilter, assert } from '@universalweb/acid';
 * assert(forOfFilter([1, 2, 3, 4], (item) => item % 2 === 0), [2, 4]);
 */
function forOfFilter(source, iteratee = returnValue, resultsObject) {
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = iteratee(value, results, source);
			if (result === true) {
				methodPushBound(value);
			}
		}
	} else {
		const methodSet = isFunction(results.set);
		for (const [key, value] of source) {
			const result = iteratee(value, key, results, source);
			if (result === true) {
				if (methodSet) {
					results.set(key, value);
				} else {
					results[key] = value;
				}
			}
		}
	}
	return results;
}

/**
 * Asynchronously iterates (for of)through the calling object and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
 *
 * @function forOfFilterAsync
 * @category utility
 * @type {Function}
 * @param {Object|Function|Class|Map|Set|Array} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function|Class|Map|Set|Array} resultsObject - Object that will be used to assign results else source is type cloned.
 * @returns {Object|Function|Class|Map|Set|Array} - An object with mapped properties.
 *
 * @example
 * import { forOfFilterAsync, assert } from '@universalweb/acid';
 * assert(await forOfFilterAsync([1, 2, 3, 4], async (item) => item % 2 === 0), [2, 4]);
 */
async function forOfFilterAsync(source, iteratee = returnValue, resultsObject, generatorArgs) {
	if (isGenerator(source)) {
		const resultsGenerator = [];
		for await (const item of source(...generatorArgs)) {
			if (await iteratee(item, resultsGenerator, source) === true) {
				resultsGenerator.push(item);
			}
		}
		return resultsGenerator;
	}
	const results = resultsObject || cloneType(source);
	if (isArray(source) || isSet(source)) {
		const methodPush = results.push || results.add;
		const methodPushBound = methodPush && methodPush.bind(results);
		for (const value of source) {
			const result = await iteratee(value, results, source);
			if (result === true) {
				methodPushBound(value);
			}
		}
	} else {
		const methodSet = isFunction(results.set);
		for await (const [key, value] of source) {
			const result = await iteratee(value, key, results, source);
			if (result === true) {
				if (methodSet) {
					results.set(key, value);
				} else {
					results[key] = value;
				}
			}
		}
	}
	return results;
}

/**
 * Iterates through the calling object and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
 *
 * @function filter
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {Object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 *
 * @example
 * import { filter, assert } from '@universalweb/acid';
 * assert(filter({a: false, b: true, c: true}, (item) => {
 *   return item;
 * }), {b: true, c: true});
 */
const filter = generateLoop(filterArray, filterAsyncArray, filterObject, filterAsyncObject, forOfFilter, forOfFilterAsync);

function returnFlow$1(callable) {
	return (...methods) => {
		return (arg) => {
			let value = arg;
			callable(methods, (item) => {
				value = item(value);
			});
			return value;
		};
	};
}
/**
 * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
 *
 * @function flow
 * @category utility
 * @type {Function}
 * @param {Array} collection - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flow, increment, deduct, assert } from '@universalweb/acid';
 * assert(flow(increment, increment, deduct)(0), 1);
 */
const flow = returnFlow$1(eachArray);
/**
 * This method is like flow except that it creates a function that invokes the given functions from right to left.
 *
 * @function flowRight
 * @category utility
 * @type {Function}
 * @param {Array} collection - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flowRight, increment, deduct, assert } from '@universalweb/acid';
 * assert(flowRight(increment, increment, deduct)(0), 1);
 */
const flowRight = returnFlow$1(eachRight);

function returnFlow(callable) {
	return (...methods) => {
		return async (arg) => {
			let value = arg;
			await callable(methods, async (item) => {
				value = await item(value);
			});
			return value;
		};
	};
}
/**
 * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
 *
 * @function flowAsync
 * @category utility
 * @type {Function}
 * @async
 * @param {Array} collection - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flowAsync, increment, assert } from '@universalweb/acid';
 * assert(await flowAsync(async (item) => increment(item), async (item) => increment(item))(0), 2);
 */
const flowAsync = returnFlow(eachAsyncArray);
/**
 * This method is like flow except that it creates a function that invokes the given functions from right to left.
 *
 * @function flowAsyncRight
 * @category utility
 * @type {Function}
 * @async
 * @param {Array} collection - Methods to invoke.
 * @returns {Function} - Returns the new composite function.
 *
 * @example
 * import { flowAsyncRight, increment, assert } from '@universalweb/acid';
 * assert(await flowAsyncRight(async (item) => increment(item), async (item) => increment(item))(0), 2);
 */
const flowAsyncRight = returnFlow(eachRightAsync);

/**
 * Iterates source via forEach, cloning the source's type, and pushes/sets each non-null/undefined returned value onto the clone.
 *
 * @function forCompactMap
 * @category utility
 * @type {Function}
 * @param {Array|Object|Map|Set} source - Object that will be looped through.
 * @param {Function} callback - Transformation function returning the new value.
 * @returns {Array|Object|Map|Set} - A new collection of the same type containing the mapped values.
 *
 * @example
 * import { forCompactMap, assert } from '@universalweb/acid';
 * assert(forCompactMap([1, 2, null, 3], (item) => item), [1, 2, 3]);
 */
function forCompactMap(source, callback) {
	const cloned = cloneType(source);
	const method = cloned.push || cloned.add;
	if (method && isFunction(method)) {
		const methodBound = method.bind(cloned);
		source.forEach((item) => {
			const result = callback(item, cloned);
			if (hasValue(result)) {
				methodBound(result);
			}
		});
	} else if (isFunction(cloned.set)) {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			if (hasValue(result)) {
				cloned.set(key, result);
			}
		});
	} else {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			if (hasValue(result)) {
				cloned[key] = result;
			}
		});
	}
	return cloned;
}

function forMap(source, callback) {
	const cloned = cloneType(source);
	const method = cloned.push || cloned.add;
	if (method && isFunction(method)) {
		const methodBound = method.bind(cloned);
		source.forEach((item) => {
			const result = callback(item, cloned);
			methodBound(result);
		});
	} else if (isFunction(cloned.set)) {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			cloned.set(key, result);
		});
	} else {
		source.forEach((item, key) => {
			const result = callback(item, key, cloned);
			cloned[key] = result;
		});
	}
	return cloned;
}

/**
 * Checks if an object contains something. For basic searches.
 *
 * @function has
 * @category utility
 * @param {Array|String|Object} source - Object to be checked.
 * @param {String|Array|Function|RegExp} search - Object that is being searched for.
 * @param {Number} position - Index at which to start searching.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { has, assert } from '@universalweb/acid';
 * assert(has('Hello World', 'Hello'), true);
 * assert(has(['Hello', 'World'], 'Hello'), true);
 */
function has(source, search, position) {
	if (noValue(source) || noValue(search)) {
		return false;
	}
	if (source === search) {
		return true;
	}
	if (isString(source)) {
		if (isString(search)) {
			return source.includes(search, position);
		}
		if (isRegex(search)) {
			return search.test(source);
		}
		if (isFunction(search)) {
			return search(source);
		}
		if (isArray(search)) {
			return everyArray(search, (item) => {
				return has(source, item);
			});
		}
		return every(search, (item) => {
			return has(source, item);
		});
	}
	if (isArray(source)) {
		if (isRegex(search)) {
			return source.some((item) => {
				return search.test(item);
			});
		}
		if (isFunction(search)) {
			return source.some(search);
		}
		if (isArray(search)) {
			return everyArray(search, (item) => {
				return has(source, item);
			});
		}
		return source.includes(search, position);
	}
	if (isPlainObject(source)) {
		const keys = Object.keys(source);
		const keysLength = keys.length;
		if (isRegex(search)) {
			for (let index = 0; index < keysLength; index++) {
				if (search.test(source[keys[index]])) {
					return true;
				}
			}
			return false;
		}
		if (isFunction(search)) {
			for (let index = 0; index < keysLength; index++) {
				const key = keys[index];
				if (search(source[key], key, source)) {
					return true;
				}
			}
			return false;
		}
		if (isPlainObject(search)) {
			return everyObject(search, (item, key) => {
				return source[key] === item;
			});
		}
		for (let index = 0; index < keysLength; index++) {
			if (source[keys[index]] === search) {
				return true;
			}
		}
		return false;
	}
	return false;
}

/**
 * Checks if the string has a '.'.
 *
 * @function hasDot
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { hasDot, assert } from '@universalweb/acid';
 * assert(hasDot('test.js'), true);
 */
const hasDot = regexTestFactory(/\./);

/**
 * Checks if a property on an object has a value. If not, it will assign a value.
 *
 * @function ifNotAssign
 * @category utility
 * @type {Function}
 * @param {Object} rootObject - The object to check.
 * @param {String} property - The property name which is to be checked.
 * @param {*} equalThis - The reassignment value for the property being checked.
 * @returns {Object} - Returns the provided rootObject.
 *
 * @example
 * import { ifNotAssign, assert } from '@universalweb/acid';
 * assert(ifNotAssign({}, 'a', 1), {a:1});
 */
const ifNotAssign = (rootObject, property, equalThis) => {
	if (property && !hasValue(rootObject[property])) {
		rootObject[property] = equalThis;
	}
	return rootObject;
};

/**
 * If source has a value then assign it to an object or call a function.
 *
 * @function ifValue
 * @category utility
 * @param {*} source - The source object to be hasValue checked.
 * @param {Function|Object} target - The target which is either a function or object.
 * @param {*|String} optional - If target is a plain object then it must be a string and is used to assign the property name. Else it's used as the this for the provided function (target).
 * @param {Array} args - The args that would be used if the target is a function and is the params that is applied to the function.
 * @returns {source|undefined} The source object if it passes the hasValue check.
 *
 * @example
 * import { ifValue, assert } from '@universalweb/acid';
 * assert(ifValue(1, {}, 'a'), {a:1});
 */
function ifValue(source, target, optional, args) {
	if (hasValue(source)) {
		if (isFunction(target)) {
			if (optional) {
				return apply(target, optional, args);
			}
			return target(...args);
		} else if (isPlainObject(target)) {
			target[optional] = source;
			return target;
		}
	}
}

/**
 * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
 *
 * @function inAsync
 * @type {Function}
 * @category utility
 * @async
 * @param {Array} source - Array of async functions that will be looped through.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args - Arguments to pass to each function. Every argument after the first (thisBind) is passed to each function.
 * @returns {Object} - The originally given array.
 *
 * @example
 * import { inAsync, assert } from '@universalweb/acid';
 * const list = [];
 * await inAsync([
 *   async (firstArgument, index) => { list.push(index + firstArgument.a); },
 *   async (firstArgument, index) => { list.push(index); },
 * ], null, {a: 1});
 * assert(list, [1, 1]);
 */
async function inAsync(source, thisBind, ...args) {
	const arrayLength = source.length;
	const results = [];
	if (thisBind) {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = await source[index].call(thisBind, ...args, index, callable);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = await source[index](...args, index, callable);
		}
	}
	return results;
}

/**
 * Invoke an array of functions.
 *
 * @function inSync
 * @category utility
 * @type {Function}
 * @param {Array} source - Array of functions that will be looped through.
 * @param {*} thisBind - Object to use as the "this" within the function.
 * @param {...*} args -The arguments passed to each function. Every argument after the first (thisBind) is passed to each function.
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * import { inSync, assert } from '@universalweb/acid';
 * const collected = [];
 * inSync([() => collected.push(1), () => collected.push(2)]);
 * assert(collected, [1, 2]);
 */
function inSync(source, thisBind, ...args) {
	const arrayLength = source.length;
	const results = [];
	if (thisBind) {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = callable.call(thisBind, ...args, index, callable);
		}
	} else {
		for (let index = 0; index < arrayLength; index++) {
			const callable = source[index];
			results[index] = callable(...args, index, callable);
		}
	}
	return results;
}

class Intervals {
	list = construct(Map);
	/**
	 * Remove a setInterval that was created using the intervals function.
	 *
	 * @param {Number} id - The id of the setInterval to remove.
	 * @returns {undefined} - Returns nothing.
	 *
	 * @example
	 * import { intervals } from '@universalweb/acid';
	 * const id = intervals.set(() => {}, 100);
	 * intervals.remove(id);
	 */
	remove(id) {
		clearInterval(id);
		this.list.delete(id);
	}
	has(id) {
		return this.list.has(id);
	}
	get(id) {
		return this.list.get(id);
	}
	/**
	 * Create a setInterval & add it to the list of interval timers.
	 *
	 * @type {Function}
	 * @param {Function} callable - The function to be invoked.
	 * @param {Number} time - The time in milliseconds.
	 * @returns {Object} - Returns setTimeoutId ID.
	 *
	 * @example
	 * import { intervals } from '@universalweb/acid';
	 * const id = intervals.set(() => {}, 100);
	 * intervals.remove(id);
	 */
	set(callable, time) {
		const id = setInterval(() => {
			callable();
		}, time);
		this.list.set(id, true);
		return id;
	}
	/**
	 * Clear all active setIntervals.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { intervals } from '@universalweb/acid';
	 * intervals.clear();
	 */
	clear() {
		const currentThis = this;
		currentThis.list.forEach((id) => {
			currentThis.remove(id);
		});
	}
}
const intervals = construct(Intervals);
/**
 * Create an interval timer.
 *
 * @function interval
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to be invoked.
 * @param {Number} time - The time in milliseconds.
 * @returns {Object} - Returns setInterval ID.
 *
 * @example
 * import { interval, clearIntervals } from '@universalweb/acid';
 * const id = interval(() => {}, 100);
 * clearIntervals();
 */
function interval(callable, time) {
	return intervals.set(callable, time);
}
/**
 * Clears all intervals tracked by the Intervals registry.
 *
 * @function clearIntervals
 * @category utility
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * import { clearIntervals } from '@universalweb/acid';
 * clearIntervals();
 */
function clearIntervals() {
	intervals.clear();
}

/**
 * Caches the result of a function based on its arguments. By default, the first argument is used as the cache key.
 * Pass a `resolver` to customize the cache key. The cache lives on `memoized.cache` (a Map).
 *
 * @function memoize
 * @category utility
 * @type {Function}
 * @param {Function} method - The function to memoize.
 * @param {Function} [resolver] - Optional resolver returning the cache key from arguments.
 * @returns {Function} - The memoized function.
 *
 * @example
 * import { memoize, assert } from '@universalweb/acid';
 * let count = 0;
 * const slow = (n) => { count++; return n * 2; };
 * const fast = memoize(slow);
 * fast(2); fast(2); fast(2);
 * assert(count, 1);
 */
function memoize(method, resolver) {
	const cache = new Map();
	function memoized(...args) {
		const key = resolver ? resolver(...args) : args[0];
		if (cache.has(key)) {
			return cache.get(key);
		}
		const result = method.apply(this, args);
		cache.set(key, result);
		return result;
	}
	memoized.cache = cache;
	return memoized;
}

function merge(target, ...sources) {
	each(sources, (currentSource) => {
		each(currentSource, (sourceItem, sourceKey) => {
			if (target[sourceKey]) {
				if (isPlainObject(sourceItem) || isArray(sourceItem)) {
					return merge(target[sourceKey], sourceItem);
				}
			}
			target[sourceKey] = sourceItem;
		});
	});
	return target;
}

/**
 * Returns the model with the given name.
 *
 * @function Model
 * @type {Class}
 * @category utility
 * @param {String} modelName - The name of the model to return.
 * @param {*} modelSource - The value of the model to return.
 * @returns {Model} - The model with the given name.
 *
 * @example
 * import { Model, model, assert } from '@universalweb/acid';
 * const test = new Model('test', {a: 1});
 * assert(model('test'), {a: 1});
 */
class Model {
	static models = new Map();
	constructor(modelName, modelSource) {
		if (hasValue(modelSource)) {
			assign(this, modelSource);
			this.modelName = modelName;
			Model.models.set(modelName, modelSource);
		} else {
			assign(this, modelName);
		}
	}
	delete(modelName) {
		Model.models.delete(modelName || this.modelName);
	}
	set(modelName) {
		if (modelName) {
			this.modelName = modelName;
		}
		Model.models.set(modelName || this.modelName, this);
	}
	has(modelName) {
		return Model.models.has(modelName || this.modelName);
	}
	get(modelName) {
		return Model.models.get(modelName || this.modelName);
	}
}
/**
 * Set & Get a model.
 *
 * @function model
 * @type {Function}
 * @category utility
 * @param {String} modelName - Name of the model.
 * @param {Object} modelSource - The model object.
 * @returns {Model} - Returns the associated model.
 *
 * @example
 * import { model, assert } from '@universalweb/acid';
 * model('test', {a: 1});
 * assert(model('test'), {a: 1});
 */
function model(modelName, modelSource) {
	if (hasValue(modelSource)) {
		return construct(Model, [modelName, modelSource]);
	}
	return Model.models.get(modelName);
}

/**
 * This method returns undefined.
 *
 * @function noop
 * @category function
 * @type {Function}
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * import { noop, assert } from '@universalweb/acid';
 * assert(noop(), undefined);
 */
function noop() {
	return;
}

/**
 * Creates a function that runs each transform on its respective argument before invoking the wrapped function.
 *
 * @function overArgs
 * @category utility
 * @type {Function}
 * @param {Function} method - The function to wrap.
 * @param {Function[]} transforms - Functions applied in argument order. Extra arguments past the transforms list pass through unchanged.
 * @returns {Function} - Returns the new wrapped function.
 *
 * @example
 * import { overArgs, assert } from '@universalweb/acid';
 * const sum = (a, b) => a + b;
 * const wrapped = overArgs(sum, [(n) => n * 2, (n) => n * 10]);
 * assert(wrapped(1, 2), 22);
 */
function overArgs(method, transforms) {
	const length = transforms.length;
	return function(...args) {
		const transformed = new Array(args.length);
		for (let index = 0; index < args.length; index++) {
			transformed[index] = index < length ? transforms[index](args[index]) : args[index];
		}
		return method.apply(this, transformed);
	};
}

/**
 * Takes the first two arguments given and returns them inside a new array.
 *
 * @function pair
 * @category utility
 * @param {*} argument1 - The source object.
 * @param {*} argument2 - The source object.
 * @returns {Array} The array which holds the pair.
 *
 * @example
 * import { pair, assert } from '@universalweb/acid';
 * assert(pair(1, 2), [1, 2]);
 */
function pair(argument1, argument2) {
	return [argument1, argument2];
}

/**
 * A wrapper around the promise constructor.
 *
 * @function promise
 * @type {Function}
 * @category utility
 * @param {Function} callback - Function to be called back.
 * @returns {Promise} - A constructor with a callback function.).
 *
 * @example
 * import { promise, assert } from '@universalweb/acid';
 * assert(await promise((resolve) => resolve(42)), 42);
 */
function promise(callback) {
	return new Promise(callback);
}

/**
 * Using a deep comparison it checks if properties of two objects using an array are equal.
 *
 * @function propertyMatch
 * @type {Function}
 * @category utility
 * @param {Object} source - The source object to compare.
 * @param {Object} compared - Object to be compared to source.
 * @param {Array} properties - List of properties to compare defaults to keys(source).
 * @returns {Array} - Returns an array of properties.
 *
 * @example
 * import { propertyMatch, assert } from '@universalweb/acid';
 * assert(propertyMatch({
 *   a: 1,
 *   b: 2
 * }, {
 *   a: 1,
 *   b: 2
 * }, ['a', 'b']), true);
 */
const propertyMatch = (source, compared, properties = keys(source)) => {
	return everyArray(properties, (property) => {
		return isEqual(source[property], compared[property]);
	});
};

/**
 * Invokes an async function, retrying on rejection up to `attempts` times with optional backoff delay.
 *
 * @function retry
 * @category utility
 * @async
 * @type {Function}
 * @param {Function} method - The async function to invoke.
 * @param {Object} [options] - Retry options.
 * @param {Number} [options.attempts=3] - Total attempts including the first.
 * @param {Number} [options.wait=0] - Initial wait between attempts (ms).
 * @param {Number} [options.factor=1] - Multiplier applied to wait between attempts (e.g. 2 for exponential).
 * @returns {Promise} - Resolves with the method's value or rejects with the last error.
 *
 * @example
 * import { retry, assert } from '@universalweb/acid';
 * let attempts = 0;
 * const result = await retry(async () => {
 *   attempts++;
 *   if (attempts < 3) throw new Error('not yet');
 *   return 'ok';
 * }, { attempts: 5, wait: 1 });
 * assert(result, 'ok');
 */
async function retry(method, { attempts = 3, wait = 0, factor = 1 } = {}) {
	let lastError;
	let currentWait = wait;
	for (let attempt = 0; attempt < attempts; attempt++) {
		try {
			return await method(attempt);
		} catch (error) {
			lastError = error;
			if (attempt < attempts - 1 && currentWait > 0) {
				await delay(currentWait);
				currentWait *= factor;
			}
		}
	}
	throw lastError;
}
/**
 * Wraps a promise with a timeout that rejects when not settled in time.
 *
 * @function withTimeout
 * @category utility
 * @async
 * @type {Function}
 * @param {Promise|Function} target - A promise or a function returning a promise.
 * @param {Number} ms - Timeout in milliseconds.
 * @param {String} [message='Timed out'] - Error message used when the timeout fires.
 * @returns {Promise} - Resolves with the target's value or rejects on timeout.
 *
 * @example
 * import { withTimeout, delay, assert } from '@universalweb/acid';
 * assert(await withTimeout(delay(10, 'fast'), 100), 'fast');
 */
function withTimeout(target, ms, message = 'Timed out') {
	const targetPromise = typeof target === 'function' ? target() : target;
	return new Promise((resolve, reject) => {
		const id = setTimeout(() => reject(new Error(message)), ms);
		targetPromise.then(
			(value) => { clearTimeout(id); resolve(value); },
			(error) => { clearTimeout(id); reject(error); }
		);
	});
}

/**
 * Travels down an object based on a path string and sets a value on the last segment.
 * Auto-creates missing intermediate objects (or arrays when the next segment is a numeric index).
 *
 * @function set
 * @category utility
 * @type {Function}
 * @param {Object} target - Object to traverse and set a value on.
 * @param {String|Array} propertyString - Dot/bracket path or pre-tokenized array of keys.
 * @param {*} value - Value to assign at the end of the path.
 * @returns {Object} - Returns the original target.
 *
 * @example
 * import { set, assert } from '@universalweb/acid';
 * const objectTarget = { post: { like: ['a', 'b', 'c'] } };
 * set(objectTarget, 'post.like[2]', 'g');
 * assert(objectTarget.post.like[2], 'g');
 */
function set(target, propertyString, value) {
	if (!target) {
		return target;
	}
	const pathArray = isArray(propertyString) ? propertyString : toPath(propertyString);
	const lastIndex = pathArray.length - 1;
	let link = target;
	for (let index = 0; index < lastIndex; index++) {
		const key = pathArray[index];
		if (link[key] === undefined || link[key] === null) {
			const nextKey = pathArray[index + 1];
			link[key] = /^\d+$/.test(nextKey) ? [] : {};
		}
		link = link[key];
	}
	link[pathArray[lastIndex]] = value;
	return target;
}

function setKey(source, key, value) {
	if (key && isPlainObject(source)) {
		source[key] = value;
	} else if (isNumber(key) && isArray(source)) {
		source[key] = value;
	} else if (source.set) {
		source.set(key, value);
	} else if (source.push) {
		source.push(value);
	} else if (source.add) {
		source.add(value);
	} else {
		source[key] = value;
	}
	return source;
}

function setValue(source, value, key) {
	if (isNumber(key) && isArray(source)) {
		source[key] = value;
	} else if (source.push) {
		source.push(value);
	} else if (source.add) {
		source.add(value);
	} else {
		source[key] = value;
	}
	return source;
}

class Store {
	source;
	constructor(source = {}) {
		this.source = source;
		if (source === null || typeof source !== 'object') {
			return source;
		}
		eachObject(source, (property) => {
			source[property] = new Store(source[property]);
		});
		this.data = new Proxy(source, {
			get(proxySource, property) {
				console.log(proxySource, property, proxySource[property]);
				return proxySource[property];
			},
			set(proxySource, property, value) {
				console.log(proxySource, property, proxySource[property]);
				proxySource[property] = new Store(value);
				return true;
			},
		});
	}
}

/**
 * This method returns a new empty array.
 *
 * @function stubArray
 * @category utility
 * @type {Function}
 * @returns {Array} - Returns the new empty array.
 *
 * @example
 * import { stubArray, assert } from '@universalweb/acid';
 * assert(stubArray(), []);
 */
function stubArray() {
	return [];
}

/**
 * This method returns false.
 *
 * @function stubFalse
 * @category utility
 * @type {Function}
 * @returns {Boolean} - Returns false.
 *
 * @example
 * import { stubFalse, assert } from '@universalweb/acid';
 * assert(stubFalse(), false);
 */
function stubFalse() {
	return false;
}

/**
 * This method returns a new empty object.
 *
 * @function stubObject
 * @category utility
 * @type {Function}
 * @returns {Object} - Returns the new empty object.
 *
 * @example
 * import { stubObject, assert } from '@universalweb/acid';
 * assert(stubObject(), {});
 */
const stubObject = () => {
	return {};
};

/**
 * This method returns a new empty string.
 *
 * @function stubString
 * @category utility
 * @type {Function}
 * @returns {String} - Returns the new empty string.
 *
 * @example
 * import { stubString, assert } from '@universalweb/acid';
 * assert(stubString(), '');
 */
const stubString = () => {
	return '';
};

/**
 * This method returns true.
 *
 * @function stubTrue
 * @category utility
 * @type {Function}
 * @returns {Boolean} - Returns true.
 *
 * @example
 * import { stubTrue, assert } from '@universalweb/acid';
 * assert(stubTrue(), true);
 */
const stubTrue = () => {
	return true;
};

/**
 * Iterates based on the amount given invoking the iteratee with the current index as an argument.
 *
 * @function times
 * @category utility
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index and amount.
 * @returns {undefined} - Nothing.
 *
 * @example
 * import { times } from '@universalweb/acid';
 * times(3, (item) => {
 *   console.log(item);
 * });
 * // 0
 * // 1
 * // 2
 * // => undefined
 */
function times(amount, iteratee, contextThis) {
	for (let index = 0; index < amount; index++) {
		(contextThis && iteratee.call(contextThis, index)) || iteratee(index);
	}
}
/**
 * Iterates based on the amount given and maps the results returned by the iteratee each time to an array.
 *
 * @function timesMap
 * @category utility
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index and amount.
 * @param {Array} [results = []] - Array that will have iteratee return pushed to.
 * @returns {Array} - An array with iteratee's returned values.
 *
 * @example
 * import { timesMap } from '@universalweb/acid';
 * timesMap(3, (item) => {
 *   return item;
 * });
 * // => [0, 1, 2]
 */
function timesMap(amount, iteratee, results = []) {
	for (let index = 0; index < amount; index++) {
		results[index] = iteratee(amount);
	}
	return results;
}

/**
 * Asynchronously iterates based on the amount given awaiting on the iteratee with the current index as an argument.
 *
 * @async
 * @function timesAsync
 * @category utility
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index and amount.
 * @returns {undefined} - Nothing.
 *
 * @example
 * import { timesAsync } from '@universalweb/acid';
 * await timesAsync(3, async (item) => {
 *   console.log(item);
 * });
 * // 0
 * // 1
 * // 2
 * // => undefined
 */
async function timesAsync(amount, iteratee, contextThis) {
	for (let index = 0; index < amount; index++) {
		(contextThis && await (iteratee.call(contextThis, index))) || await iteratee(index);
	}
}
/**
 * Asynchronously iterates based on the amount given and maps the results awaited on by the iteratee each time to an array.
 *
 * @async
 * @function timesMapAsync
 * @category array
 * @type {Function}
 * @param {Number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index and amount.
 * @param {Array} [results = []] - Array that will have iteratee return pushed to.
 * @returns {Array} - An array with iteratee's returned values.
 *
 * @example
 * import { timesMapAsync } from '@universalweb/acid';
 * await timesMapAsync(3, (item) => {
 *   return item;
 * });
 * // => [0, 1, 2]
 */
async function timesMapAsync(amount, iteratee, results = []) {
	for (let index = 0; index < amount; index++) {
		results[index] = await iteratee(amount);
	}
	return results;
}

/**
 * Performs a toggle between 2 values using a deep or strict comparison.
 *
 * @function toggle
 * @type {Function}
 * @category utility
 * @param {(string|number|Object|Array)} value - Strictly compared against on & off arguments.
 * @param {(string|number|Object|Array)} on - The first object to be compared to.
 * @param {(string|number|Object|Array)} off - The second object to be compared to.
 * @returns {(string|number|Object|Array)} - The opposing value to the current.
 *
 * @example
 * import { toggle } from '@universalweb/acid';
 * let toggleMe = true;
 * toggleMe = toggle(toggleMe, true, false);
 * // => false
 */
function toggle(value, on = true, off = false) {
	return ((isEqual(on, value)) ? off : on);
}

/**
 * Creates a unique numerical recyclable ID generator. The IDs are numerically ascending however freed ids are recycled when available.
 *
 * @class UniqID
 * @type {Class}
 * @category utility
 * @returns {UniqID} - Returns a new instance of UniqID.
 *
 * @example
 * import { UniqID, construct, assert } from '@universalweb/acid';
 * const gen = construct(UniqID);
 * assert(gen.get(), 0);
 * assert(gen.get(), 1);
 * gen.free(0);
 * assert(gen.get(), 0);
 */
class UniqID {
	totalActive = 0;
	freed = [];
	totalFree = 0;
	/**
	 * Generates a new ID or recycle one that is no longer used.
	 *
	 * @function get
	 * @class UniqID
	 * @category utility
	 * @type {Function}
	 * @returns {Number} - Returns a unique id.
	 *
	 * @example
	 * import { UniqID, construct, assert } from '@universalweb/acid';
	 * const gen = construct(UniqID);
	 * assert(gen.get(), 0);
	 */
	get() {
		let result = this.freed.shift();
		if (hasValue(result)) {
			this.totalFree--;
		} else {
			result = this.totalActive;
			this.totalActive++;
		}
		return result;
	}
	/**
	 * Frees an UID so that it may be recycled for later use.
	 *
	 * @function free
	 * @class UniqID
	 * @category utility
	 * @type {Function}
	 * @param {Number} id - Number to be freed.
	 * @returns {undefined} - Nothing is returned.
	 *
	 * @example
	 * import { UniqID, construct, assert } from '@universalweb/acid';
	 * const gen = construct(UniqID);
	 * assert(gen.get(), 0);
	 * gen.free(0);
	 * assert(gen.get(), 0);
	 */
	free(id) {
		this.freed.push(id);
		this.totalFree++;
		const isActive = this.totalActive > 0;
		const shouldReset = this.totalActive === this.totalFree;
		if (isActive && shouldReset) {
			this.reset();
		}
	}
	reset() {
		this.totalActive = 0;
		this.freed.length = 0;
		this.totalFree = 0;
	}
}
/**
 * A built in constructed instance of UniqID. Creates a unique numerical recyclable ID. The IDs are numerically ascending however freed ids are recycled when available.
 *
 * @function uniqID
 * @category utility
 *
 * @example
 * import { uniqID, assert } from '@universalweb/acid';
 * assert(uniqID.get(), 0);
 * assert(uniqID.get(), 1);
 * uniqID.free(0);
 * assert(uniqID.get(), 0);
 */
const uniqID = construct(UniqID);

/**
 * Generates an RFC 4122 v4 UUID string. Uses crypto.randomUUID when available, otherwise falls back
 * to Math.random (not cryptographically secure). Do not use the fallback for security-critical IDs.
 *
 * @function uuid
 * @category utility
 * @type {Function}
 * @returns {String} - A 36-character UUID v4 string.
 *
 * @example
 * import { uuid, assert } from '@universalweb/acid';
 * assert(uuid().length, 36);
 */
const cryptoRef = globalThis.crypto;
const hasNativeUUID = typeof cryptoRef?.randomUUID === 'function';
function uuid() {
	if (hasNativeUUID) {
		return cryptoRef.randomUUID();
	}
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
		const random = (Math.random() * 16) | 0;
		const value = char === 'x' ? random : (random & 0x3) | 0x8;
		return value.toString(16);
	});
}

/**
 * Class representing a virtual storage interface over a provided object the default being a Map. A temporary storage shim for localStorage if not available.
 *
 * @function VirtualStorage
 * @category utility
 * @param {*} initialObject - Initial object to be used as the storage object the default being a Map.
 * @returns {*} - Returns a new VirtualStorage Object.
 *
 * @example
 * import { VirtualStorage } from '@universalweb/acid';
 * const myVirtualStorage = new VirtualStorage();
 * // => New VirtualStorage Object
 */
class VirtualStorage {
	constructor(initialObject = new Map()) {
		this.items = initialObject;
		this.isMap = initialObject instanceof Map;
	}
	/**
	 * Get an item from a virtual storage object.
	 *
	 * @param {String} key - The key used to store the data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { virtualStorage, assert } from '@universalweb/acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * assert(myVirtualStorage.getItem('key'), 'value');
	 */
	getItem(key) {
		if (this.isMap) {
			return this.items.get(key);
		} else {
			return this.items[key];
		}
	}
	get(...args) {
		return this.getItem(...args);
	}
	hasItem(key) {
		if (this.isMap) {
			return this.items.has(key);
		} else {
			return hasValue(this.items[key]);
		}
	}
	has(...args) {
		return this.hasItem(...args);
	}
	/**
	 * Save an item to a virtual storage object.
	 *
	 * @param {String} key - The key used to store the data.
	 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { VirtualStorage, assert } from '@universalweb/acid';
	 * const vStorage = new VirtualStorage();
	 * vStorage.setItem('title', 'value');
	 * assert(vStorage.getItem('title'), 'value');
	 */
	setItem(key, value) {
		if (this.isMap) {
			this.items.set(key, value);
		} else {
			this.items[key] = value;
		}
		return this;
	}
	set(...args) {
		return this.setItem(...args);
	}
	/**
	 * Clears all data from the virtual storage object by replacing with a new object.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { virtualStorage, assert } from '@universalweb/acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.clear();
	 * assert(myVirtualStorage.getItem('key'), undefined);
	 */
	clear() {
		if (this.isMap) {
			this.items.clear();
		} else {
			this.items = cloneType(this.items);
		}
		return this;
	}
	/**
	 * Remove an item from a virtual storage object.
	 *
	 * @param {String} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { virtualStorage, assert } from '@universalweb/acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.removeItem('key');
	 * assert(myVirtualStorage.getItem('key'), undefined);
	 */
	removeItem(key) {
		if (this.isMap) {
			this.items.delete(key);
		} else {
			this.items[key] = null;
		}
		return this;
	}
	remove(...args) {
		return this.removeItem(...args);
	}
}
/**
 * Returns an instance of VirtualStorage which represents a standard virtual storage interface over a provided object the default being a Map. A temporary storage shim for localStorage if not available.
 *
 * @function virtualStorage
 * @category browser
 * @type {Function}
 * @param {*} initialObject - Initial object to be used as the storage object the default being a Map.
 * @returns {*} - Returns a new VirtualStorage Object.
 *
 * @example
 * import { virtualStorage, assert } from '@universalweb/acid';
 * const vStorage = virtualStorage();
 * vStorage.setItem('title', 'value');
 * assert(vStorage.getItem('title'), 'value');
 */
function virtualStorage(initialObject) {
	return new VirtualStorage(initialObject);
}

/**
 * Checks to see of the browser agent has a string.
 *
 * @function isAgent
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} source - The string to search for.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isAgent, assert } from '@universalweb/acid';
 * assert(isAgent('NotThere'), false);
 */
function isAgent(source) {
	return (hasValue(source)) ? isAgent[source] : keys(isAgent);
}
const userAgent = globalThis.navigator?.userAgentData;
if (userAgent) {
	eachObject(userAgent, (value, key) => {
		if (isBoolean(value) && value) {
			isAgent[key] = value;
		}
	});
	eachArray(userAgent.brands, (value) => {
		isAgent[value.brand] = value.version;
	});
} else if (globalThis.navigator?.userAgent) {
	let userAgentNormalized = globalThis.navigator.userAgent.toLowerCase();
	userAgentNormalized = userAgentNormalized.replace(/_/g, '.');
	userAgentNormalized = userAgentNormalized.replace(/[#_,;()]/g, '');
	const userAgentSplit = userAgentNormalized.split(/ |\//);
	eachArray(userAgentSplit, (item) => {
		isAgent[item] = true;
	});
}

/**
 * Append a DOM node.
 *
 * @function append
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @ignore
 * @param {Node} parentNode - The parent node.
 * @param {Node} child - The node to be appended.
 * @returns {undefined} - Returns the child.
 */
function append(parentNode, child) {
	parentNode.appendChild(child);
	return child;
}

/**
 * Assign attributes to a DOM node.
 *
 * @function nodeAttribute
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @async
 * @param {Node} node - The DOM node.
 * @param {Object|Array} object - Object with key being the attribute name and the value being the attribute value. If an array is given it will get the values corresponding to the array items.
 * @returns {Object|Node} - If using an array this returns an object of attribute names as keys and their values as the property value. If using an object this will return the provided node.
 *
 * @example
 * nodeAttribute(document.body, { 'data-example': 'test'});
 */
function nodeAttribute(node, object) {
	if (isArray(object)) {
		return zipObject(object, mapArray(object, (item) => {
			return node.getAttribute(item);
		}));
	}
	eachObject(object, (item, key) => {
		node.setAttribute(key, item);
	});
	return node;
}

/**
 * Copies text to the system clipboard via the async Clipboard API.
 *
 * @function copyToClipboard
 * @category browser
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {String} text - Text to copy.
 * @returns {Promise<void>}
 *
 * @example
 * import { copyToClipboard } from '@universalweb/acid';
 * await copyToClipboard('hello');
 */
function copyToClipboard(text) {
	return navigator.clipboard.writeText(text);
}
/**
 * Reads text from the system clipboard via the async Clipboard API.
 *
 * @function readFromClipboard
 * @category browser
 * @ignoreTest
 * @async
 * @type {Function}
 * @returns {Promise<String>}
 *
 * @example
 * import { readFromClipboard } from '@universalweb/acid';
 * const text = await readFromClipboard();
 */
function readFromClipboard() {
	return navigator.clipboard.readText();
}

const generateTheme = (color, bg) => {
	return `color:${color};background:${bg};`;
};
const themes = {
	alert: generateTheme('#fff', '#f44336'),
	important: generateTheme('#fff', '#E91E63'),
	notify: generateTheme('#fff', '#651FFF'),
	warning: generateTheme('#000', '#FFEA00'),
};
/**
 * Console.trace wrapper with theme support.
 *
 * @function cnsl
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Object} value - The value to be logged.
 * @param {String} themeName - The name of the theme to be used.
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * cnsl('Lucy', 'notify');
 * // 'Lucy'
 */
const cnsl = (value, themeName) => {
	const data = isString(value) ? value : stringify(value);
	if (themeName === 'alert' || themeName === 'warning') {
		return console.trace(`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`);
	}
	console.log(`%c${data}`, `${themes[themeName]}font-size:13px;padding:2px 5px;border-radius:2px;`);
};
/**
 * Create color themes for cnsl method.
 *
 * @function cnslTheme
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} themeName - The name of the theme.
 * @param {String} color - The text color.
 * @param {String} background - The background color of the block.
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * cnslTheme('BlackNWhite', '#fff', '#000');
 */
const cnslTheme = (themeName, color, background) => {
	themes[themeName] = generateTheme(color, background);
};

/**
 * Returns the value of a document cookie by name, or undefined.
 *
 * @function getCookie
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} cookieName - Cookie name.
 * @returns {String|undefined} - Decoded cookie value.
 *
 * @example
 * import { getCookie } from '@universalweb/acid';
 * getCookie('session');
 */
function getCookie(cookieName) {
	const prefix = `${cookieName}=`;
	const cookieEntries = document.cookie.split('; ');
	for (const cookieEntry of cookieEntries) {
		if (cookieEntry.startsWith(prefix)) {
			return decodeURIComponent(cookieEntry.slice(prefix.length));
		}
	}
}
/**
 * Sets a document cookie. Defaults to path '/'. Pass options to control expires/maxAge/sameSite/secure.
 *
 * @function setCookie
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} cookieName - Cookie name.
 * @param {String} cookieValue - Cookie value (will be URI-encoded).
 * @param {Object} [options]
 * @param {Number} [options.maxAge] - Max-age in seconds.
 * @param {Date} [options.expires] - Expiry date.
 * @param {String} [options.path='/'] - Cookie path.
 * @param {String} [options.domain] - Cookie domain.
 * @param {String} [options.sameSite] - SameSite policy.
 * @param {Boolean} [options.secure] - Secure flag.
 * @returns {undefined}
 *
 * @example
 * import { setCookie } from '@universalweb/acid';
 * setCookie('lang', 'en', { maxAge: 3600 });
 */
function setCookie(cookieName, cookieValue, options = {}) {
	let cookieString = `${cookieName}=${encodeURIComponent(cookieValue)}`;
	const { maxAge, expires, path = '/', domain, sameSite, secure } = options;
	if (maxAge !== undefined) cookieString += `; Max-Age=${maxAge}`;
	if (expires) cookieString += `; Expires=${expires.toUTCString()}`;
	if (path) cookieString += `; Path=${path}`;
	if (domain) cookieString += `; Domain=${domain}`;
	if (sameSite) cookieString += `; SameSite=${sameSite}`;
	if (secure) cookieString += '; Secure';
	document.cookie = cookieString;
}
/**
 * Deletes a cookie by setting its expiry in the past.
 *
 * @function removeCookie
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} cookieName - Cookie name.
 * @param {Object} [options] - Path/domain must match the original cookie to delete it.
 * @returns {undefined}
 *
 * @example
 * import { removeCookie } from '@universalweb/acid';
 * removeCookie('session');
 */
function removeCookie(cookieName, options = {}) {
	setCookie(cookieName, '', { ...options, maxAge: 0 });
}

/**
 * Attaches an event listener to a node.
 *
 * @function eventAdd
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Node} node - Given node.
 * @param {String} eventName - A string representing the event type.
 * @param {Object|Function} callback - The object which receives a notification when an event of the specified type occurs.
 * @param {Boolean} useCapture - The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
 * @returns {Node} - Returns given node.
 *
 * @example
 * eventAdd(document.body, 'click', () => {console.log('CLICKED');});
 * // = > document.body
 */
function eventAdd(node, eventName, callback, useCapture) {
	node.addEventListener(eventName, callback, useCapture);
	return node;
}
/**
 * Attaches an event listener to a node.
 *
 * @function eventRemove
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Node} node - Given node.
 * @param {String} eventName - A string representing the event type.
 * @param {Object|Function} callback - The object which receives a notification when an event of the specified type occurs.
 * @param {Boolean} useCapture - The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
 * @returns {Node} - Returns given node.
 *
 * @example
 * eventRemove(document.body, () => {console.log('CLICKED');});
 * // = > Undefined
 */
function eventRemove(node, eventName, callback, useCapture) {
	node.removeEventListener(eventName, callback, useCapture);
	return node;
}

const protocol = globalThis.location?.protocol;
const protocolSocket = (protocol === 'http:') ? 'ws' : 'wss';
const hostname = globalThis.location?.hostname;
/**
 * Holds client hardware, browser, and host info.
 *
 * @memberof $
 * @category browser
 * @ignoreTest
 * @property {Object} info - Client hardware & host info.
 * @type {Object}
 */
const info = {
	hardware: {
		cores: globalThis.navigator?.hardwareConcurrency
	},
	host: {
		name: hostname,
		protocol,
		protocolSocket,
	}
};

const dotString = '.';
const poundString = '#';
const classTest = /^.[\w_-]+$/;
const tagTest = /^[A-Za-z]+$/;
const regexSpace = /\s/;
/**
 * Wrapper around getElementsByClassName.
 *
 * @function getByClass
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
const getByClass = document.getElementsByClassName.bind(document);
/**
 * Wrapper around getElementsByTagName.
 *
 * @function getByTag
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
const getByTag = document.getElementsByTagName.bind(document);
/**
 * Wrapper around getElementsByIdName.
 *
 * @function getById
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
const getById = document.getElementById.bind(document);
/**
 * Wrapper around querySelector.
 *
 * @function querySelector
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
const querySelector = document.querySelector.bind(document);
/**
 * Wrapper around querySelectorAll.
 *
 * @function querySelectorAll
 * @category browser
 * @ignoreTest
 * @type {Function}
 */
const querySelectorAll = document.querySelectorAll.bind(document);
/**
 * Returns relevant DOM node.
 *
 * @function selector
 * @category browser
 * @ignoreTest
 * @param {String} select - String to be evaluated.
 * @type {Function}
 * @returns {Node} - Returns a DOM node.
 *
 * @example
 * selector('#node');
 * // => <div id="node"></div>
 */
function selector(select) {
	const firstLetter = select[0];
	switch (firstLetter) {
		case poundString: {
			if (!regexSpace.test(select)) {
				return getById(restString(select));
			}
			break;
		}
		case dotString: {
			if (classTest.test(select)) {
				return getByClass(restString(select));
			}
			break;
		}
		default: {
			if (tagTest.test(select)) {
				return getByTag(select);
			}
		}
	}
	return querySelectorAll(select);
}

const createElementCache = document.createElement.bind(document);
const nodeAttachLoadingEvents = (node) => {
	return promise((accept) => {
		eventAdd(node, 'load', accept, true);
		eventAdd(node, 'error', accept, true);
		append(querySelector('head'), node);
	});
};
/**
 * Asynchronously import a js file and append it to the head node.
 * If a script fails to load importjs won't reject the promise rather it'll return the error event to limit further complications & reduce code complexity.
 *
 * @function importjs
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @async
 * @param {*} url - URL of the script to import. If not "." is found in the file name ".js" will be appended.
 * @returns {Promise} - Returns a promise which returns a "load" or "error" event associated with the script.
 *
 * @example
 * importjs('core.js');
 * importjs('core');
 */
function importjs(url) {
	const src = hasDot(url) && url || `${url}.js`;
	const node = nodeAttribute(createElementCache('script'), {
		async: '',
		src
	});
	return nodeAttachLoadingEvents(node);
}

/**
 * Runs a function if the document has finished loading. If not, add an eventlistener.
 *
 * @function isDocumentReady
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Function} callable - Function to be run.
 * @returns {Boolean|Function} - If the document is ready, returns a function. If not, return false.
 *
 * @example
 * isDocumentReady(() => {return 1});
 * // => 1
 */
function isDocumentReady(callable) {
	if (typeof document === 'undefined') {
		return false;
	}
	const state = document.readyState;
	const checkStatus = state === 'interactive' || state === 'completed' || state === 'complete';
	if (checkStatus) {
		return (callable) ? callable() : true;
	}
	if (callable) {
		eventAdd(document, 'DOMContentLoaded', callable);
	}
	return false;
}

function saveDimensions() {
	assign(info, {
		bodyHeight: document.body.offsetHeight,
		bodyWidth: document.body.offsetWidth,
		windowHeight: window.innerHeight,
		windowWidth: window.innerWidth,
	});
}
/**
 * Save current document & window dimensions to the info property.
 *
 * @function updateDimensions
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * updateDimensions();
 */
function updateDimensions() {
	saveDimensions();
}
if (typeof window !== 'undefined') {
	isDocumentReady(updateDimensions);
	eventAdd(window, 'load', updateDimensions, true);
	eventAdd(window, 'resize', updateDimensions, true);
}

/**
 * Triggers a browser download for a Blob or string content.
 *
 * @function download
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Blob|String} source - Blob or string contents to download.
 * @param {String} filename - Suggested filename.
 * @param {String} [mime='application/octet-stream'] - MIME type when source is a string.
 * @returns {undefined}
 *
 * @example
 * import { download } from '@universalweb/acid';
 * download('hello world', 'hello.txt', 'text/plain');
 */
function download(source, filename, mime = 'application/octet-stream') {
	const blob = source instanceof Blob ? source : new Blob([source], { type: mime });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}

/**
 * Create a document fragment.
 *
 * @function createFragment
 * @category browser
 * @type {Function}
 * @ignore
 * @returns {Fragment} - Returns a new document fragment.
 */
const createFragment = document.createDocumentFragment.bind(document);

/**
 * Checks if value is a plain DOM Node.
 *
 * @function isDom
 * @category browser
 * @ignoreTest
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isDom, assert } from '@universalweb/acid';
 * assert(isDom(document.querySelectorAll('head')), true);
 */
function isDom(source) {
	return source && source.nodeType !== 9;
}
/**
 * Checks if the value is a HTMLCollection.
 *
 * @function isHTMLCollection
 * @category browser
 * @ignoreTest
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isHTMLCollection, assert } from '@universalweb/acid';
 * document.body.innerHTML = '<div class="test"></div>';
 * assert(isHTMLCollection(document.getElementsByClassName('test')), true);
 */
const objectHTMLCollection = '[object HTMLCollection]';
function isHTMLCollection(source) {
	return (hasValue(source)) ? source.toString() === objectHTMLCollection : false;
}
/**
 * Checks if the value is a NodeList.
 *
 * @function isNodeList
 * @category browser
 * @ignoreTest
 * @param {*} source - Object to be checked.
 * @returns {Boolean} - Returns true or false.
 *
 * @example
 * import { isNodeList, assert } from '@universalweb/acid';
 * document.body.innerHTML = '<div class="test"></div>';
 * assert(isNodeList(document.querySelectorAll('.test')), true);
 */
const objectNodeList = '[object NodeList]';
function isNodeList(source) {
	return (hasValue(source)) ? source.toString() === objectNodeList : false;
}

/**
 * Checks if the keycode of the event is strictly equal to 13.
 *
 * @function isEnter
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Object} eventObject - Object to be checked.
 * @returns {Boolean} - Returns true if the keycode property of the object equals 13.
 *
 * @example
 * isEnter('click');
 * // => false
 */
function isEnter(eventObject) {
	return eventObject.keyCode === 13;
}

/**
 * Parses a query string (with or without a leading '?') into a flat object.
 * Repeated keys become arrays. Values are URI-decoded.
 *
 * @function parseQuery
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} [source=location.search] - Query string. Defaults to current location.search when in a browser.
 * @returns {Object} - Plain object of query parameters.
 *
 * @example
 * import { parseQuery, assert } from '@universalweb/acid';
 * assert(parseQuery('?a=1&b=2'), {a: '1', b: '2'});
 */
function parseQuery(source) {
	const input = source ?? globalThis.location?.search ?? '';
	const result = {};
	const params = new URLSearchParams(input.startsWith('?') ? input.slice(1) : input);
	for (const [key, value] of params) {
		if (key in result) {
			const existing = result[key];
			result[key] = Array.isArray(existing) ? [...existing, value] : [existing, value];
		} else {
			result[key] = value;
		}
	}
	return result;
}
/**
 * Serializes a flat object to a query string. Array values become repeated keys.
 * Skips null/undefined values. Does not include a leading '?'.
 *
 * @function stringifyQuery
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Object} source - Object of query parameters.
 * @returns {String} - URL-encoded query string.
 *
 * @example
 * import { stringifyQuery, assert } from '@universalweb/acid';
 * assert(stringifyQuery({a: 1, b: [2, 3]}), 'a=1&b=2&b=3');
 */
function stringifyQuery(source) {
	const params = new URLSearchParams();
	const keys = Object.keys(source);
	const keysLength = keys.length;
	for (let index = 0; index < keysLength; index++) {
		const key = keys[index];
		const value = source[key];
		if (value === null || value === undefined) {
			continue;
		}
		if (Array.isArray(value)) {
			const valueLength = value.length;
			for (let valueIndex = 0; valueIndex < valueLength; valueIndex++) {
				params.append(key, value[valueIndex]);
			}
		} else {
			params.append(key, value);
		}
	}
	return params.toString();
}

/**
 * LocalStorage Module..
 *
 * @module browser/storage
 */
let hasLocal;
function hasStorage(storeCheck) {
	try {
		storeCheck().removeItem('TESTING');
		hasLocal = true;
	} catch (e) {
		hasLocal = false;
	}
}
hasStorage(() => {
	return localStorage;
});
/**
 * Constructs a virtual storage container with localStorage support.
 * BrowserStorage will fallback to strictly virtual storage if localStorage isn't supported.
 * If localStorage is supported virtual storage will be used first & only fallback to localStorage when needed.
 * BrowserStorage is ideal as a seemless drop in replacement for localStorage when not supported or allowed.
 *
 * @class BrowserStorage
 * @category browser
 * @ignoreTest
 * @returns {BrowserStorage} - Returns a new instance of BrowserStorage.
 *
 * @example
 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
 * const storageBrowserStorage = construct(BrowserStorage);
 * storageBrowserStorage.setItem('key', 'value');
 * assert(storageBrowserStorage.getItem('key'), 'value');
 */
class BrowserStorage {
	constructor(initialObject) {
		if (this.hasLocal) {
			this.local = localStorage;
		}
		this.storage = virtualStorage(initialObject);
	}
	hasLocal = hasLocal;
	/**
	 * Save an item to a browserStorage.
	 *
	 * @function setItem
	 * @class BrowserStorage
	 * @category browser
 * @ignoreTest
	 * @param {String} key - The key used to store the data.
	 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
	 * const storageBrowserStorage = construct(BrowserStorage);
	 * storageBrowserStorage.setItem('key', 'value');
	 * assert(storageBrowserStorage.getItem('key'), 'value');
	 */
	setItem(key, value) {
		if (this.hasLocal) {
			this.local.setItem(key, (isString(value)) ? value : stringify(value));
		}
		return this.storage.setItem(key, value);
	}
	/**
	 * Get an item from a browserStorage.
	 *
	 * @function getItem
	 * @class BrowserStorage
	 * @category browser
 * @ignoreTest
	 * @param {String} key - The key used to store the data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
	 * const storageBrowserStorage = construct(BrowserStorage);
	 * storageBrowserStorage.setItem('key', 'value');
	 * assert(storageBrowserStorage.getItem('key'), 'value');
	 */
	getItem(key) {
		const item = this.storage.getItem(key);
		if (hasValue(item)) {
			return item;
		}
		if (!hasValue(item) && this.hasLocal) {
			return this.local.getItem(key);
		}
	}
	/**
	 * Clears all data for the browserStorage including all of localStorage if supported.
	 *
	 * @function clear
	 * @class BrowserStorage
	 * @category browser
 * @ignoreTest
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
	 * const storageBrowserStorage = construct(BrowserStorage);
	 * storageBrowserStorage.setItem('key', 'value');
	 * assert(storageBrowserStorage.getItem('key'), 'value');
	 * storageBrowserStorage.clear();
	 * assert(storageBrowserStorage.getItem('key'), undefined);
	 */
	clear() {
		if (this.hasLocal) {
			this.local.clear();
		}
		this.storage.clear();
	}
	/**
	 * Remove an item from a browserStorage.
	 *
	 * @class BrowserStorage
	 * @category browser
 * @ignoreTest
	 * @function removeItem
	 * @param {String} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { BrowserStorage, construct, assert } from '@universalweb/acid';
	 * const storageBrowserStorage = construct(BrowserStorage);
	 * storageBrowserStorage.setItem('key', 'value');
	 * assert(storageBrowserStorage.getItem('key'), 'value');
	 * storageBrowserStorage.removeItem('key');
	 * assert(storageBrowserStorage.getItem('key'), undefined);
	 */
	removeItem(key) {
		if (this.hasLocal) {
			this.local.removeItem(key);
		}
		this.storage.removeItem(key);
	}
}
/**
 * The browserStorage function is a factory which wraps the BrowserStorage class constructor.
 *
 * @function browserStorage
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @returns {*} - Returns a new BrowserStorage Object.
 *
 * @example
 * const storageBrowserStorage = browserStorage();
 * // => New BrowserStorage Object
 */
function browserStorage(virtualFlag) {
	return new BrowserStorage(virtualFlag);
}

export { BrowserStorage, Chain, Emitter, Intervals, LRUCache, Model, Store, Timers, UniqID, VirtualStorage, add, after, append, apply, arrayToRegex, arraysToObject, ary, assert, assertAsync, assign, assignToClass, assignToObject, before, bindAll, browserStorage, cacheNativeMethod, calcProgress, camelCase, ceilTo, chain, chunk, chunkString, clamp, clear, clearArray, clearBuffer, clearIntervals, clearTimers, clone, cloneArray, cloneType, cnsl, cnslTheme, compact, compactKeys, compactMap, compactMapArray, compactMapAsyncArray, compactMapAsyncObject, compactMapObject, concurrent, concurrentEach, concurrentEachArray, concurrentStatus, cond, consolidate, constant, construct, copy, copyToClipboard, countBy, countKey, countWithoutKey, createFragment, curry, curryRight, debounce, deduct, defProp, defaults, delay, difference, divide, download, drop, dropRight, each, eachArray, eachAsyncArray, eachAsyncObject, eachObject, eachRight, eachRightAsync, ensureArray, ensureBuffer, isZero as equalsZero, escapeRegex, escapeRegexRegex, eventAdd, eventRemove, every, everyArg, everyArray, everyAsyncArray, everyAsyncObject, everyObject, extendClass, filter, filterArray, filterAsyncArray, filterAsyncObject, filterObject, findIndex, findIndexCache, findItem, first, flatten, flattenDeep, floorTo, flow, flowAsync, flowAsyncRight, flowRight, forCompactMap, forEach, forEachAsync, forMap, forOf, forOfAsync, forOfCompactMap, forOfCompactMapAsync, forOfEvery, forOfEveryAsync, forOfFilter, forOfFilterAsync, forOfMap, forOfMapAsync, generateLoop, get, getByClass, getById, getByTag, getChild, getCollectionInsertIndex, getType as getConstructor, getTypeName as getConstructorName, getCookie, getEntries, getFileExtension, getFilename, getHighest, getLowest, getNumberInsertIndex, getParent, getPropDesc, getPropNames, getType, getTypeName, groupBy, has, hasAnyKeys, hasDot, hasKeys, hasLength, hasLocal, hasProp, hasValue, htmlEntities, ifInvoke, ifNotAssign, ifValue, importjs, inAsync, inSync, increment, indexBy, info, initial, initialString, insertInRange, intersection, interval, intervals, invert, invokeArray, invokeCollection, invokeCollectionAsync, isAgent, isArguments, isArray, isArrayBuffer, isArrayBufferCall, isArrayLike, isAsync, isAsyncCall, isBigInt, isBigIntCall, isBoolean, isBooleanCall, isBuffer, isBufferCall, isChild, isCloneable, isType as isConstructor, isConstructorFactory, isDate, isDateCall, isDeno, isDocumentReady, isDom, isEmpty, isEnter, isEqual, isError, isErrorCall, isEven, isF32, isF32Call, isF64, isF64Call, isFalse, isFalsy, isFileCSS, isFileHTML, isFileJS, isFileJSON, isFloat, isFunction, isGenerator, isGeneratorCall, isHTMLCollection, isI16, isI16Call, isI32, isI32Call, isI8, isI8Call, isIndexable, isIterable, isKindAsync, isMap, isMapCall, isMatchArray, isMatchObject, isNegative, isNodeList, isNodejs, isNotArray, isNotNumber, isNotString, isNull, isNumber, isNumberCall, isNumberEqual, isNumberInRange, isNumberNotInRange, isOdd, isParent, isPlainObject, isPositive, isPrimitive, isPromise, isRegex, isRegexCall, isRelated, isSafeInt, isSame, isSameType, isSet, isSetCall, isString, isTrue, isTruthy, isType, isTypeFactory, isTypeNameFactory, isTypedArray, isU16, isU16Call, isU32, isU32Call, isU8, isU8C, isU8CCall, isU8Call, isUndefined, isWeakMap, isWeakMapCall, isZero, jsonParse, jsonParseNative, jsonParseTry, kebabCase, keyBy, keys, largest, last, lowerCase, map, mapArray, mapAsyncArray, mapAsyncObject, mapKeys, mapObject, mapRightArray, mapValues, mapWhile, max, mean, median, memoize, merge, min, model, multiply, negate, nextFrame, noValue, nodeAttribute, noop, notEmpty, notEqual, nthArg, objectAssign$2 as objectAssign, objectEntries, objectSize, omit, once, onlyUnique, over, overArgs, overAsync, overEvery, pair, parseQuery, partition, pick, pluck, pluckObject, promise, property, propertyMatch, propertyOf, querySelector, querySelectorAll, randomFloat, randomInt, randomString, range, rangeDown, rangeUp, rawURLDecode, reArg, readFromClipboard, regexTestFactory, remainder, remove, removeBy, removeCookie, replaceList, rest, restString, retry, returnValue, right, rightString, roundTo, sameClass, sameType, sample, sanitize, saveDimensions, selector, set, setCookie, setKey, setValue, shuffle, slugify, smallest, snakeCase, sortBy, sortCollectionAlphabetically, sortCollectionAlphabeticallyReverse, sortCollectionAscending, sortCollectionAscendingFilter, sortCollectionDescending, sortCollectionDescendingFilter, sortNumberAscending, sortNumberDescending, sortObjectsAlphabetically, sortObjectsAlphabeticallyReverse, sortUnique, stringify, stringifyQuery, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, subtractAll, subtractReverse, sumAll, take, takeRight, themes, throttle, timer, timers, times, timesAsync, timesMap, timesMapAsync, toArray, toPath, toggle, tokenize, truncate, truncateRight, unZip, unZipObject, union, uniqID, unique, untilFalseArray, untilTrueArray, updateDimensions, upperCase, upperFirst, upperFirstAll, upperFirstLetter, upperFirstOnly, upperFirstOnlyAll, uuid, virtualStorage, whileCompactMap, whileEachArray, whileMapArray, withTimeout, without, words, wrap, xor, zip, zipObject };
//# sourceMappingURL=bundle.js.map
