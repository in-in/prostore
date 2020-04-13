/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '../ListItem';
import st from './style.scss';

export class List extends Component {
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

List.propTypes = {
	'books': PropTypes.arrayOf(PropTypes.object).isRequired,
};
