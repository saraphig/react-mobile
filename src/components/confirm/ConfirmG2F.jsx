import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './confirmG2f.scss';
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
import { Drawer, List, NavBar, Icon } from 'antd-mobile';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="confirmG2f">
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
					<div className="confirmG2f-middleContent">
						<MidText
							text="谷歌验证"
							className="midText-transfrom"
						/>
						<Input placeholder="谷歌验证码" />
						<Buttons
							className="buttons-transform"
							buttonText="提交"
						/>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
