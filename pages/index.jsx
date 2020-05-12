import { Provider } from 'react-redux';
import { store } from '@store/store';
import { BookstoreServiceProvider } from '@services/bookstore-context';
import { BookstoreService } from '@services/bookstore';
import { ErrorBoundary } from '~/components/ErrorBoundary';
import { Layout } from '~/components/Layout';
import { Header } from '~/components/Header';
import { List } from '~/components/List';
import { Table } from '~/components/Table';

const bookstoreService = new BookstoreService();

export default function Index() {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<BookstoreServiceProvider value={bookstoreService}>
					<Header />
					<Layout>
						<List />
						<Table />
					</Layout>
				</BookstoreServiceProvider>
			</ErrorBoundary>
		</Provider>
	);
}
