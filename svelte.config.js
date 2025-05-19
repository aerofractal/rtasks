import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: 'index.html',
			// fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			"@/*": "./src/lib/*",
			"$server/*": "../api/*"
		},
		output: {
			bundleStrategy: 'single'
		}
	}
};

export default config;
