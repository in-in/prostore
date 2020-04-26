import { Provider } from 'react-redux';
import { store } from '@store/store';
import { BookstoreServiceProvider } from '@service/bookstore-context';
import { BookstoreService } from '@service/bookstore';
import { ErrorBoundary } from '~/components/ErrorBoundary';
import { Layout } from '~/components/Layout';
import { Header } from '~/components/Header';
import { List } from '~/components/List';
import { CartTable } from '~/components/CartTable';

const bookstoreService = new BookstoreService();

export default function Index() {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<BookstoreServiceProvider value={bookstoreService}>
					<Header />
					<Layout>
						<List />
						<CartTable />
					</Layout>
				</BookstoreServiceProvider>
			</ErrorBoundary>
		</Provider>
	);
}
