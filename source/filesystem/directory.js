import { fileURLToPath } from 'node:url';
import path from 'node:path';
/**
 * Resolves the absolute file path of the calling ESM module. Pass `import.meta` from the caller.
 *
 * @function currentFile
 * @category filesystem
 * @ignoreTest
 * @param {Object} importMeta - The caller's `import.meta`.
 * @returns {String} - Absolute file path.
 *
 * @example
 * import { currentFile } from '@universalweb/acid';
 * const filePath = currentFile(import.meta);
 */
export function currentFile(importMeta) {
	if (globalThis.__filename) {
		return __filename;
	}
	return fileURLToPath(importMeta.url);
}
/**
 * Resolves the directory of the calling ESM module, optionally joined with additional segments.
 *
 * @function currentPath
 * @category filesystem
 * @ignoreTest
 * @param {Object} importMeta - The caller's `import.meta`.
 * @param {...String} joinPaths - Extra segments joined onto the directory.
 * @returns {String} - Absolute directory path.
 *
 * @example
 * import { currentPath } from '@universalweb/acid';
 * const dir = currentPath(import.meta);
 */
export function currentPath(importMeta, ...joinPaths) {
	if (globalThis.__dirname) {
		return __dirname;
	}
	const currentPathString = path.dirname(fileURLToPath(importMeta.url));
	return joinPaths.length > 0 ? path.join(currentPathString, ...joinPaths) : currentPathString;
}
