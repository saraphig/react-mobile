import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
// import $ from  'jquery';
// import '../../../lib/intl-tel-input/js/intlTelInput.min.js';
// import '../../../lib/intl-tel-input/css/intlTelInput.css';
import { List, NavBar, Icon } from 'antd-mobile';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import MiddleContent from 'components/comComponent/middleContent/MiddleContent';
import { topToast, phoneCheck } from 'utils/comFunction';
import { getCookie } from '../../utils/comFunction';
import { MidText, Input, Input2, Buttons, BottomTips } from '../comComponent/common';
import { dun } from 'src/config';
import { relativeTimeThreshold } from 'moment';
import './register.scss';

class RegisterComp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pathName: '',
			phone: '', // 手机号
			nationCode: '86', // 区号
			validate: '', // 易盾验证码
			verifyCode: '', // 手机验证码
			inviterCode: '', // 邀请码
			started: false
		};
		// console.log('=====', props.formatmessage);
	}
	componentDidMount() {
		// 登录状态，跳到首页
		const token = getCookie('token');
		let inviterCodes = '';
		if (token) {
			window.location.href = '/index';
			return;
		}
		document.body.className = 'body-no-scroll';
		this.initNeCaptcha();
		$('#test').intlTelInput({
			initialCountry: 'cn'
		});
		$('#test').on('countrychange', (e, countryData) => {
			this.setState({
				nationCode: countryData.dialCode
			});
		});

		if (this.props.location.search.split('=')[1].split('%20')) {
			inviterCodes = this.props.location.search.split('=')[1].split('%20')[0];
		} else {
			inviterCodes = location.search.split('=')[1];
		}

		this.setState({
			inviterCode: inviterCodes
		});
	}

	componentWillUnmount() {
		document.body.className = '';
	}

	componentWillReceiveProps(props) {
		// 倒计时结束初始化发送验证码
		if (props.count === 0) {
			this.initNeCaptcha();
		}
		// 请求失败初始化发送验证码
		if (props.isRefreshCaptcha) {
			this.initNeCaptcha();
			this.props.setIsRefreshCaptcha();
		}
	}

	// _onClickBTn = e => {
	// 	console.log(this.props);
	// 	this.setState({
	// 		pathName: '/registerEmail'
	// 	});
	// 	// console.log(this.state.pathName);
	// 	return false;
	// };

	// 智能无感知（易盾）
	initNeCaptcha = () => {
		const {
			intl: { formatMessage }
		} = this.props;
		initNECaptcha(
			{
				captchaId: dun.captchaId,
				element: '#dun',
				//lang: 'zh-CN',
				lang: formatMessage({ id: 'c.dun.lang' }),
				onReady: instance => {
					this.captchaIns = instance;
					// 验证码一切准备就绪，此时可正常使用验证码的相关功能
					//验证码logo的去除
					if (document.getElementsByClassName('yidun_intelli-icon')[0]) {
						document.getElementsByClassName('yidun_intelli-icon')[0].remove();
					}
					// document.getElementsByClassName('yidun_intelli-text')[0].setAttribute('style','font-size:14px;height:35px')
					// //验证码文字的修改
					document.getElementsByClassName(
						'yidun_intelli-text'
					)[0].innerText = formatMessage({
						id: 'register.postPhoneValidate'
					});
				},
				onVerify: (err, data) => {
					let that = this;
					if (data) {
						// 判断手机号
						if (!phoneCheck(this.state.phone)) {
							const {
								intl: { formatMessage }
							} = this.props;
							topToast(formatMessage({ id: 'code_122' }));
							this.initNeCaptcha();
							return;
						}
						that.setState({ validate: data.validate });
						that.props.getPhoneCode(
							this.state.phone,
							this.state.nationCode,
							data.validate
						);
					}
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

	// 手机验证码输入后下一步
	phoneNext() {
		this.props.phoneNext(
			this.state.phone,
			this.state.nationCode,
			this.state.verifyCode,
			this.state.inviterCode
		);
	}

	render() {
		const { pathName, phone } = this.state;
		const {
			intl: { formatMessage },
			count,
			sended
		} = this.props;
		// console.log(this.props)
		const content = (
			<div className="register-middleContent">
				<MidText
					text={formatMessage({ id: 'register.tips' })}
					className="midText-register-transfrom"
				/>
				<Input
					placeholder={formatMessage({
						id: 'register.phone'
					})}
					// onChange={val => this.setState({ phone: val })}

					onChange={val => {
						this.setState({ phone: val });
					}}
					comId="test"
				/>
				<Input
					placeholder={formatMessage({
						id: 'register.phoneValidate'
					})}
					types={1}
					sended={sended}
					time={count}
					text={formatMessage({
						id: 'register.postPhoneValidate'
					})}
					yidun={<span id="dun" />}
					onChange={val => this.setState({ verifyCode: val })}
				/>
				{/* <span id="dun" /> */}
				<Input
					placeholder={formatMessage({
						id: 'recommendedCode'
					})}
					value={this.state.inviterCode}
					onChange={val => this.setState({ inviterCode: val })}
				/>
				{phone ? (
					<Buttons
						className="buttons-register-transfrom"
						buttonText={formatMessage({ id: 'register.next' })}
						// _onClick={this.props._onClickBTn}
						_onClick={() => this.phoneNext()}
					/>
				) : (
					<p className="disabled buttons-register-transfrom ">
						{formatMessage({ id: 'register.next' })}
					</p>
				)}
				<BottomTips
					className="bottomTips-register-transfrom"
					BottomTips1={formatMessage({
						id: 'register.hasRegister'
					})}
					BottomTips2={formatMessage({
						id: 'register.loginNow'
					})}
					pathName="/login"
				/>
			</div>
		);
		return (
			<div className="register">
				<Header
					_onClick={this.props._onOpenChange}
					currentPage={'register'}
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

export default injectIntl(RegisterComp);
