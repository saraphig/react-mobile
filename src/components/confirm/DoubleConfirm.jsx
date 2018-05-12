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
import { Drawer, List } from 'antd-mobile';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

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
					placeholder1={formatMessage({ id: 'register.phone' })}
					placeholder2={formatMessage({
						id: 'register.phoneValidate'
					})}
					placeholder3={formatMessage({
						id: 'google.code'
					})}
				/>
				<Buttons
					className="buttons-doubleConfirm-transform"
					buttonText={formatMessage({
						id: 'depositWithdraw.submit'
					})}
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
