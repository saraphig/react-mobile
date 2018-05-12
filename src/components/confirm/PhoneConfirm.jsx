import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './phoneConfirm.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	sidebars
} from '../comComponent/common';
import { Drawer, List } from 'antd-mobile';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="phoneConfirm">
				<Header _onClick={this.props._onOpenChange}/>
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
					<div className="phoneConfirm-middleContent">
						<MidText
							text="手机验证"
							className="midText-phoneConfirm-transfrom"
						/>
						<Input placeholder="手机号码" />
						<Input
							placeholder="输入验证码"
							types={1}
							text="发送验证码"
						/>
						<Buttons
							className="buttons-phoneConfirm-transform"
							buttonText="提交"
						/>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
