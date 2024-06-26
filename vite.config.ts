import { defineConfig } from 'vite';

export default defineConfig((env) => ({
	publicDir: env.command === 'serve' ? 'public' : false,
	build: {
		target: 'modules',
		lib: {
			entry: './lib/index.ts',
			name: 'SwitchMatch',
			fileName: 'switch-match',
		},
		rollupOptions: {
			output: {
				esModule: true,
				exports: 'named',
			},
		},

	},
}))