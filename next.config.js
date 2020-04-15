/* eslint-disable no-param-reassign */
const { join } = require('path');

const config = {
	'poweredByHeader': false,
	webpack(cfg) {
		cfg.resolve.alias = {
			...cfg.resolve.alias,
			'~': join(__dirname, 'src'),
			'@store': join(__dirname, 'src', 'store'),
			'@service': join(__dirname, 'src', 'services'),
			'@helpers': join(__dirname, 'src', 'helpers'),
		};
		return cfg;
	},
};

module.exports = { ...config };
