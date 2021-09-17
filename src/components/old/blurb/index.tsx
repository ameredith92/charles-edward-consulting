import * as React from 'react';

interface Props {
	readonly companyName: string;
}

export const Blurb: React.FunctionComponent<Props> = ({ companyName }: Props) => {
	return (
		<p>
			{companyName} is a coaching, consulting, advertising and target marketing agency that markets both time and
			financial freedom.
		</p>
	);
};

export default Blurb;
