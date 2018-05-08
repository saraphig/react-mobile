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
	Tabs
} from '../comComponent/common';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="confirmG2f">
				<Header />
				<div className="middleContent">
					<MidText
						text="二次验证"
						style={{
							marginTop: 43,
							marginBottom: 45
						}}
					/>
					<Input placeholder="谷歌验证码" />
					<Button style={{ marginTop: 30 }} buttonText="提交" />
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
