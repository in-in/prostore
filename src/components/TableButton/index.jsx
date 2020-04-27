import PropTypes from 'prop-types';
import st from './style.module.scss';

export const TableButton = ({ icon }) =>
// const {
// 	// author, price, title,
// } = book;

	(

		<button type="button" className={st.tableButton}>
			{icon}
		</button>

	);

TableButton.propTypes = {
	'icon': PropTypes.element.isRequired,
};
