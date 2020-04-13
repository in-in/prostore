import { Provider } from 'react-redux';
import { store } from '@store/store';
import { BookstoreServiceProvider } from '@service/bookstore-context';
import { BookstoreService } from '@service/bookstore';
import { ErrorBoundary } from '~/components/ErrorBoundary';
import { Layout } from '~/components/Layout';
import { List } from '~/components/List';

const bookstoreService = new BookstoreService();

export default function Index() {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<BookstoreServiceProvider value={bookstoreService}>
					<Layout>
						<p>Hello Next.js</p>
						<List books={[{
							'id': 1,
							'title': 'Production-Ready Microservices',
							'author': 'Susan J. Fowler',
						},
						{
							'id': 2,
							'title': 'Release It!',
							'author': 'Michael T. Nygard',
						}]}
						>
							sdfsdf
						</List>
					</Layout>
				</BookstoreServiceProvider>
			</ErrorBoundary>
		</Provider>
	);
}
