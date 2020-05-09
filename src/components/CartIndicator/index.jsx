import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import Cart from '../../assets/icons/cart.svg';
import st from './style.module.scss';

export const BaseCartIndicator = ({ items }) => (
	<Link href="/cart">
		<a className={st.cartIndicator}>
			<div className={st.cartIndicator_text}>
				<span>
					{
						items.reduce((acc, i) => acc + i.count, 0)
					} items
				</span>
				<span>(&#36;{
					items.reduce((acc, i) => acc + i.total, 0)
				})
				</span>
			</div>
			<Cart className={st.cartIndicator_icon} />
		</a>
	</Link>
);

const mapStateToProps = ({ 'shoppingCart': { cartItems } }) => ({
	'items': cartItems,
});

export const CartIndicator = connect(
	mapStateToProps,
)(BaseCartIndicator);

BaseCartIndicator.propTypes = {
	'items': PropTypes.arrayOf(PropTypes.object).isRequired,
};
