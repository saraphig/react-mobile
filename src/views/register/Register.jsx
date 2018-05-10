import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import RegisterComp from 'components/register/Register';
import { dun } from 'src/config';
import { actionType as registerSaga } from 'models/sagas/register'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneCode: ''
		}
	}

	componentDidMount() {
	}


	//按钮提交跳转事件
	_onClickBTn = () => {
		console.log(this.props);
		//TODO: for the featrue
		this.props.history.push('/registerEmail');
	};

	// 获取手机验证码
	getPhoneCode = (phone, nationCode, verifyCode) => {
		let query = {
			phone,
			nationCode,
			verifyCode
		}
		this.props.dispatch({
			type: registerSaga.getPhoneCode,
			payload: { 
				query, 
				success: (data) => {
					this.setState({
						phoneCode: data
					})
				}, 
				fail: this.fail,
				error: this.error
			}
		})
	}

	//请求返回失败code
	fail = (err_code) => {
		alert(err_code)
	}
	
	// 网络异常，请求失败
	error = (err) => {
		alert('网络异常，请求失败')
	}

	render() {
		return (
			<div>
				<RegisterComp 
				  _onClickBTn={this._onClickBTn}
				  getPhoneCode={this.getPhoneCode}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(Register));
