import {
	ALL_BOOKS_REMOVE_FROM_CART,
	BOOK_ADDED_TO_CART,
	BOOK_REMOVE_FROM_CART,
	FETCH_BOOKS_FAILURE,
	FETCH_BOOKS_REQUEST,
	FETCH_BOOKS_SUCCESS,
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

export const bookRemoveFromCart = (bookId) => ({
	'type': BOOK_REMOVE_FROM_CART,
	'payload': bookId,
});

export const allBooksRemoveFromCart = (bookId) => ({
	'type': ALL_BOOKS_REMOVE_FROM_CART,
	'payload': bookId,
});

export const fetchBooks = (dispatch, bookstoreService) => () => {
	dispatch(booksRequested());
	bookstoreService.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((err) => dispatch(booksError(err)));
};
