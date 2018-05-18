import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './login.scss';
import Header from 'components/comComponent/header/Header';
import { List, NavBar, Icon } from 'antd-mobile';
import Drawers from 'components/container/Drawers';
import { dun } from 'src/config';
import { MidText, Input, Buttons, BottomTips } from '../comComponent/common';
import { topToast, emailCheck } from 'utils/comFunction';

class LoginComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pwd: '',
			validate: '',
			started: false
		};
	}

	componentDidMount() {
		// this.start();
	}

	start() {
		if (this.state.email) {
			this.initNeCaptcha();
			this.setState({
				started: true
			});
		}
	}

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
					)[0].innerText = formatMessage({ id: 'login.login' });
				},
				onVerify: (err, data) => {
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
					// 验证密码
					if (!this.state.pwd) {
						topToast(formatMessage({ id: 'login.enterPassword' }));
						this.initNeCaptcha();
						return;
					}
					let that = this;
					if (data) {
						that.setState({ validate: data.validate });
					}
					this.props._onClickBTn(
						this.state.email,
						this.state.pwd,
						this.state.validate
					);
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

	render() {
		const {
			intl: { formatMessage },
			isRefreshCaptcha
		} = this.props;
		// 刷新验证码
		if (isRefreshCaptcha) {
			this.initNeCaptcha();
			this.props.setIsRefreshCaptcha();
		}

		const content = (
			<div className="login-middleContent">
				<p className="middleContent-img-logo">
					<img
						className="middleContent-logo"
						src={require('assets/images/TOP.ONE@logo.png')}
						alt="top.one"
					/>
				</p>
				<MidText
					className="midText-transform"
					text={formatMessage({ id: 'login.welcome' })}
				/>
				<Input
					placeholder={formatMessage({
						id: 'login.enterEmail'
					})}
					onChange={val => {
						this.setState({ email: val }, val => {
							if (!this.state.started) {
								this.start();
							}
							if (!this.state.email) {
								this.setState({
									started: false
								});
							}
						});
					}}
				/>
				<Input
					placeholder={formatMessage({
						id: 'login.enterPassword'
					})}
					// type="password"
					// autoComplete="new-password"
					onChange={val => {
						this.setState({ pwd: val });
					}}
					type="password"
					autoComplete="new-password"
				/>
				{/* <Buttons
			// style={{ marginTop: 30 }}
			buttonText="确定"
			_onClick={this.props._onClickBTn}
		/> */}
				{this.state.email ? (
					<div
						ref={bar => {
							this.slideBar = bar;
						}}
						id="yidun"
						// ref="slideBar"
					/>
				) : (
					<div className="btn-disabled">
						{formatMessage({ id: 'login.login' })}
					</div>
				)}

				<BottomTips
					BottomTips1={formatMessage({
						id: 'login.notRegister'
					})}
					BottomTips2={formatMessage({
						id: 'register.goRegister'
					})}
					className="bottomTips-transform"
					pathName="/register"
				/>
			</div>
		);
		console.log(this.state);
		return (
			<div className="login">
				<Header
					_onClick={this.props._onOpenChange}
					currentPage={'login'}
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

export default injectIntl(LoginComp);
