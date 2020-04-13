/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem } from '../ListItem';
import st from './style.scss';

class BaseList extends Component {
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

export const List = connect(mapStateToProps)(BaseList);

BaseList.propTypes = {
	'books': PropTypes.arrayOf(PropTypes.object).isRequired,
};
