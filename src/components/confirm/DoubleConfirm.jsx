import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './doubleConfirm.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	TopTabs
} from '../comComponent/common';
import { List } from 'antd-mobile';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
		let checked = '';
		if (!props.info.isGoogle) {
			checked = 'phone';
		} else {
			checked = 'google';
		}
		this.state = {
			validate: '',
			googleCode: '',
			checked: checked
		};
		// console.log(props.info)
	}

	componentDidMount() {}

	// 提交
	onClick() {
		this.props.onClick(
			this.state.googleCode,
			this.state.validate,
			this.state.checked
		);
	}

	render() {
		const {
			intl: { formatMessage }
		} = this.props;

		const content = (
			<div className="doubleConfirm-middleContent">
				<MidText
					text={formatMessage({ id: 'doubleConfirm' })}
					className="midText-doubleConfirm-transfrom"
				/>
				<TopTabs
					googleHolder={formatMessage({ id: 'google.code' })}
					phoneHolder={formatMessage({
						id: 'register.phone'
					})}
					validateHolder={formatMessage({
						id: 'register.phoneValidate'
					})}
					validateChange={val => {
						this.setState({ validate: val });
					}}
					googleChange={val => {
						this.setState({ googleCode: val });
					}}
					checkChange={val => {
						this.setState({ checked: val });
					}}
					info={this.props.info}
					sendPhoneCode={this.props.sendPhoneCode}
				/>
				<Buttons
					className="buttons-doubleConfirm-transform"
					buttonText={formatMessage({
						id: 'depositWithdraw.submit'
					})}
					_onClick={() => this.onClick()}
				/>
			</div>
		);
		return (
			<div className="DoubleConfirm">
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

export default injectIntl(ConfirmG2FComp);
