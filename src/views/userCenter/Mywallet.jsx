import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import MyWalletComp from 'components/userCenter/MyWallet';

class MyWallet extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     paylod: '3245353'
		// })
		console.log(this.props.token);
	}

	render() {
		return (
			<div>
				<MyWalletComp />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(MyWallet));