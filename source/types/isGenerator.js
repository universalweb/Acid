import { isTypeFactory } from './isTypeFactory.js';
import { isTypeNameFactory } from './isType.js';
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
export const isGeneratorCall = isTypeNameFactory('GeneratorFunction');
export const isGenerator = isTypeFactory(isGeneratorCall);
