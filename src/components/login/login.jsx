import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './login.scss';
import Header from 'components/comComponent/header/Header';
import { MidText, Input, Button, BottomTips } from '../comComponent/common';

class LoginComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="login">
				<Header />
				<div className="middleContent">
					<p className="middleContent-img-logo">
						<img
							className="middleContent-logo"
							src={require('assets/images/TOP.ONE@logo.png')}
							alt="top.one"
						/>
					</p>
					<MidText
						text="欢迎登录"
						style={{
							marginTop: 50,
							marginBottom: 10
						}}
					/>
					<Input placeholder="您的邮箱" />
					<Input placeholder="您的密码" />
					<Button style={{ marginTop: 30 }} buttonText="确定" />
					<BottomTips
						BottomTips1="已有账号?"
						BottomTips2="马上登录"
						style={{ marginTop: 138 }}
						pathName="/register"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(LoginComp);
