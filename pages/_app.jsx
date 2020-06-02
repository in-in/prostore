import Head from 'next/head';
import PropTypes from 'prop-types';
import '../src/styles/styles.scss';

export default function CustomApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>ProStore</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

CustomApp.propTypes = {
	'Component': PropTypes.func.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	'pageProps': PropTypes.object.isRequired,
};
