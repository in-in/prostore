import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withBookstoreService } from '@helpers/withBookstoreService';
import { booksLoaded } from '@store/actions';
import { ListItem } from '../ListItem';
import st from './style.scss';

class BaseList extends Component {
	componentDidMount() {
		const { bookstoreLoaded, bookstoreService } = this.props;
		const data = bookstoreService.getBooks();

		bookstoreLoaded(data);
	}

	render() {
		const { books } = this.props;
		return (
			<ul className={st.list}>
				{
					books.map((book) => (
						<ListItem key={book.id} book={book} />
					))
				}
			</ul>
		);
	}
}

const mapStateToProps = ({ books }) => ({
	'books': books,
});

const mapDispatchToProps = {
	'bookstoreLoaded': booksLoaded,
};

export const List = withBookstoreService()(
	connect(mapStateToProps, mapDispatchToProps)(BaseList),
);

BaseList.propTypes = {
	'books': PropTypes.arrayOf(PropTypes.object).isRequired,
	'bookstoreLoaded': PropTypes.func.isRequired,
	'bookstoreService': PropTypes.shape({
		'getBooks': PropTypes.func,
	}).isRequired,
};
