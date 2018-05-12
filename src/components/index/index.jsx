import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './index.scss';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	sidebars,
	CoinTabs
} from '../comComponent/common';

class IndexComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div className="indexPage">
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
					<div className="index-middleContent">
						<CoinTabs />
					</div>
				</Drawer>
			</div>
		);
	}
}

export default injectIntl(IndexComp);
