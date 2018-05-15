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
          )[0].innerText = formatMessage({ id: 'public.sure' });
          // '确 定';

          // if (
          // 	document.getElementsByClassName('yidun_tips__text')[0]
          // ) {
          // 	document
          // 		.getElementsByClassName('yidun_tips__text')[0]
          // 		.setAttribute('style', 'display:none');
          // }

          // //验证码验证完成的logo去除这里可以更改完成的后的logo
          // if (
          // 	document.getElementsByClassName('yidun_tips__icon')[0]
          // ) {
          // 	document
          // 		.getElementsByClassName('yidun_tips__icon')[0]
          // 		.remove();
          // }

          // //验证码完成后的文字样式
          // document.getElementsByClassName(
          // 	'yidun_classic-tips'
          // )[0].style.color =
          // 	'#fff';
        },
        onVerify: (err, data) => {
          let that = this;
          if (data) {
            that.setState({ validate: data.validate });
          }
          this.props.resend(
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
      isRefreshCaptcha,
		} = this.props;
// 刷新验证码
    if(isRefreshCaptcha){
      this.initNeCaptcha();
      this.props.setIsRefreshCaptcha();
    }
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
				<BottomTips
					className="bottomTips-confirmEmail-transfrom"
					BottomTips1={formatMessage({ id: 'noValidate' })}
					BottomTips2={formatMessage({
						id: 'resendEmail.resend'
					})}
          onClick={() => { this.props.resend() }}
					// pathName="/#"
				/>
        <div ref={bar => {this.slideBar = bar;}}/>
			</div>
		);
		return (
			<div className="confirmEmail">
				<Header _onClick={this.props._onOpenChange} />
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
