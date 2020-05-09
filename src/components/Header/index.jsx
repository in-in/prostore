import { Logo } from '../Logo';
import { CartIndicator } from '../CartIndicator';
import st from './style.module.scss';

export const Header = () => (
	<header className={st.header}>
		<Logo />
		<CartIndicator />
	</header>
);
