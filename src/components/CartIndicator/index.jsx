import PropTypes from 'prop-types';
import Link from 'next/link';
import Cart from '../../assets/icons/cart.svg';
import st from './style.module.scss';

export const CartIndicator = ({ numItems, total }) => (
	<Link href="/cart">
		<a className={st.cartIndicator}>
			<div className={st.cartIndicator_text}>
				<span>{numItems} items </span>
				<span>(${total})</span>
			</div>
			<Cart className={st.cartIndicator_icon} />
		</a>
	</Link>
);

CartIndicator.propTypes = {
	'numItems': PropTypes.string.isRequired,
	'total': PropTypes.string.isRequired,
};
