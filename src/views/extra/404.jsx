import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import NotFoundComp from 'components/extra/404';

class NotFound extends React.Component {
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
				<NotFoundComp _onClick={this._onClick} />
			</div>
		);
	}
}

// export default Index;
export default injectIntl(NotFound);
