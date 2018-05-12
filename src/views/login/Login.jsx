import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login';
import LoginComp from 'components/login/login';
import { rsaEncrypt } from 'utils/comFunction'

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
	_onClickBTn = (email, pwd, validate) => {
		//TODO: for the featrue
		// either C has the G2F go to the ConfrimG2F
		// or go to the PhoneConfirm
		//or has the double conditions
		let query = {
			email,
			pwd: rsaEncrypt(pwd),
			validate,
			lang: localStorage.getItem('language')
		}
		// 验证query

		this.props.dispatch({
			type: loginSaga.userLogin,
			payload: { 
				query, 
				success: (data) => {
					const {
						is_google,
						// token,
						tmp_token,
						is_first_login,
						google_auth_token,
						is_top_for_fee,
						phone
					  } = data[0] ? data[0][0] : {};

					const params = {
						email,
						isFirstLogin: is_first_login,
						// token,
						tmp_token,
						google_auth_token,
						isGoogle: is_google,
						is_top_for_fee,
						phone
					  };
					// 如果既绑定了谷歌跟手机
					if (data[0][0].is_google && data['0'][0].phone != '0') {
						this.props.history.push({pathname:'/doubleConfirm', state: {params}});
					}
					// 如果只绑定了谷歌
					if (data[0][0].is_google && data['0'][0].phone == '0') {
						this.props.history.push({pathname:'/confirmG2F', state: {params}});
					}
					// 如果只绑定了手机
					if (!data[0][0].is_google && data['0'][0].phone != '0') {
						this.props.history.push({pathname:'/phoneConfirm', state: {params}});
					}

					// 如果都没绑定，请前往pc端绑定谷歌或手机
					if (!data[0][0].is_google && data['0'][0].phone == '0') {
						// 此处需改进，换成公用提示组件
						alert('请前往pc端绑定谷歌或手机')
					}
					// this.props.history.push('/confirmG2F');
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
		console.log(err)
	}

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

// const mapStateToProps = state => ({
// 	token: state.login.token
// });

// export default Index;
export default connect()(injectIntl(Login));
