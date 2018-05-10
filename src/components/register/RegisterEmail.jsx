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
						className="midText-registerEmail-transfrom"
					/>
					<Input placeholder="您的邮箱" />
					<Input placeholder="您的密码" />
					<Input placeholder="重复密码" />
					<ServerTips
						className="ServerTips-registerEmail-transfrom"
						ServerTips1="我已阅读并同意TOP.ONE"
						ServerTips2="服务条款"
						pathName="/login"
					/>
					<Buttons
						className="Buttons-registerEmail-transfrom"
						buttonText="下一步"
						_onClick={this.props._onClickBTn}
					/>
					<BottomTips
						className="bottomTips-registerEmail-transfrom"
						BottomTips1="已有账号"
						BottomTips2="马上登录"
						pathName="/login"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(RegisterEmailComp);
