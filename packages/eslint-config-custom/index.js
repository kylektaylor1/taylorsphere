module.exports = {
	extends: ['next', 'turbo', 'prettier'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
	},
	parserOptions: {
		babelOptions: {
			presets: [require.resolve('next/babel')],
		},
	},
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended'],
};
