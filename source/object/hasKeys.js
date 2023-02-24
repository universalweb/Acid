import { everyArray } from '../array/every.js';
import { keys } from '../object/keys.js';
/**
 * Checks to see if an object has all of the given property names.
 *
 * @function hasKeys
 * @category object
 * @type {Function}
 * @param {Object} object - Object from which keys are extracted.
 * @param {Array} properties - Array of object keys.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Thor']);
 * // => true
 *
 * @example
 * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Tom']);
 * // => false
 */
export function hasKeys(object, properties) {
	const objectKeys = keys(object);
	return everyArray(properties, (item) => {
		return objectKeys.includes(item);
	});
}
/**
 * Checks to see if an object has any of the given property names.
 *
 * @function hasAnyKeys
 * @category object
 * @type {Function}
 * @param {Object} object - Object from which keys are extracted.
 * @param {Array} properties - Array of object keys.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy', 'Tom']);
 * // => true
 * @example
 * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Other', 'Tom']);
 * // => false
 */
export function hasAnyKeys(object, properties) {
	const objectKeys = keys(object);
	return Boolean(properties.find((item) => {
		return objectKeys.includes(item);
	}));
}

