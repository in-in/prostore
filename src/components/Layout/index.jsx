import PropTypes from 'prop-types';
import { Header } from '~/components/Header';
import st from './style.module.scss';

export const Layout = ({ children }) => (
	<>
		<Header />
		<main className={st.layout}>
			{children}
		</main>
	</>
);

Layout.propTypes = {
	'children': PropTypes.node.isRequired,
};
