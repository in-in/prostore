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
			const newItem = {
				'id': book.id,
				'name': book.title,
				'count': 1,
				'total': book.price,
			};
			return {
				...state,
				'cartItems': [
					...state.cartItems,
					newItem,
				],
			};
		}
		default:
			return state;
	}
};
