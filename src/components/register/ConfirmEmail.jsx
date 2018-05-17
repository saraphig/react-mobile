import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './confirmEmail.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate
} from '../comComponent/common';
import Drawers from 'components/container/Drawers';
import { dun } from 'src/config';

class ConfirmEmailComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// validate: '798689'
			validate: ''
		};
	}

	componentDidMount() {
		this.initNeCaptcha();
	}

  componentWillReceiveProps(props){
    // 请求失败初始化发送验证码
    if (props.isRefreshCaptcha) {
      this.initNeCaptcha();
      this.props.setIsRefreshCaptcha();
    }
  }

	_onClickBTn() {
		// alert(this.state.validate);
		this.props._onClickBTn(this.state.validate);
	}

	// 网易云盾
	initNeCaptcha = () => {
		const {
			intl: { formatMessage }
		} = this.props;

		// const { email, password, validate } = this.state;

		initNECaptcha(
			{
				captchaId: dun.captchaId,
				element: '#yi-dun',
				lang: formatMessage({ id: 'c.dun.lang' }),
				// lang: 'zh-CN',
				onReady: instance => {
					let text = formatMessage({
						id: 'resendEmail.resend'
					});
					// 验证码一切准备就绪，此时可正常使用验证码的相关功能
					//验证码logo的去除
					if (
						document.getElementsByClassName('yidun_intelli-icon')[0]
					) {
						document
							.getElementsByClassName('yidun_intelli-icon')[0]
							.remove();
					}

					document.getElementsByClassName(
						'yidun_intelli-text'
					)[0].innerHTML =
						formatMessage({ id: 'noValidate' }) +
						'?' +
						"<span class='resend'>" +
						text +
						'</span>';
				},
				onVerify: (err, data) => {
					let that = this;
					if (data) {
						that.setState({
							validate: data.validate
						});
					}
					that.props.resend(that.state.validate);
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
			isRefreshCaptcha,
			count
		} = this.props;
		const content = (
			<div className="confirmEmail-middleContent">
				<MidText
					text={formatMessage({
						id: 'withdrawVerify.validate'
					})}
					className="midText-confirmEmail-transfrom"
				/>
				<Validate
					className="validate-confirmEmail-transfrom"
					onChange={val => {
						// console.log(val);
						this.setState({ validate: val });
					}}
				/>
				<Buttons
					className="buttons-confirmEmail-transfrom"
					buttonText={formatMessage({ id: 'public.sure' })}
					_onClick={() => this._onClickBTn()}
				/>
				<div className="bottom-tips">
					<span id="yi-dun" />
					)}
				</div>
			</div>
		);

		// 倒计时结束初始化发送验证码
		if (count === 0) {
			this.initNeCaptcha();
		}
		// 请求失败初始化发送验证码
		if (isRefreshCaptcha) {
			this.initNeCaptcha();
			this.props.setIsRefreshCaptcha();
		}
		return (
			<div className="confirmEmail">
				<Header _onClick={this.props._onOpenChange} currentPage={'register'}/>
				<Drawers
					childrenNode={content}
					_onOpenChange={this.props._onOpenChange}
					_open={this.props._open}
				/>
			</div>
		);
	}
}

export default injectIntl(ConfirmEmailComp);
