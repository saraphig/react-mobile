import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import ConfirmEmailComp from 'components/register/ConfirmEmail';
import { actionType as registerSaga } from 'models/sagas/register'

class ConfirmEmail extends React.Component {
	constructor(props) {
		super(props);
		// let email = props.ocation.state.email || ''
		this.state = {
          email: '890i'
		}
	}

	componentDidMount() {
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     paylod: '3245353'
		// })
		// console.log(this.props.token);
	}

	//按钮提交跳转事件
	_onClickBTn = (code) => {
		console.log(this.props);
		//TODO: for the featrue
		let query = {
			email: this.state.email,
			code
		}
		// 验证参数

		this.props.dispatch({
			type: registerSaga.emailValidate,
			payload: { 
				query, 
				success: (data) => {
					// this.setState({
					// 	phoneCode: data
					// })
					this.props.history.push('/login');
				}, 
				fail: this.fail,
				error: this.error
			}
		})
	};

	//请求返回失败code
	fail = (err_code) => {
		alert(err_code)
	}
	
	// 网络异常，请求失败
	error = (err) => {
		alert('网络异常，请求失败',err)
	}

	render() {
		return (
			<div>
				<ConfirmEmailComp _onClickBTn={this._onClickBTn} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(ConfirmEmail));
