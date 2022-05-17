import { get } from './get';
import { hasValue } from '../internal/is';
import { assign } from '../internal/object';
import { construct } from '../class/construct';
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
export class Model {
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
export function model(modelName, modelValue) {
	if (hasValue(modelValue)) {
		return construct(Model, [modelName, modelValue]);
	}
	return get(modelName, Model.models);
}

