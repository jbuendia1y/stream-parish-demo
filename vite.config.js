import { resolve } from 'node:path';
import { defineConfig } from 'vite';

/**
 *
 * @param {string} name
 * @returns
 */
const getNestedIndexHtml = (name) => resolve(__dirname, name, 'index.html');

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				login: getNestedIndexHtml('login'),
			},
		},
	},
});
