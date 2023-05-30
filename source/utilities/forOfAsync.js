import { isGenerator } from '../types/isGenerator.js';
import { isSet } from '../types/isSet.js';
export async function forOfAsync(source, iteratee, generatorArgs) {
	if (isSet(source)) {
		for (const value of source) {
			await iteratee(value, source);
		}
		return source;
	}
	if (isGenerator(source)) {
		for await (const item of source(...generatorArgs)) {
			await iteratee(item, source);
		}
	}
	for (const [key, value] of source) {
		await iteratee(value, key, source);
	}
	return source;
}
