import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './phoneConfirm.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Button,
	BottomTips,
	ServerTips,
	Validate
} from '../comComponent/common';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="phoneConfirm">
				<Header />
				<div className="middleContent">
					<MidText
						text="手机验证"
						style={{
							marginTop: 64,
							marginBottom: 41
						}}
					/>
					<Input placeholder="手机号码" />
                    <Input placeholder="输入验证码" types={1} text='发送验证码'/>
					<Button style={{ marginTop: 30 }} buttonText="提交" />
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
