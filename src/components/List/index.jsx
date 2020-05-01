import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withBookstoreService } from '@helpers/withBookstoreService';
import { booksLoaded } from '@store/actions';
import { compose } from '@helpers/compose';
import { Card } from '../Card';
import st from './style.module.scss';

class BaseList extends Component {
	componentDidMount() {
		const { bookstoreLoaded, bookstoreService } = this.props;
		bookstoreService.getBooks().then((data) => bookstoreLoaded(data));
	}

	render() {
		const { books, loading } = this.props;

		if (loading) {
			return <div>loading...</div>;
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

const mapStateToProps = ({ books, loading }) => ({
	'books': books,
	'loading': loading,
});

const mapDispatchToProps = {
	'bookstoreLoaded': booksLoaded,
};

export const List = compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(BaseList);

BaseList.propTypes = {
	'books': PropTypes.arrayOf(PropTypes.object).isRequired,
	'bookstoreLoaded': PropTypes.func.isRequired,
	'bookstoreService': PropTypes.shape({
		'getBooks': PropTypes.func,
	}).isRequired,
	'loading': PropTypes.bool.isRequired,
};
