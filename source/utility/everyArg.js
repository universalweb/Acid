import { every } from './every.js';
import { isAsync } from '../type/isAsync.js';
export function everyArg(...methods) {
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
