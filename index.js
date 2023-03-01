import { buildJson } from 'docredux';
import path from 'path';
import { fileURLToPath } from 'url';
const currentDirname = path.dirname(fileURLToPath(import.meta.url));
const buildDocs = () => {
	return buildJson({
		destination: `${currentDirname}/docs/`,
		source: `${currentDirname}/docs/browser.bundle.js`,
	});
};
import { rollup } from 'rollup';
import terser from '@rollup/plugin-terser';
import format from 'prettier-eslint';
import tinyLR from 'tiny-lr';
import liveReload from 'connect-livereload';
import fs from 'fs';
import watch from 'node-watch';
import express from 'express';
const app = express();
const expressRoot = '/';
const expressPort = 8890;
async function liveServer() {
	const port = 35729;
	const server = await (new tinyLR.Server({
		port,
	}));
	server.listen();
	app.use(liveReload({
		port,
	}));
	app.use(express.static(`${currentDirname}/docs`));
	app.listen(expressPort);
	return server;
}
async function beautify(source, destination) {
	console.log('Beautify');
	const text = fs.readFileSync(source).toString();
	const eslintConfigLocation = (source.includes('/module/') && './source/.eslintrc') || './.eslintrc';
	console.log('GET ESLINT CONFIG', source, eslintConfigLocation);
	const eslintConfig = JSON.parse(fs.readFileSync(eslintConfigLocation).toString());
	const cleanedEslintConfig = {};
	Object.entries(eslintConfig).forEach(([key, value]) => {
		if (!key.match(/plugins|extends/)) {
			cleanedEslintConfig[key] = value;
		}
	});
	console.log('GOT ESLINT CONFIG');
	const formattedCode = await format({
		eslintConfig: cleanedEslintConfig,
		'overrideConfig.plugins': true,
		prettierOptions: {
			parser: 'babel',
		},
		text,
	});
	console.log('WROTE', destination || source);
	fs.writeFileSync(destination || source, formattedCode, 'utf8');
}
const copyFile = (start, end) => {
	fs.writeFileSync(end, fs.readFileSync(path.join(currentDirname, start)).toString(), 'utf8');
};
const build = async () => {
	console.log('Build Client START');
	const browserBundle = await rollup({
		input: './source/browser.js',
	});
	const browserBundleProduction = await rollup({
		input: './source/browser.js',
		plugins: [
			terser()
		]
	});
	await browserBundle.write({
		file: './build/browser.bundle.js',
		format: 'umd',
		name: '$',
		sourcemap: true
	});
	await browserBundle.write({
		file: './build/module/browser/bundle.js',
		format: 'es',
		name: '$',
		sourcemap: true
	});
	await browserBundleProduction.write({
		file: './build/browser.js',
		format: 'umd',
		name: '$',
		sourcemap: true
	});
	await browserBundleProduction.write({
		file: './build/module/browser/index.js',
		format: 'es',
		name: '$',
		sourcemap: true
	});
	await beautify('./build/browser.bundle.js');
	copyFile('./build/browser.bundle.js', './docs/browser.bundle.js');
	copyFile('./build/module/browser/bundle.js', './docs/browser.bundle.es.js');
	copyFile('./build/browser.js', './docs/browser.js');
	console.log('Build Client END');
	console.log('Build Server START');
	const index = await rollup({
		input: './source/index.js',
	});
	const indexProduction = await rollup({
		input: './source/index.js',
		plugins: [
			terser()
		]
	});
	await index.write({
		file: './build/index.bundle.js',
		format: 'umd',
		name: '$',
		sourcemap: true
	});
	await index.write({
		file: './build/module/bundle.js',
		format: 'es',
		name: '$',
		sourcemap: true
	});
	await indexProduction.write({
		file: './build/index.js',
		format: 'umd',
		name: '$',
		sourcemap: true
	});
	await indexProduction.write({
		file: './build/module/index.js',
		format: 'es',
		name: '$',
		sourcemap: true
	});
	await beautify('./build/index.bundle.js');
	copyFile('./build/index.bundle.js', './docs/index.bundle.js');
	copyFile('./build/module/bundle.js', './docs/index.bundle.es.js');
	copyFile('./build/index.js', './docs/index.js');
	console.log('Build Server END');
	console.log('Build Complete');
	console.log('Docs Started');
	await buildDocs();
	console.log('Docs Complete');
	console.log('package Started');
	copyFile('./build/index.js', './package/index.js');
	copyFile('./build/module/index.js', './package/module/index.js');
	copyFile('./build/browser.js', './package/browser.js');
	copyFile('./build/module/browser/index.js', './package/module/browser/index.js');
	copyFile('./LICENSE', './package/LICENSE');
	copyFile('./README.md', './package/README.md');
	console.log('package Complete');
	console.log('Build Complete');
};
build();
if (!process.env.production) {
	const server = await liveServer();
	const notifyLiveReload = (evt, filename) => {
		const fileName = path.relative(expressRoot, filename);
		server.changed({
			body: {
				files: [fileName],
			},
		});
	};
	watch('./source/', {
		recursive: true
	}, async (evt, filename) => {
		await build();
		notifyLiveReload(evt, filename);
	});
	watch('./docs/', {
		recursive: true
	}, async (evt, filename) => {
		notifyLiveReload(evt, filename);
	});
}
