import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import '../comComponent/common.scss';
import { localeList } from '../../config';
import {
	Tabs,
	WhiteSpace,
	Badge,
	Button,
	List,
	Switch,
	NavBar,
	Drawer
} from 'antd-mobile';
// import defaultUserImg from 'assets/images/user_head_img@2x.png';
// import ListView from './ListView';
// import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

//侧栏内容框
const sidebars = (
	<List className="sideBars">
		<List.Item key={1} thumb={require('assets/images/iconman.png')} className='siderbar-logo'>
			<FormattedMessage id={'usercenter.login.trade'} />
		</List.Item>
		<Link to="/index">
			<List.Item key={2}>
				<FormattedMessage id={'public.index'} />
			</List.Item>
		</Link>
		<Link to="/userCenter">
			<List.Item key={3}>
				<FormattedMessage id={'home.personalCenter'} />
			</List.Item>
		</Link>
		<Link to="/myWallet">
			<List.Item key={4}>
				<FormattedMessage id={'home.assets'} />
			</List.Item>
		</Link>
		<Link to="/login">
			<List.Item key={5}>
				<FormattedMessage id={'usercenter.logout'} />
			</List.Item>
		</Link>

		<List.Item key={6} onClick={() => setLanguage()}>
			{localStorage.getItem('language') == 'zh' ? 'English' : '中文'}
		</List.Item>
	</List>
);
const setLanguage = () => {
	const language = localStorage.getItem('language');
	let locale = {};
	if (language == 'en') {
		locale = localeList[1];
	} else if (language == 'zh') {
		locale = localeList[0];
	}
	localStorage.setItem('timezone', locale.timezone);
	localStorage.setItem('language', locale.language);
	localStorage.setItem('languageText', locale.languageText);
	window.location.reload();
};

class Drawers extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// console.log(this.props);
	}
	// 多语言切换

	render() {
		return (
			<Drawer
				className="my-drawer"
				style={{
					minHeight: $('.header').height()
						? document.documentElement.clientHeight -
						  $('.header').height()
						: document.documentElement.clientHeight
				}}
				enableDragHandle={true}
				dragToggleDistance={30}
				position="right"
				sidebar={sidebars}
				open={this.props._open}
				onOpenChange={this.props._onOpenChange}
				sidebarStyle={{ background: '#1B1B1B' }}
			>
				{/* <div className="index-middleContent">
					<CoinTabs />
                </div> */}
				{this.props.childrenNode}
			</Drawer>
		);
	}
}

export default injectIntl(Drawers);
