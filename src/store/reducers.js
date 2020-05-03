import {
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_FAILURE,
	BOOK_ADDED_TO_CART,
} from './actionTypes';

const initialState = {
	'books': [],
	'loading': true,
	'error': false,
	'cartItems': [],
	'orderTotal': 220,
};

const updateCartItems = (cartItems, item, idx) => {
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

const updateCartItem = (book, item = {}) => {
	const {
		count = 0,
		id = book.id,
		title = book.title,
		total = 0,
	} = item;

	return {
		'count': count + 1,
		'id': id,
		'title': title,
		'total': total + book.price,
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
		case BOOK_ADDED_TO_CART: {
			const bookId = action.payload;
			const book = state.books.find((i) => i.id === bookId);
			const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
			const item = state.cartItems[itemIndex];
			const newItem = updateCartItem(book, item);

			return {
				...state,
				'cartItems': updateCartItems(state.cartItems, newItem, itemIndex),
			};
		}
		default:
			return state;
	}
};
