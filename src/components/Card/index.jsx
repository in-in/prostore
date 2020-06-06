import PropTypes from 'prop-types';
import { Picture } from '../Picture';
import st from './style.module.scss';

export const Card = ({ book, onAddedToCart }) => {
	const {
		author, coverImage, price, title,
	} = book;

	return (
		<article className={st.card}>
			<a className={st.card_cover} href="#0">
				<Picture name={coverImage} alt={title} />
			</a>
			<div className={st.card_body}>
				<div className={st.card_bodyHeader}>
					<span className={st.card_author}>{author}</span>
					<span className={st.card_price}>&#36;{price}</span>
				</div>
				<h4 className={st.card_title}>{title}</h4>
				<button
					type="button"
					className={st.card_button}
					onClick={onAddedToCart}
				>Add To Cart
				</button>
			</div>
		</article>
	);
};

Card.propTypes = {
	'book': PropTypes.shape({
		'author': PropTypes.string,
		'coverImage': PropTypes.string,
		'price': PropTypes.number,
		'title': PropTypes.string,
	}).isRequired,
	'onAddedToCart': PropTypes.func.isRequired,
};
