import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './registerEmail.scss';
import Header from 'components/comComponent/header/Header';
import MiddleContent from 'components/comComponent/middleContent/MiddleContent';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips
} from '../comComponent/common';
import Drawers from 'components/container/Drawers';
import { topToast } from 'utils/comFunction';

class RegisterEmailComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pathName: '',
			agree: false,
			email: '',
			pwd: '',
			confirm_pwd: ''
		};
	}

	componentDidMount() {}

	// 注册
	onClick() {
		if (this.state.agree) {
			this.props._onClickBTn(
				this.state.email,
				this.state.pwd,
				this.state.confirm_pwd
			);
		} else {
      const {
        intl: { formatMessage }
      } = this.props;
      topToast(formatMessage({id: 'noAgreement'}))
			// alert('您并未同意协议');
		}
	}
	render() {
		const { pathName } = this.state;
		const {
			intl: { formatMessage },
      isShowAgreement,
      showAgreement,
		} = this.props;
		const content = (
			<div className="registerEmail-middleContent">
				<MidText
					text={formatMessage({ id: 'register.mailTips' })}
					className="midText-registerEmail-transfrom"
				/>
				<Input
					placeholder={formatMessage({ id: 'resendEmail.email' })}
					onChange={val => {
						this.setState({ email: val });
					}}
				/>
				<Input
					placeholder={formatMessage({ id: 'login.enterPassword' })}
					onChange={val => {
						this.setState({ pwd: val });
					}}
					type="password"
					autoComplete="new-password"
				/>
				<Input
					placeholder={formatMessage({
						id: 'register.confirmPassword'
					})}
					onChange={val => {
						this.setState({ confirm_pwd: val });
					}}
					type="password"
					autoComplete="new-password"
				/>
				<ServerTips
					className="ServerTips-registerEmail-transfrom"
					ServerTips1={formatMessage({ id: 'register.hadRead' })}
					ServerTips2={formatMessage({ id: 'register.agreement' })}
          btnText={formatMessage({id: 'public.confirm'})}
					//pathName="/login"
					onChange={val => {
						this.setState({ agree: val });
					}}
          showAgreement={showAgreement}
          isShowAgreement={isShowAgreement}
				/>
				<Buttons
					className="Buttons-registerEmail-transfrom"
					buttonText={formatMessage({ id: 'register.next' })}
					// _onClick={this.props._onClickBTn}
					_onClick={() => this.onClick()}
				/>
				<BottomTips
					className="bottomTips-registerEmail-transfrom"
					BottomTips1={formatMessage({ id: 'register.hasRegister' })}
					BottomTips2={formatMessage({ id: 'register.loginNow' })}
					pathName="/login"
				/>
			</div>
		);
		return (
			<div className="registerEmail">
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

export default injectIntl(RegisterEmailComp);
