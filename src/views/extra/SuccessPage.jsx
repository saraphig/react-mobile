import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import RegisterResultComp from 'components/comComponent/registerResult/registerResult';

class RegisterResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	componentDidMount() {}

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;
		const _code = this.props.location.search.slice(1);
		console.log(_code);
		return (
			<div>
				<RegisterResultComp
					_onOpenChange={this._onOpenChange}
					_open={open}
					_code={_code}
					_displayType="success"
				/>
			</div>
		);
	}
}

// export default Index;
export default injectIntl(RegisterResult);
