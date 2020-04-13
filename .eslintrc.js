const { join } = require('path');

module.exports = {
	'parser': 'babel-eslint',
	'extends': ['airbnb', 'airbnb/hooks'],
	'env': {
		'browser': true,
		'node': true,
	},
	'settings': {
		'import/resolver': {
			'alias': {
				'map': [
					['~', join(__dirname, 'src')],
					['@store', join(__dirname, 'src', 'store')],
					['@service', join(__dirname, 'src', 'services')],
					['@helpers', join(__dirname, 'src', 'helpers')],
				],
				'extensions': ['.js', '.jsx'],
			},
		},
	},
	'rules': {
		'implicit-arrow-linebreak': 0,
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'max-len': ['error', 90, 2],
		'no-tabs': 0,
		'quote-props': ['error', 'always'],
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-props-no-spreading': 0,
		'react/react-in-jsx-scope': 0,
	},
};
