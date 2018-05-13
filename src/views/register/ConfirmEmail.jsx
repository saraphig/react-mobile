import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import ConfirmEmailComp from 'components/register/ConfirmEmail';
import { actionType as registerSaga } from 'models/sagas/register';
import { topToast } from 'utils/comFunction'

class ConfirmEmail extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props.location)
		let email = props.location.state.email || '';
		this.state = {
			email: email,
			open: false
		};
	}

	componentDidMount() {
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     paylod: '3245353'
		// })
		// console.log(this.props.token);
	}

	//按钮提交跳转事件
	_onClickBTn = code => {
		console.log(this.props);
		//TODO: for the featrue
		let query = {
			email: this.state.email,
			code
		};
		// 验证参数

		this.props.dispatch({
			type: registerSaga.emailValidate,
			payload: {
				query,
				success: data => {
					// this.setState({
					// 	phoneCode: data
					// })
					this.props.history.push('/login');
				},
				fail: this.fail,
				error: this.error
			}
		});
	};

	//请求返回失败code
	fail = err_code => {
    const {
      intl: { formatMessage }
    } = this.props;
    topToast(formatMessage({id: `code_${err_code}`}));
		// alert(err_code);
	};

	// 网络异常，请求失败
	error = err => {
    const {
      intl: { formatMessage }
    } = this.props;
    topToast(formatMessage({id: 'serverError'}));
		// alert('网络异常，请求失败', err);
	};

	//drawer
	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	// 底部的重新发送邮件
  resendEmail = () => {
    const { email, mailAuthToken, pwd, confirm_pwd, lang } = this.props.location.state;
    const query = {
      email,
      mailAuthToken,
      pwd,
      confirm_pwd,
      lang,
    };
    this.props.dispatch({
      type: registerSaga.registerEmail,
      payload: {
        query,
        success: data => {
          this.fail(data.msg_code)
        },
        fail: this.fail,
        error: this.error
      }
    });
  };

	render() {
		const { open } = this.state;
		return (
			<div>
				<ConfirmEmailComp
					_onClickBTn={this._onClickBTn}
					_onOpenChange={this._onOpenChange}
					_open={open}
          resendEmail={this.resendEmail}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(ConfirmEmail));
