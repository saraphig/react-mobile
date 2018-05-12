import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './header.scss';

class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {};
	}

	render() {
    const {
      intl: { formatMessage }
    } = this.props;
		return (
			<div>
				<div className={`header ${this.props.className}`}>
					<span className="header-left">
						<img
							className="header-topone"
							src={require('assets/images/TOP.ONE@2x.png')}
							alt="top.one"
						/>
					</span>
					<span className="header-right">
						<Link to="/login" className="header-login">{formatMessage({id: 'public.login'})}</Link>
						<Link to="/register" className="header-register">{formatMessage({id: 'login.register'})}</Link>
						<span className="header-menus">
							<img
								className="header-menu"
								src={require('assets/images/menu@2x.png')}
								alt="menu"
								onClick={this.props._onClick}
							/>
						</span>
					</span>
				</div>
			</div>
		);
	}
}
export default injectIntl(Header);
