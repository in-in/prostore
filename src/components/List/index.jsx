import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withBookstoreService } from '@helpers/withBookstoreService';
import { fetchBooks, bookAddedToCart } from '@store/actions';
import { compose } from '@helpers/compose';
import { Card } from '../Card';
import { Snipper } from '../Snipper';
import { ErrorIndicator } from '../ErrorIndicator';
import st from './style.module.scss';

class BaseList extends Component {
	componentDidMount() {
		const { fetchList } = this.props;
		fetchList();
	}

	render() {
		const {
			books, loading, error, onAddedToCart,
		} = this.props;

		if (loading) {
			return <Snipper />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<ul className={st.list}>
				{
					books.map((book) => {
						const { id } = book;
						return (
							<li key={id} className={st.list_item}>
								<Card book={book} onAddedToCart={() => onAddedToCart(id)} />
							</li>
						);
					})
				}
			</ul>
		);
	}
}

const mapStateToProps = ({ 'bookList': { books, loading, error } }) => ({
	'books': books,
	'loading': loading,
	'error': error,
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return {
		'fetchList': fetchBooks(dispatch, bookstoreService),
		'onAddedToCart': (id) => dispatch(bookAddedToCart(id)),
	};
};

export const List = compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(BaseList);

BaseList.propTypes = {
	'books': PropTypes.arrayOf(PropTypes.object).isRequired,
	'fetchList': PropTypes.func.isRequired,
	'bookstoreService': PropTypes.shape({
		'getBooks': PropTypes.func,
	}).isRequired,
	'loading': PropTypes.bool.isRequired,
	'error': PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object,
	]).isRequired,
	'onAddedToCart': PropTypes.func.isRequired,
};
