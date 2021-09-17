import * as React from 'react';

interface Props {
	readonly companyName: string;
}

export const IntroCard: React.FunctionComponent<Props> = ({ companyName }: Props) => {
	return (
		<div>
			<h1>"Optimize your business today"</h1>
			<p>"Get a free consultation"</p>
			<button> Get Started</button>
		</div>
	);
};

export default IntroCard;
