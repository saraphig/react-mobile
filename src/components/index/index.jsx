import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './index.scss';
import { List, NavBar, Icon } from 'antd-mobile';
import Drawers from 'components/container/Drawers';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
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
		const content = (
			<div className="index-middleContent">
				<CoinTabs />
			</div>
		);
		return (
			<div className="indexPage">
				<Header _onClick={this.props._onOpenChange} />
				<Drawers
					childrenNode={content}
					_onOpenChange={this.props._onOpenChange}
					_open={this.props._open}
				/>
			</div>
		);
	}
}

export default injectIntl(IndexComp);
