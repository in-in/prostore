/* eslint-disable no-param-reassign */
const { join } = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

const config = {
	'poweredByHeader': false,
	'devIndicators': {
		'autoPrerender': false,
	},
	'sassOptions': {
		'includePaths': [join(__dirname, 'src', 'styles')],
	},
	'experimental': {
		'reactRefresh': true,
	},
	webpack(cfg) {
		cfg.plugins.push(new StylelintPlugin({
			'fix': true,
		}));
		return cfg;
	},
};

module.exports = { ...config };
