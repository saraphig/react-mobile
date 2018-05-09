import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './registerEmail.scss';
import Header from 'components/comComponent/header/Header';
import MiddleContent from 'components/comComponent/middleContent/MiddleContent';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips
} from '../comComponent/common';

class RegisterEmailComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pathName: ''
		};
	}

	componentDidMount() {}

	render() {
		const { pathName } = this.state;
		return (
			<div className="registerEmail">
				<Header />
				<div className="registerEmail-middleContent">
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
					<Buttons
						style={{ marginTop: 0 }}
						buttonText="下一步"
						_onClick={this.props._onClickBTn}
					/>
					<BottomTips
						BottomTips1="已有账号"
						BottomTips2="马上登录"
						style={{ marginTop: 138 }}
						pathName="/login"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(RegisterEmailComp);
