import PropTypes from 'prop-types';
import st from './style.module.scss';

export const Card = ({ book, onAddedToCart }) => {
	const {
		author, coverImage, price, title,
	} = book;

	return (
		<article className={st.card}>
			<a className={st.card_link} href="#0">
				<figure className={st.card_cover}>
					<img src={coverImage} alt={title} />
				</figure>
				<div className={st.card_body}>
					<div className={st.card_bodyHeader}>
						<span className={st.card_author}>{author}</span>
						<span className={st.card_price}>${price}</span>
					</div>
					<h4 className={st.card_title}>{title}</h4>
					<button
						type="button"
						className={st.card_button}
						onClick={onAddedToCart}
					>Add To Cart
					</button>
				</div>
			</a>
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
