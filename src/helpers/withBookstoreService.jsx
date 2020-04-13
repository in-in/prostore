import React from 'react';
import { BookstoreServiceConsumer } from '@service/bookstore-context';

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
