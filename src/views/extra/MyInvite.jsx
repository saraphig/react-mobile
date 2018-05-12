import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import MyInviteComp from 'components/extra/MyInvite';

class MyInvite extends React.Component {
	constructor(props) {
		super(props);
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

	render() {
		return (
			<div>
				<MyInviteComp
					_onClick={this._onClick}
					inviteUrl="http://top.one/?inviter=5a6e91d30ac3dwefwkgnwiungowinfownfiufiofiuwbfiuqbf"
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
