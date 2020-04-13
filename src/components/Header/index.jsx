import Link from 'next/link';
import st from './style.scss';

const Header = () => (
	<header className={st.header}>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/cart">
			<a>cart</a>
		</Link>
	</header>
);

export default Header;
