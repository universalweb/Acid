import { hasValue } from '../types/hasValue.js';
export function regexTestFactory(regexType) {
	return (item) => {
		return (hasValue(item)) ? regexType.test(item) : false;
	};
}
