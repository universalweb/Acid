import { getType } from './getType';
export function getTypeName(source) {
	return getType(source)?.name;
}
