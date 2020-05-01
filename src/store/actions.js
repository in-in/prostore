import { BOOKS_LOADED, BOOKS_REQUESTED } from './actionTypes';

export const booksLoaded = (newBooks) => ({
	'type': BOOKS_LOADED,
	'payload': newBooks,
});

export const booksRequested = () => ({
	'type': BOOKS_REQUESTED,
});
