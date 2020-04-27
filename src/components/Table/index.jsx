// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import Cart from '../../assets/icons/cart.svg';
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
					<td>
						<button type="button">1</button>
						<button type="button">2</button>
						<button type="button">3</button>
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
