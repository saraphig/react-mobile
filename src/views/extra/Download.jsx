import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import DownloadComp from 'components/extra/Download';

class Download extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div>
				<DownloadComp />
			</div>
		);
	}
}

export default injectIntl(Download);
