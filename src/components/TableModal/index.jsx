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
			isOpen={!!router.query.cart}
			onRequestClose={() => router.push('/')}
			shouldCloseOnOverlayClick
			style={{
				// stylelint-disable-next-line selector-type-no-unknown, selector-type-case
				'overlay': {
					'zIndex': 3,
				},
				// stylelint-disable-next-line selector-type-no-unknown, selector-type-case
				'content': {
					'top': '1em',
					'right': '1em',
					'bottom': '1em',
					'left': '1em',
					'padding': '1em',
				},
			}}
		>
			<Table />
		</Modal>
	);
};
