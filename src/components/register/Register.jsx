import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import './register.scss';
import Header from 'components/comComponent/header/Header';
import MiddleContent from 'components/comComponent/middleContent/MiddleContent';
import { MidText, Input, Input2, Buttons, BottomTips } from '../comComponent/common';
import { dun } from 'src/config';

class RegisterComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pathName: '',
			phone: '', // 手机号
			nationCode: '86', // 区号
			validate: '', // 易盾验证码
			verifyCode: '', // 手机验证码
			inviterCode: '' // 邀请码
		};
		console.log('=====', props.formatmessage)
	}

	componentDidMount() {
		this.initNeCaptcha()
		// $(this.phone).intlTelInput({
		$("#test").intlTelInput({
			initialCountry: 'cn'
		});
		$("#test").on('countrychange', (e, countryData) => {
			this.setState({
				nationCode: countryData.dialCode
			});
		});
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
				element: "#dun",
				lang: 'zh-CN',
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
					)[0].innerText =
						'发送验证码';
				},
				onVerify: (err, data) => {
					let that = this;
					if (data) {
						that.setState({ validate: data.validate });
						that.props.getPhoneCode(this.state.phone, this.state.nationCode, data.validate)
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
	phoneNext(){
	  alert(99)
      this.props.phoneNext(this.state.phone, this.state.nationCode, this.state.verifyCode, this.state.inviterCode)
	}

	render() {
		const { pathName } = this.state;
		return (
			<div className="register">
				<Header />
				<div className="register-middleContent">
					<MidText
						text="手机绑定"
						className="midText-register-transfrom"
					/>
					<Input placeholder="手机号码" onChange={(val) => this.setState({phone: val})} comId= "test"/>
					<Input
						placeholder="输入验证码"
						types={1}
						text="发送验证码"
						onChange={(val) => this.setState({verifyCode: val})}
					/>
					<span id="dun"></span>
					<Input placeholder="推荐码(选填)" onChange={(val) => this.setState({inviterCode: val})}/>
					<Buttons
						className="buttons-register-transfrom"
						buttonText="下一步"
						// _onClick={this.props._onClickBTn}
						_onClick={() => this.phoneNext()}
					/>
					<BottomTips
						className="bottomTips-register-transfrom"
						BottomTips1="已有账号"
						BottomTips2="马上登录"
						pathName="/login"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(RegisterComp);
