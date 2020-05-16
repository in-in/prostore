import { Layout } from '~/components/Layout';
import { List } from '~/components/List';
import { TableModal } from '~/components/TableModal';

export default function Index() {
	return (
		<Layout>
			<List />
			<TableModal />
		</Layout>
	);
}
