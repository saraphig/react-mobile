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
			phoneCode: '',
			mail_auth_token: '',
		}
		const {
			intl: { formatMessage }
		} = this.props;
		this.formatmessage = {
			register: formatMessage({id: 'register.register'})
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
	getPhoneCode = (phone, nationCode, validate) => {
		// console.log(phone, nationCode, validate)
		let query = {
			phone,
			nationCode,
			validate
		}
		// 验证query

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

	// 提交手机验证码
	phoneNext = (phone, nationCode, verifyCode, inviterCode) => {
		let query = {
			phone,
			nationCode,
			verifyCode,
			inviterCode
		}
		this.props.dispatch({
			type: registerSaga.phoneNext,
			payload: { 
				query, 
				success: (data) => {
					console.log(data)
					this.setState({
						mail_auth_token: data.mail_auth_token
					})
					this.history.push({pathname:'/registerEmail', state: { mail_auth_token: data.mail_auth_token }})
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
		alert('网络异常，请求失败',err)
	}

	render() {
		return (
			<div>
				<RegisterComp 
				  _onClickBTn={this._onClickBTn}
				  getPhoneCode={this.getPhoneCode}
				  phoneNext={this.phoneNext}
				  formatmessage={this.formatmessage}
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
