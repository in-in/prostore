import {
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_FAILURE,
} from './actionTypes';

const initialState = {
	'books': [],
	'loading': true,
	'error': false,
	'cartItems': [
		{
			'id': 1,
			'name': 'book 1',
			'count': 3,
			'total': 150,
		},
		{
			'id': 2,
			'name': 'book 2',
			'count': 4,
			'total': 220,
		},
	],
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
		default:
			return state;
	}
};
