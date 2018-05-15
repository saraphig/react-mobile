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
			open: false,
      isRefreshCaptcha: false,
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
  resend = (validate) => {
    const { email, lang } = this.props.location.state.query;
    const query = {
      email,
      type: 0,
      lang,
      validate,
    };
    this.props.dispatch({
      type: registerSaga.resendEmail,
      payload: {
        query,
        success: data => {
          this.fail(data.msg_code);
          this.setIsRefreshCaptcha();
        },
        fail: (code) => {
          this.fail(code);
          this.setIsRefreshCaptcha();
        },
        error: err => {
          this.error();
          this.setIsRefreshCaptcha();
        }
      }
    });
  };

  //设置是否刷新无感验证
  setIsRefreshCaptcha = () => {
    const { isRefreshCaptcha } = this.state;
    this.setState({
      isRefreshCaptcha: !isRefreshCaptcha
    })
  };

	render() {
		const { open, isRefreshCaptcha } = this.state;
		return (
			<div>
				<ConfirmEmailComp
					_onClickBTn={this._onClickBTn}
					_onOpenChange={this._onOpenChange}
					_open={open}
          resend={this.resend}
          isRefreshCaptcha={isRefreshCaptcha}
          setIsRefreshCaptcha={this.setIsRefreshCaptcha}
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
