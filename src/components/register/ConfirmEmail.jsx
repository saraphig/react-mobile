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

class ConfirmEmailComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="confirmEmail">
				<Header />
				<div className="confirmEmail-middleContent">
					<MidText
						text="邮箱验证"
						style={{
							marginTop: 64,
							marginBottom: 10
						}}
					/>
					<Validate
						style={{
							marginLeft: 30,
							marginRight: 30,
							marginTop: 32,
							marginBottom: 34
						}}
					/>
					{/* <Input placeholder="您的邮箱" />
					<Input placeholder="您的密码" />
					<Input placeholder="重复密码" /> */}
					{/* <ServerTips
						ServerTips1="我已阅读并同意TOP.ONE"
						ServerTips2="服务条款"
						pathName="/login"
						style={{ marginBottom: 17, marginTop: 17 }}
					/> */}
					<Buttons
						style={{ marginTop: 0 }}
						buttonText="完成"
						_onClick={this.props._onClickBTn}
					/>
					<BottomTips
						BottomTips1="没收到验证码"
						BottomTips2="重新发送"
						style={{ marginTop: 40 }}
						pathName="/#"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmEmailComp);
