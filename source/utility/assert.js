import { isFunction } from '../type/isFunction.js';
import { isEqual } from '../utility/isEqual.js';
import { isKindAsync } from '../type/isAsync.js';
import { stringify } from './json.js';
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
 * import { assert } from './Acid.js';
 * if (assert(1,1) !==  true) {
 * 	new Error('Assert Test Failed');
 * }
 */
export function assert(source, expected, options) {
	if (!isEqual(source, expected)) {
		return createAssertError(source, expected, options);
	}
	return true;
}
