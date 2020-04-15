import PropTypes from 'prop-types';
import st from './style.module.scss';

export const ListItem = ({ book }) => {
	const { title, author } = book;

	return (
		<li className={st['list-item']}>
			<span>{title}</span>
			<span>{author}</span>
		</li>
	);
};

ListItem.propTypes = {
	'book': PropTypes.shape({
		'title': PropTypes.string,
		'author': PropTypes.string,
	}).isRequired,
};
