import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import DoubleConfirmComp from 'components/confirm/DoubleConfirm';
import {setCookie} from 'utils/comFunction'
import { topToast } from 'utils/comFunction'

class DoubleConfirm extends React.Component {
	constructor(props) {
		super(props);
		// 从路由获取的参数
		let info = props.location.state.params;
		this.state = {
			open: false,
			info: info
		};
	}

	componentDidMount() {
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     paylod: '3245353'
		// })
		console.log(this.props.token);
	}

	onClick = (googleCode, phoneCode, checked) => {
		console.log(googleCode, checked, this.state.info.google_auth_token)
		let query = {}
		if (checked == 'google') {
			query = {
				google_auth_token: this.state.info.google_auth_token,
				code: googleCode
			}
			// 调用saga
			this.props.dispatch({
				type: loginSaga.googleValidate,
				payload: {
					query,
					success: data => {
						console.log(data);
						setCookie('token', data.token)
						this.props.history.push({
							pathname: '/index',
							state: { token: data.mail_auth_token }
						});
					},
					fail: this.fail,
					error: this.error
				}
			});
		} else {
			query = {
				tmp_token: this.state.info.tmp_token,
				code: phoneCode
			}
			// 调用saga
			this.props.dispatch({
				type: loginSaga.phoneValidate,
				payload: {
					query,
					success: data => {
						console.log(data);
						setCookie('token', data.token)
						this.props.history.push({
							pathname: '/index',
							state: { token: data.mail_auth_token }
						});
					},
					fail: this.fail,
					error: this.error
				}
			});
		}
	}

	// 发送手机验证码
	sendPhoneCode(){
		let query = {
			tmp_token: this.state.info.tmp_token
		}
		// 调用saga
		this.props.dispatch({
			type: loginSaga.phoneCode,
			payload: {
				query,
				success: data => {
					console.log(data);
				},
				fail: this.fail,
				error: this.error
			}
		});
	}

  //请求返回失败code
  fail = (err_code) => {
    const {
      intl: { formatMessage }
    } = this.props;
    topToast(formatMessage({ id: `code_${err_code}` }));
    // alert(err_code)
  };

  // 网络异常，请求失败
  error = (err) => {
    // alert('网络异常，请求失败',err)
    // console.log(err)
    const {
      intl: { formatMessage }
    } = this.props;
    topToast(formatMessage({ id: 'serverError' }));
  };
	
	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<DoubleConfirmComp
					_onOpenChange={this._onOpenChange}
					_open={open}
					info={this.state.info}
					onClick={this.onClick}
					sendPhoneCode={() => this.sendPhoneCode()}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(DoubleConfirm));
