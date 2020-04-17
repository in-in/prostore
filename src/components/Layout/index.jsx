import PropTypes from 'prop-types';
import st from './style.module.scss';

export const Layout = ({ children }) => (
	<main className={st.layout}>
		{children}
	</main>
);

Layout.propTypes = {
	'children': PropTypes.node.isRequired,
};
