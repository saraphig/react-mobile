import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './register.scss';
import Header from 'components/comComponent/header/Header';
import MiddleContent from 'components/comComponent/middleContent/MiddleContent';
import {
	MidText,
	Input,
	Button,
	BottomTips,
	ServerTips
} from '../comComponent/common';

class RegisterEmailComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="login">
				<Header />
				<div className="middleContent">
					<MidText
						text="邮箱注册"
						style={{
							marginTop: 64,
							marginBottom: 10
						}}
					/>
					<Input placeholder="您的邮箱" />
					<Input placeholder="您的密码" />
					<Input placeholder="重复密码" />
					<ServerTips
						ServerTips1="我已阅读并同意TOP.ONE"
						ServerTips2="服务条款"
						pathName="/login"
						style={{ marginBottom: 17, marginTop: 17 }}
					/>
					<Button style={{ marginTop: 0 }} buttonText="下一步" />
					<BottomTips
						BottomTips1="尚未注册"
						BottomTips2="立即注册"
						style={{ marginTop: 138 }}
						pathName="/login"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(RegisterEmailComp);
