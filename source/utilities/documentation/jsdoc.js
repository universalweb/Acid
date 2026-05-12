import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const DEFAULT_PACKAGE = '@universalweb/acid';
const NAMED_TAGS = new Set(['param', 'property', 'arg', 'argument']);
const PRESERVE_NEWLINES_TAGS = new Set(['example']);
const BLOCK_PATTERN = /\/\*\*\s*([\s\S]*?)\s*\*\//g;
const TAG_PATTERN = /^@(\w+)(?:\s+\{([^}]+)\})?\s*(.*)$/;
const NAMED_TAG_PATTERN = /^([\w.[\]-]+)\s*(?:-\s*)?(.*)$/;
const STAR_PREFIX_PATTERN = /^\s*\*\s?/;
/**
 * Parses every JSDoc block in a source string into structured objects.
 *
 * @function parseJSDoc
 * @category utility
 * @ignoreTest
 * @type {Function}
 * @param {String|Buffer} source - The source code to scan.
 * @returns {Array<Object>} - Parsed blocks. Each block is `{description, tags, examples}`.
 *
 * @example
 * import { parseJSDoc } from '@universalweb/acid';
 * const blocks = parseJSDoc('/**\n * Hello.\n * @example\n * 1 + 1\n *\/');
 */
export function parseJSDoc(source) {
	const content = typeof source === 'string' ? source : source.toString();
	const blocks = [];
	let match;
	BLOCK_PATTERN.lastIndex = 0;
	while ((match = BLOCK_PATTERN.exec(content)) !== null) {
		blocks.push(parseBlock(match[1]));
	}
	return blocks;
}
function parseBlock(rawComment) {
	const lines = rawComment.split('\n');
	const linesLength = lines.length;
	const block = { description: '', tags: [], examples: [] };
	let currentTag = null;
	for (let lineIndex = 0; lineIndex < linesLength; lineIndex++) {
		const stripped = lines[lineIndex].replace(STAR_PREFIX_PATTERN, '');
		const trimmed = stripped.trim();
		if (trimmed.startsWith('@')) {
			currentTag = parseTagOpener(trimmed);
			block.tags.push(currentTag);
			continue;
		}
		if (currentTag) {
			const preserveNewlines = PRESERVE_NEWLINES_TAGS.has(currentTag.tag);
			if (preserveNewlines) {
				currentTag.description = currentTag.description
					? `${currentTag.description}\n${stripped}`
					: stripped;
			} else if (trimmed) {
				currentTag.description = currentTag.description
					? `${currentTag.description} ${trimmed}`
					: trimmed;
			}
		} else if (trimmed) {
			block.description = block.description ? `${block.description}\n${trimmed}` : trimmed;
		}
	}
	const tagsLength = block.tags.length;
	for (let tagIndex = 0; tagIndex < tagsLength; tagIndex++) {
		const tag = block.tags[tagIndex];
		if (typeof tag.description === 'string') {
			tag.description = tag.description.replace(/^\n+|\n+$/g, '').trimEnd();
		}
	}
	for (let tagIndex = 0; tagIndex < tagsLength; tagIndex++) {
		const tag = block.tags[tagIndex];
		if (tag.tag === 'example') {
			block.examples.push(tag.description);
		}
	}
	return block;
}
function parseTagOpener(line) {
	const match = TAG_PATTERN.exec(line);
	if (!match) {
		return { tag: line.slice(1), description: '' };
	}
	const tagName = match[1];
	const opener = { tag: tagName };
	if (match[2]) {
		opener.type = match[2];
	}
	const rest = match[3] || '';
	if (NAMED_TAGS.has(tagName)) {
		const nameMatch = NAMED_TAG_PATTERN.exec(rest);
		if (nameMatch) {
			opener.name = nameMatch[1];
			opener.description = nameMatch[2] || '';
		} else {
			opener.description = rest;
		}
	} else {
		opener.description = rest;
	}
	return opener;
}
/**
 * Extracts the code from every `@example` block in a source string.
 *
 * @function extractExamples
 * @category utility
 * @ignoreTest
 * @type {Function}
 * @param {String|Buffer} source - The source code to scan.
 * @returns {String[]} - Example code strings, in document order.
 *
 * @example
 * import { extractExamples } from '@universalweb/acid';
 * const examples = extractExamples(sourceText);
 */
