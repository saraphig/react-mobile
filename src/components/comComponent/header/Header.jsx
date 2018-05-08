import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './header.scss';

class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="header">
					<span className="header-left">
						<img
							className="header-topone"
							src={require('assets/images/TOP.ONE@2x.png')}
							alt="top.one"
						/>
					</span>
					<span className="header-right">
						<span className="header-login">登录</span>
						<span className="header-register">注册</span>
						<span className="header-menus">
							<img
								className="header-menu"
								src={require('assets/images/menu@2x.png')}
								alt="menu"
							/>
						</span>
					</span>
				</div>
			</div>
		);
	}
}
export default injectIntl(Header);
