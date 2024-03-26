/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig((e) => ({
	publicDir: e.command == 'serve' ? 'public' : false,
	build: {
		lib: {
		entry: './lib/index.ts',
		name: 'SwitchMatch',
		fileName: 'switch-match',
		},
	},
	test: {},
}));