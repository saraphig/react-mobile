import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import LoginComp from 'components/login/Login';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     paylod: '3245353'
		// })
	}

	//按钮提交跳转事件
	_onClickBTn = () => {
		console.log(this.props);
        //TODO: for the featrue
        // either C has the G2F go to the ConfrimG2F
        // or go to the PhoneConfirm
        //or has the double conditions
		this.props.history.push('/confirmG2F');
	};

	render() {
		return (
			<div>
				<LoginComp _onClickBTn={this._onClickBTn} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(Login));
