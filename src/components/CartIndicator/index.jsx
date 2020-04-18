import PropTypes from 'prop-types';
import Link from 'next/link';
import Cart from '../../assets/icons/cart.svg';
import st from './style.module.scss';

export const CartIndicator = ({ numItems, total }) => (
	<Link href="/cart">
		<a className={st.cartIndicator}>
			<Cart className={st.cartIndicator_icon} />{numItems} items (${total})
		</a>
	</Link>
);

CartIndicator.propTypes = {
	'numItems': PropTypes.string.isRequired,
	'total': PropTypes.string.isRequired,
};
