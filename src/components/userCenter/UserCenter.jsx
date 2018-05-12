import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './userCenter.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Navbars,
	UserTop,
	WhiteBlock,
	ListItem,
	SwitchItem,
	sidebars
} from '../comComponent/common';
import { Drawer } from 'antd-mobile';

class UserCenterComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="myWallet">
				<div className="myWallet-bg">
					<Header className="myWallet-header" _onClick={this.props._onOpenChange}/>
					<Drawer
						className="my-drawer"
						style={{
							minHeight: document.documentElement.clientHeight
						}}
						enableDragHandle={true}
						dragToggleDistance={0}
						position="right"
						sidebar={sidebars}
						open={this.props._open}
						onOpenChange={this.props._onOpenChange}
						sidebarStyle={{ background: '#1B1B1B' }}
					>
						<UserTop />
						<WhiteBlock />
						<SwitchItem
							classNameList="switch-list"
							className="switch-item"
							_onClick={this.props._onClick}
							_check={this.props._check}
						/>
						<WhiteBlock />
						<ListItem
							classNameItemline="first-item-line"
							title="我的邀请"
						/>
						<WhiteBlock />
						<ListItem
							classNameItemline="item-line"
							svg={[
								<img
									key={1}
									src={require('assets/images/G2F.png')}
								/>
							]}
							title="谷歌验证"
						/>
						<ListItem
							classNameItemline="item-line"
							svg={[
								<svg
									key={1}
									aria-hidden="true"
									className="item-line-G2F"
								>
									<use xlinkHref="#icon-phone" />
								</svg>
							]}
							title="手机验证"
						/>
						<ListItem
							classNameItemline="item-line last-item"
							svg={[
								<svg
									key={1}
									aria-hidden="true"
									className="item-line-G2F"
								>
									<use xlinkHref="#icon-mima" />
								</svg>
							]}
							title="修改密码"
						/>
					</Drawer>
				</div>
			</div>
		);
	}
}

export default injectIntl(UserCenterComp);
