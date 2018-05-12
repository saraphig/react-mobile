import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import MyInviteComp from 'components/extra/MyInvite';

class MyInvite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	componentDidMount() {
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     paylod: '3245353'
		// })
	}
	_onClick = () => {
		console.log(324);
	};

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<MyInviteComp
					_onClick={this._onClick}
					inviteUrl="http://top.one/?inviter=5a6e91d30ac3dwefwkgnwiungowinfownfiufiofiuwbfiuqbf"
					_onOpenChange={this._onOpenChange}
					_open={open}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(MyInvite));
