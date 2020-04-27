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
					<th>#</th>
					<th>Item</th>
					<th>Count</th>
					<th>Price</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody className={st.table_body}>
				<tr>
					<td>1</td>
					<td>Production-Ready Microservices</td>
					<td>2</td>
					<td>$40</td>
					<td className={st.table_buttonGroup}>
						<TableButton icon={<CartMinus />} />
						<TableButton icon={<CartPlus />} />
						<TableButton icon={<Close />} />
					</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Production-Ready Microservices</td>
					<td>2</td>
					<td>$40</td>
					<td>
						<button type="button">1</button>
						<button type="button">2</button>
						<button type="button">3</button>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th colSpan="4" className={st.table_totalText}>Total:</th>
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
