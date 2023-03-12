/**
 * Chunks an array according to a user defined number.
 *
 * @function chunk
 * @category Array
 * @type {Function}
 * @param {Array} array - Array to be chunked.
 * @param {number} size - Number which determines the size of each chunk.
 * @returns {Array} - A chunked version of the source array.
 *
 * @example
 * import { chunk, assert } from 'Acid';
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
 * @function clear
 * @category Array
 * @type {Function}
 * @param {Array} array - Takes an array to be emptied.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { clear, assert } from 'Acid';
 * assert(clear([1,'B', 'Cat']), []);
 */
function clear(array) {
	array.length = 0;
	return array;
}

/**
 * Clone an array (uses .slice()) and assign the source arrays values to the new array.
 *
 * @function cloneArray
 * @category Array
 * @type {Function}
 * @param {Array} source - The array to be quick cloned.
 * @returns {Array} - The newly cloned array with assigned items.
 *
 * @example
 * import { cloneArray, assert } from 'Acid';
 * assert(cloneArray([1,'B', 'Cat']), [1, 'B', 'Cat']);
 */
function cloneArray(source) {
	return source.slice();
}

/** Checks if the value is undefined.
 *
 * @function isUndefined
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isUndefined } from 'Acid';
 * isUndefined(undefined);
 * // => true
 */
function isUndefined(value) {
	return value === undefined;
}

/**
 * Checks if the value is null.
 *
 * @function isNull
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNull } from 'Acid';
 * isNull(null);
 * // => true
 */
function isNull(value) {
	return value === null;
}

/**
 * Checks if the value is not null or undefined.
 *
 * @function hasValue
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { hasValue } from 'Acid';
 * assert(hasValue(1), true);
 */
