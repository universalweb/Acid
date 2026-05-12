import nodeExternals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollup } from 'rollup';
import terser from '@rollup/plugin-terser';

async function build() {
	console.log('Build Client START');
	const browserBundle = await rollup({
		input: './source/browser.js',
		plugins: [nodeResolve()],
	});
	const browserBundleProduction = await rollup({
		input: './source/browser.js',
		plugins: [nodeResolve(), terser()],
	});
	await browserBundle.write({
		file: './build/browser.bundle.js',
		format: 'umd',
		name: '$',
		sourcemap: true,
	});
	await browserBundle.write({
		file: './build/module/browser/bundle.js',
		format: 'es',
		name: '$',
		sourcemap: true,
	});
	await browserBundleProduction.write({
		file: './build/browser.js',
		format: 'umd',
		name: '$',
		sourcemap: true,
	});
	await browserBundleProduction.write({
		file: './build/module/browser/index.js',
		format: 'es',
		name: '$',
		sourcemap: true,
	});
	console.log('Build Client END');
	console.log('Build Server START');
	const index = await rollup({
		input: './source/index.js',
		plugins: [
			nodeExternals({ builtinsPrefix: 'ignore' }),
			nodeResolve(),
		],
	});
	const indexProduction = await rollup({
		input: './source/index.js',
		plugins: [
			nodeExternals({ builtinsPrefix: 'ignore' }),
			nodeResolve(),
			terser(),
		],
	});
	const basicProduction = await rollup({
		input: './source/basic.js',
		plugins: [
			nodeExternals({ builtinsPrefix: 'ignore' }),
			nodeResolve(),
			terser(),
		],
	});
	await index.write({
		file: './build/index.bundle.js',
		format: 'umd',
		name: '$',
		sourcemap: true,
	});
	await index.write({
		file: './build/module/bundle.js',
		format: 'es',
		name: '$',
		sourcemap: true,
	});
	await indexProduction.write({
		file: './build/index.js',
		format: 'umd',
		name: '$',
		sourcemap: true,
	});
	await indexProduction.write({
		file: './build/module/index.js',
		format: 'es',
		name: '$',
		sourcemap: true,
	});
	await basicProduction.write({
		file: './build/basic.js',
		format: 'umd',
		name: '$',
		sourcemap: true,
	});
	await basicProduction.write({
		file: './build/module/basic.js',
		format: 'es',
		name: '$',
		sourcemap: true,
	});
	console.log('Build Server END');
	console.log('Build Complete');
}
build();
