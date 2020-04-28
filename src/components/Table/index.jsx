// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import Cart from '../../assets/icons/cart.svg';
import { TableButton } from '../TableButton';
import Close from '../../assets/icons/close.svg';
import CartMinus from '../../assets/icons/cart_minus.svg';
import CartPlus from '../../assets/icons/cart_plus.svg';
import st from './style.module.scss';

export const Table = () =>
// const {
// 	// author, price, title,
// } = book;

	(
		<table className={st.table}>
			<caption className={st.table_caption}>Your Order</caption>
			<thead>
				<tr>
					<th className={st.table_head}>#</th>
					<th className={st.table_head}>Item</th>
					<th className={st.table_head}>Count</th>
					<th className={st.table_head}>Price</th>
					<th className={st.table_head}>Action</th>
				</tr>
			</thead>
			<tbody className={st.table_body}>
				<tr>
					<td className={st.table_item}>1</td>
					<td className={st.table_itemName}>Production-Ready Microservices</td>
					<td className={st.table_item}>2</td>
					<td className={st.table_item}>$40</td>
					<td className={st.table_buttonGroup}>
						<TableButton icon={<CartMinus />} />
						<TableButton icon={<CartPlus />} />
						<TableButton icon={<Close />} />
					</td>
				</tr>
				<tr>
					<td className={st.table_item}>1</td>
					<td className={st.table_itemName}>Ready</td>
					<td className={st.table_item}>2</td>
					<td className={st.table_item}>$40</td>
					<td className={st.table_buttonGroup}>
						<TableButton icon={<CartMinus />} />
						<TableButton icon={<CartPlus />} />
						<TableButton icon={<Close />} />
					</td>
				</tr>
				<tr>
					<td className={st.table_item}>1</td>
					<td className={st.table_itemName}>
						Production-Ready Microservices Production Ready Microservices
					</td>
					<td className={st.table_item}>2</td>
					<td className={st.table_item}>$40</td>
					<td className={st.table_buttonGroup}>
						<TableButton icon={<CartMinus />} />
						<TableButton icon={<CartPlus />} />
						<TableButton icon={<Close />} />
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colSpan="4" className={st.table_totalText}>Total:</td>
					<td className={st.table_totalAmount}>$222</td>
				</tr>
			</tfoot>
		</table>
	);

// Table.propTypes = {
// 	'book': PropTypes.shape({
// 		'author': PropTypes.string,
// 		'price': PropTypes.number,
// 		'title': PropTypes.string,
// 	}).isRequired,
// };
