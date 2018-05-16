import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import RegisterEmailComp from 'components/register/RegisterEmail';
import { actionType as registerSaga } from 'models/sagas/register';
import { rsaEncrypt } from 'utils/comFunction';
import { topToast } from 'utils/comFunction'

class RegisterEmail extends React.Component {
	constructor(props) {
		super(props);
		let mail_auth_token = props.location.state.mail_auth_token || '';
		this.state = {
			mail_auth_token: mail_auth_token,
			open: false,
      isShowAgreement: false,
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
	_onClickBTn = (email, pwd, confirm_pwd) => {
		console.log(email, pwd, confirm_pwd);
		//TODO: for the featrue
		let query = {
			mailAuthToken: this.state.mail_auth_token,
			email,
			pwd: rsaEncrypt(pwd),
			confirm_pwd: rsaEncrypt(confirm_pwd),
			lang: localStorage.getItem('language')
		};
		// 需验证query

		this.props.dispatch({
			type: registerSaga.registerEmail,
			payload: {
				query,
				success: data => {
					// this.setState({
					// 	phoneCode: data
					// })
					this.props.history.push({
						pathname: '/confirmEmail',
						// state: { email: email }
            state: {query}
					});
				},
				fail: this.fail,
				error: this.error
			}
		});
	};

	//请求返回失败code
	fail = err_code => {
		// alert(err_code);
    const {
      intl: { formatMessage }
    } = this.props;
    topToast(formatMessage({id: `code_${err_code}`}));
	};

	// 网络异常，请求失败
	error = err => {
		// alert('网络异常，请求失败', err);
    const {
      intl: { formatMessage }
    } = this.props;
    topToast(formatMessage({id: 'serverError'}));
	};

	//drawer
	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	showAgreement = () => {
	  const { isShowAgreement } = this.state;
	  this.setState({
      isShowAgreement: !isShowAgreement
    })
  }

	render() {
		const { open, isShowAgreement } = this.state;
		return (
			<div>
				<RegisterEmailComp
					_onClickBTn={this._onClickBTn}
					_onOpenChange={this._onOpenChange}
					_open={open}
          showAgreement={this.showAgreement}
          isShowAgreement={isShowAgreement}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(RegisterEmail));
