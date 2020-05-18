import { useRouter } from 'next/router';
import Modal from 'react-modal';
import { Table } from '~/components/Table';
import st from './style.module.scss';

Modal.setAppElement('#__next');


export const TableModal = () => {
	const router = useRouter();
	return (
		<Modal
			bodyOpenClassName={st.tableModal__open}
			overlayClassName={st.tableModal}
			isOpen={!!router.query.cart}
			onRequestClose={() => router.push('/')}
		>
			<Table />
		</Modal>
	);
};
