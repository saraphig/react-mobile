import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import AgreementComp from 'components/extra/Agreement';

class Agreement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	_onClick = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<div>
				<AgreementComp _onClick={this._onClick} />
			</div>
		);
	}
}

// export default Index;
export default injectIntl(Agreement);
