import Link from 'next/link';
import st from './style.module.scss';

export const Logo = () => (
	<Link href="/">
		<a className={st.logo}>
			<h1>
				ProStore
			</h1>
		</a>
	</Link>
);
