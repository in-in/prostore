import PropTypes from 'prop-types';
import st from './style.module.scss';

export const TableButton = ({ icon, onClick }) => (
	<button type="button" className={st.tableButton} onClick={onClick}>
		{icon}
	</button>
);

TableButton.propTypes = {
	'icon': PropTypes.element.isRequired,
	'onClick': PropTypes.func,
};

TableButton.defaultProps = {
	'onClick': () => {},
};
