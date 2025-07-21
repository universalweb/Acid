import { fileURLToPath } from 'node:url';
import path from 'path';
export function currentFile(importMeta) {
	if (globalThis.__filename) {
		return __filename;
	}
	return fileURLToPath(importMeta.url);
}
export function currentPath(importMeta, ...joinPaths) {
	if (globalThis.__dirname) {
		return __dirname;
	}
	const currentPathString = path.dirname(fileURLToPath(importMeta.url));
	return joinPaths.length > 0 ? path.join(currentPathString, ...joinPaths) : currentPathString;
}
