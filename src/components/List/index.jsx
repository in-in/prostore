import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withBookstoreService } from '@helpers/withBookstoreService';
import { booksLoaded, booksRequested, booksError } from '@store/actions';
import { compose } from '@helpers/compose';
import { Card } from '../Card';
import { Snipper } from '../Snipper';
import { ErrorIndicator } from '../ErrorIndicator';
import st from './style.module.scss';

class BaseList extends Component {
	componentDidMount() {
		const { fetchBooks } = this.props;
		fetchBooks();
	}

	render() {
		const { books, loading, error } = this.props;

		if (loading) {
			return <Snipper />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<ul className={st.list}>
				{
					books.map((book) => (
						<li key={book.id} className={st.list_item}>
							<Card book={book} />
						</li>
					))
				}
			</ul>
		);
	}
}

const mapStateToProps = ({ books, loading, error }) => ({
	'books': books,
	'loading': loading,
	'error': error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return {
		'fetchBooks': () => {
			dispatch(booksRequested());
			bookstoreService.getBooks()
				.then((data) => dispatch(booksLoaded(data)))
				.catch((err) => dispatch(booksError(err)));
		},
	};
};

export const List = compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(BaseList);

BaseList.propTypes = {
	'books': PropTypes.arrayOf(PropTypes.object).isRequired,
	'fetchBooks': PropTypes.func.isRequired,
	'bookstoreService': PropTypes.shape({
		'getBooks': PropTypes.func,
	}).isRequired,
	'loading': PropTypes.bool.isRequired,
	'error': PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object,
	]).isRequired,
};
