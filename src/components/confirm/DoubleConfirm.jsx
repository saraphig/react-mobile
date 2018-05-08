import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './doubleConfirm.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Button,
	BottomTips,
	ServerTips,
	Validate,
	TopTabs
} from '../comComponent/common';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="DoubleConfirm">
				<Header />
				<div className="doubleConfirm-middleContent">
					<MidText
						text="二次验证"
						style={{
							marginTop: 43,
							marginBottom: 45
						}}
					/>
					<TopTabs />
					<Button style={{ marginTop: 30 }} buttonText="提交" />
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