function hasValue(value) {
	return !isUndefined(value) && !isNull(value);
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
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { eachArray, assert } from 'Acid';
 * const list = [];
 * eachArray([1, 2, 3], (item, index) => {
 *   list[index] = item;
 * });
 * assert(list, [1, 2, 3]);
 */
function eachArray(source, iteratee, thisBind) {
	const arrayLength = source.length;
	for (let index = 0;index < arrayLength;index++) {
		iteratee(source[index], index, source, arrayLength, thisBind);
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
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - An array with mapped properties that are not null or undefined.
 *
 * @example
 * import { compactMapArray, assert } from 'Acid';
 * assert(compactMapArray([null, 2, 3], (item) => {
 *   return item;
 * }), [2, 3]);
 */
function compactMapArray(source, iteratee = returnValue, results = [], thisBind) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		const returned = iteratee(item, index, results, arrayOriginal, arrayLength, thisBind);
		if (hasValue(returned)) {
			results.push(returned);
		}
	});
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
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @returns {Array} - Returns source the originally given array.
 *
 * @example
 * import { eachAsyncArray, assert } from 'Acid';
 * const tempList = [];
 * await eachAsyncArray([1, 2, 3], async (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [1, 2, 3]);
 */
async function eachAsyncArray(source, iteratee) {
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		await iteratee(source[index], index, source, arrayLength);
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
 * import { compactMapAsync, assert } from 'Acid';
 * assert(await compactMapAsync([1, 2, 3, null], async (item) => {
 *   return item;
 * }), [1, 2, 3]);
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

function rangeUp(start, end, incrementArg) {
	const rangeArray = [];
	let position = start;
	while (position < end) {
		rangeArray.push(position);
		position += incrementArg;
	}
	return rangeArray;
}
function rangeDown(start, end, incrementArg) {
	const increment = (incrementArg < 0) ? incrementArg * -1 : incrementArg;
	const rangeArray = [];
	let position = start;
	while (position > end) {
		rangeArray.push(position);
		position -= increment;
	}
	return rangeArray;
}
/**
 * Create a numbered list of integers.
 *
 * @function range
 * @category array
 * @type {Function}
 * @param {number} start - Value which determines the start of the range.
 * @param {number} end - Value which determines the end of the range.
 * @param {number} step - Value used to step between integers.
 * @returns {Array} - An array of integers.
 *
 * @example
 * import { range, assert } from 'Acid';
 * assert(range(0, 30, 5), [0, 5, 10, 15, 20, 25]);
 */
function range(start, end, step = 1) {
	if (start < end) {
		return rangeUp(start, end, step);
	} else {
		return rangeDown(start, end, step);
	}
}

function forEach(source, callback) {
	source.forEach(callback);
	return source;
}

/**
 * Checks if the value is an array. This references Array.isArray.
 *
 * @function isArray
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isArray, assert } from 'Acid';
 * assert(isArray([]), true);
 * assert(isArray(2), false);
 */
const isArray = Array.isArray;

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
  * ensureArray('Hello');
  * // => ['Hello']
  *
  * @example
  * ensureArray({a:1, b:2})
  * // => [{a:1, b:2}]
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
 * import { flattenDeep, assert } from 'Acid';
 * assert(flattenDeep([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
 */
function flattenDeep(source) {
	return source.flat(Infinity);
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
 * const newClass = construct(function (a) {return a;}, []);
 * // => 2
 */
const reflectConstruct = Reflect.construct;
function construct(target, argumentsList = [], newTarget) {
	if (newTarget) {
		return reflectConstruct(target, argumentsList, newTarget);
	}
	return reflectConstruct(target, argumentsList);
}

/**
 * Checks for primitive differences between a source array to other arrays, then returns a new array containing those differences.
 *
 * @function difference
 * @category array
 * @type {Function}
 * @param {Array} source - Source array.
 * @param {...Array} compare - Array(s) source array is compared against.
 * @returns {Array} - An array which contains the differences between the source and compare array.
 *
 * @example
 * import { difference, assert } from 'Acid';
 * assert(difference([1, 2, 3], [1, 2]));
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
 * @param {number} amount - Amount of items to drop from the array.
 * @param {number} [upTo = array.length] - Index to stop at.
 * @returns {Array} - An array with all values removed after a user defined index.
 *
 * @example
 * import { drop, assert } from 'Acid';
 * assert(drop([1, 2, 3], 1), [2, 3]);
 */
function drop(array, amount, upTo = array.length) {
	return array.splice(amount, upTo);
}

/**
 * Removes all items from an array before a specified index.
 *
 * @function dropRight
 * @type {Function}
 * @category array
 * @param {Array} array - Source array.
 * @param {number} amount - Amount of items to drop from the array.
 * @param {number} [upTo = array.length] - Index to stop at.
 * @returns {Array} - An array with all values removed before a user defined index.
 *
 * @example
 * import { dropRight, assert } from 'Acid';
 * assert(dropRight([1, 2, 3], 1), [1, 2]);
 */
const dropRight = (array, amount, upTo = array.length) => {
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
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { eachRight, assert } from 'Acid';
 * const tempList = [];
 * await eachRight([1, 2, 3], (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [3, 2, 1]);
 */
function eachRight(source, iteratee, thisBind) {
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		iteratee(source[index], index, source, arrayLength, thisBind);
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
 * @param {Array} callingArray - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @returns {Object} - The originally given array.
 *
 * @example
 * import { eachRightAsync, assert } from 'Acid';
 * const tempList = [];
 * await eachRightAsync([1, 2, 3], async (item) => {
 *   tempList.push(item);
 * });
 * assert(tempList, [3, 2, 1]);
 */
async function eachRightAsync(callingArray, iteratee) {
	const arrayLength = callingArray.length;
	for (let index = arrayLength - 1; index >= 0; index--) {
		await iteratee(callingArray[index], index, callingArray, arrayLength);
	}
	return callingArray;
}

/**
 * Iterates through the given array while the iteratee returns true else the loop exits & returns false.
 *
 * @function everyArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - Returns true if all returns are true or false if one value returns false.
 *
 * @example
 * import { everyArray, assert } from 'Acid';
 * assert(everyArray([true, true, false], (item, index, source, sourceLength, thisBind) => {
 *   return item;
 * }), false);
 * assert(everyArray([true, true, true], (item, index, source, sourceLength, thisBind) => {
 *   return item;
 * }), true);
 */
function everyArray(source, iteratee, thisBind) {
	const sourceLength = source.length;
	for (let index = 0;index < sourceLength;index++) {
		if (iteratee(source[index], index, source, sourceLength, thisBind) === false) {
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
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - An array with properties that passed the test.
 *
 * @example
 * import { filterArray, assert } from 'Acid';
 * assert(filterArray([false, true, true], (item) => {
 *   return item;
 * }), [true, true]);
 */
function filterArray(source, iteratee, results = [], thisBind) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		if (iteratee(item, index, results, arrayOriginal, arrayLength, thisBind) === true) {
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
 * @param {number} upTo - Number which determines how many items after the first item are extracted from the array.
 * @returns {Array} - Returns an array.
 *
 * @example
 * import { first, assert } from 'Acid';
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
 * @param {number} [level = 1] - Number which determines how deep the array nest can be.
 * @returns {Array} - Returns an array.
 *
 * @example
 * import { flatten, assert } from 'Acid';
 * assert(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5]);
 */
function flatten(source, level = 1) {
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
 * import { initial, assert } from 'Acid';
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
 * import { intersection, assert } from 'Acid';
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
 * Get object's keys.
 *
 * @function keys
 * @category object
 * @param {*} source - The source object to pull keys from.
 * @returns {Array} - Array of keys.
 *
 * @example
 * keys({a: 1, b: 2});
 * // => ['a', 'b']
*/
const objectKeys = Object.keys;
function keys(source) {
	if (source) {
		return objectKeys(source);
	}
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
 * @param {string} source - String to be broken up.
 * @returns {Array} - Array used to go through object chain.
 *
 * @example
 * import { toPath } from 'Acid';
 * toPath('post.like[2]');
 * // => ['post', 'like', '2']
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
 * @param {string} propertyString - String used to retrieve properties.
 * @param {Object} target - Object which has a property retrieved from it.
 * @returns {Object} - Returns property from the given object.
 *
 * @example
 * import { get, assert } from 'Acid';
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
	const pathArray = (isArray(propertyString)) ? propertyString : toPath(propertyString);
	everyArray(pathArray, (item) => {
		link = link[item];
		return hasValue(link);
	});
	return link;
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
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { hasKeys, assert } from 'Acid';
 * assert(hasKeys({a: {b: { c: 1}}}, 'a', 'a.b', 'a.b.c'), true);
 */
function hasKeys(source, ...properties) {
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
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { hasAnyKeys, assert } from 'Acid';
 * assert(hasAnyKeys({a: {b: { yes : 1}}}, 'no', 'nope', 'a.b.yes'), true);
 * assert(hasAnyKeys({a: {b: { yes : 1}}}, 'no', 'nope', 'a.b.noped'), false);
 */
function hasAnyKeys(source, ...properties) {
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
 * Checks if the value is a plain object.
 *
 * @function isPlainObject
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isPlainObject } from 'Acid';
 * isPlainObject({});
 * // => true
 */
const isPlainObject = (value) => {
	if (hasValue(value)) {
		return value.constructor.toString().trim()
			.slice(9, 16) === 'Object(';
	}
	return false;
};

/**
 * Performs a deep comparison between two objects & determines if the value is the same using strict comparison.
 *
 * @function isEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source object.
 * @param {*} target - Object to be compared.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isEqual, assert } from 'Acid';
 * assert(isEqual({a: [1,2,3]}, {a: [1,2,3]}), true);
 */
// Add map & buffer Support - Review required for performance and support for more types
const isEqual = (source, target) => {
	if (source === target) {
		return true;
	} else if (source.toString() === target.toString()) {
		if (isPlainObject(source)) {
			const sourceProperties = keys(source);
			if (hasKeys(target, sourceProperties)) {
				return everyArray(sourceProperties, (key) => {
					return isEqual(source[key], target[key]);
				});
			}
		} else if (isArray(source)) {
			if (source.length === target.length) {
				return everyArray(source, (item, index) => {
					return isEqual(item, target[index]);
				});
			}
		}
	}
	return false;
};

/**
 * Performs a shallow strict comparison between two objects.
 *
 * @function isMatchArray
 * @type {Function}
 * @category array
 * @param {Array} source - Source object.
 * @param {Array} compareArray - Object to compare to source.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isMatchArray, assert } from 'Acid';
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
 * @returns {number} - The largest number.
 *
 * @example
 * import { largest, assert } from 'Acid';
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
 * @param {number} [indexFrom = 0] - Value which determines how many items are extracted from the array.
 * @returns {Array} - Items from the array.
 *
 * @example
 * import { last, assert } from 'Acid';
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
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapArray, assert } from 'Acid';
 * assert(mapArray([1, 2, 3], (item) => {
 *   return item * 2;
 * }), [2, 4, 6]);
 */
function mapArray(source, iteratee, results = [], thisBind) {
	eachArray(source, (item, index, arrayOriginal, arrayLength) => {
		results[index] = iteratee(item, index, results, arrayOriginal, arrayLength, thisBind);
	});
	return results;
}

/**
 * Asynchronously iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
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
 * import { mapAsyncArray, assert } from 'Acid';
 * assert(await mapAsyncArray([1, 2, 3], async (item) => {
 *   return item * 2;
 * }), [2, 4, 6]);
 */
async function mapAsyncArray(source, iteratee) {
	const results = [];
	await eachAsyncArray(source, async (item, index, arrayLength) => {
		results[index] = await iteratee(item, index, arrayLength);
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
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - An array of the same calling array's type.
 *
 * @example
 * import { mapRightArray, assert } from 'Acid';
 * assert(mapRightArray([1, 2, 3], (item) => {
 *   return item * 2;
 * }), [6, 4, 2]);
 */
function mapRightArray(source, iteratee, results = [], thisBind) {
	let trueIndex = 0;
	const arrayLength = source.length;
	for (let index = arrayLength - 1;index >= 0;index--) {
		results[trueIndex] = iteratee(source[index], index, source, arrayLength, thisBind);
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
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - An array with properties that passed the test.
 *
 * @example
 * import { mapWhile, assert } from 'Acid';
 * assert(mapWhile([1, 2, 0], (item) => {
 *   return Boolean(item);
 * }), [1, 2]);
 */
function mapWhile(source, iteratee, results = [], thisBind) {
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

const numericalCompare = (a, b) => {
	return a - b;
};
/**
 * Sorts an array in place using a numerical comparison algorithm from lowest to highest.
 *
 * @function numSort
 * @category array
 * @type {Function}
 * @param {Array} numberList - Array of numbers.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * numSort([10, 0, 2, 1]);
 * // => [0, 1, 2, 10]
 */
function numSort(numberList) {
	return numberList.sort(numericalCompare);
}

/**
 * Takes all but the last item in the array.
 *
 * @function arrayToObject
 * @type {Function}
 * @category array
 * @param {Array} source - Array to have items extracted from.
 * @param {Array} properties - Array to have items extracted from.
 * @returns {Array} - Returns a completely flattened array.
 *
 * @example
 * arrayToObject([1, 2, 3], ['i', 'love', 'lucy']);
 * // => {i:1, love:2, lucy: 3}
 */
function arrayToObject(source, properties) {
	const sortedObject = {};
	eachArray(source, (item, key) => {
		sortedObject[properties[key]] = item;
	});
	return sortedObject;
}

/**
 * Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
 *
 * @function partition
 * @type {Function}
 * @category array
 * @param {Array} array - Takes an array to split.
 * @param {Function} funct - Function run on each item in array.
 * @returns {Array} - One array split into two arrays.
 *
 * @example
 * partition([
 *  {user: 'barney', age: 36, active: false},
 *  {user: 'fred', age: 40, active: true},
 *  {user: 'pebbles', age: 1,  active: false}
 * ], (item) => { return item.active; });
 * // => [
 * [{"user":"fred","age":40,"active":true}],
 *   [{"user":"barney","age":36,"active":false},
 *   {"user":"pebbles","age":1,"active":false}]]
 */
function partition(array, funct) {
	const failed = [];
	return [
		compactMapArray(array, (item) => {
			if (funct(item)) {
				return item;
			}
			failed.push(item);
		}),
		failed
	];
}

const numericalCompareReverse = (a, b) => {
	return b - a;
};
/**
 * Sorts an array in place using a reverse numerical comparison algorithm from highest to lowest.
 *
 * @function rNumSort
 * @category array
 * @param {Array} numberList - Array of numbers.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * rNumSort([10, 0, 2, 1]);
 * // => [10, 2, 1, 0]
 */
function rNumSort(numberList) {
	return numberList.sort(numericalCompareReverse);
}

/**
 * Removes all occurrences of the passed in items from the array and returns the array. This mutates the given array. Clone the array if you desire to avoid mutation.
 *
 * @function remove
 * @category array
 * @param {Array} array - Array to be mutated.
 * @param {string|Array} removeThese - Items to remove from the array.
 * @returns {Array} - The array this method was called on.
 *
 * @example
 * remove([1, 2, 3, 3, 4, 3, 5], 1);
 * // => [2, 3, 3, 4, 3, 5]
 * @example
 * remove([3, 3, 4, 5], 3, 4);
 * // => [5]
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
 * removeBy([1, 2, 3, 3, 4, 3, 5], (item) => { return Boolean(item % 2);});
 * // => [2, 4]
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
 * rest([1, 2, 3, 4, 5]);
 * // => [2, 3, 4, 5]
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
 * @param {number} amount - Amount from the right.
 * @returns {*} - Returns the object at the evaluated position.
 *
 * @example
 * right([1, 2, 3, 4, 5] , 1);
 * // => 4
 */
function right(source, amount) {
	return source[source.length - 1 - amount];
}

const {
	floor,
	random: random$1
} = Math;
/**
 *  Produces a random whole number between min (included) and max (excluded). Do not use for security or encryption.
 *
 * @function randomInt
 * @category number
 * @type {Function}
 * @param {number} max - The highest possible value for the random number.
 * @param {number} [min = 0] - Establishes lowest possible value for the random number.
 * @returns {number} - Returns random integer between the max and min range.
 *
 * @example
 * import { randomInt, assert } from 'Acid';
 * assert(randomInt(10, 0), (value) => { return value > 0 && value < 10;});
 */
function randomInt(max, min = 0) {
	return floor(random$1() * (max - min)) + min;
}

const arrayNative = Array;
/**
 * Takes an array like object and creates a new Array from it.
 *
 * @function toArray
 * @category array
 * @param {*} arrayLike - Array like object.
 * @returns {*} - New array.
 *
 * @example
 * toArray([1, 2, 3]);
 * // => [1, 2, 3]
*/
const toArray = arrayNative.from;

/**
 * Checks if two numbers are the same.
 *
 * @function isNumberEqual
 * @category number
 * @type {Function}
 * @param {number} source - Number to be checked.
 * @param {number} target - Number to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNumberEqual, assert } from 'Acid';
 * assert(isNumberEqual(0, 0), true);
 */
function isNumberEqual(source, target) {
	return source === target;
}

/**
 * Shuffle an array and return a new array.
 *
 * @function shuffle
 * @category array
 * @param {Array} target - Target Array to be shuffled.
 * @param {number} amount - The amount of times to shuffle the array.
 * @returns {Array} - An array with the shuffled results.
 *
 * @example
 * import { shuffle, assert } from 'Acid';
 * assert(shuffle([1, 2, 3, 4]), [3, 4, 2, 1]);
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
 * @param {number} amount - The amount of samples to take.
 * @returns {Array} - An array of randomly pulled samples.
 *
 * @test
 * (async () => {
 *   const tempResult = sample([1, 2] , 2);
 *   return assert(tempResult.includes(1) && tempResult.includes(2), true);
 * });
 *
 * @example
 * sample([1, 2, 3, 4] , 2);
 * // => [1, 3]
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
 * @returns {number} - The smallest number.
 *
 * @example
 * smallest([1,2,3]);
 * // => 1
 */
function smallest(array) {
	return mathNativeMin(...array);
}

/**
 * Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
 *
 * @function sortedIndex
 * @category array
 * @type {Function}
 * @param {Array} array - Array to be sorted.
 * @param {number} insertThis - Number to be inserted.
 * @returns {number} - The index at which to insert.
 *
 * @example
 * sortedIndex([30, 50], 40);
 * // => 1
 */
function sortedIndex(array, insertThis) {
	let min = 0;
	everyArray(array, (item, index) => {
		min = index;
		if (insertThis > item) {
			return true;
		} else {
			return false;
		}
	});
	return min;
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
 * import { take, assert } from 'Acid';
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
 * import { takeRight, assert } from 'Acid';
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
 * unique([1, 2, 2, 4]);
 * // => [1, 2, 4]
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
 * union([1,2,4], [1,2,3]);
 * // => [1, 2, 4, 3]
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
 * import { untilFalseArray, assert } from 'Acid';
 * assert(untilFalseArray([true, true, false], (item) => {
 *   return item;
 * }), false);
 * assert(untilFalseArray([true, true, true], (item) => {
 *   return item;
 * }), true);
 */
function untilFalseArray(source, iteratee) {
	const sourceLength = source.length;
	for (let index = 0;index < sourceLength;index++) {
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
 * import { untilTrueArray, assert } from 'Acid';
 * assert(untilTrueArray([true], (item) => {
 *   return item;
 * }), false);
 * assert(untilTrueArray([true, true, true], (item) => {
 *   return item;
 * }), true);
 */
function untilTrueArray(source, iteratee) {
	const sourceLength = source.length;
	for (let index = 0;index < sourceLength;index++) {
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
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileCompactMap, assert } from 'Acid';
 * assert(whileCompactMap([1, 2, 3, false, undefined, null], (item) => {
 *   return item;
 * }), [1, 2, 3, false]);
 */
function whileCompactMap(source, iteratee, results = [], thisBind) {
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

/**
 * Iterates through the given array but re-checks the length each loop. Usefull while mutating the same array being looped over.
 *
 * @function whileEachArray
 * @category array
 * @type {Function}
 * @param {Array} source - Array that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileEachArray, assert } from 'Acid';
 * const list = [];
 * whileEachArray([1, 2, 3], (item, index) => {
 *   list[index] = item;
 * });
 * assert(list, [1, 2, 3]);
 */
function whileEachArray(source, iteratee, thisBind) {
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
 * @param {Array} results - Array that will be used to assign results. Default value is a new empty array.
 * @param {*} thisBind - An object to be given each time to the iteratee.
 * @returns {Array} - The originally given array.
 *
 * @example
 * import { whileMapArray, assert } from 'Acid';
 * assert(whileMapArray([1, 2, 3], (item, index, source) => {
 *   if (index === 0) {
 *     source.push(4);
 *   }
 *   return item;
 * }), [1, 2, 3, 4]);
 */
function whileMapArray(source, iteratee, results = [], thisBind) {
	let index = 0;
	while (index < source.length) {
		results.push(iteratee(source[index], index, source, source.length, thisBind));
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
 * import { without, assert } from 'Acid';
 * assert(without([1, 2, 2, 4], [4]), [1, 2, 2]);
 */
function without(target, sources) {
	if (!sources) {
		return target;
	}
	const sourcesSet = construct(Set, sources);
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
 * @param {...Array} arrays - The array(s) to be filtered.
 * @returns {Array} - The filtered array.
 *
 * @example
 * xor([2, 1], [2, 3, 5], [6]);
 * // => [1, 3, 5, 6]
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
 * zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
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
 * unZip([['a', 1, true], ['b', 2, false]]);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
function unZip(source) {
	return source[0].map((item, index) => {
		return source.map((arraySet) => {
			return arraySet[index];
		});
	});
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
 * import { countBy, assert } from 'Acid';
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
 * @returns {number} - The count.
 *
 * @example
 * import { countKey, assert } from 'Acid';
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
 * @param {string} propertyName - The name of the key.
 * @returns {number} - The count.
 *
 * @example
 * import { countWithoutKey, assert } from 'Acid';
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
 * @param {number|string} id - The value to look for.
 * @param {string} [propertyName = 'id'] - The name of the property to compare.
 * @returns {number} - The index of the object.
 *
 * @example
 * findIndex([{id: 1}, {id: 2}], 1);
 * // => 0
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
 * @param {number|string} id - The value to look for.
 * @param {string} [propertyName = 'id'] - The name of the property to compare.
 * @returns {Object} - The found object.
 *
 * @example
 * findItem([{id: 1}, {id: 2}], 1);
 * // => {id: 1}
 */
function findItem(collection, id, propertyName = 'id') {
	const result = collection.find((element, index) => {
		return findIndexCache(element, index, collection, id, propertyName);
	});
	return (result === -1) ? false : result;
}

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
function sortNewest(collection, propertyName, pureMode = true) {
	const array = (pureMode) ? collection : [...collection];
	return array.sort((previous, next) => {
		return sortNewestFilter(previous, next, propertyName);
	});
}

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
function getNewest(collection, propertyName) {
	return sortNewest(collection, propertyName, false)[0];
}

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
function sortOldestFilter(previous, next, propertyName) {
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
function sortOldest(collection, key = 'id', pureMode = true) {
	const source = (pureMode) ? collection : [...collection];
	return source.sort((previous, next) => {
		return sortOldestFilter(previous, next, key);
	});
}

/**
  * Sorts an array in place using a key from oldest to newest and returns the oldest. Does not mutate the array.
  *
  * @function getOldest
  * @category collection
  * @type {Function}
  * @param {Array} collection - Collection to be sorted.
  * @param {string} key - The property name to sort by based on it's value.
  * @returns {Object} - The newest object in the collection.
  *
  * @example
  * getOldest([{id: 1}, {id: 0}], 'id');
  * // => {id: 0}
*/
function getOldest(collection, key = 'id') {
	return sortOldest(collection, key)[0];
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
 * groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
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
 * @param {string} propertyName - The property name to index by.
 * @returns {Object} - Returns the composed aggregate object.
 *
 * @example
 * indexBy([{name: 'Lucy', id: 0}, {name: 'Erick', id: 1}], 'id');
 * // => { "0": {name: 'Lucy', id: 0}, "1": {name: 'Erick', id: 1}}
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
 * @function invoke
 * @category collection
 * @type {Function}
 * @param {Array} collection - Collection from which method will be taken.
 * @param {string} property - Value used to pluck method from object.
 * @param {*} value - Value to be passed to callable property.
 * @returns {Array} - Returns the results of the invoked method.
 *
 * @example
 * invoke([{lucy(item, index) { return [item, index];}}, {lucy(item, index) { return [item, index];}}], 'lucy', 'EXAMPLE');
 * // => [['EXAMPLE', 0], ['EXAMPLE', 1]]
 */
function invoke(collection, property, value) {
	return mapArray(collection, (item, index) => {
		return item[property](value, index);
	});
}

/**
 * Asynchronously awaits & invokes a function on the provided property name in each object in the collection.
 *
 * @function invokeAsync
 * @category collection
 * @type {Function}
 * @async
 * @param {Array} collection - Collection from which method will be taken.
 * @param {string} property - Value used to pluck method from object.
 * @param {*} value - Value to be passed to callable property.
 * @returns {Array} - Returns the results of the invoked method.
 *
 * @test
 * (async () => {
 *   const result = await invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'EXAMPLE');
 *   return assert(result, [['EXAMPLE', 0], ['EXAMPLE', 1]]);
 * });
 *
 * @example
 * invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'EXAMPLE');
 * // => [['EXAMPLE', 0], ['EXAMPLE', 1]]
 */
function invokeAsync(collection, property, value) {
	return mapAsyncArray(collection, async (item, index) => {
		return item[property](value, index);
	});
}

/**
 * Returns an array of the plucked values from the collection.
 *
 * @function pluck
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array used to determine what value to be plucked.
 * @param {string} pluckThis - Property name.
 * @returns {Array} - An array of plucked values.
 *
 * @example
 * pluck([{lucy: 'Ants moving around on the walls.'}, {lucy: 'In the sky with diamonds.'}], 'lucy');
 * // => ['Ants moving around on the walls.', 'In the sky with diamonds.']
 */
function pluck(collection, pluckThis) {
	return mapArray(collection, (item) => {
		const result = item[pluckThis];
		return result;
	});
}

/**
 * Returns an array of the plucked values from the object. Values are plucked in the order given by the array.
 *
 * @function pluckObject
 * @category object
 * @type {Function}
 * @param {Object} value - Array used to determine what values to be plucked.
 * @param {string|Array} pluckThese - Property name.
 * @returns {Array} - An array of plucked values.
 *
 * @example
 * pluckObject({a: 1, b:3}, ['a','b']);
 * // => [1, 3]
 */
function pluckObject(value, pluckThese) {
	return mapArray(pluckThese, (item) => {
		return value[item];
	});
}

/**
 * Returns an array of the arrays of plucked values from the collection.
 *
 * @function pluckValues
 * @category collection
 * @type {Function}
 * @param {Array} collection - Array used to determine what values to be plucked.
 * @param {Array} pluckThese - Property names.
 * @returns {Array} - An array of arrays of plucked values.
 *
 * @example
 * pluckValues([{a: 1, b:3}, {a: 1, b:3}], ['a','b']);
 * // => [[1, 3], [1, 3]]
 */
function pluckValues(collection, pluckThese) {
	return mapArray(collection, (item) => {
		return pluckObject(item, pluckThese);
	});
}

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
function sortAlphabetical(collection, propertyName) {
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

const getExtensionRegex = /\.([0-9a-z]+)/;
/**
 * Return the file extension.
 *
 * @function getFileExtension
 * @category file
 * @param {*} source - Object to be checked.
 * @returns {string} - Returns the extension.
 *
 * @example
 * getFileExtension('test.js');
 * // => 'js'
*/
function getFileExtension(source) {
	const match = source.match(getExtensionRegex);
	if (match) {
		return match[1];
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
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileCSS('test.css');
 * // => true
*/
const isFileCSS = regexTestFactory(/\.css$/);

/**
 * Checks if the string has a .html extension.
 *
 * @function isFileHTML
 * @category file
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileHTML('test.html');
 * // => true
*/
const isFileHTML = regexTestFactory(/\.html$/);

/**
 * Checks if the string has a .js extension.
 *
 * @function isFileJS
 * @category file
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileJS('test.js');
 * // => true
*/
const isFileJS = regexTestFactory(/\.js$/);

/**
 * Checks if the string has a .json extension.
 *
 * @function isFileJSON
 * @category file
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileJSON('test.json');
 * // => true
*/
const isFileJSON = regexTestFactory(/\.json$/);

/**
 * Creates a function that executes callable, only after being called n times.
 *
 * @function after
 * @category function
 * @type {Function}
 * @param {number} amount - The number of calls until method is invoked.
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @test
 * (async () => {
 *   const onlyAfter = after(2, (item) => { return item;});
 *   return await assert(onlyAfter(1), undefined) && await assert(onlyAfter(2), 2);
 * });
 *
 * @example
 * const onlyAfter = after(1, (item) => { return item;});
 * onlyAfter(1);
 * // => undefined
 * onlyAfter(2);
 * // => 2
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
 * @param {number} amount - The arity cap.
 * @returns {Object} - Returns the new capped function.
 *
 * @example
 * ary((...args) => { return args;}, 2)(1, 2, 3);
 * // => [1, 2]
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
 * @param {number} amount - The number of calls before n.
 * @param {Function} callable - The function to be called.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @test
 * (async () => {
 *   const onlyBefore = before(3, (item) => { return item;});
 *   return await assert(onlyBefore(1), 1) && await assert(onlyBefore(2), 2) && await assert(onlyBefore(3), 2);
 * });
 *
 * @example
 * const onlyBefore = before(3, () => { return 1;});
 * onlyBefore(1);
 * // => 1
 * onlyBefore(2);
 * // => 2
 * onlyBefore(3);
 * // => 2
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
 * Checks if an object or objects are a plain object.
 *
 * @function isFunction
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isFunction } from 'Acid';
 * isFunction(() => {});
 * // => true
 */
const isFunction = (source) => {
	return (hasValue(source)) ? source instanceof Function : false;
};

/**
 * Iterates through the given object.
 *
 * @function eachObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
 * @returns {Object|Function} - Returns the calling object.
 *
 * @example
 * import { eachObject, assert } from 'Acid';
 * assert(eachObject({a: 1, b: 2, c: 3}, (item) => {
 *   console.log(item);
 * }), {a: 1, b: 2, c: 3});
 */
function eachObject(source, iteratee) {
	const objectKeys = keys(source);
	return eachArray(objectKeys, (key, index, original, propertyCount) => {
		iteratee(source[key], key, source, propertyCount, original);
	});
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
 * @returns {Object|Function} - An object of the same calling object's type.
 *
 * @example
 * mapObject({a: 1, b: 2, c: 3}, (item) => {
 *   return item * 2;
 * });
 * // => {a: 2, b: 4, c: 6}
 */
function mapObject(source, iteratee, results = {}) {
	eachObject(source, (item, key, original, propertyCount, objectKeys) => {
		results[key] = iteratee(item, key, results, original, propertyCount, objectKeys);
	});
	return results;
}

/**
 * Checks if an object is a promise.
 *
 * @function isPromise
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isPromise } from 'Acid';
 * isPromise(new Promise(() => {}));
 * // => true
 */
function isPromise(value) {
	if (value) {
		return value instanceof Promise;
	}
	return false;
}

/**
 * Checks to see if the constructor is that of a native object.
 *
 * @function isConstructor
 * @category type
 * @param {Object} target - The target object.
 * @param {Object} nativeObject - The source object.
 * @returns {Object} - Returns the target object.
 *
 * @example
 * import { isConstructor, assert } from 'Acid';
 * isConstructor(2, Number);
 * // => true
 */
function isConstructor(obj, nativeObject) {
	return (hasValue(obj)) ? obj.constructor === nativeObject : false;
}
function isConstructorFactory(source) {
	return (target) => {
		return isConstructor(target, source);
	};
}
function constructorName(source) {
	return source?.constructor?.name;
}
function isConstructorNameFactory(target) {
	return (source) => {
		return source && constructorName(source) === target || false;
	};
}

function isTypeFactory(method) {
	return function(primarySource, ...otherSources) {
		if (otherSources) {
			return method(primarySource) && everyArray(otherSources, method);
		}
		return method(primarySource);
	};
}

/**
 * Checks if an object is an async function.
 *
 * @function isAsync
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isAsync, assert } from 'Acid';
 * assert(isAsync(async() => {}), true);
 */
const isAsyncCall = isConstructorNameFactory('AsyncFunction');
const isAsync = isTypeFactory(isAsyncCall);
/**
 * Checks if an object is an async function or promise.
 *
 * @function isKindAsync
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isKindAsync, assert } from 'Acid';
 * assert(isKindAsync(async() => {}), true);
 */
function isKindAsync(value) {
	if (value) {
		return isPromise(value) || isAsync(value);
	}
	return false;
}

function generateLoop(arrayLoop, arrayLoopAsync, objectLoop, objectLoopAsync, forEach, forEachAsync, forOfLoopAsync, forOfLoop) {
	return (source, iteratee, results) => {
		let returned;
		const isIterateeAsync = isAsync(iteratee);
		if (!hasValue(source) || !iteratee) {
			return;
		} else if (isArray(source)) {
			returned = (isIterateeAsync) ? arrayLoopAsync : arrayLoop;
		} else if (isPlainObject(source)) {
			returned = (isIterateeAsync) ? objectLoopAsync : objectLoop;
		} else if (forEachAsync && source.forEach) {
			returned = (isIterateeAsync) ? forEachAsync : forEach;
		} else if (forOfLoop) {
			returned = (isIterateeAsync) ? forOfLoopAsync : forOfLoop;
		}
		return returned(source, iteratee, results);
	};
}

/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results of the iteratee on every element in the calling object.
 *
 * @function map
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.'.
 *
 * @example
 * import { map, assert } from 'Acid';
 * assert(map({a: 1, b: 2, c: 3}, (item) => {
 *   return item * 2;
 * }), {a: 2, b: 4, c: 6});
 */
const map = generateLoop(mapArray, mapObject);

/**
 * Loops through an object or an array and binds the given object to all functions encountered.
 *
 * @function bindAll
 * @category function
 * @type {Function}
 * @param {Object|Function|Array} collection - The functions to bind.
 * @param {*} bindThis - Object to be bound to functions.
 * @returns {Object|Function|Array} - Returns the method invoked or undefined.
 *
 * @example
 * bindAll([function () { return this;}], 'Lucy')[0]().toString();
 * // => 'Lucy'
 * @example
 * bindAll({a() { return this;}}, 'Lucy').a().toString();
 * // => 'Lucy'
 */
function bindAll(collection, bindThis) {
	return map(collection, (item) => {
		return isFunction(item) ? item.bind(bindThis) : item;
	});
}

const objectAssign = Object.assign;
/**
 * Copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
 *
 * @function assign
 * @category object
 * @param {Object} target - The target object.
 * @param {...Object} sources - The source object(s).
 * @returns {Object} - Returns the target object.
 *
 * @example
 * assign({b: 2}, {a: 1});
 * // => {b: 2, a: 1}
*/
function assign(target, ...sources) {
	if (target) {
		return objectAssign(target, ...sources);
	}
}

/**
 * Asynchronously iterates through the given object.
 *
 * @function eachAsyncObject
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
 * @returns {Object|Function} - Returns source.
 *
 * @example
 * (async () => {
 *   const tempList = {};
 *   await eachAsyncObject({a: 1, b: 2, c: 3}, async (item, key) => {
 *     tempList[key] = item;
 *   });
 *   return assert(tempList, {a: 1, b: 2, c: 3});
 * });
 *
 */
const eachAsyncObject = async (source, iteratee) => {
	const objectKeys = keys(source);
	await eachAsyncArray(objectKeys, (key, index, array, propertyCount) => {
		return iteratee(source[key], key, source, propertyCount, objectKeys);
	});
	return source;
};

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

function forOf(source, callback) {
	for (const [key, value] of source) {
		callback(value, key, source);
	}
	return source;
}

async function forOfAsync(source, callback) {
	for await (const [key, value] of source) {
		await callback(value, key, source);
	}
	return source;
}

/**
 * Iterates through the given object.
 *
 * @function each
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @returns {Array | object | Function} - The originally given object.
 *
 * @example
 * import { each, assert } from 'Acid';
 * const list = {};
 * each({a: 1, b: 2, c: 3}, (item, key) => {
 *   list[key] = item;
 * });
 * assert(list, {a: 1, b: 2, c: 3});
 */
const each = generateLoop(eachArray, eachAsyncArray, eachObject, eachAsyncObject, forEach, forEachAsync, forOf, forOfAsync);

const add$1 = (link, methods) => {
	each(methods, (item, key) => {
		link.methods[key] = (...args) => {
			item(link.value, ...args);
			return link.methods;
		};
	});
	return link;
};
/**
 * Creates a chainable set of functions.
 *
 * @function chain
 * @category function
 * @type {Function}
 * @param {Array|Object} methods - The object to take methods from.
 * @returns {*} - Returns a function which has value, methods, add, and done. When invoking the function the argument is saved as the value property for further chaining.
 *
 * @test
 * (async () => {
 *   const chained = chain({a(item) { return item;}});
 *   chained('Acid').a();
 *   return assert(chained.done(), 'Acid');
 * });
 *
 * @example
 * const chained = chain({a(item) { return item;}});
 * chained('Acid').a();
 * chained.done();
 * // => 'Acid'
 */
function chain(methods) {
	const link = (value) => {
		link.value = value;
		return link.methods;
	};
	assign(link, {
		add(addToChain) {
			return add$1(link, addToChain);
		},
		done() {
			const value = link.value;
			link.value = null;
			return value;
		},
		methods: {},
	});
	link.add(methods);
	return link;
}

/**
 * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method length is not sufficient.
 *
 * @function curry
 * @category function
 * @type {Function}
 * @param {Function} callable - The function to curry.
 * @param {number} arity - The arity of method.
 * @returns {*} - Returns the new curried function.
 *
 * @example
 * curry((a, b, c) => {
 *   return [a, b, c];
 * })(1)(2)(3);
 * // => [1, 2, 3]
 */
function curry(callable, arity = callable.length) {
	const curries = [];
	const curried = (...curryArgs) => {
		curries.push(...curryArgs);
		if (curries.length === arity) {
			const result = callable(...curries);
			clear(curries);
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
 * @param {number} arity - The arity of method.
 * @returns {*} - Returns the new curried function.
 *
 * @example
 * curryRight((a, b, c) => {
 *   return [a, b, c];
 * })(1)(2)(3);
 * // => [3, 2, 1]
 */
function curryRight(callable, arity = callable.length) {
	const curries = [];
	const curried = (...curryArgs) => {
		curries.unshift(...curryArgs);
		if (curries.length === arity) {
			const result = callable(...curries);
			clear(curries);
			return result;
		}
		return curried;
	};
	return curried;
}

/**
 * This method returns true.
 *
 * @function stubTrue
 * @category utility
 * @type {Function}
 * @returns {boolean} - Returns true.
 *
 * @example
 * import { stubArray } from 'Acid';
 * stubTrue();
 * // => true
 */
const truth = true;
const stubTrue = () => {
	return truth;
};

/**
 * This method returns false.
 *
 * @function stubFalse
 * @category utility
 * @type {Function}
 * @returns {boolean} - Returns false.
 *
 * @example
 * import { stubArray } from 'Acid';
 * stubFalse();
 * // => false
 */
const falsy = false;
const stubFalse = () => {
	return falsy;
};

/**
 * This method returns undefined.
 *
 * @function noop
 * @category function
 * @type {Function}
 * @returns {undefined} - Returns undefined.
 * @example
 * noop();
 * // => undefined
 */
const noop = () => {
	return;
};

/**
 * Iterates based on the amount given invoking the iteratee with the current index as an argument.
 *
 * @function times
 * @category utility
 * @type {Function}
 * @param {number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index and amount.
 * @returns {undefined} - Nothing.
 *
 * @example
 * import { times } from 'Acid';
 * times(3, (item) => {
 *   console.log(item);
 * });
 * // 0
 * // 1
 * // 2
 * // => undefined
 */
function times(amount, iteratee) {
	for (let index = 0; index < amount; index++) {
		iteratee(index);
	}
}
/**
 * Iterates based on the amount given and maps the results returned by the iteratee each time to an array.
 *
 * @function timesMap
 * @category utility
 * @type {Function}
 * @param {number} amount - The amount of times to loop invoking the iteratee.
 * @param {Function} iteratee - Transformation function which is passed index and amount.
 * @param {Array} [results = []] - Array that will have iteratee return pushed to.
 * @returns {Array} - An array with iteratee's returned values.
 *
 * @example
 * import { timesMap } from 'Acid';
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

class Timers {
	list = construct(Map);
	construct() {
	}
	/**
	 * Remove a timer that was created using the timer function.
	 *
	 * @param {number} id - The id of the timer to remove.
	 * @returns {undefined} - Returns nothing.
	 *
	 * @example
	 * import { stubArray } from 'Acid';
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
	 * @param {number} time - The time in milliseconds.
	 * @returns {Object} - Returns setTimeoutId ID.
	 *
	 * @example
	 * import { stubArray } from 'Acid';
	 * timers.set(() => {}, 100);
	 * // => 0
	 */
	set(callable, time) {
		const currentThis = this;
		const id = setTimeout(() => {
			callable();
			currentThis.remove(id);
		}, time);
		this.list.set(id, truth);
		return id;
	}
	/**
	 * Clear all active timers.
	 *
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { stubArray } from 'Acid';
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
 * @param {number} time - The time in milliseconds.
 * @returns {Object} - Returns setTimeoutId ID.
 *
 * @example
 * import { stubArray } from 'Acid';
 * timer(() => {}, 100);
 * // => 0
 */
function timer(callable, time) {
	return timers.set(callable, time);
}
/**
 * Clear all active timers.
 *
 * @function clearTimers
 * @category function
 * @returns {undefined} - Returns undefined.
 *
 * @example
 * import { stubArray } from 'Acid';
 * clearTimers();
 * // => undefined
 */
function clearTimers() {
	const id = setTimeout(noop, 0);
	times(id, (index) => {
		timers.remove(index);
	});
}

/**
 * Calls a target function with arguments as specified.
 *
 * @function apply
 * @category function
 * @param {Function} target - The target function to call.
 * @param {*} thisArgument - Array like object.
 * @param {Array} argumentsList - An array-like object specifying the arguments with which target should be called.
 * @returns {*} - The result of calling the given target function with the specified this value and arguments.
 *
 * @example
 * apply(function (a) {return a;}, undefined, [2]);
 * // => 2
*/
const apply = Reflect.apply;

/**
  * Creates a debounced function that delays invoking callable until after milliseconds have elapsed since the last time the debounced function was invoked. The debounce function has a clear method to cancel the timer.
  *
  * @function debounce
  * @category function
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {number} time - The time in milliseconds.
  * @returns {Function} - The debounced function.
  *
  * @example
  * const debounced = debounce(() => { console.log('debounced'); }, 0);
  * debounced();
  * // 'debounced'
*/
function debounce(callable, time) {
	function debounced(...args) {
		if (debounced.id !== falsy) {
			timers.remove(debounced.id);
		}
		debounced.id = timer(() => {
			debounced.callable(...args);
			debounced.id = falsy;
		}, time);
	}
	debounced.id = falsy;
	debounced.callable = callable.bind(debounced);
	debounced.clear = () => {
		if (debounced.id !== falsy) {
			timers.remove(debounced.id);
			debounced.id = falsy;
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
 * @param {...Array} args - Arguments to pass to the method.
 * @returns {*} - Returns the method invoked or undefined.
 *
 * @example
 * import { ifInvoke, assert } from 'Acid';
 * assert(ifInvoke((...args) => { return args;}, 1, 2), [1, 2]);
 */
function ifInvoke(callable, ...args) {
	if (isFunction(callable)) {
		return callable(...args);
	}
}

/**
 * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
 *
 * @function inAsync
 * @type {Function}
 * @category Array
 * @async
 * @param {Array} source - Array of async functions that will be looped through.
 * Functions are given the supplied object, index, the calling array, and the array length.
 * @param {*} firstArgument - The first argument given to each function.
 * @returns {object} - The originally given array.
 *
 * @example
 * import { inAsync, assert } from 'Acid';
 * const list = [];
 * await inAsync([async (firstArgument, item, index) => {
 *   list.push(index + firstArgument.a);
 * }, async (firstArgument, item, index) => {
 *   list.push(index);
 * }], {a:1});
 * assert(list, [1, 1]);
 */
async function inAsync(source, firstArgument) {
	const arrayLength = source.length;
	for (let index = 0; index < arrayLength; index++) {
		const item = source[index];
		await item(firstArgument, index, source, arrayLength);
	}
	return source;
}

/**
 * Invoke an array of functions.
 *
 * @function inSync
 * @category function
 * @type {Function}
 * @param {Array|Object|Function} collection - The functions to be invoked.
 * @param {*} value - The object passed as an argument to each method.
 * @returns {undefined} - Returns undefined.
 *
 * @test
 * (() => {
 *   const tempList = [];
 *   inSync([() => {tempList.push(1);}, () => {tempList.push(2);}]);
 *   return assert(tempList, [1, 2]);
 * });
 *
 * @example
 * inSync([() => {console.log(1);}, () => {console.log(2);}]);
 * // 1
 * // 2
 * // => undefined
 */
const inSync = (collection, value) => {
	return each(collection, (item) => {
		item(value);
	});
};

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
 * negate(() => { return false;})();
 * // => true
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
 * @param {number} [index = 0] - The index of the argument to return.
 * @returns {Function} - Returns the new pass-thru function.
 *
 * @example
 * nthArg(1)('a', 'b');
 * // => 'b'
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
  * @test
  * (async () => {
  *   const onceOnly = once((item) => { return item;});
  *   return await assert(onceOnly(5), 5) && await assert(onceOnly(2), 5);
  * });
  *
  * @example
  * const onceOnly = once((item) => { return item;});
  * onceOnly(5);
  * onceOnly(3);
  * // => 5
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
 * Creates a function that invokes iteratee with the arguments it receives and returns their results.
 *
 * @function over
 * @category function
 * @type {Function}
 * @param {(Array.<function>|Object.<function>)} iteratee - The list of functions to loop through.
 * @returns {Function} - Returns the new over wrapped function.
 *
 * @example
 * over([Math.max, Math.min])(1, 2, 3, 4);
 * // => [4, 1]
 */
function over(iteratee) {
	return (...args) => {
		return map(iteratee, (item) => {
			return item(...args);
		});
	};
}

/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function everyObject
 * @category object
 * @type {Function}
 * @param {Object} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * everyObject({a: true, b: true, c: true}, (item) => {
 *   return item;
 * });
 * // => true
 */
function everyObject(source, iteratee) {
	const objectKeys = keys(source);
	return everyArray(objectKeys, (key, index, original, propertyCount) => {
		return iteratee(source[key], key, source, propertyCount, original);
	});
}

/**
 * Iterates through the given object while the iteratee returns true.
 *
 * @function every
 * @category utility
 * @type {Function}
 * @param {object | Array | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
 * @returns {boolean} - Returns true if all values returned are true or false if one value returns false.
 *
 * @example
 * import { every, assert } from 'Acid';
 * assert(every({a: false, b: true, c: true}, (item) => {
 *  return item;
 * }), false);
 */
const every = generateLoop(eachArray, eachAsyncArray, eachObject, eachAsyncObject, forEach, forEachAsync, forOf, forOfAsync);

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
 * import { overEvery, assert } from 'Acid';
 * assert(overEvery([Boolean, isFinite])('1'), true);
 */
function overEvery(predicates) {
	return (...args) => {
		return every(predicates, (item) => {
			return item(...args);
		});
	};
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
 * reArg((a, b, c) => {
 *   return [a, b, c];
 * }, [1,2,0])(1,2,3);
 * // => [2, 3, 1]
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
  * @param {number} time - The time in milliseconds.
  * @returns {Function} - The throttled function.
  *
  * @example
  * const throttled = throttle(() => { console.log('throttle'); }, 0)();
  * throttled();
  * // 'throttle'
*/
function throttle(callable, time) {
	function throttled(...args) {
		if (throttled.id) {
			throttled.shouldThrottle = truth;
			return;
		}
		throttled.callable(...args);
		throttled.id = timer(() => {
			if (throttled.shouldThrottle) {
				throttled.callable(...args);
			}
			throttled.id = falsy;
		}, time);
	}
	throttled.id = falsy;
	throttled.callable = callable.bind(throttled);
	throttled.clear = () => {
		timers.remove(throttled.id);
		throttled.id = falsy;
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
 * wrap('Lucy', (firstName, lastName) => {
 *  return `My name is ${firstName} ${lastName}.`;
 * })('Diamonds');
 * // => 'My name is Lucy Diamonds.'
 */
function wrap(value, wrapper) {
	return (...arg) => {
		return wrapper(value, ...arg);
	};
}

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
 * isSame('foo', 'foo');
 * // => true
*/
const isSame = Object.is;

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
 * import { cacheNativeMethod, assert } from 'Acid';
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
 * @param {Object} source - The object whose enumerable and non-enumerable own properties are to be returned.
 * @returns {Object} - An array of strings that correspond to the properties found directly upon the given object.
 *
 * @example
 * import { getPropNames, assert } from 'Acid';
 * assert(getPropNames({ 0: 'a', 1: 'b', 2: 'c' }), ['0', '1', '2']);
 */
const getPropNames = Object.getOwnPropertyNames;
/**
 * Returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.
 *
 * @function getPropDesc
 * @category object
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
 * Adds two numbers.
 *
 * @function add
 * @category math
 * @type {Function}
 * @param {number} augend - First number.
 * @param {number} addend - Second number which is being added to another (augend).
 * @returns {number} - Returns the sum of the arguments.
 *
 * @example
 * import { add, assert } from 'Acid';
 * assert(add(1, 1), 2);
 */
function add(augend, addend) {
	return augend + addend;
}

/**
 *  Decrements a number.
 *
 * @function deduct
 * @category math
 * @type {Function}
 * @param {number} number - First number.
 * @returns {number} - Returns a decremented version of the number.
 *
 * @example
 * import { multiply, assert } from 'Acid';
 * assert(multiply(10, 5), 50);
 * deduct(10);
 * // => 9
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
 * @param {number} number - First number.
 * @param {number} value - Second number.
 * @returns {number} - Returns the quotient of the arguments.
 *
 * @example
 * import { divide, assert } from 'Acid';
 * assert(divide(10, 5), 2);
 */
function divide(source, value) {
	return source / value;
}

/**
 *  Increments a number.
 *
 * @function increment
 * @category math
 * @type {Function}
 * @param {number} number - First number.
 * @returns {number} - Returns an incremented version of the number.
 *
 * @example
 * import { multiply, assert } from 'Acid';
 * assert(multiply(10, 5), 50);
 * increment(10);
 * // => 11
 */
function increment(source) {
	return source + 1;
}

/**
 * Subtracts two numbers.
 *
 * @function minus
 * @category math
 * @type {Function}
 * @param {number} minuend - The minuend.
 * @param {number} subtrahend - The subtrahend.
 * @returns {number} - Returns the difference.
 *
 * @example
 * import { minus, assert } from 'Acid';
 * assert(minus(3, 1), 2);
 */
function minus(minuend, subtrahend) {
	return minuend - subtrahend;
}

/**
 * Multiplies two numbers.
 *
 * @function multiply
 * @category math
 * @type {Function}
 * @param {number} number - First number.
 * @param {number} value - Second number.
 * @returns {number} - Returns the product of the arguments.
 *
 * @example
 * import { multiply, assert } from 'Acid';
 * assert(multiply(10, 5), 50);
 */
function multiply(source, value) {
	return source * value;
}

const { random } = Math;
/**
 *  Produces a random floating-point number between min (included) and max (excluded). Do not use for security or encryption.
 *
 * @function randomFloat
 * @category math
 * @type {Function}
 * @param {number} max - Establishes highest possible value for the random number.
 * @param {number} [min = 0] - Establishes lowest possible value for the random number.
 * @returns {number} - Returns random integer between the max and min range.
 *
 * @example
 * import { randomFloat, assert } from 'Acid';
 * assert(randomFloat(10, 0), (value) => { return value > 0 && value < 10;});
 * // => 9.1
 */
function randomFloat(max, min = 0) {
	return random() * (max - min) + min;
}

/**
 *  Extracts the remainder between two numbers.
 *
 * @function remainder
 * @category math
 * @type {Function}
 * @param {number} number - First number.
 * @param {number} value - Second number.
 * @returns {number} - Returns the remainder of the arguments.
 *
 * @example
 * import { multiply, assert } from 'Acid';
 * assert(multiply(10, 5), 50);
 * remainder(10, 6);
 * // => 4
 */
function remainder(source, value) {
	return source % value;
}

/**
 * Subtract all numbers in the array starting from left to right & return the difference.
 *
 * @function sub
 * @category math
 * @type {Function}
 * @param {number[]} source - Array of numbers.
 * @returns {number} - Returns the final difference.
 *
 * @example
 * import { sub, assert } from 'Acid';
 * assert(sub([10, 1, 2, 3]), 5);
 */
function sub(source) {
	return source.reduce((a, b) => {
		return a - b;
	}, 0);
}

/**
 * Sum all numbers in a given array.
 *
 * @function sum
 * @category math
 * @type {Function}
 * @param {number[]} source - Array of numbers.
 * @returns {number} - Returns a single number.
 *
 * @example
 * import { sum, assert } from 'Acid';
 * assert(sum([10, 1, 2, 3]), 5);
 */
function sum(source) {
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
 * @param {number} source - Number to be checked.
 * @param {number} start - Beginning of range.
 * @param {number} end - End of range.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNumberInRange, assert } from 'Acid';
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
 * @param {number} source - Number to be checked.
 * @param {number} start - Beginning of range.
 * @param {number} end - End of range.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNumberNotInRange, assert } from 'Acid';
 * assert(isNumberNotInRange(1, 0, 2), false);
 * assert(isNumberNotInRange(1, 2, 5), true);
 */
function isNumberNotInRange(source, start, end) {
	return source < start || source > end;
}

/**
 * Strictly checks if a number is zero.
 *
 * @function isZero
 * @category number
 * @type {Function}
 * @param {number} source - Number to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isZero, assert } from 'Acid';
 * assert(isZero(0), true);
 */
function isZero(source) {
	return source === 0;
}

/**
 * Extracts all keys from an object whose values are not falsey. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @function compactKeys
 * @category object
 * @type {Function}
 * @param {Object} object - Object from which keys are extracted.
 * @returns {Array} - Returns an array of key values.
 *
 * @test
 * (async () => {
 *   const results = compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
 *   return assert(results.includes('Lucy') && results.includes('John'), true);
 * });
 *
 * @example
 * compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
 * // => ['Lucy', 'John']
 */
function compactKeys(object) {
	const compactedKeys = [];
	eachObject(object, (item, key) => {
		if (item) {
			compactedKeys.push(key);
		}
	});
	return compactedKeys;
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
 * compactMapObject({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
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
 * compactMapAsyncObject({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
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
 * filterObject({a: false, b: true, c: true}, (item) => {
 *   return item;
 * });
 * // => {b: true, c: true}
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
 * Creates an inverted version of a given object by switching it's keys and values.
 *
 * @function invert
 * @type {Function}
 * @category object
 * @param {Object} thisObject - Object to be inverted.
 * @param {Array} [invertedObject = {}] - Empty object to be populated with inverted values from thisObject.
 * @returns {Object} - Returns object with keys and values switched.
 *
 * @example
 * invert({a:1});
 * // => {1:'a'}
 */
function invert(thisObject, invertedObject = {}) {
	eachObject(thisObject, (item, key) => {
		invertedObject[item] = key;
	});
	return invertedObject;
}

/**
 * Performs a shallow strict comparison between two objects.
 *
 * @function isMatchObject
 * @type {Function}
 * @category object
 * @param {Object} source - Source object.
 * @param {Object} target - Object to compare to source.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { assert, isMatchObject } from 'Acid';
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
 * Asynchronously iterates through the calling object and creates an object with the results of the iteratee on every element in the calling object.
 *
 * @function mapObjectAsync
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object of the same calling object's type.
 *
 * @example
 * mapObjectAsync({a: 1, b: 2, c: 3}, (item) => {
 *   return item * 2;
 * });
 * // => {a: 2, b: 4, c: 6}
 */
const mapObjectAsync = async (source, iteratee, results = {}) => {
	await eachAsyncObject(source, async (item, key, thisObject, propertyCount, objectKeys) => {
		results[key] = await iteratee(item, key, results, thisObject, propertyCount, objectKeys);
	});
	return results;
};
/**
 * Asynchronously iterates through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMapObjectAsync
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * compactMapObjectAsync({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
 */
const compactMapObjectAsync = async (source, iteratee, results = {}) => {
	await eachAsyncObject(source, async (item, key, thisObject, propertyCount, objectKeys) => {
		const result = await iteratee(item, key, results, propertyCount, objectKeys);
		if (hasValue(result)) {
			results[key] = result;
		}
	});
	return results;
};

/**
 * Returns a clone of the given object without the given properties.
 *
 * @function omit
 * @category object
 * @type {Function}
 * @param {Object} originalObject - Object from which keys are extracted.
 * @param {Array} array - Array of object keys.
 * @returns {Object} - A new object with the removed.
 *
 * @example
 * omit({a:1, b:2}, ['a']);
 * // => {b:2}
 */
function omit(originalObject, array) {
	return filterObject(originalObject, (item, key) => {
		return !array.includes(key);
	});
}

/**
  * Returns a clone of the source object with the plucked properties.
  *
  * @function pick
  * @type {Function}
  * @category object
  * @param {Object} source - Object to be cloned.
  * @param {Array} array - Array used to determine what values to be plucked.
  * @param {Object} [newObject = {}] - Object to be populated with plucked values.
  * @returns {Object} - A new object with plucked properties.
  *
  * @example
  * pick({a:1, b:2, c:3}, ['a','b']);
  * // => {a:1, b:2}
*/
const pick = (source, array, newObject = {}) => {
	eachArray(array, (item) => {
		newObject[item] = source[item];
	});
	return newObject;
};

/**
 * Returns the amount of keys on the object.
 *
 * @function objectSize
 * @category object
 * @param {Object} source - The source object.
 * @returns {number} - The amount of keys.
 *
 * @example
 * objectSize({ 0: 'a', 1: 'b', 2: 'c' });
 * // => 3
*/
function objectSize(source) {
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
 * zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
const zipObject = (properties, values) => {
	const zipedObject = {};
	eachArray(properties, (item, key) => {
		zipedObject[item] = values[key];
	});
	return zipedObject;
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
 * unZipObject({ 'a': 1, 'b': 2 });
 * // => [['a', 'b'], [1, 2]]
 */
const unZipObject = (object) => {
	const unZippedKeys = [];
	const values = [];
	eachObject(object, (item, key) => {
		unZippedKeys.push(key);
		values.push(item);
	});
	return [unZippedKeys, values];
};

const normalizeCase = /[-_]/g;
const spaceFirstLetter$1 = / (.)/g;
/**
 * Converts a string and converts it entirely into uppercase.
 *
 * @function upperCase
 * @category string
 * @type {Function}
 * @param {string} source - String to be converted into upper case.
 * @returns {string} - Converted string in upper case.
 *
 * @example
 * import { stubArray } from 'Acid';
 * upperCase('upper case');
 * // => 'UPPER CASE'
 */
function upperCase(source) {
	return source.replace(normalizeCase, ' ')
		.trim()
		.toUpperCase();
}
/**
 * Converts a string into Camel case format.
 *
 * @function camelCase
 * @category string
 * @type {Function}
 * @param {string} source - String to be converted into Camel case.
 * @returns {string} - Converted string in Camel case.
 *
 * @example
 * import { stubArray } from 'Acid';
 * camelCase('camel case');
 * // => 'camelCase'
 */
function camelCase(source) {
	return source.toLowerCase()
		.replace(spaceFirstLetter$1, (match) => {
			return match.toUpperCase().replace(/ /g, '');
		});
}
/**
 * Converts a string into Kebab case format.
 *
 * @function kebabCase
 * @category string
 * @type {Function}
 * @param {string} source - String to be converted into Kebab case.
 * @returns {string} - Converted string in Kebab case.
 *
 * @example
 * import { stubArray } from 'Acid';
 * kebabCase('kebab case');
 * // => 'kebab-case'
 */
function kebabCase(source) {
	return source.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase()
		.replace(spaceFirstLetter$1, '-$1');
}
/**
 * Converts a string into snake case format.
 *
 * @function snakeCase
 * @category string
 * @type {Function}
 * @param {string} source - String to be converted into snake case.
 * @returns {string} - Converted string in Snake case.
 *
 * @example
 * import { stubArray } from 'Acid';
 * snakeCase('snake case');
 * // => 'snake_case'
 */
function snakeCase(source) {
	return source.replace(normalizeCase, ' ')
		.trim()
		.toLowerCase()
		.replace(spaceFirstLetter$1, '_$1');
}

/**
 * Inserts text into a string at a given position.
 *
 * @function insertInRange
 * @category string
 * @type {Function}
 * @param {string} string - String to insert the text into.
 * @param {number} index - Point of insertion.
 * @param {string} text - The string to be inserted.
 * @returns {string} - The string with the text inserted at the given point.
 *
 * @example
 * import { stubArray } from 'Acid';
 * insertInRange('A from Lucy.', 1, ' tab');
 * // => 'A tab from Lucy.'
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
 * @param {string} string - String to extract the letter from.
 * @param {number} [index=1] - The starting position.
 * @returns {string} - A letter at the given index.
 *
 * @example
 * import { stubArray } from 'Acid';
 * rightString('rightString');
 * // => 'g'
 * rightString('rightString', 2);
 * // => 'n'
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
 * @param {string} string - String to chunked.
 * @param {number} [size] - The max string length per chunk.
 * @returns {Array} - An array with strings that are <= size parameter.
 *
 * @example
 * import { stubArray } from 'Acid';
 * chunkString('chunk', 2);
 * // => ['ch', 'un', 'k']
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
 * @param {string} string - String to extract the initial letters from.
 * @param {number} [index=1] - Starting point from the right.
 * @returns {string} - A string with the characters before the index starting from the right.
 *
 * @example
 * import { stubArray } from 'Acid';
 * initialString('initialString');
 * // => 'initialStrin'
 * initialString('initialString', 2);
 * // => 'initialStri'
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
 * @param {string} string - String to extract the rest of the letters from.
 * @param {number} [index=1] - Starting point.
 * @returns {string} - A string without the characters up-to to the index.
 *
 * @example
 * import { stubArray } from 'Acid';
 * restString('restString');
 * // => 'estString'
 * restString('restString', 2);
 * // => 'stString'
 */
function restString(string, index = 1) {
	return string.substr(index);
}

/**
 * Replaces all occurrences of strings in an array with a value.
 *
 * @function replaceList
 * @category string
 * @type {Function}
 * @param {string} string - String to be replaced.
 * @param {Array} words - Strings to replace.
 * @param {string} value - The match replacement.
 * @returns {string} - The string with the replacement.
 *
 * @example
 * import { stubArray } from 'Acid';
 * replaceList('Her name was user.', ['user'], 'Lucy');
 * // => 'Her name was Lucy.'
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
 * @param {string} string - String to be replaced.
 * @returns {string} - Converted string into the decoded URI Component .
 *
 * @example
 * import { stubArray } from 'Acid';
 * rawURLDecode('Lucy%20saw%20diamonds%20in%20the%20sky.');
 * // => 'Lucy saw diamonds in the sky.'
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
 * @param {string} string - String to be replaced.
 * @returns {string} - Replaced string.
 *
 * @example
 * import { stubArray } from 'Acid';
 * htmlEntities(`<script>console.log('Lucy & diamonds.')</script>`);
 * // => `&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;`
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
 * @param {string} string - String to be replaced.
 * @returns {string} - Replaced string.
 *
 * @example
 * import { stubArray } from 'Acid';
 * sanitize(`<script>console.log('Lucy%20&%20diamonds.')</script>`);
 * // => `&lt;script&gt;console.log('Lucy &amp; diamonds.')&lt;/script&gt;`
 */
function sanitize(string) {
	return htmlEntities(rawURLDecode(string));
}

const tokenizeRegEx = /\S+/g;
const wordsRegEx = /\w+/g;
/**
 * Break string by non-white space characters matches.
 *
 * @function tokenize
 * @type {Function}
 * @category string
 * @param {string} string - String to be broken up.
 * @returns {Array} - Array of words without white space characters.
 *
 * @example
 * import { stubArray } from 'Acid';
 * tokenize('I am Lucy!');
 * // => ["I", "am", "Lucy!"]
 */
function tokenize(string) {
	return string.match(tokenizeRegEx) || [];
}
/**
 * Break string into word matches.
 *
 * @function words
 * @type {Function}
 * @param {string} string - String to be broken up.
 * @returns {Array} - Array of words with word characters only.
 *
 * @example
 * import { stubArray } from 'Acid';
 * words('I am Lucy!');
 * // => ["I", "am", "Lucy"]
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
	return string.substr(index, stringLength).trim();
};
/**
 * Truncates the string, accounting for word placement and character count.
 *
 * @function truncate
 * @type {Function}
 * @category string
 * @param {string} string - String to be truncated.
 * @param {number} maxLength - The desired max length of the string.
 * @returns {string} - The mutated string.
 *
 * @example
 * import { stubArray } from 'Acid';
 * truncate('Where is Lucy?', 2);
 * // => 'Where is'
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
 * @param {string} string - String to be truncated.
 * @param {number} maxLength - The desired max length of the string.
 * @returns {string} - The mutated string.
 *
 * @example
 * import { stubArray } from 'Acid';
 * truncateRight('Where is Lucy?', 6);
 * // => 'Lucy?'
 */
function truncateRight(string, maxLength) {
	const stringLength = string.length;
	return (stringLength > maxLength) ? truncateUp(string, maxLength, stringLength) : string;
}

const spaceFirstLetter = / (.)/g;
/**
 * Returns the first letter capitalized.
 *
 * @function upperFirstLetter
 * @type {Function}
 * @category string
 * @param {string} string - String to extract first letter from.
 * @returns {string} - An upper case letter.
 *
 * @example
 * import { stubArray } from 'Acid';
 * upperFirstLetter('upper');
 * // => "U"
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
 * @param {string} string - String to be mutated.
 * @returns {string} - String with first letter capitalized.
 *
 * @example
 * import { stubArray } from 'Acid';
 * upperFirst('upper');
 * // => 'Upper'
 */
function upperFirst(string) {
	return upperFirstLetter(string) + restString(string);
}
/**
 * Capitalize all first letters.
 *
 * @function upperFirstAll
 * @type {Function}
 * @category string
 * @param {string} string - String to be mutated.
 * @returns {string} - String with all first letters capitalized.
 *
 * @example
 * import { stubArray } from 'Acid';
 * upperFirstAll('Lucy is next up.');
 * // => 'Lucy Is Next Up.'
 */
function upperFirstAll(string) {
	return string.replace(spaceFirstLetter, (match) => {
		return match.toUpperCase();
	});
}
/**
 * Capitalize first letter and lower case the rest.
 *
 * @function upperFirstOnly
 * @type {Function}
 * @category string
 * @param {string} string - String to be mutated.
 * @returns {string} - String with first letter capitalized.
 *
 * @example
 * import { stubArray } from 'Acid';
 * upperFirstOnly('LYSERGIC ACID DIETHYLAMIDE');
 * // => 'Lysergic namespace diethylamide'
 */
function upperFirstOnly(string) {
	return upperFirstLetter(string) + restString(string).toLowerCase();
}
/**
 * Capitalize all first letters and lower case the rest.
 *
 * @function upperFirstOnlyAll
 * @type {Function}
 * @category string
 * @param {string} string - String to be mutated.
 * @returns {string} - String with all first letters capitalized.
 *
 * @example
 * import { stubArray } from 'Acid';
 * upperFirstOnlyAll('LYSERGIC ACID DIETHYLAMIDE');
 * // => 'Lysergic Acid Diethylamide'
 */
function upperFirstOnlyAll(string) {
	return upperFirstOnly(string.toLowerCase()).replace(spaceFirstLetter, (match) => {
		return match.toUpperCase();
	});
}

/**
 * Checks if the value is an Arguments object.
 *
 * @function isArguments
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isArguments, assert } from 'Acid';
 * assert(isArguments((function() { return arguments;})()), true);
 * assert(isArguments([]), false);
 */
const objectArguments = '[object Arguments]';
function isArguments(source) {
	return (hasValue(source)) ? source.toString() === objectArguments : false;
}

/**
 * Checks if the value is a number.
 *
 * @function isNumber
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isNumber, assert } from 'Acid';
 * assert(isNumber(1), true);
 */
const isNumberCall = isConstructorNameFactory('Number');
const isNumber = isTypeFactory(isNumberCall);

/**
 * Checks if an object is null or undefined.
 *
 * @function noValue
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { noValue, assert } from 'Acid';
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
 * @function isArray
 * @category type
 * @param {*} source - Object to be checked.
 * @param {*} strictFlag - Strict flag to also check to see if keys are whole intigers greater than or equal to 0.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isArray, assert } from 'Acid';
 * assert(isArray([]), true);
 * assert(isArray(2), false);
 */
function isArrayLike(source, strictFlag) {
	if (noValue(source) || isFunction(source)) {
		return false;
	}
	const sourceLength = source.length;
	if (!sourceLength || !isNumber(sourceLength) || sourceLength < 0) {
		return false;
	}
	if (strictFlag) {
		return every(source, (value, index) => {
			return index >= 0 && isNumber(index);
		});
	}
	return false;
}

/**
 * Checks if an object or objects are a BigInt.
 *
 * @function isBigInt
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isBigInt, assert } from 'Acid';
 * assert(isBigInt(BigInt(123)), true);
 */
const isBigIntCall = isConstructorNameFactory('BigInt');
const isBigInt = isTypeFactory(isBigIntCall);

/**
 * Checks if the value is a Boolean.
 *
 * @function isBoolean
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isBoolean } from 'Acid';
 * isBoolean(true);
 * // => true
 */
const isBooleanCall = isConstructorNameFactory('Boolean');
const isBoolean = isTypeFactory(isBooleanCall);

/**
 * Checks if an object or objects are a ArrayBuffer.
 *
 * @function isBuffer
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isBuffer(new ArrayBuffer());
 * // => true
*/
const isBufferCall = isConstructorNameFactory('ArrayBuffer');
const isBuffer = isTypeFactory(isBufferCall);

/**
 * Checks if an object is the child of another. Typically used for classes.
 *
 * @function isChild
 * @category type
 * @param {*} sourceChild - Object to be checked as the child.
 * @param {*} targetParent - Object to be checked as the parent.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isChild, construct, assert } from 'Acid';
 * class Grandparent{}
 * class Parent extends Grandparent{}
 * class Child extends Parent{}
 * const child = construct(Child);
 * assert(isChild(Child, Grandparent), true);
 * assert(isChild(Child, Parent), false);
 * assert(isChild(Parent, Grandparent), false);
 * assert(isChild(child1, child3), false);
 */
function isChild(sourceChild, targetParent) {
	if (!sourceChild || !targetParent) {
		return false;
	}
	return sourceChild instanceof targetParent;
}

/**
 * Checks if an object(s) is a Set.
 *
 * @function isSet
 * @category type
 * @param {...*} sources - Objects to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isSet, assert } from 'Acid';
 * assert(isSet(new Set()), true);
 */
const isSetCall = isConstructorNameFactory('Set');
const isSet = isTypeFactory(isSetCall);

/**
 * Checks if the value is a Date.
 *
 * @function isDate
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isDate, assert } from 'Acid';
 * assert(isDate(new Date()), true);
 */
const isDateCall = isConstructorNameFactory('Date');
const isDate = isTypeFactory(isDateCall);

/**
 * Checks if the value is a string.
 *
 * @function isString
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isString } from 'Acid';
 * isString('Lucy');
 * // => true
 */
const isString = isConstructorFactory(String);

/**
 * Checks if the value has length greater than 0.
 *
 * @function hasLength
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * hasLength([1]);
 * // => true
*/
function hasLength(value) {
	return Boolean(value.length);
}

/**
 * Checks if the value is empty.
 *
 * @function isEmpty
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isEmpty } from 'Acid';
 * isEmpty([]);
 * // => true
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
 * Checks if an object or objects are a Float32Array.
 *
 * @function isF32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isF32, assert } from 'Acid';
 * assert(isF32(new Float32Array()), true);
 */
const isF32Call = isConstructorNameFactory('Float32Array');
const isF32 = isTypeFactory(isF32Call);

/**
 * Checks if an object or objects are a Float64Array.
 *
 * @function isF64
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isF64 } from 'Acid';
 * isF64(new Float64Array());
 * // => true
 */
const isF64Call = isConstructorNameFactory('Float64Array');
const isF64 = isTypeFactory(isF64Call);

const { isInteger } = Number;
/**
 * Checks if the value (typically a number) as a string has a decimal point. Alias of Number.isInteger.
 *
 * @function isFloat
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isFloat } from 'Acid';
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
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isI16 } from 'Acid';
 * isI16(new Int16Array());
 * // => true
 */
const isI16Call = isConstructorNameFactory('Int16Array');
const isI16 = isTypeFactory(isI16Call);

/**
 * Checks if an object or objects are a Int32Array.
 *
 * @function isI32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isI32 } from 'Acid';
 * isI32(new Int32Array());
 * // => true
 */
const isI32Call = isConstructorNameFactory('Int32Array');
const isI32 = isTypeFactory(isI32Call);

/**
 * Checks if an object or objects are a Int8Array.
 *
 * @function isI8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isInt8 } from 'Acid';
 * isInt8(new Int8Array());
 * // => true
 */
const isI8Call = isConstructorNameFactory('Int8Array');
const isI8 = isTypeFactory(isI8Call);

/**
 * Checks if an object or objects are a Map.
 *
 * @function isMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isMap } from 'Acid';
 * isMap(new Map());
 * // => true
 */
const isMapCall = isConstructorNameFactory('Map');
const isMap = isTypeFactory(isMapCall);

/**
 * Checks if an object is the child of another. Typically used for classes.
 *
 * @function isParent
 * @category type
 * @param {*} sourceParent - Object to be checked as the child.
 * @param {*} targetChild - Object to be checked as the parent.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isParent, construct, assert } from 'Acid';
 * class parentClass{}
 * class otherClass{}
 * const child1 = construct(parentClass);
 * const child2 = construct(otherClass);
 * assert(isParent(child1, parentClass), true);
 * assert(isParent(child3, parentClass), false);
 * assert(isParent(parentClass, child1), false);
 * assert(isParent(child1, child3), false);
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
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * import { isPrimitive } from 'Acid';
 * isPrimitive(1);
 * // => true
 * isPrimitive(() => {});
 * // => false
 */
function isPrimitive(value) {
	const type = typeof value;
	return value === null || value === undefined || (type !== 'object' && type !== 'function');
}

/**
 * Checks if the value is a RegExp.
 *
 * @function isRegExp
 * @category type
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isRegExp, assert } from 'Acid';
 * assert(isRegExp(/test/), true);
 */
const isRegExpCall = isConstructorNameFactory('RegExp');
const isRegExp = isTypeFactory(isRegExpCall);

/**
 * Checks if objects are related to each other using instanceof. There is no required order for arguments given it will check all available ways.
 *
 * @function isRelated
 * @category type
 * @param {*} targetOne - Object to be checked.
 * @param {*} targetTwo - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isRelated, construct, assert } from 'Acid';
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
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isSafeInt } from 'Acid';
 * isSafeInt(1.01);
 * // => true
 */
const isSafeInt = isSafeInteger;

/**
 * Checks if an object or objects are a Uint16Array.
 *
 * @function isU16
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isU16 } from 'Acid';
 * isU16(new Uint16Array());
 * // => true
 */
const isU16Call = isConstructorNameFactory('Uint16Array');
const isU16 = isTypeFactory(isU16Call);

/**
 * Checks if an object or objects are a Uint32Array.
 *
 * @function isU32
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isU32 } from 'Acid';
 * isU32(new Uint32Array());
 * // => true
 */
const isU32Call = isConstructorNameFactory('Uint32Array');
const isU32 = isTypeFactory(isU32Call);

/**
 * Checks if an object or objects are a Uint8Array.
 *
 * @function isU8
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isU8 } from 'Acid';
 * isU8(new Uint8Array());
 * // => true
 */
const isU8Call = isConstructorNameFactory('Uint8Array');
const isU8 = isTypeFactory(isU8Call);

/**
 * Checks if an object or objects are a Uint8ClampedArray.
 *
 * @function isU8C
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isU8C } from 'Acid';
 * isU8C(new Uint8ClampedArray());
 * // => true
 */
const isU8CCall = isConstructorNameFactory('Uint8ClampedArray');
const isU8C = isTypeFactory(isU8CCall);

/**
 * Checks if an object or objects are a WeakMap.
 *
 * @function isWeakMap
 * @category type
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { isWeakMap } from 'Acid';
 * assert(isWeakMap(new WeakMap()), true);
 */
const isWeakMapCall = isConstructorNameFactory('WeakMap');
const isWeakMap = isTypeFactory(isWeakMapCall);

/**
 * Performs a deep comparison between two objects & determines if they're different using strict comparison.
 *
 * @function notEqual
 * @type {Function}
 * @category utility
 * @param {*} source - Source object.
 * @param {*} target - Object to be compared.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * import { notEqual, assert } from 'Acid';
 * assert(notEqual({a: [1,2,3]}, {a: [1,3,3]}), true);
 */
function notEqual(source, target) {
	return isEqual(source, target) === false;
}

const jsonNative = JSON;
/**
 * Parses JSON string with safety check for undefined.
 *
 * @function jsonParse
 * @category utility
 * @type {Function}
 * @param {string} source - String to be parsed.
 * @param {function} reviver - A function that prescribes how each value originally produced by parsing is transformed before being returned.
 * @returns {Object} - Returns the parsed object.
 *
 * @example
 * import { jsonParse, assert } from 'Acid';
 * assert(jsonParse('{a:1}'), {a:1});
 */
function jsonParse(source, reviver) {
	if (source) {
		return jsonNative.parse(source, reviver);
	}
}
/**
 * Stringify an object into a JSON string.
 *
 * @function stringify
 * @category utility
 * @type {Function}
 * @param {Object} object - Object to Stringify.
 * @returns {string} - Returns the object as a valid JSON string.
 *
 * @example
 * import { stringify, assert } from 'Acid';
 * assert(stringify({a:1}), '{a:1}');
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
	return new Error(`Test Failed: ${errorTitle}
		Result: ${stringify(source)}
		Expected: ${stringify(expected)}`, options);
}
/**
 * Check if source value matches the expected value.
 *
 * @function assert
 * @category utility
 * @type {Function}
 * @param {*} source - The source object to compare to.
 * @param {*} expected - The expected result that's compared to the source.
 * @param {*} options - Additional options for the Error instance & unit test information.
 * @returns {Object} - Returns a deep clone of an object.
 *
 * @example
 * import { assert } from 'Acid';
 * if (!assert(1,1)) {
 * 	new Error('Assert Method Failed');
 * }
 */
function assert(source, expected, options) {
	const expectedFunction = isFunction(expected) && expected(source, options) === false;
	if (expectedFunction || notEqual(source, expected)) {
		return createAssertError(source, expected, options);
	}
	return true;
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
 * import { clone, assert } from 'Acid';
 * assert(clone({a:{b:[2]}}), {a:{b:[2]}});
 */
const structuredCloneSafe = globalThis.structuredClone;
function clone(source) {
	return structuredCloneSafe(source);
}

/**
 * Check if a value is truey which is anything but false, null, 0, "", undefined, and NaN.
 *
 * @function truey
 * @category Utility
 * @type {Function}
 * @param {*} source - Item to be truey checked.
 * @param {*} [returnIfTrue = true] - Item to be returned if item is truey.
 * @returns {boolean|*} - Returns true if the item is truey or returnIfTrue if provided otherwise returns false.
 *
 * @example
 * import { truey, assert } from 'Acid';
 * assert(truey(1), true);
 * assert(truey(0), false);
 */
function truey(source, returnIfTrue = true) {
	return Boolean(source) && returnIfTrue;
}

/**
 * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @function compact
 * @category Utility
 * @type {Function}
 * @param {Array|Object} source - Array or Object to be compacted.
 * @returns {Array|Object} - A new object or array containing the filtered values.
 *
 * @example
 * import { compact, assert } from 'Acid';
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
			const isTruey = truey(item);
			if (isTruey) {
				targetObject[keyName] = item;
			}
		}
		return targetObject;
	}
	return source.filter((item) => {
		return truey(item);
	});
}

/**
 * Iterates through the calling object and creates a new object based on the calling object's type with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function compactMap
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 *
 * @example
 * import { compactMap, assert } from 'Acid';
 * assert(compactMap({a: null, b: 2, c: 3}, (item) => {
 *   return item;
 * }), {b: 2, c: 3});
 */
const compactMap = generateLoop(compactMapArray, compactMapAsyncArray, compactMapObject, compactMapAsyncObject);

function everyArg(method, primarySource, ...otherSources) {
	if (otherSources) {
		return method(primarySource) && everyArray(otherSources, method);
	}
	return method(primarySource);
}

/**
 * Check if a value is falsey which are false, null, 0, "", undefined, and NaN.
 *
 * @function falsey
 * @category Utility
 * @type {Function}
 * @param {*} source - Item to be falsey checked.
 * @param {*} [returnIfTrue = true] - Item to be returned if item is falsey.
 * @returns {boolean|*} - Returns true if the item is falsey or returnIfTrue if provided otherwise returns false.
 *
 * @example
 * import { falsey, assert } from 'Acid';
 * assert(falsey(0), true);
 * assert(falsey(1), false);
 */
function falsey(source, returnIfTrue = true) {
	return Boolean(source) === false && returnIfTrue;
}

/**
 * Iterates through the calling object and creates a new object of the same calling object's type with all elements that pass the test implemented by the iteratee.
 *
 * @function filter
 * @category utility
 * @type {Function}
 * @param {Array | object | Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created map object and arguments unique to mapArray or mapObject depending on the object type.
 * @param {object | Function} [results = {}] - Object that will be used to assign results.
 * @returns {Array | object | Function} - A new object of the same calling object's type.
 *
 * @example
 * import { filter, assert } from 'Acid';
 * assert(filter({a: false, b: true, c: true}, (item) => {
 *   return item;
 * }), {b: true, c: true});
 */
const filter = generateLoop(filterArray, filterObject);

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
 * flow(increment, increment, deduct)(0);
 * // => 1
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
 * flowRight(increment, increment, deduct)(0);
 * // => 1
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
 * flowAsync(async (item) => {return increment(item);}, async (item) => {return increment(item);})(0);
 * // => 2
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
 * flowAsyncRight(async (item) => {return increment(item);}, async (item) => {return increment(item);})(0);
 * // => 2
 */
const flowAsyncRight = returnFlow(eachRightAsync);

/**
 * Asynchronously iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfCompactMap
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * forOfCompactMap({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
 */
function forOfCompactMap(source, iteratee = returnValue, results = {}) {
	for (const [key, value] of source) {
		const result = iteratee(value, key, results, source);
		if (hasValue(result)) {
			results[key] = result;
		}
	}
	return source;
}

/**
 * Asynchronously iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfCompactMapAsync
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * forOfCompactMapAsync({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
 */
async function forOfCompactMapAsync(source, iteratee = returnValue, results = {}) {
	for await (const [key, value] of source) {
		const result = await iteratee(value, key, results, source);
		if (hasValue(result)) {
			results[key] = result;
		}
	}
	return source;
}

/**
 * Iterates through (using for of) the calling object and creates an object with the results of the iteratee on every element in the calling object.
 *
 * @function forOfCompactMap
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * forOfCompactMap({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
 */
function forOfMap(source, iteratee = returnValue, results = {}) {
	for (const [key, value] of source) {
		results[key] = iteratee(value, key, results, source);
	}
	return source;
}

/**
 * Asynchronously iterates (for of) through the calling object and creates an object with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling object.
 *
 * @function forOfCompactMapAsync
 * @category object
 * @type {Function}
 * @param {Object|Function} source - Object that will be looped through.
 * @param {Function} iteratee - Transformation function which is passed item, key, the newly created object, calling object, key count, and array of keys.
 * @param {Object|Function} [results = {}] - Object that will be used to assign results.
 * @returns {Object|Function} - An object with mapped properties that are not null or undefined.
 *
 * @example
 * forOfCompactMapAsync({a: undefined, b: 2, c: 3}, (item) => {
 *   return item;
 * });
 * // => {b: 2, c: 3}
 */
async function forOfMapAsync(source, iteratee = returnValue, results = {}) {
	for await (const [key, value] of source) {
		results[key] = await iteratee(value, key, results, source);
	}
	return source;
}

/**
 * Checks if the value includes something.
 *
 * @function has
 * @category utility
 * @param {Array|String} value - Object to be checked.
 * @param {*} search - Object that is being searched for.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * has('My name is Acidjs', 'Acidjs');
 * // => true
*/
function has(value, ...search) {
	return value && value.includes && value.includes(...search);
}

/**
 * Checks if the string has a '.'.
 *
 * @function hasDot
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * hasDot('test.js');
 * // => true
*/
const hasDot = regexTestFactory(/\./);

/**
   * Checks if a property on an object has a value. If not, it will assign a value.
   *
   * @function ifNotEqual
   * @category utility
   * @type {Function}
   * @param {Object} rootObject - The object to check.
   * @param {string} property - The property name which is to be checked.
   * @param {*} equalThis - The reassignment value for the property being checked.
   * @returns {Object} - Returns the provided rootObject.
   *
   * @example
   * ifNotEqual({}, 'a', 1);
   * // => {a:1}
 */
const ifNotEqual = (rootObject, property, equalThis) => {
	if (property && !hasValue(rootObject[property])) {
		rootObject[property] = equalThis;
	}
	return rootObject;
};

/**
 * @function ifValue
 * @category function
 * @param {*} source - The source object to be hasValue checked.
 * @returns {source} The source object if it passes the hasValue check.
 */
function ifValue(source) {
	if (hasValue(source)) {
		return source;
	}
}

class Intervals {
	list = construct(Map);
	construct() {
	}
	/**
    * Remove a setInterval that was created using the intervals function.
    *
    * @param {number} id - The id of the setInterval to remove.
    * @returns {undefined} - Returns nothing.
    *
    * @example
    * timer(() => {}, 100);
    * // => 0
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
    * @param {number} time - The time in milliseconds.
    * @returns {Object} - Returns setTimeoutId ID.
    *
    * @example
    * timers.set(() => {}, 100);
    * // => 0
  */
	set(callable, time) {
		const id = setInterval(() => {
			callable();
		}, time);
		this.list.set(id, truth);
		return id;
	}
	/**
    * Clear all active setIntervals.
    *
    * @returns {undefined} - Returns undefined.
    *
    * @example
    * intervals.clear();
    * // => undefined
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
  * @param {number} time - The time in milliseconds.
  * @returns {Object} - Returns setInterval ID.
  *
  * @example
  * interval(() => {}, 100);
  * // => 0
*/
function interval(callable, time) {
	return intervals.set(callable, time);
}
/**
  * Clear all active interval timers.
  *
  * @function clearIntervals
  * @category function
  * @returns {undefined} - Returns undefined.
  *
  * @example
  * clearIntervals();
  * // => undefined
*/
function clearIntervals() {
	const id = setTimeout(noop, 0);
	times(id, (index) => {
		intervals.remove(index);
	});
}

function merge(target, ...sources) {
	each(sources, (currentSource) => {
		each(currentSource, (sourceItem, sourceKey) => {
			if (target[sourceKey]) {
				if (isPlainObject(sourceItem) || isArray(sourceItem) || sourceItem.forEach) {
					return merge(target[sourceKey], sourceItem);
				}
			}
			target[sourceKey] = sourceItem;
		});
	});
	return target;
}

/**
 * Set & Get a model.
 *
 * @function model
 * @type {Function}
 * @category utility
 * @param {string} modelName - Name of the model.
 * @param {object} modelValue - The model object.
 * @returns {*} - Returns the associated model.
 * @example
 * model('test', {a: 1}) && model('test');
 * // => {a: 1}
 */
class Model {
	static models = {};
	constructor(modelName, modelValue) {
		if (hasValue(modelValue)) {
			assign(this, modelValue);
			this.modelName = modelName;
			Model.models.set(modelName, modelValue);
		} else {
			assign(this, modelName);
		}
	}
}
/**
 * Returns the model with the given name.
 *
 * @param {string} modelName - The name of the model to return.
 * @param {any} [modelValue] - The value of the model to return.
 * @returns {Model} - The model with the given name.
 */
function model(modelName, modelValue) {
	if (hasValue(modelValue)) {
		return construct(Model, [modelName, modelValue]);
	}
	return get(modelName, Model.models);
}

/**
 * Takes the first two arguments given and returns them inside a new array.
 *
 * @function pair
 * @category utility
 * @param {*} source - The source object.
 * @param {*} source - The source object.
 * @returns {Array} The array which holds the pair.
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
 * @returns {Promise} - A constructor with a callback function.
 * @test
 * (async () => {
 *   const result = await promise((accept) => {
 *     accept(true);
 *   });
 *   return assert(result, true);
 * });
 * @example
 * promise((a) => {});
 * // => Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
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
 * import { propertyMatch, assert } from 'Acid';
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
 * @example
 * import { stubArray } from 'Acid';
 * stubArray();
 * // => []
 */
const stubArray = () => {
	return [];
};

/**
 * This method returns a new empty object.
 *
 * @function stubObject
 * @category utility
 * @type {Function}
 * @returns {Object} - Returns the new empty object.
 *
 * @example
 * import { stubArray } from 'Acid';
 * stubObject();
 * // => {}
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
 * @returns {string} - Returns the new empty string.
 *
 * @example
 * import { stubArray } from 'Acid';
 * stubString();
 * // => ''
 */
const stubString = () => {
	return '';
};

/**
  * Asynchronously iterates based on the amount given awaiting on the iteratee with the current index as an argument.
  *
  * @async
  * @function timesAsync
  * @category utility
  * @type {Function}
  * @param {number} amount - The amount of times to loop invoking the iteratee.
  * @param {Function} iteratee - Transformation function which is passed index and amount.
  * @returns {undefined} - Nothing.
  *
  * @example
  * import { timesAsync } from 'Acid';
  * await timesAsync(3, async (item) => {
  *   console.log(item);
  * });
  * // 0
  * // 1
  * // 2
  * // => undefined
*/
async function timesAsync(amount, iteratee) {
	for (let index = 0; index < amount; index++) {
		await iteratee(amount);
	}
}
/**
  * Asynchronously iterates based on the amount given and maps the results awaited on by the iteratee each time to an array.
  *
  * @async
  * @function timesMapAsync
  * @category array
  * @type {Function}
  * @param {number} amount - The amount of times to loop invoking the iteratee.
  * @param {Function} iteratee - Transformation function which is passed index and amount.
  * @param {Array} [results = []] - Array that will have iteratee return pushed to.
  * @returns {Array} - An array with iteratee's returned values.
  *
  * @example
  * import { timesMapAsync } from 'Acid';
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
 * import { stubArray } from 'Acid';
 * let toggleMe = true;
 * toggleMe = toggle(toggleMe, true, false);
 * // => false
 */
function toggle(value, on = true, off = false) {
	return (isEqual(on, value)) ? off : on;
}

/**
 * Unique ID Generator Module.
 *
 * @module utility/uid
 */
/**
 * Creates a unique numerical recyclable ID generator. The IDs are numerically ascending however freed ids are recycled when available.
 *
 * @class UniqID
 * @type {class}
 * @category utility
 * @returns {UniqID} - Returns a new instance of UniqID.
 *
 * @example
 * import { UniqID, construct, assert } from 'Acid';
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
	 * @returns {number} - Returns a unique id.
	 *
	 * @example
	 * import { UniqID, construct, assert } from 'Acid';
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
	 * @param {number} id - Number to be freed.
	 * @returns {undefined} - Nothing is returned.
	 *
	 * @example
	 * import { UniqID, construct, assert } from 'Acid';
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
 * import { uniqID, assert } from 'Acid';
 * assert(uniqID.get(), 0);
 * assert(uniqID.get(), 1);
 * uniqID.free(0);
 * assert(uniqID.get(), 0);
 */
const uniqID = construct(UniqID);

/**
 * Class representing a virtual storage. A drop in replacement for localStorage.
 * The virtualStorage function is a factory which wraps the VirtualStorage constructor & returns it.
 * Direct class/constructor access is named VirtualStorage.
 *
 * @category utility
 * @returns {*} - Returns a new VirtualStorage Object.
 *
 * @example
 * import { stubArray } from 'Acid';
 * const myVirtualStorage = virtualStorage();
 * // => New Crate Object
 */
class VirtualStorage {
	constructor(initialObject = {}) {
		this.items = initialObject;
	}
	/**
	 * Get an item from a virtual storage object.
	 *
	 * @param {string} key - The key used to store the data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { VirtualStorage } from 'Acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.getItem('key');
	 * // => 'value'
	 */
	getItem(key) {
		return this.items[key];
	}
	/**
	 * Save an item to a virtual storage object.
	 *
	 * @param {string} key - The key used to store the data.
	 * @param {*} value - If saving to localStorage, & the object isn't a string it will be converted to a string using JSON.stringify.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { VirtualStorage, assert } from 'Acid';
	 * const vStorage = new VirtualStorage();
	 * vStorage.setItem('title', 'value');
	 * assert(vStorage.getItem('title'), 'value');
	 */
	setItem(key, value) {
		this.items[key] = value;
	}
	/**
	 * Clears all data from the virtual storage object by replacing with a new object.
	 *
	 * @param {string} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { stubArray } from 'Acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.clear();
	 * myVirtualStorage.getItem('key');
	 * // => undefined
	 */
	clear() {
		this.items = {};
	}
	/**
	 * Remove an item from a virtual storage object.
	 *
	 * @param {string} key - The key used to remove data.
	 * @returns {undefined} - Returns undefined.
	 *
	 * @example
	 * import { stubArray } from 'Acid';
	 * const myVirtualStorage = virtualStorage();
	 * myVirtualStorage.setItem('key', 'value');
	 * myVirtualStorage.removeItem('key');
	 * myVirtualStorage.getItem('key');
	 * // => undefined
	 */
	removeItem(key) {
		this.items[key] = null;
	}
}
/**
 *  The virtualStorage function is a factory which wraps the VirtualStorage class constructor.
 *
 * @function virtualStorage
 * @category browser
 * @type {Function}
 * @returns {*} - Returns a new VirtualStorage Object.
 *
 * @example
 * import { virtualStorage, assert } from 'Acid';
 * const vStorage = virtualStorage();
 * vStorage.setItem('title', 'value');
 * assert(vStorage.getItem('title'), 'value');
 */
function virtualStorage(initialObject) {
	return new VirtualStorage(initialObject);
}

export { Intervals, Model, Store, Timers, UniqID, VirtualStorage, add, after, apply, arrayToObject, ary, assert, assign, before, bindAll, cacheNativeMethod, camelCase, chain, chunk, chunkString, clear, clearIntervals, clearTimers, clone, cloneArray, compact, compactKeys, compactMap, compactMapArray, compactMapAsyncArray, compactMapAsyncObject, compactMapObject, compactMapObjectAsync, construct, constructorName, countBy, countKey, countWithoutKey, curry, curryRight, debounce, deduct, defProp, difference, divide, drop, dropRight, each, eachArray, eachAsyncArray, eachAsyncObject, eachObject, eachRight, eachRightAsync, ensureArray, every, everyArg, everyArray, everyObject, falsey, falsy, filter, filterArray, filterObject, findIndex, findIndexCache, findItem, first, flatten, flattenDeep, flow, flowAsync, flowAsyncRight, flowRight, forEach, forEachAsync, forOf, forOfAsync, forOfCompactMap, forOfCompactMapAsync, forOfMap, forOfMapAsync, generateLoop, get, getExtensionRegex, getFileExtension, getNewest, getOldest, getPropDesc, getPropNames, groupBy, has, hasAnyKeys, hasDot, hasKeys, hasLength, hasProp, hasValue, htmlEntities, ifInvoke, ifNotEqual, ifValue, inAsync, inSync, increment, indexBy, initial, initialString, insertInRange, intersection, interval, intervals, invert, invoke, invokeAsync, isArguments, isArray, isArrayLike, isAsync, isAsyncCall, isBigInt, isBigIntCall, isBoolean, isBooleanCall, isBuffer, isBufferCall, isChild, isConstructor, isConstructorFactory, isConstructorNameFactory, isDate, isDateCall, isEmpty, isEqual, isF32, isF32Call, isF64, isF64Call, isFileCSS, isFileHTML, isFileJS, isFileJSON, isFloat, isFunction, isI16, isI16Call, isI32, isI32Call, isI8, isI8Call, isKindAsync, isMap, isMapCall, isMatchArray, isMatchObject, isNull, isNumber, isNumberCall, isNumberEqual, isNumberInRange, isNumberNotInRange, isParent, isPlainObject, isPrimitive, isPromise, isRegExp, isRegExpCall, isRelated, isSafeInt, isSame, isSet, isSetCall, isString, isTypeFactory, isU16, isU16Call, isU32, isU32Call, isU8, isU8C, isU8CCall, isU8Call, isUndefined, isWeakMap, isWeakMapCall, isZero, jsonParse, kebabCase, keys, largest, last, map, mapArray, mapAsyncArray, mapObject, mapObjectAsync, mapRightArray, mapWhile, merge, minus, model, multiply, negate, noValue, noop, notEqual, nthArg, numSort, numericalCompare, numericalCompareReverse, objectSize, omit, once, onlyUnique, over, overEvery, pair, partition, pick, pluck, pluckObject, pluckValues, promise, propertyMatch, rNumSort, randomFloat, randomInt, range, rangeDown, rangeUp, rawURLDecode, reArg, regexTestFactory, remainder, remove, removeBy, replaceList, rest, restString, returnValue, right, rightString, sample, sanitize, shuffle, smallest, snakeCase, sortAlphabetical, sortNewest, sortOldest, sortOldestFilter, sortUnique, sortedIndex, stringify, stubArray, stubFalse, stubObject, stubString, stubTrue, sub, sum, take, takeRight, throttle, timer, timers, times, timesAsync, timesMap, timesMapAsync, toArray, toPath, toggle, tokenize, truey, truncate, truncateRight, truth, unZip, unZipObject, union, uniqID, unique, untilFalseArray, untilTrueArray, upperCase, upperFirst, upperFirstAll, upperFirstLetter, upperFirstOnly, upperFirstOnlyAll, virtualStorage, whileCompactMap, whileEachArray, whileMapArray, without, words, wrap, xor, zip, zipObject };
//# sourceMappingURL=bundle.js.map
