import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './confirmG2f.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate
} from '../comComponent/common';
import { List, NavBar, Icon } from 'antd-mobile';

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
			<div className="confirmG2f-middleContent">
				<MidText
					text={formatMessage({ id: 'public.validate' })}
					className="midText-transfrom"
				/>
				<Input
					placeholder={formatMessage({
						id: 'public.enterValidate'
					})}
				/>
				<Buttons
					className="buttons-transform"
					buttonText={formatMessage({
						id: 'depositWithdraw.submit'
					})}
				/>
			</div>
		);

		return (
			<div className="confirmG2f">
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
