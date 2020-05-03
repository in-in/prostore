import {
	ALL_BOOKS_REMOVE_FROM_CART,
	BOOK_ADDED_TO_CART,
	BOOK_REMOVE_FROM_CART,
} from './actionTypes';

const updateCartItems = (cartItems, item, idx) => {
	if (item.count === 0) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1),
		];
	}

	if (idx === -1) {
		return [
			...cartItems,
			item,
		];
	}

	return [
		...cartItems.slice(0, idx),
		item,
		...cartItems.slice(idx + 1),
	];
};

const updateCartItem = (book, item = {}, amount) => {
	const {
		count = 0,
		id = book.id,
		title = book.title,
		total = 0,
	} = item;

	return {
		'count': count + amount,
		'id': id,
		'title': title,
		'total': total + (amount * book.price),
	};
};

const updateOrder = (state, bookID, amount) => {
	const { 'bookList': { books }, 'shoppingCart': { cartItems } } = state;

	const book = books.find(({ id }) => id === bookID);
	const itemIndex = cartItems.findIndex(({ id }) => id === bookID);
	const item = cartItems[itemIndex];
	const newItem = updateCartItem(book, item, amount);

	return {
		'orderTotal': 0,
		'cartItems': updateCartItems(cartItems, newItem, itemIndex),
	};
};

export const updateShoppingCart = (state, action) => {
	if (state === undefined) {
		return {
			'cartItems': [],
			'orderTotal': 0,
		};
	}

	switch (action.type) {
		case ALL_BOOKS_REMOVE_FROM_CART: {
			const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
			return updateOrder(state, action.payload, -item.count);
		}

		case BOOK_ADDED_TO_CART:
			return updateOrder(state, action.payload, 1);

		case BOOK_REMOVE_FROM_CART:
			return updateOrder(state, action.payload, -1);

		default:
			return state.shoppingCart;
	}
};
