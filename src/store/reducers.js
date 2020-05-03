import { updateBookList } from './reducersBookList';
import { updateShoppingCart } from './reducersShoppingCart';

export const reducer = (state, action) =>
	({
		'bookList': updateBookList(state, action),
		'shoppingCart': updateShoppingCart(state, action),
	});
