import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
// import { actionType as registerSaga } from 'models/sagas/register';
import ResendEmailComp from 'components/extra/ResendEmail';
// import { topToast } from 'utils/comFunction';

class ResendEmail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<ResendEmailComp
					_onOpenChange={this._onOpenChange}
					_open={open}
					_props={this.props}
				/>
			</div>
		);
	}
}

// export default Index;
export default injectIntl(ResendEmail);