export function extractExamples(source, options = {}) {
	const { skipIgnored = true } = options;
	const blocks = parseJSDoc(source);
	const out = [];
	const blocksLength = blocks.length;
	for (let blockIndex = 0; blockIndex < blocksLength; blockIndex++) {
		const block = blocks[blockIndex];
		if (skipIgnored && block.tags.some((tag) => tag.tag === 'ignoreTest')) {
			continue;
		}
		const examples = block.examples;
		const examplesLength = examples.length;
		for (let exampleIndex = 0; exampleIndex < examplesLength; exampleIndex++) {
			out.push(examples[exampleIndex]);
		}
	}
	return out;
}
function resolveTargetUrl(to, baseDir) {
	if (/^[a-z][a-z0-9+.-]*:/i.test(to)) {
		return to;
	}
	return pathToFileURL(path.resolve(baseDir, to)).href;
}
/**
 * Rewrites bare import specifiers in code so examples can run against a local source bundle.
 * The default swap is `@universalweb/acid` → resolved file URL of `./source/index.js`.
 *
 * @function remapImports
 * @category utility
 * @ignoreTest
 * @type {Function}
 * @param {String} code - The code to transform.
 * @param {Object} [options]
 * @param {String} [options.from='@universalweb/acid'] - Specifier to replace.
 * @param {String} [options.to='./source/index.js'] - Replacement path or URL. Relative paths are resolved against `baseDir`.
 * @param {String} [options.baseDir=process.cwd()] - Base directory used to resolve a relative `to`.
 * @returns {String} - Transformed code.
 *
 * @example
 * import { remapImports } from '@universalweb/acid';
 * const out = remapImports("import { add } from '@universalweb/acid'");
 */
export function remapImports(code, options = {}) {
	const { from = DEFAULT_PACKAGE, to = './source/index.js', baseDir = process.cwd() } = options;
	const targetUrl = resolveTargetUrl(to, baseDir);
	const escapedFrom = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const specifierPattern = new RegExp(`(['"])${escapedFrom}\\1`, 'g');
	return code.replace(specifierPattern, `'${targetUrl}'`);
}
const STRICT_ASSERT_GUARD = `
function __acidStrictAssert(__acidOriginalAssert) {
	return function(...assertArgs) {
		const assertResult = __acidOriginalAssert(...assertArgs);
		if (assertResult instanceof Error) {
			throw assertResult;
		}
		return assertResult;
	};
}
`;
function applyStrictAssert(code) {
	const importPattern = /import\s*\{\s*([^}]+)\}\s*from\s*(['"][^'"]+['"])\s*;?/g;
	return code.replace(importPattern, (full, namedSection, fromClause) => {
		if (!/\bassert\b/.test(namedSection)) {
			return full;
		}
		const rewrittenNamed = namedSection.replace(
			/(^|[\s,])assert(\s*(?:,|$))/,
			'$1assert as __acidOriginalAssert$2',
		);
		return `import { ${rewrittenNamed.trim()} } from ${fromClause};\n${STRICT_ASSERT_GUARD}\nconst assert = __acidStrictAssert(__acidOriginalAssert);`;
	});
}
/**
 * Runs a single JSDoc example. Imports are remapped first; in strict mode, calls to `assert(...)`
 * that return an Error (this library's contract) are re-thrown so failures surface.
 *
 * @function runExample
 * @category utility
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {String} code - Example code to execute.
 * @param {Object} [options] - Path remap options. See {@link remapImports}.
 * @param {Boolean} [options.strict=true] - Wrap `assert(...)` to throw on Error returns.
 * @returns {Promise<Object>} - The imported module namespace.
 *
 * @example
 * import { runExample } from '@universalweb/acid';
 * await runExample("import { add, assert } from '@universalweb/acid'; assert(add(1, 2), 3);");
 */
export async function runExample(code, options = {}) {
	const { strict = true } = options;
	const remapped = remapImports(code, options);
	const final = strict ? applyStrictAssert(remapped) : remapped;
	const dataUrl = `data:text/javascript;base64,${Buffer.from(final).toString('base64')}`;
	return import(dataUrl);
}
/**
 * Runs every JSDoc example found in a source string. Each example runs in its own isolated module.
 *
 * @function runExamples
 * @category utility
 * @ignoreTest
 * @async
 * @type {Function}
 * @param {String|Buffer} source - The source code containing JSDoc.
 * @param {Object} [options] - See {@link runExample}.
 * @returns {Promise<Array<Object>>} - One result per example: `{index, code, ok, error?}`.
 *
 * @example
 * import { runExamples } from '@universalweb/acid';
 * const results = await runExamples(sourceText);
 */
