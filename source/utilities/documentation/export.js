import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const RAW_MARKER = Symbol.for('acid.docs.rawCode');
const VALID_IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const RESERVED_WORDS = new Set([
	'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
	'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for',
	'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface', 'let',
	'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'static',
	'super', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void',
	'while', 'with', 'yield', 'await', 'arguments', 'eval',
]);
function isBindableIdent(name) {
	return VALID_IDENT.test(name) && !RESERVED_WORDS.has(name);
}
function rawCode(code) {
	return { [RAW_MARKER]: code };
}
function indentOf(level, width) {
	return ' '.repeat(level * width);
}
function serialize(value, level, width) {
	if (value === null || value === undefined) {
		return 'null';
	}
	if (typeof value === 'boolean' || typeof value === 'number') {
		return String(value);
	}
	if (typeof value === 'bigint') {
		return `${value}n`;
	}
	if (typeof value === 'string') {
		return JSON.stringify(value);
	}
	if (typeof value === 'object' && value[RAW_MARKER]) {
		return value[RAW_MARKER];
	}
	if (Array.isArray(value)) {
		if (!value.length) return '[]';
		const inner = indentOf(level + 1, width);
		const close = indentOf(level, width);
		const arrayLength = value.length;
		const parts = new Array(arrayLength);
		for (let arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++) {
			parts[arrayIndex] = inner + serialize(value[arrayIndex], level + 1, width);
		}
		return `[\n${parts.join(',\n')}\n${close}]`;
	}
	const keys = Object.keys(value);
	if (!keys.length) return '{}';
	const inner = indentOf(level + 1, width);
	const close = indentOf(level, width);
	const keysLength = keys.length;
	const parts = new Array(keysLength);
	for (let keyIndex = 0; keyIndex < keysLength; keyIndex++) {
		const key = keys[keyIndex];
		const keyText = VALID_IDENT.test(key) ? key : JSON.stringify(key);
		parts[keyIndex] = `${inner}${keyText}: ${serialize(value[key], level + 1, width)}`;
	}
	return `{\n${parts.join(',\n')}\n${close}}`;
}
async function ensureDir(filePath) {
	await mkdir(path.dirname(filePath), { recursive: true });
}
/**
 * Writes a documentation tree as a JSON file.
 *
 * @function writeDocsJSON
 * @category utility
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {Object} tree - Documentation tree (any JSON-serializable shape).
 * @param {String} outputPath - Destination path.
 * @param {Object} [options]
 * @param {Number} [options.indent=2] - JSON indentation.
 * @returns {Promise<void>}
 *
 * @example
 * import { generateDocs, writeDocsJSON } from '@universalweb/acid';
 * const docs = await generateDocs('./source');
 * await writeDocsJSON(docs, './docs/data.json');
 */
export async function writeDocsJSON(tree, outputPath, options = {}) {
	const { indent = 2 } = options;
	await ensureDir(outputPath);
	await writeFile(outputPath, JSON.stringify(tree, null, indent), 'utf8');
}
function importsFromExample(code) {
	const importPattern = /import\s*\{\s*([^}]+)\}\s*from\s*['"][^'"]+['"]\s*;?/g;
	const used = new Set();
	let match;
	while ((match = importPattern.exec(code)) !== null) {
		const named = match[1].split(',');
		const namedLength = named.length;
		for (let namedIndex = 0; namedIndex < namedLength; namedIndex++) {
			const raw = named[namedIndex].trim();
			if (!raw) continue;
			const local = raw.split(/\s+as\s+/i)[1] ?? raw;
			if (isBindableIdent(local)) {
				used.add(local);
			}
		}
	}
	return [...used];
}
function exampleToRunner(code) {
	const importPattern = /import\s*\{\s*[^}]+\}\s*from\s*['"][^'"]+['"]\s*;?/g;
	const stripped = code.replace(importPattern, '').replace(/^\s*\n+/, '');
	const names = importsFromExample(code);
	const destructure = names.length ? `\t\tconst { ${names.join(', ')} } = imports;\n` : '';
	const indented = stripped.split('\n').map((line) => `\t\t${line}`).join('\n');
	return rawCode(`async (imports) => {\n${destructure}${indented}\n\t}`);
}
function decorateRunners(tree, level = 0) {
	if (level > 64 || !tree || typeof tree !== 'object') return tree;
	if (Array.isArray(tree)) {
		const treeLength = tree.length;
		for (let arrayIndex = 0; arrayIndex < treeLength; arrayIndex++) {
			decorateRunners(tree[arrayIndex], level + 1);
		}
		return tree;
	}
	if (Array.isArray(tree.examples) && Array.isArray(tree.tags)) {
		const examplesLength = tree.examples.length;
		const runners = new Array(examplesLength);
		for (let exampleIndex = 0; exampleIndex < examplesLength; exampleIndex++) {
			runners[exampleIndex] = exampleToRunner(tree.examples[exampleIndex]);
		}
		tree.runners = runners;
		return tree;
	}
	const keys = Object.keys(tree);
	const keysLength = keys.length;
	for (let keyIndex = 0; keyIndex < keysLength; keyIndex++) {
		decorateRunners(tree[keys[keyIndex]], level + 1);
	}
	return tree;
}
/**
 * Writes a documentation tree as an ES module. Emits a named export and a default export.
 * When `embedRunners: true`, every doc that has examples gains a `runners` array of async functions
 * shaped as `async (imports) => { … }` — destructure the bindings used by the example, run the body.
 * Pass the live library namespace at call time: `await docs.utility.assert.runners[0]({ assert })`.
 *
 * @function writeDocsModule
 * @category utility
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {Object} tree - Documentation tree.
 * @param {String} outputPath - Destination path (`.js`/`.mjs`).
 * @param {Object} [options]
 * @param {String} [options.exportName='docs'] - Named export.
 * @param {Boolean} [options.namedTopLevelExports=true] - Re-export each top-level key as its own named export, when the key is a valid identifier.
 * @param {Boolean} [options.embedRunners=false] - Embed each example as a callable runner function.
 * @param {Number} [options.indent=2] - Indent width.
 * @param {String} [options.banner=''] - Optional comment banner injected at the top of the file.
 * @returns {Promise<void>}
 *
 * @example
 * import { generateDocs, writeDocsModule } from '@universalweb/acid';
 * const docs = await generateDocs('./source');
 * await writeDocsModule(docs.category, './docs/category.js', { embedRunners: true });
 */
export async function writeDocsModule(tree, outputPath, options = {}) {
	const {
		exportName = 'docs',
		namedTopLevelExports = true,
		embedRunners = false,
		indent = 2,
		banner = '',
	} = options;
	const cloned = JSON.parse(JSON.stringify(tree));
	if (embedRunners) {
		decorateRunners(cloned);
	}
	const lines = [];
	if (banner) {
		lines.push(banner.endsWith('\n') ? banner : `${banner}\n`);
	}
	lines.push(`export const ${exportName} = ${serialize(cloned, 0, indent)};`);
	if (namedTopLevelExports) {
		const topKeys = Object.keys(cloned);
		const topKeysLength = topKeys.length;
		for (let keyIndex = 0; keyIndex < topKeysLength; keyIndex++) {
			const key = topKeys[keyIndex];
			if (key === exportName) continue;
			if (!isBindableIdent(key)) continue;
			lines.push(`export const ${key} = ${exportName}[${JSON.stringify(key)}];`);
		}
	}
	lines.push(`export default ${exportName};`);
	await ensureDir(outputPath);
	await writeFile(outputPath, lines.join('\n') + '\n', 'utf8');
}
