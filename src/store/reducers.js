import { BOOKS_LOADED, BOOKS_REQUESTED, BOOKS_ERROR } from './actionTypes';

const initialState = {
	'books': [],
	'loading': true,
	'error': false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BOOKS_REQUESTED:
			return {
				'books': [],
				'loading': true,
				'error': false,
			};
		case BOOKS_LOADED:
			return {
				'books': action.payload,
				'loading': false,
				'error': false,
			};
		case BOOKS_ERROR:
			return {
				'books': [],
				'loading': false,
				'error': action.payload,
			};
		default:
			return state;
	}
};
