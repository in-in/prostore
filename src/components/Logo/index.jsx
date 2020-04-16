import Link from 'next/link';
import st from './style.module.scss';

export const Logo = () => (
	<Link href="/">
		<a className={st.logo}>
			ProStore
		</a>
	</Link>
);
