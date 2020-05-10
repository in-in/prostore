import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import Cart from '../../assets/icons/cart.svg';
import st from './style.module.scss';

export const BaseCartIndicator = ({ items }) => (
	Boolean(items.length) && (
		<Link href="/cart">
			<a className={st.cartIndicator}>
				<div className={st.cartIndicator_wrapper}>
					<Cart className={st.cartIndicator_icon} />
					<span className={st.cartIndicator_total}>&#36;{
						items.reduce((acc, i) => acc + i.total, 0)
					}
					</span>
				</div>
				<span>
					{
						items.reduce((acc, i) => acc + i.count, 0)
					} items
				</span>
			</a>
		</Link>
	)
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
