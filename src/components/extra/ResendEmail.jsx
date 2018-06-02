import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Header from 'components/comComponent/header/Header';
import { actionType as registerSaga } from 'models/sagas/register';
import Drawers from 'components/container/Drawers';
import { topToast, emailCheck } from 'utils/comFunction';

import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate
} from '../comComponent/common';
import { List, NavBar, Icon } from 'antd-mobile';
import { dun } from 'src/config';
import './resendEmail.scss';

class ResendEmailComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			validate: ''
		};
	}

	componentDidMount() {
		this.initNeCaptcha();
	}

	_onChange = val => {
		this.setState({
			email: val
		});
	};

	fail = err_code => {
		const {
			intl: { formatMessage }
		} = this.props;
		topToast(formatMessage({ id: `code_${err_code}` }));
		// alert(err_code);
	};

	// 网络异常，请求失败
	error = err => {
		const {
			intl: { formatMessage }
		} = this.props;
		topToast(formatMessage({ id: 'serverError' }));
		// alert('网络异常，请求失败', err);
	};

	//验证码
	initNeCaptcha = () => {
		const {
			intl: { formatMessage }
		} = this.props;

		// const { email, password, validate } = this.state;

		initNECaptcha(
			{
				captchaId: dun.captchaId,
				element: this.slideBar,
				lang: formatMessage({ id: 'c.dun.lang' }),
				// lang: 'zh-CN',
				onReady: instance => {
					// 验证码一切准备就绪，此时可正常使用验证码的相关功能

					//验证码logo的去除
					if (
						document.getElementsByClassName('yidun_intelli-icon')[0]
					) {
						document
							.getElementsByClassName('yidun_intelli-icon')[0]
							.remove();
					}
					// document.getElementsByClassName('yidun_intelli-text')[0].setAttribute('style','font-size:14px;height:35px')
					// //验证码文字的修改
					document.getElementsByClassName(
						'yidun_intelli-text'
					)[0].innerText = formatMessage({
						id: 'resendEmail.resend'
					});
				},
				onVerify: (err, data) => {
					if (!this.state.email) {
						topToast(
							formatMessage({
								id: 'public.enterAccount'
							})
						);
						this.initNeCaptcha();
						return;
					}
					// 验证邮箱
					if (!emailCheck(this.state.email)) {
						topToast(
							formatMessage({
								id: 'register.validateInfo.emailError'
							})
						);
						this.initNeCaptcha();
						return;
					}

					let that = this;
					if (data) {
						that.setState({ validate: data.validate });
					}
					// this.props._onClickBTn(
					// 	this.state.email,
					// 	this.state.pwd,
					// 	this.state.validate
					// );

					this.resendEmail();
				},
				onError: (err, data) => {
					if (err) {
						this.initNeCaptcha();
					}
				}
			},
			res => {
				this.captchaCallback = res;
			}
		);
	};

    //重发邮件
	resendEmail = () => {
		const { language } = localStorage;
		const {
			intl: { formatMessage }
		} = this.props;
		const types = this.props._props.location.search.slice(6);

		if (!this.state.email) {
			topToast(
				formatMessage({
					id: 'public.enterAccount'
				})
			);
		}

		this.props._props.dispatch({
			type: registerSaga.resendEmail,
			payload: {
				query: {
					email: this.state.email,
					type: types ? types : 0, //通过code_30107 转到此页面 然后判断是否有传入的type
					lang: language || 'zh',
					validate: this.state.validate
				},
				success: data => {
					this.fail(data.msg_code);
					this.initNeCaptcha();
				},
				fail: code => {
					this.fail(code);
					this.initNeCaptcha();
				},
				error: err => {
					this.error();
					this.initNeCaptcha();
				}
			}
		});
	};

	render() {
		const {
			intl: { formatMessage }
		} = this.props;
		const content = (
			<div className="resendEmail-middleContent">
				<p className="middleContent-img-logo">
					<img
						className="middleContent-logo"
						src={require('assets/images/TOP.ONE@logo.png')}
						alt="top.one"
					/>
				</p>
				<Input
					placeholder={formatMessage({
						id: 'forget.email'
					})}
					onChange={this._onChange}
				/>
				<div
					ref={bar => {
						this.slideBar = bar;
					}}
					id="yidun"
				/>
			</div>
		);

		return (
			<div className="resendEmail">
				<Header
					_onClick={this.props._onOpenChange}
					_open={this.props._open}
				/>
				<Drawers
					childrenNode={content}
					_onOpenChange={this.props._onOpenChange}
					_open={this.props._open}
				/>
			</div>
		);
	}
}

export default injectIntl(ResendEmailComp);
