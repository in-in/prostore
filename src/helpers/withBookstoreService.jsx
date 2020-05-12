import React from 'react';
import { BookstoreServiceConsumer } from '@services/bookstore-context';

export const withBookstoreService = () => (
	Wrapped,
) => (props) => (
	<BookstoreServiceConsumer>
		{
			(bookstoreService) => (
				<Wrapped {...props} bookstoreService={bookstoreService} />
			)
		}
	</BookstoreServiceConsumer>
);
