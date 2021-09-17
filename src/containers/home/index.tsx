import * as React from 'react';
import { useTranslation } from 'react-i18next';
import IntroCard from '@src/components/introCard';
import { Wrapper } from '@components';
import Blurb from '@src/components/old/blurb';

export const Home: React.FunctionComponent = () => {
	// const { t } = useTranslation();
	const styles = {
		color: 'red',
		fontSize: '16px',
		textAlign: 'center'
	};
	const companies = ['Target', 'Walmart', 'Bed Bath and Beyond', 'Five Below', 'Applebees', 'Kohls'];
	const companyHtml = [];
	for (let i = 0; i < companies.length; i++) {
		companyHtml.push(<Blurb companyName={companies[i]}></Blurb>);
	}
	return (
		<Wrapper>
			<h2 style={styles}>DON'T SETTLE FOR LESS</h2>
			<h3 style={{ color: 'green' }}>Our Services</h3>
			{companyHtml}

			<p>
				Charles Edward Enterprises is a coaching, consulting, advertising and target marketing agency that
				markets both time and financial freedom.
			</p>
			<IntroCard></IntroCard>
		</Wrapper>
	);
};

export default Home;
