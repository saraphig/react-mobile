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
	ServerTips,
	sidebars
} from '../comComponent/common';
import { Drawer } from 'antd-mobile';

class RegisterEmailComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pathName: '',
			agree: false,
			email: '',
			pwd: '',
			confirm_pwd: ''
		};
	}

	componentDidMount() {}

	// 注册
	onClick() {
		if (this.state.agree) {
			this.props._onClickBTn(
				this.state.email,
				this.state.pwd,
				this.state.confirm_pwd
			);
		} else {
			alert('您并未同意协议');
		}
	}
	render() {
		const { pathName } = this.state;
		return (
			<div className="registerEmail">
				<Header _onClick={this.props._onOpenChange} />
				<Drawer
					className="my-drawer"
					style={{ minHeight: document.documentElement.clientHeight }}
					enableDragHandle={true}
					dragToggleDistance={0}
					position="right"
					sidebar={sidebars}
					open={this.props._open}
					onOpenChange={this.props._onOpenChange}
					sidebarStyle={{ background: '#1B1B1B' }}
				>
					<div className="registerEmail-middleContent">
						<MidText
							text="邮箱注册"
							className="midText-registerEmail-transfrom"
						/>
						<Input
							placeholder="您的邮箱"
							onChange={val => {
								this.setState({ email: val });
							}}
						/>
						<Input
							placeholder="您的密码"
							onChange={val => {
								this.setState({ pwd: val });
							}}
						/>
						<Input
							placeholder="重复密码"
							onChange={val => {
								this.setState({ confirm_pwd: val });
							}}
						/>
						<ServerTips
							className="ServerTips-registerEmail-transfrom"
							ServerTips1="我已阅读并同意TOP.ONE"
							ServerTips2="服务条款"
							pathName="/login"
							onChange={val => {
								this.setState({ agree: val });
							}}
						/>
						<Buttons
							className="Buttons-registerEmail-transfrom"
							buttonText="下一步"
							// _onClick={this.props._onClickBTn}
							_onClick={() => this.onClick()}
						/>
						<BottomTips
							className="bottomTips-registerEmail-transfrom"
							BottomTips1="已有账号"
							BottomTips2="马上登录"
							pathName="/login"
						/>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default injectIntl(RegisterEmailComp);
