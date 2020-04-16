import Link from 'next/link';
import { Logo } from '../Logo';
import st from './style.module.scss';

export const Header = () => (
	<header className={st.header}>
		<Logo />
		<Link href="/cart">
			<a>cart</a>
		</Link>
	</header>
);
