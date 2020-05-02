import {
	FETCH_BOOKS_SUCCESS,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_FAILURE,
	BOOK_ADDED_TO_CART,
} from './actionTypes';

export const booksLoaded = (newBooks) => ({
	'type': FETCH_BOOKS_SUCCESS,
	'payload': newBooks,
});

export const booksRequested = () => ({
	'type': FETCH_BOOKS_REQUEST,
});

export const booksError = (error) => ({
	'type': FETCH_BOOKS_FAILURE,
	'payload': error,
});

export const bookAddedToCart = (bookId) => ({
	'type': BOOK_ADDED_TO_CART,
	'payload': bookId,
});

export const fetchBooks = (dispatch, bookstoreService) => () => {
	dispatch(booksRequested());
	bookstoreService.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((err) => dispatch(booksError(err)));
};
