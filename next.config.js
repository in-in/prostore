/* eslint-disable no-param-reassign */
const { resolve } = require('path');
const withSass = require('@zeit/next-sass');
const sass = require('sass');

const config = {
	'poweredByHeader': false,
	webpack(cfg) {
		cfg.resolve.alias['~'] = resolve(__dirname, 'src');
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
