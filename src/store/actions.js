import { BOOKS_LOADED, BOOKS_REQUESTED, BOOKS_ERROR } from './actionTypes';

export const booksLoaded = (newBooks) => ({
	'type': BOOKS_LOADED,
	'payload': newBooks,
});

export const booksRequested = () => ({
	'type': BOOKS_REQUESTED,
});

export const booksError = (error) => ({
	'type': BOOKS_ERROR,
	'payload': error,
});

export const fetchBooks = (dispatch, bookstoreService) => () => {
	dispatch(booksRequested());
	bookstoreService.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((err) => dispatch(booksError(err)));
};
