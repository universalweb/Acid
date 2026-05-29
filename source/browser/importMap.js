import { eachObject } from '../objects/each.js';
import { stringify } from '../utilities/json.js';
const namedModules = new Map();
const namedSources = new Map();
/**
 * Dynamically imports `url` and registers the resulting module namespace under `importName`. Acts like a single import map alias entry, but installed at runtime. Later calls to `getNamedImport(importName)` return the cached module, and `resolveNamedImport(importName)` returns the URL.
 *
 * @function importNamed
 * @category browser
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {String} importName - Alias to register the module under.
 * @param {String} url - URL of the module to import.
 * @returns {Promise<Object>} - The imported module namespace.
 *
 * @example
 * import { importNamed, getNamedImport, resolveNamedImport, assert } from '@universalweb/acid';
 * const dataUrl = `data:text/javascript;base64,${btoa('export const value = 42;')}`;
 * await importNamed('answer', dataUrl);
 * assert(getNamedImport('answer').value, 42);
 * assert(resolveNamedImport('answer'), dataUrl);
 */
export async function importNamed(importName, url) {
	const moduleNamespace = await import(url);
	namedSources.set(importName, url);
	namedModules.set(importName, moduleNamespace);
	return moduleNamespace;
}
/**
 * Returns a previously imported module by its registered alias.
 *
 * @function getNamedImport
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} importName - Alias the module was registered under.
 * @returns {Object|undefined} - The cached module namespace or undefined.
 *
 * @example
 * import { importNamed, getNamedImport, assert } from '@universalweb/acid';
 * const dataUrl = `data:text/javascript;base64,${btoa('export const value = 7;')}`;
 * await importNamed('seven', dataUrl);
 * assert(getNamedImport('seven').value, 7);
 */
export function getNamedImport(importName) {
	return namedModules.get(importName);
}
/**
 * Resolves a registered alias to its URL. Returns the input unchanged when no alias exists, mirroring how an import map falls through to the bare specifier.
 *
 * @function resolveNamedImport
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} importName - Alias to resolve.
 * @returns {String} - The aliased URL or the original input.
 *
 * @example
 * import { resolveNamedImport, assert } from '@universalweb/acid';
 * assert(resolveNamedImport('unregistered'), 'unregistered');
 */
export function resolveNamedImport(importName) {
	return namedSources.get(importName) || importName;
}
/**
 * Installs every entry in `mapSpec.imports` into the virtual alias registry so they can be resolved via `resolveNamedImport` and imported via `importNamed`. Browsers cannot consume a pure-JS import map for static `import` statements; pass `append: true` to also inject a `<script type="importmap">` into `<head>` for native resolution.
 *
 * The DOM-injected map only affects modules loaded after it appears — append before any consumer scripts run.
 *
 * @function importMap
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {Object} mapSpec - Import map shape: `{ imports: { name: url } }`.
 * @param {Object} [options] - Behavior options.
 * @param {Boolean} [options.append=false] - When true, inject `<script type="importmap">` into the document head for native static-import resolution.
 * @returns {HTMLScriptElement|null} - The injected script element when `append` is true, otherwise null.
 *
 * @example
 * import { importMap, resolveNamedImport, assert } from '@universalweb/acid';
 * importMap({ imports: { uuid: 'https://esm.sh/uuid' } });
 * assert(resolveNamedImport('uuid'), 'https://esm.sh/uuid');
 */
export function importMap(mapSpec, options = {}) {
	if (!mapSpec || !mapSpec.imports) {
		return null;
	}
	eachObject(mapSpec.imports, (url, importName) => {
		namedSources.set(importName, url);
	});
	const { append = false } = options;
	if (!append || typeof globalThis.document === 'undefined') {
		return null;
	}
	const scriptElement = document.createElement('script');
	scriptElement.type = 'importmap';
	scriptElement.textContent = stringify(mapSpec);
	document.head.appendChild(scriptElement);
	return scriptElement;
}
