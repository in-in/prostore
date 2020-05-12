import Warning from '../../assets/icons/warning.svg';
import st from './style.module.scss';

export const ErrorIndicator = () => (
	<div className={st.errorIndicator}>
		<Warning className={st.errorIndicator_icon} />
		<h2>
			Oops! Something went wrong!
		</h2>
		<p>Please reload the page and try again.</p>
	</div>
);
