import adapter from '@sveltejs/adapter-auto';
import { sass } from 'svelte-preprocess-sass';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: {style: sass(),},
	kit: {
		adapter: adapter()
	}
};

export default config;
