import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper } from '@components';

export const Home: React.FunctionComponent = () => {
	const { t } = useTranslation();
	const styles = {
		color: 'red',
		fontSize: '16px',
		textAlign: 'center'
	};
	return (
		<Wrapper>
			<h2 style={styles}>DON'T SETTLE FOR LESS</h2>
			<h3 style={{ color: 'green' }}>Our Services</h3>

			<p>
				Charles Edward Enterprises is a coaching, consulting, advertising and target marketing agency that
				markets both time and financial freedom.
			</p>
		</Wrapper>
	);
};

export default Home;
