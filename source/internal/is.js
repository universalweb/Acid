import { objectSize } from './object';
/**
 * Checks if the value is undefined.
 *
 * @function isUndefined
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isUndefined(undefined);
 * // => true
*/
export function isUndefined(value) {
	return value === undefined;
}
/**
 * Checks if the value is null.
 *
 * @function isNull
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isNull(null);
 * // => true
*/
export function isNull(value) {
	return value === null;
}
/**
 * Checks if the value is not null or undefined.
 *
 * @function hasValue
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * hasValue(1);
 * // => true
*/
export function hasValue(value) {
	return !isUndefined(value) && !isNull(value);
}
export function isConstructor(nativeObject) {
	return (obj) => {
		return (hasValue(obj)) ? obj.constructor === nativeObject : false;
	};
}
export const decimalCheck = /\.|\+/;
/**
 * Checks if the value is a decimal.
 *
 * @function isDecimal
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isDecimal(1.01);
 * // => true
*/
export const isDecimal = (value) => {
	return decimalCheck.test(value.toString());
};
/**
 * Checks if the value is an array.
 *
 * @function isArray
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isArray([]);
 * // => true
*/
export const isArray = Array.isArray;
/**
 * Checks if the value is a string.
 *
 * @function isString
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isString('Lucy');
 * // => true
*/
export const isString = isConstructor(String);
/**
 * Checks if the value is a number.
 *
 * @function isNumber
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isNumber(1);
 * // => true
*/
export const isNumber = isConstructor(Number);
/**
 * Checks if the value is a plain object.
 *
 * @function isPlainObject
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isPlainObject({});
 * // => true
*/
export const isPlainObject = (value) => {
	if (hasValue(value)) {
		return value.constructor.toString().trim()
			.slice(9, 16) === 'Object(';
	}
	return false;
};
/**
 * Checks if the value is a plain object.
 *
 * @function isFunction
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFunction(() => {});
 * // => true
*/
export const isFunction = (value) => {
	return (hasValue(value)) ? value instanceof Function : false;
};
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
export const has = (value, ...search) => {
	return value.includes(...search);
};
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
export const hasLength = (value) => {
	return Boolean(value.length);
};
/**
 * Checks if the value is empty.
 *
 * @function isEmpty
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isEmpty([]);
 * // => true
*/
export const isEmpty = (obj) => {
	if (isString(obj) || isArray(obj)) {
		return !hasLength(obj);
	} else if (isPlainObject(obj)) {
		return !objectSize(obj);
	}
	return !hasValue(obj);
};
export const regexGenerator = (regexType) => {
	return (item) => {
		return (hasValue(item)) ? regexType.test(item) : false;
	};
};
/**
 * Checks if the string has a .css extension.
 *
 * @function isFileCSS
 * @category utility
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileCSS('test.css');
 * // => true
*/
export const isFileCSS = regexGenerator(/\.css$/);
/**
 * Checks if the string has a .json extension.
 *
 * @function isFileJSON
 * @category utility
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileJSON('test.json');
 * // => true
*/
export const isFileJSON = regexGenerator(/\.json$/);
/**
 * Checks if the string has a .js extension.
 *
 * @function isFileJS
 * @category utility
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileJS('test.js');
 * // => true
*/
export const isFileJS = regexGenerator(/\.js$/);
/**
 * Checks if the string has a .html extension.
 *
 * @function isFileHTML
 * @category utility
 * @param {string} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFileHTML('test.html');
 * // => true
*/
export const isFileHTML = regexGenerator(/\.html$/);
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
export const hasDot = regexGenerator(/\./);
export const getExtensionRegex = /\.([0-9a-z]+)/;
/**
 * Return the file extension.
 *
 * @function getFileExtension
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {string} - Returns the extension.
 *
 * @example
 * getFileExtension('test.js');
 * // => 'js'
*/
export const getFileExtension = (string) => {
	const match = string.match(getExtensionRegex);
	if (match) {
		return match[1];
	}
};
/**
 * Checks if the value is a RegExp.
 *
 * @function isRegExp
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isRegExp(/test/);
 * // => true
*/
export const isRegExp = (value) => {
	return value instanceof RegExp;
};
/**
 * Checks if the value is an Arguments object.
 *
 * @function isArguments
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isArguments([]);
 * // => false
*/
/**
 * Checks if the value is a Boolean.
 *
 * @function isBoolean
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isBoolean(true);
 * // => true
*/
export const isBoolean = (value) => {
	return value.constructor.name === 'Boolean';
};
/**
 * Checks if the value is a Date.
 *
 * @function isDate
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isDate(new Date());
 * // => true
*/
export const isDate = (value) => {
	return value instanceof Date;
};
/**
 * Checks if an object is a promise.
 *
 * @function isPromise
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * isPromise(new Promise(() => {}));
 * // => true
*/
export const isPromise = (value) => {
	if (value) {
		return value instanceof Promise;
	}
	return false;
};
/**
 * Checks if an object is an async function.
 *
 * @function isAsync
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * isAsync(async() => {});
 * // => true
*/
export const isAsync = (value) => {
	if (value) {
		return value.constructor?.name === 'AsyncFunction';
	}
	return false;
};
/**
 * Checks if an object is an async function or promise.
 *
 * @function isKindAsync
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * isKindAsync(async() => {});
 * // => true
 * isKindAsync(new Promise(() => {}));
 * // => true
*/
export const isKindAsync = (value) => {
	if (value) {
		return isPromise(value) || isAsync(value);
	}
	return false;
};
/**
 * Checks if an object is a primitive.
 *
 * @function isPrimitive
 * @category utility
 * @param {*} value - Object to be checked.
 * @returns {boolean} - True or false.
 *
 * @example
 * isPrimitive(1);
 * // => true
 * @example
 * isPrimitive(() => {});
 * // => false
*/
export const isPrimitive = (value) => {
	const type = typeof value;
	return value === null || value === undefined || (type !== 'object' && type !== 'function');
};
/**
 * Checks if the source is a Map.
 *
 * @function isMap
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isMap(new Map());
 * // => true
*/
/**
 * Checks if the source is a Set.
 *
 * @function isSet
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isSet(new Set());
 * // => true
*/
/**
 * Checks if the source is a WeakMap.
 *
 * @function isWeakMap
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isWeakMap(new WeakMap());
 * // => true
*/
/**
 * Checks if the source is a ArrayBuffer.
 *
 * @function isArrayBuffer
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isArrayBuffer(new ArrayBuffer());
 * // => true
*/
/**
 * Checks if the source is a Float32Array.
 *
 * @function isFloat32Array
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFloat32Array(new Float32Array());
 * // => true
*/
/**
 * Checks if the source is a Float64Array.
 *
 * @function isFloat64Array
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isFloat64Array(new Float64Array());
 * // => true
*/
/**
 * Checks if the source is a Int8Array.
 *
 * @function isInt8Array
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isInt8Array(new Int8Array());
 * // => true
*/
/**
 * Checks if the source is a Int16Array.
 *
 * @function isInt16Array
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isInt16Array(new Int16Array());
 * // => true
*/
/**
 * Checks if the source is a Int32Array.
 *
 * @function isInt32Array
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isInt32Array(new Int32Array());
 * // => true
*/
/**
 * Checks if the source is a Uint8Array.
 *
 * @function isUint8Array
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isUint8Array(new Uint8Array());
 * // => true
*/
/**
 * Checks if the source is a Uint8ClampedArray.
 *
 * @function isUint8ClampedArray
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isUint8ClampedArray(new Uint8ClampedArray());
 * // => true
*/
/**
 * Checks if the source is a Uint16Array.
 *
 * @function isUint16Array
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isUint16Array(new Uint16Array());
 * // => true
*/
/**
 * Checks if the source is a Uint32Array.
 *
 * @function isUint32Array
 * @category utility
 * @param {*} source - Object to be checked.
 * @returns {boolean} - Returns true or false.
 *
 * @example
 * isUint32Array(new Uint32Array());
 * // => true
*/
const objectArguments = '[object Arguments]';
export function isArguments(source) {
	return (hasValue(source)) ? source.toString() === objectArguments : false;
}
const objectMap = '[object Map]';
export function isMap(source) {
	return (hasValue(source)) ? source.toString() === objectMap : false;
}
const objectSet = '[object Set]';
export function isSet(source) {
	return (hasValue(source)) ? source.toString() === objectSet : false;
}
const objectWeakMap = '[object WeakMap]';
export function isWeakMap(source) {
	return (hasValue(source)) ? source.toString() === objectWeakMap : false;
}
export function isBuffer(source) {
	return (hasValue(source)) ? source.constructor?.name === 'ArrayBuffer' : false;
}
export function isFloat32(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Float32Array' : false;
}
export function isFloat64(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Float64Array' : false;
}
export function isInt8(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Int8Array' : false;
}
export function isInt16(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Int16Array' : false;
}
export function isInt32(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Int32Array' : false;
}
export function isUint8(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Uint8Array' : false;
}
export function isUint8Clamped(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Uint8ClampedArray' : false;
}
export function isUint16(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Uint16Array' : false;
}
export function isUint32(source) {
	return (hasValue(source)) ? source.constructor?.name === 'Uint32Array' : false;
}

