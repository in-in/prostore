import { Logo } from '../Logo';
import { CartIndicator } from '../CartIndicator';
import st from './style.module.scss';

export const Header = () => (
	<header className={st.header}>
		<Logo />
		<CartIndicator numItems="5" total="230" />
	</header>
);
