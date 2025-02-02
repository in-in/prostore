import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	allBooksRemoveFromCart,
	bookAddedToCart,
	bookRemoveFromCart,
} from '@store/actions';
import { TableButton } from '../TableButton';
import Close from '../../assets/icons/close.svg';
import CartMinus from '../../assets/icons/cart_minus.svg';
import CartPlus from '../../assets/icons/cart_plus.svg';
import st from './style.module.scss';

const BaseTable = ({
	items, onIncrease, onDecrease, onDelete, orderTotal,
}) =>
	Boolean(items.length) && (
		<table className={st.table}>
			<caption className={st.table_caption}>Your Order</caption>
			<thead>
				<tr>
					<th className={st.table_head}>#</th>
					<th className={st.table_head}>Item</th>
					<th className={st.table_head}>Count</th>
					<th className={st.table_head}>Total</th>
					<th className={st.table_head}>Action</th>
				</tr>
			</thead>
			<tbody>
				{
					items.map((item, idx) => {
						const {
							id, title, count, total,
						} = item;
						return (
							<tr key={id} className={st.table_row}>
								<td className={st.table_item}>{idx + 1}</td>
								<td className={st.table_itemName}>{title}</td>
								<td className={st.table_item}>{count}</td>
								<td className={st.table_item}>${total.toFixed(2)}</td>
								<td className={st.table_item}>
									<div className={st.table_buttonGroup}>
										<TableButton
											onClick={() => onDecrease(id)}
											icon={<CartMinus />}
										/>
										<TableButton
											onClick={() => onIncrease(id)}
											icon={<CartPlus />}
										/>
										<TableButton
											onClick={() => onDelete(id)}
											icon={<Close />}
										/>
									</div>
								</td>
							</tr>
						);
					})
				}
			</tbody>
			<tfoot className={st.table_foot}>
				<tr>
					<td colSpan="4" className={st.table_totalText}>Total:</td>
					<td className={st.table_totalAmount}>&#36;{orderTotal}
					</td>
				</tr>
			</tfoot>
		</table>
	);

const mapStateToProps = ({ 'shoppingCart': { cartItems } }) => ({
	'items': cartItems,
	'orderTotal': (cartItems.reduce((acc, i) => acc + i.total, 0)).toFixed(2),
});

const mapDispatchToProps = {
	'onDecrease': bookRemoveFromCart,
	'onDelete': allBooksRemoveFromCart,
	'onIncrease': bookAddedToCart,
};

export const Table = connect(mapStateToProps, mapDispatchToProps)(BaseTable);

BaseTable.propTypes = {
	'items': PropTypes.arrayOf(PropTypes.object).isRequired,
	'onDecrease': PropTypes.func.isRequired,
	'onDelete': PropTypes.func.isRequired,
	'onIncrease': PropTypes.func.isRequired,
	'orderTotal': PropTypes.string.isRequired,
};
