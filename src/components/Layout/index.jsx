import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { BookstoreServiceProvider } from '@services/bookstore-context';
import { BookstoreService } from '@services/bookstore';
import st from './style.module.scss';
import { Header } from '~/components/Header';
import { ErrorBoundary } from '~/components/ErrorBoundary';

const bookstoreService = new BookstoreService();


export const Layout = ({ children }) => (
	<Provider store={store}>
		<ErrorBoundary>
			<BookstoreServiceProvider value={bookstoreService}>
				<Header />
				<main className={st.layout}>
					{children}
				</main>
			</BookstoreServiceProvider>
		</ErrorBoundary>
	</Provider>
);

Layout.propTypes = {
	'children': PropTypes.node.isRequired,
};
