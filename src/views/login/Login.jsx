import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import LoginComp from 'components/login/Login';

class Login extends React.Component {
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

	//按钮提交跳转事件
	_onClickBTn = () => {
		//TODO: for the featrue
		// either C has the G2F go to the ConfrimG2F
		// or go to the PhoneConfirm
		//or has the double conditions
		this.props.history.push('/confirmG2F');
	};

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<LoginComp
					_onClickBTn={this._onClickBTn}
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
export default connect(mapStateToProps)(injectIntl(Login));
