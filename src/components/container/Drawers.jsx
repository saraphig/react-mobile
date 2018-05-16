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
import request from 'utils/request';
import { getCookie, delCookie, topToast } from 'utils/comFunction';

class Drawers extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// console.log(this.props);
	}
	// 退出登陆
	// 抽屉每个页面都引入，每个页面都写就很多，所以写在这边
	loginOut = () => {
		const token = getCookie('token');
		request({
			url: '/api/logout',
			method: 'post',
			data: {
				token
			}
		})
			.then(res => {
				if (res.data.error_code === 200) {
					delCookie('token');
					location.pathname = '/login';
				}
			})
			.catch(err => {
				topToast(this.props.intl.formatMessage({ id: 'code_42' }));
			});
	};

	// 多语言切换
	setLanguage = () => {
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

	render() {
		//侧栏内容框
		const token = getCookie('token');
		const sidebars = (
			<List className="sideBars">
				<List.Item
					key={1}
					thumb={require('assets/images/iconman.png')}
					className="siderbar-logo"
				>
					{ token?localStorage.getItem('email'):<FormattedMessage id={'usercenter.login.trade'} />}
				</List.Item>
				<Link to="/index">
					<List.Item key={2}>
						<FormattedMessage id={'public.index'} />
					</List.Item>
				</Link>
				{token && (
					<div>
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
						<List.Item key={5} onClick={this.loginOut}>
							<FormattedMessage id={'usercenter.logout'} />
						</List.Item>
					</div>
				)}

				<List.Item key={6} onClick={this.setLanguage}>
					{localStorage.getItem('language') == 'zh'
						? 'English'
						: '中文'}
				</List.Item>
			</List>
		);
		return (
			<Drawer
				className="my-drawer"
				style={{
					minHeight: document.documentElement.clientHeight
					//   $('.header').height()
					// : document.documentElement.clientHeight
				}}
				enableDragHandle={true}
				// dragToggleDistance={30}
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
