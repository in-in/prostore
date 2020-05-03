import {
	ALL_BOOKS_REMOVE_FROM_CART,
	BOOK_ADDED_TO_CART,
	BOOK_REMOVE_FROM_CART,
	FETCH_BOOKS_FAILURE,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_SUCCESS,
} from './actionTypes';

const initialState = {
	'books': [],
	'loading': true,
	'error': false,
	'cartItems': [],
	'orderTotal': 220,
};

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
	const { books, cartItems } = state;

	const book = books.find(({ id }) => id === bookID);
	const itemIndex = cartItems.findIndex(({ id }) => id === bookID);
	const item = cartItems[itemIndex];
	const newItem = updateCartItem(book, item, amount);

	return {
		...state,
		'cartItems': updateCartItems(cartItems, newItem, itemIndex),
	};
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BOOKS_REQUEST:
			return {
				...state,
				'books': [],
				'loading': true,
				'error': false,
			};

		case FETCH_BOOKS_SUCCESS:
			return {
				...state,
				'books': action.payload,
				'loading': false,
				'error': false,
			};

		case FETCH_BOOKS_FAILURE:
			return {
				...state,
				'books': [],
				'loading': false,
				'error': action.payload,
			};

		case BOOK_ADDED_TO_CART:
			return updateOrder(state, action.payload, 1);

		case BOOK_REMOVE_FROM_CART:
			return updateOrder(state, action.payload, -1);

		case ALL_BOOKS_REMOVE_FROM_CART: {
			const item = state.cartItems.find(({ id }) => id === action.payload);
			return updateOrder(state, action.payload, -item.count);
		}

		default:
			return state;
	}
};
