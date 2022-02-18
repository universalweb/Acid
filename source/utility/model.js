import namespace from '../namespace/index';
import { assign } from '../internal/object';
import { get } from './get';
import { hasValue } from '../internal/is';
/**
  * Set & Get a model.
  *
  * @function model
  * @type {Function}
  * @category utility
  * @param {string} modelName - Name of the model.
  * @param {Object} modelObject - The model object.
  * @returns {*} - Returns the associated model.
  *
  * @example
  * model('test', {a: 1}) && model('test');
  * // => {a: 1}
*/
export const model = (modelName, modelObject) => {
	if (hasValue(modelObject)) {
		model[modelName] = modelObject;
	}
	return get(modelName, model);
};
namespace.superMethod(model);
assign(namespace, {
	model
});