export async function runExamples(source, options = {}) {
	const examples = extractExamples(source);
	const examplesLength = examples.length;
	const results = [];
	for (let exampleIndex = 0; exampleIndex < examplesLength; exampleIndex++) {
		const code = examples[exampleIndex];
		try {
			await runExample(code, options);
			results.push({ index: exampleIndex, code, ok: true });
		} catch (error) {
			results.push({ index: exampleIndex, code, ok: false, error });
		}
	}
	return results;
}
function parseFlags(args) {
	const flags = {};
	const argsLength = args.length;
	for (let argIndex = 0; argIndex < argsLength; argIndex++) {
		const raw = args[argIndex];
		if (!raw.startsWith('--')) continue;
		const equals = raw.indexOf('=');
		const key = equals === -1 ? raw.slice(2) : raw.slice(2, equals);
		const value = equals === -1 ? true : raw.slice(equals + 1);
		flags[key] = value;
	}
	return flags;
}
function pickRunnerOptions(flags) {
	const options = {};
	if (flags.from) options.from = flags.from;
	if (flags.to) options.to = flags.to;
	if (flags['base-dir']) options.baseDir = flags['base-dir'];
	if (flags['no-strict']) options.strict = false;
	return options;
}
async function cliRun(filePath, flags) {
	const { readFile, writeFile, mkdir } = await import('node:fs/promises');
	const pathModule = await import('node:path');
	const text = await readFile(filePath, 'utf8');
	const options = pickRunnerOptions(flags);
	const results = await runExamples(text, options);
	const resultsLength = results.length;
	let failed = 0;
	for (let resultIndex = 0; resultIndex < resultsLength; resultIndex++) {
		const result = results[resultIndex];
		if (result.ok) {
			console.log(`ok   #${result.index}`);
		} else {
			failed++;
			console.error(`fail #${result.index}: ${result.error?.message}`);
			if (process.env.JSDOC_VERBOSE) {
				console.error(result.code);
			}
		}
	}
	console.log(`\n${resultsLength - failed}/${resultsLength} examples passed`);
	if (typeof flags.report === 'string') {
		const failures = results
			.filter((entry) => !entry.ok)
			.map((entry) => ({
				index: entry.index,
				code: entry.code,
				error: entry.error
					? { name: entry.error.name, message: entry.error.message, stack: entry.error.stack }
					: null,
			}));
		const payload = {
			filePath,
			summary: { total: resultsLength, passed: resultsLength - failed, failed },
			failures,
		};
		await mkdir(pathModule.dirname(flags.report), { recursive: true });
		await writeFile(flags.report, JSON.stringify(payload, null, 2), 'utf8');
		console.log(`report written to ${flags.report}`);
	}
	process.exit(failed ? 1 : 0);
}
async function cliReport(rootDir, flags) {
	const { runReport } = await import('./report.js');
	const { writeFile, mkdir } = await import('node:fs/promises');
	const pathModule = await import('node:path');
	const options = pickRunnerOptions(flags);
	const report = await runReport(rootDir, options);
	const { summary, failures } = report;
	console.log(`${summary.passed}/${summary.examples} examples passed across ${summary.files} files (${summary.failed} failed, ${summary.durationMs}ms)`);
	const failuresLength = failures.length;
	if (failuresLength) {
		console.log('--- failures ---');
		for (let failureIndex = 0; failureIndex < failuresLength; failureIndex++) {
			const failure = failures[failureIndex];
			console.log(`${failure.relPath} #${failure.exampleIndex}: ${failure.error?.message}`);
		}
	}
	if (typeof flags.report === 'string') {
		await mkdir(pathModule.dirname(flags.report), { recursive: true });
		await writeFile(flags.report, JSON.stringify(report, null, 2), 'utf8');
		console.log(`report written to ${flags.report}`);
	}
	process.exit(summary.failed ? 1 : 0);
}
async function cliBuild(rootDir, flags) {
	const { generateDocs } = await import('./tree.js');
	const { writeDocsJSON, writeDocsModule } = await import('./export.js');
	const docs = await generateDocs(rootDir, {});
	const outputPath = flags.out;
	if (!outputPath) {
		console.error('--out is required for build');
		process.exit(1);
	}
	const view = flags.view === 'category' ? docs.category : flags.view === 'flat' ? docs.flat : docs.path;
	if (flags.module || outputPath.endsWith('.js') || outputPath.endsWith('.mjs')) {
		await writeDocsModule(view, outputPath, {
			embedRunners: Boolean(flags['embed-runners']),
			exportName: typeof flags['export-name'] === 'string' ? flags['export-name'] : 'docs',
		});
	} else {
		await writeDocsJSON(view, outputPath);
	}
	console.log(`docs written to ${outputPath}`);
}
async function cli(argv) {
	const args = argv.slice(2);
	if (!args.length) {
		console.error([
			'Usage:',
			'  node jsdoc.js <file> [--run] [--report=<path>] [--from=<pkg>] [--to=<path>] [--base-dir=<dir>] [--no-strict]',
			'  node jsdoc.js test <root> [--report=<path>] [--from=<pkg>] [--to=<path>] [--base-dir=<dir>] [--no-strict]',
			'  node jsdoc.js build <root> --out=<path> [--view=path|category|flat] [--module] [--embed-runners] [--export-name=<name>]',
		].join('\n'));
		process.exit(1);
	}
	const command = args[0];
	if (command === 'test') {
		await cliReport(args[1] || '.', parseFlags(args.slice(2)));
		return;
	}
	if (command === 'build') {
		await cliBuild(args[1] || '.', parseFlags(args.slice(2)));
		return;
	}
	const filePath = command;
	const fileFlags = parseFlags(args.slice(1));
	if (fileFlags.run) {
		await cliRun(filePath, fileFlags);
		return;
	}
	const { readFile } = await import('node:fs/promises');
	const text = await readFile(filePath, 'utf8');
	console.log(JSON.stringify(parseJSDoc(text), null, 2));
}
if (typeof process !== 'undefined' && process.argv?.[1] === fileURLToPath(import.meta.url)) {
	cli(process.argv).catch((error) => {
		console.error(error);
		process.exit(1);
	});
}
