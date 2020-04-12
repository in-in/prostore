import { BOOKS_LOADED } from './actionTypes';

export const booksLoaded = (newBooks) => ({
	'type': BOOKS_LOADED,
	'payload': newBooks,
});
