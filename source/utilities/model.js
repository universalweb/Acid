import { assign } from '../objects/assign.js';
import { hasValue } from '../types/hasValue.js';
/**
 * Named model registry. `Model.create(name, source)` registers and returns a model; `model(name)` looks one up.
 *
 * @class Model
 * @category utility
 * @param {String} modelName - The name of the model to return.
 * @param {*} modelSource - The value of the model to return.
 * @returns {Model} - The model with the given name.
 *
 * @example
 * import { Model, model, assert } from '@universalweb/acid';
 * Model.create('test', {a: 1});
 * assert(model('test'), {a: 1});
 */
export class Model {
	static models = new Map();
	static create(modelName, modelSource) {
		return new Model(modelName, modelSource);
	}
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
 * Set & Get a model. With both args registers a new model; with only `modelName` returns the registered source.
 *
 * @function model
 * @type {Function}
 * @category utility
 * @param {String} modelName - Name of the model.
 * @param {Object} modelSource - The model object.
 * @returns {*} - The model source or the existing registration.
 *
 * @example
 * import { model, assert } from '@universalweb/acid';
 * model('test', {a: 1});
 * assert(model('test'), {a: 1});
 */
export function model(modelName, modelSource) {
	if (hasValue(modelSource)) {
		Model.create(modelName, modelSource);
		return modelSource;
	}
	return Model.models.get(modelName);
}
