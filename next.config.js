/* eslint-disable no-param-reassign */
const { join } = require('path');
const withSass = require('@zeit/next-sass');
const sass = require('sass');

const config = {
	'poweredByHeader': false,
	webpack(cfg) {
		cfg.resolve.alias = {
			'~': join(__dirname, 'src'),
			'@store': join(__dirname, 'src', 'store'),
			'@service': join(__dirname, 'src', 'services'),
			'@helpers': join(__dirname, 'src', 'helpers'),
		};
		return cfg;
	},
};

const sassConfig = {
	'cssModules': true,
	'sassLoaderOptions': {
		'implementation': sass,
	},
};

const cssConfig = {
	'cssModules': true,
	'cssLoaderOptions': {
		'localIdentName': '[local]_[hash:base64:5]',
	},
};

module.exports = withSass({ ...config, ...cssConfig, ...sassConfig });
