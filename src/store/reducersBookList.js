import {
	FETCH_BOOKS_FAILURE,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_SUCCESS,
} from './actionTypes';

export const updateBookList = (state, action) => {
	if (state === undefined) {
		return {
			'books': [],
			'loading': true,
			'error': false,
		};
	}

	switch (action.type) {
		case FETCH_BOOKS_FAILURE:
			return {
				'books': [],
				'loading': false,
				'error': action.payload,
			};

		case FETCH_BOOKS_REQUEST:
			return {
				'books': [],
				'loading': true,
				'error': false,
			};

		case FETCH_BOOKS_SUCCESS:
			return {
				'books': action.payload,
				'loading': false,
				'error': false,
			};

		default:
			return state.bookList;
	}
};
