import { Provider } from 'react-redux';
import { store } from '@store/store';
import { BookstoreServiceProvider } from '@service/bookstore-context';
import { BookstoreService } from '@service/bookstore';
import { ErrorBoundary } from '~/components/ErrorBoundary';
import { Layout } from '~/components/Layout';

const bookstoreService = new BookstoreService();

export default function Index() {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<BookstoreServiceProvider value={bookstoreService}>
					<Layout>
						<p>Hello Next.js</p>
					</Layout>
				</BookstoreServiceProvider>
			</ErrorBoundary>
		</Provider>
	);
}
