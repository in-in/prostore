import PropTypes from 'prop-types';
import { withBookstoreService } from '@helpers/withBookstoreService';
import Header from '../Header';

const BaseLayout = ({ children, bookstoreService }) => {
	console.log(bookstoreService.getBooks());
	return (
		<main>
			<Header />
			{children}
		</main>
	);
};

export const Layout = withBookstoreService()(BaseLayout);

BaseLayout.propTypes = {
	'children': PropTypes.node.isRequired,
	'bookstoreService': PropTypes.shape({
		'getBooks': PropTypes.func,
	}).isRequired,
};
