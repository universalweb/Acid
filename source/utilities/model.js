import { assign } from '../objects/assign.js';
import { construct } from '../classes/construct.js';
import { get } from './get.js';
import { hasValue } from '../types/hasValue.js';
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
export class Model {
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
export function model(modelName, modelSource) {
	if (hasValue(modelSource)) {
		return construct(Model, [modelName, modelSource]);
	}
	return get(modelName, Model.models);
}

