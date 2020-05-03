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
	items, sum, onIncrease, onDecrease, onDelete,
}) =>
	(
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
			<tbody className={st.table_body}>
				{
					items.map((item, idx) => {
						const {
							id, title, count, total,
						} = item;
						return (
							<tr key={id}>
								<td className={st.table_item}>{idx + 1}</td>
								<td className={st.table_itemName}>{title}</td>
								<td className={st.table_item}>{count}</td>
								<td className={st.table_item}>${total}</td>
								<td className={st.table_buttonGroup}>
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
								</td>
							</tr>
						);
					})
				}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan="4" className={st.table_totalText}>Total:</td>
					<td className={st.table_totalAmount}>${sum}</td>
				</tr>
			</tfoot>
		</table>
	);

const mapStateToProps = ({ 'shoppingCart': { cartItems, orderTotal } }) => ({
	'items': cartItems,
	'sum': orderTotal,
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
	'sum': PropTypes.number.isRequired,
};
