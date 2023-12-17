import { fileURLToPath } from 'node:url';
import path from 'path';
export function currentFile(importMeta) {
	if (globalThis.__filename) {
		return __filename;
	}
	return fileURLToPath(importMeta.url);
}
export function currentPath(importMeta) {
	if (globalThis.__dirname) {
		return __dirname;
	}
	return path.dirname(fileURLToPath(importMeta.url));
}
