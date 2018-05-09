import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './login.scss';
import Header from 'components/comComponent/header/Header';
import { MidText, Input, Buttons, BottomTips } from '../comComponent/common';

class LoginComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="login">
				<Header />
				<div className="login-middleContent">
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
					<Buttons
						style={{ marginTop: 30 }}
						buttonText="确定"
						_onClick={this.props._onClickBTn}
					/>
					<BottomTips
						BottomTips1="尚未注册"
						BottomTips2="立即注册"
						style={{ marginTop: 138 }}
						pathName="/register"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(LoginComp);
